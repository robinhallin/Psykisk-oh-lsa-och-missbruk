(() => {
  const D = window.STUDY_DATA;
  const $ = (s, el=document) => el.querySelector(s);
  const $$ = (s, el=document) => [...el.querySelectorAll(s)];
  const main = $('#main');

  const LS = {
    done:'trafik.d1pt2u.done', theme:'study.theme', notes:'trafik.d1pt2u.notes',
    mastery:'trafik.d1pt2u.v2.mastery', review:'trafik.d1pt2u.v2.review', wrong:'trafik.d1pt2u.v2.wrong',
    activity:'trafik.d1pt2u.v2.activity', exams:'trafik.d1pt2u.v2.examHistory', cases:'trafik.d1pt2u.v2.caseHistory',
    goals:'trafik.d1pt2u.v3.learningGoals', moduleTests:'trafik.d1pt2u.v5.moduleTests', quick:'trafik.d1pt2u.v5.quickChecks', goalMastery:'trafik.d1pt2u.v4.goalMastery', lab:'trafik.d1pt2u.v6.labStats'
  };

  const readJSON = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); } catch { return fallback; } };
  const state = {
    done: new Set(readJSON(LS.done, [])),
    theme: localStorage.getItem(LS.theme) || 'light',
    mastery: readJSON(LS.mastery, {}),
    review: readJSON(LS.review, {}),
    wrong: readJSON(LS.wrong, {}),
    activity: readJSON(LS.activity, []),
    exams: readJSON(LS.exams, []),
    caseHistory: readJSON(LS.cases, {}),
    goals: readJSON(LS.goals, {}),
    moduleTests: readJSON(LS.moduleTests, {}),
    quick: readJSON(LS.quick, {}),
    goalMastery: readJSON(LS.goalMastery, {}),

    moduleRun:null,
    exam:null, reviewRun:null, caseRun:null, guideRun:null,
    timers:[]
  };
  document.documentElement.dataset.theme = state.theme;

  const esc = (s='') => String(s).replace(/[&<>'"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]));
  const moduleById = id => D.modules.find(m => m.id === id);
  const now = () => Date.now();
  const dayMs = 86400000;
  const todayKey = (d=new Date()) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  const hash = s => { let h=2166136261; for (let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)} return (h>>>0).toString(36); };
  const shuffle = arr => { const a=[...arr]; for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; };
  const pct = (a,b) => b ? Math.round(a/b*100) : 0;
  const correctChoices = q => Array.isArray(q.c) ? q.c : [q.c];
  const isMulti = q => Array.isArray(q.c);
  const selectionEmpty = (q,sel) => isMulti(q) ? !Array.isArray(sel) || sel.length===0 : sel===null || sel===undefined;
  const isCorrectAnswer = (q,sel) => {
    if(!isMulti(q)) return sel===q.c;
    if(!Array.isArray(sel)) return false;
    const a=[...sel].sort((x,y)=>x-y), b=[...q.c].sort((x,y)=>x-y);
    return a.length===b.length && a.every((x,i)=>x===b[i]);
  };
  const answerText = (q,sel) => {
    if(selectionEmpty(q,sel)) return 'Obesvarad';
    if(isMulti(q)) return [...sel].sort((a,b)=>a-b).map(i=>q.a[i]).join(' · ');
    return q.a[sel];
  };
  const correctAnswerText = q => correctChoices(q).map(i=>q.a[i]).join(' · ');

  function persist(key, val){ localStorage.setItem(key, JSON.stringify(val)); }
  function setupSegment(selector){
    const root=$(selector);
    if(!root) return;
    const buttons=$$('button[data-val]', root);
    buttons.forEach(btn=>{
      btn.onclick=()=>{
        buttons.forEach(x=>x.classList.remove('active'));
        btn.classList.add('active');
      };
    });
  }
  function clearTimers(){ state.timers.forEach(clearInterval); state.timers=[]; }
  function toast(msg){ const t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.append(t);setTimeout(()=>t.remove(),2200); }

  function noteActivity(){
    const k=todayKey(); if(!state.activity.includes(k)){state.activity.push(k);state.activity=state.activity.slice(-90);persist(LS.activity,state.activity);}
  }
  noteActivity();

  function streak(){
    const set=new Set(state.activity); let n=0; const d=new Date(); d.setHours(12,0,0,0);
    while(set.has(todayKey(d))){n++;d.setDate(d.getDate()-1);} return n;
  }

  function inferTopic(question){return question.topic;}
  function topicMeta(topic){ return D.topicMeta?.[topic] || {label:topic,source:'Kursmaterial'}; }
  function allTopics(){ return Object.keys(D.topicMeta||{}); }
  function masteryFor(topic){ const m=state.mastery[topic]||{correct:0,total:0}; return {...m,pct:pct(m.correct,m.total)}; }
  function updateMastery(topic, correct){
    const m=state.mastery[topic]||{correct:0,total:0}; m.total++; if(correct)m.correct++; m.updated=Date.now(); state.mastery[topic]=m; persist(LS.mastery,state.mastery);
  }
  function overallMastery(){ let c=0,t=0;Object.values(state.mastery).forEach(m=>{c+=m.correct||0;t+=m.total||0});return pct(c,t); }
  function weakTopics(limit=3){
    return allTopics().map(topic=>({topic,...masteryFor(topic)})).sort((a,b)=>{
      if(a.total===0&&b.total>0)return 1;if(b.total===0&&a.total>0)return -1;return a.pct-b.pct||b.total-a.total;
    }).slice(0,limit);
  }

  function questionKey(q){ return hash(q.q); }
  function markQuestionResult(q, correct){
    const topic=inferTopic(q); updateMastery(topic,correct); const k=questionKey(q);
    if(!correct){ const w=state.wrong[k]||{q:q.q,topic,e:q.e,count:0,last:0};w.count++;w.last=Date.now();state.wrong[k]=w; }
    else if(state.wrong[k]){ state.wrong[k].count--; if(state.wrong[k].count<=0)delete state.wrong[k]; }
    persist(LS.wrong,state.wrong);
  }

  function flashCards(){ return D.flashcards.map((x,i)=>({id:hash(x[0]),i,q:x[0],a:x[1],topic:x[2]})); }
  function reviewRec(id){ return state.review[id] || null; }
  function reviewStats(){
    const cards=flashCards(), ts=now(); let due=0, learned=0, fresh=0;
    cards.forEach(c=>{const r=reviewRec(c.id);if(!r)fresh++;else{learned++;if((r.due||0)<=ts)due++;}});return {due,learned,fresh,total:cards.length};
  }
  function scheduleCard(card,rating){
    const old=reviewRec(card.id)||{reps:0,interval:0,ease:2.5,due:0}; const r={...old};
    if(rating==='again'){r.reps=0;r.interval=10/(24*60);r.ease=Math.max(1.3,r.ease-.2);r.due=now()+10*60*1000;}
    if(rating==='hard'){r.reps+=1;r.interval=r.interval?Math.max(1,r.interval*1.2):1;r.ease=Math.max(1.3,r.ease-.1);r.due=now()+r.interval*dayMs;}
    if(rating==='good'){r.reps+=1;r.interval=r.interval?Math.max(2,r.interval*2.2):2;r.due=now()+r.interval*dayMs;}
    if(rating==='easy'){r.reps+=1;r.interval=r.interval?Math.max(5,r.interval*3.2):5;r.ease=Math.min(3.2,r.ease+.15);r.due=now()+r.interval*dayMs;}
    r.last=now();r.lastRating=rating;state.review[card.id]=r;persist(LS.review,state.review);
    updateMastery(card.topic,rating!=='again');
  }
  function dueText(ts){ if(!ts)return 'nytt kort'; const d=Math.ceil((ts-now())/dayMs); if(d<=0)return 'nu'; if(d===1)return 'imorgon'; return `om ${d} dagar`; }

  function saveDone(){persist(LS.done,[...state.done]);updateProgress();}
  function lessonFor(id){return D.moduleLessons?.[id]||{block:'Kursmodul',learningGoals:[],quizTopics:[],policeLens:[],legalBridge:[],praxisAreas:[],quickChecks:[],testSize:6,primaryGoal:null};}
  function moduleTestRec(id){return state.moduleTests[id]||{best:0,last:0,attempts:0};}
  function moduleMastered(id){return (moduleTestRec(id).best||0)>=80;}
  function masteredModuleCount(){return D.modules.filter(m=>moduleMastered(m.id)).length;}
  function updateProgress(){const total=D.modules.length,n=masteredModuleCount(),p=Math.round(n/total*100);$('#progressPct').textContent=p+'%';$('#progressText').textContent=`${n} av ${total} moduler behärskade`;$('#progressRing').style.setProperty('--p',`${p*3.6}deg`);}
  function goalEvidence(id){const x=state.goalMastery[id]||{correct:0,total:0};return {...x,pct:pct(x.correct,x.total)};}
  function updateGoalEvidence(id,correct){if(!id)return;const x=state.goalMastery[id]||{correct:0,total:0};x.total++;if(correct)x.correct++;x.updated=Date.now();state.goalMastery[id]=x;persist(LS.goalMastery,state.goalMastery);}
  updateProgress();
  function setActiveNav(name){$('#mobileNav').value=name;$$('.side-link').forEach(b=>b.classList.toggle('active',b.dataset.nav===name));}
  function navigate(route,push=true){clearTimers();if(push && location.hash.slice(1)!==route){location.hash=route;return;}render(route.replace(/^#/,''));window.scrollTo({top:0,behavior:'smooth'});}
  function heroArt(file,alt=''){return `<div class="hero-art"><img src="${file}" alt="${esc(alt)}"></div>`;}
  function sourceChips(list){return `<div class="tagrow source-row">${(list||[]).map(s=>`<span class="source-chip">▣ ${esc(s)}</span>`).join('')}</div>`;}


  function goalKey(id,i){return `${id}:${i}`;}
  function goalDone(id,i){return !!state.goals[goalKey(id,i)];}
  function goalStats(goal){const total=goal.concrete.length,done=goal.concrete.filter((_,i)=>goalDone(goal.id,i)).length;return {done,total,pct:pct(done,total)};}
  function allGoalStats(){let done=0,total=0;D.learningGoals.forEach(g=>{const x=goalStats(g);done+=x.done;total+=x.total;});return {done,total,pct:pct(done,total)};}


  function home(){
    setActiveNav('home');
    const next=D.modules.find(m=>!moduleMastered(m.id))||D.modules[0];
    main.innerHTML=`<div class="page">
      <section class="traffic-hero"><div class="hero-copy"><span class="course-code">D1PT2U &nbsp; / &nbsp; 6,5 HP</span>
        <h1>Polisiärt arbete<br><em>i trafik.</em></h1><p>Öva på att bedöma en körning, välja lagrum och dokumentera vad som hände.</p>
        <div class="actions"><button class="btn gold" data-nav="exam">Starta tentaträning</button><button class="btn alt" data-nav="cases">Välj ett trafikfall</button></div></div>
        <div class="road-scene" aria-hidden="true"><div class="road-cross"></div><div class="roundabout"></div></div>
      </section>
      <div class="section-head"><div><h2>Ditt nästa pass</h2></div></div>
      <div class="grid cols3">
        <article class="card"><span class="eyebrow">Kursmodul</span><h3>${esc(next.title)}</h3><p>${esc(next.intro)}</p><button class="btn small" data-nav="module/${next.id}">Öppna modulen</button></article>
        <article class="card"><span class="eyebrow">Repetition</span><h3>Dagens minneskort</h3><p>${reviewStats().due} kort väntar på repetition. Fyll på med nya frågor från kursen.</p><button class="btn small" data-nav="review">Repetera kort</button></article>
        <article class="card"><span class="eyebrow">Individuell salstenta · 3,5 hp</span><h3>Vad examineras?</h3><p>Trafikbrottslagen, trafikförfattningar, rapportering och åtgärder vid trafikolycka.</p><button class="btn small" data-nav="goals">Se kursmålen</button></article>
      </div>
      <div class="section-head"><h2>Dina resultat per område</h2></div><div class="mastery-grid">${allTopics().map(masteryBar).join('')}</div>
    </div>`;bindDynamic();
  }
  function masteryBar(topic){const m=masteryFor(topic);return `<div class="mastery-row"><div><strong>${esc(topicMeta(topic).label)}</strong><small>${m.total?`${m.correct}/${m.total} rätt`:'ej testad'}</small></div><div class="mastery-track"><span style="width:${m.total?Math.max(4,m.pct):0}%"></span></div><b>${m.total?m.pct+'%':'—'}</b></div>`;}

  function goalLabel(id){const g=D.learningGoals?.find(x=>x.id===id);return g?`${id} · ${g.goal}`:id;}
  function moduleQuestionPool(m,l){
    const seen=new Set(), pool=[];
    (D.quiz||[]).filter(q=>(l.quizTopics||[]).includes(q.topic||inferTopic(q))).forEach(q=>{if(!seen.has(q.q)){seen.add(q.q);pool.push({...q,goal:q.goal||l.primaryGoal||l.learningGoals?.[0]});}});
    (l.quickChecks||[]).forEach(q=>{if(!seen.has(q.q)){seen.add(q.q);pool.push({...q,topic:(l.quizTopics||[])[0]||inferTopic(q),goal:q.goal||l.primaryGoal});}});
    (l.testQuestions||[]).forEach(q=>{if(!seen.has(q.q)){seen.add(q.q);pool.push({...q,topic:q.topic||(l.quizTopics||[])[0]||inferTopic(q),goal:q.goal||l.primaryGoal});}});
    return pool;
  }
  function moduleCard(m){
    const l=lessonFor(m.id),rec=moduleTestRec(m.id),qc=(l.quickChecks||[]).length,caseCount=l.caseId||l.reflectionCase?1:0;
    return `<article class="card hover module-card v5-module-card" style="--accent:${m.accent}" data-open-module="${m.id}"><div class="tagrow"><span class="tag">${m.icon} ${esc(l.block)}</span><span class="tag">${m.sections.length} avsnitt</span></div><h3>${esc(m.title)}</h3><p>${esc(m.intro)}</p><div class="module-counts"><span>${qc} snabbfrågor</span><span>${caseCount} case</span><span>${l.testSize||6} slutfrågor</span>${l.examInspiredCount?`<span>${l.examInspiredCount} situationsfrågor</span>`:''}</div><div class="goal-chip-row">${(l.learningGoals||[]).slice(0,4).map(g=>`<span class="goal-mini">Mål ${esc(g)}</span>`).join('')}</div><div class="meta"><span>${m.tags.slice(0,2).map(x=>'#'+x).join(' ')}</span>${rec.best?`<span class="${rec.best>=80?'check':'subtle'}">${rec.best>=80?'✓ Behärskad':`Bäst ${rec.best}%`}</span>`:'<span class="subtle">Ej sluttestad →</span>'}</div></article>`;
  }
  function modules(){
    setActiveNav('modules');
    const blocks=['Alla',...(D.moduleBlocks||[...new Set(D.modules.map(m=>lessonFor(m.id).block))])];
    const renderGrid=items=>items.map(moduleCard).join('');
    main.innerHTML=`<div class="page"><span class="eyebrow">Läs → återkalla → tillämpa → testa</span><h1 class="page-title">Fördjupade moduler</h1><p class="subtle">Välj ett område, läs om en trafiksituation och pröva sedan ditt resonemang i modulens sluttest.</p><div class="callout mini"><strong>Behärskad modul = minst 80 % på sluttestet.</strong> Gränsen gäller övningarna här i portalen.</div><div class="filterbar" id="moduleFilters">${blocks.map((x,i)=>`<button class="${i?'':'active'}" data-filter="${esc(x)}">${esc(x)}</button>`).join('')}</div><div class="grid cols3" id="moduleGrid">${renderGrid(D.modules)}</div></div>`;
    $('#moduleFilters').onclick=e=>{const b=e.target.closest('button');if(!b)return;$$('#moduleFilters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;$('#moduleGrid').innerHTML=renderGrid(D.modules.filter(m=>f==='Alla'||lessonFor(m.id).block===f));bindDynamic();};bindDynamic();
  }
  function quickKey(mid,qi){return `${mid}:${qi}`;}
  function renderQuickCheck(m,l,q,qi){
    const rec=state.quick[quickKey(m.id,qi)];
    return `<div class="quick-check" data-quick-wrap="${qi}"><div class="quick-head"><span class="skill-level">Nivå · ${esc(q.level||'Känna igen')}</span><span class="goal-mini">Mål ${esc(q.goal||l.primaryGoal||'')}</span></div><h3>Snabbkoll</h3><p class="quick-question">${esc(q.q)}</p><div class="quick-options">${q.a.map((a,i)=>`<button data-quick="${qi}" data-quick-choice="${i}" ${rec?'disabled':''} class="${rec?(i===q.c?'correct':(i===rec.choice&&!rec.correct?'wrong':'')):''}">${String.fromCharCode(65+i)}. ${esc(a)}</button>`).join('')}</div>${rec?`<div class="explain ${rec.correct?'ok':'bad'}"><strong>${rec.correct?'✓ Rätt':'↺ Inte riktigt'}</strong><p>${esc(q.e)}</p>${!rec.correct?`<button class="text-link" data-quick-retry="${qi}">Försök igen ↻</button>`:''}</div>`:''}</div>`;
  }
  function renderReflectionCase(r){if(!r)return'';return `<article class="card reflection-case"><span class="eyebrow">Nivå 3 · Tillämpa</span><h2>${esc(r.title)}</h2><p class="scenario-text">${esc(r.scenario)}</p><h3>${esc(r.prompt)}</h3><button class="btn alt" id="revealReflection">Visa resonemang</button><div id="reflectionAnswer" hidden><div class="callout"><strong>Ett kursförankrat resonemang kan innehålla:</strong><ul>${r.reveal.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div></div></article>`;}
  function renderLessonExtras(sec){
    let h='';
    if(sec.compare?.length)h+=`<div class="compare-grid">${sec.compare.map(c=>`<div class="compare-col"><h3>${esc(c.title)}</h3><ul>${(c.items||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div>`).join('')}</div>`;
    if(sec.table?.rows?.length)h+=`<div class="lesson-table-wrap"><table class="lesson-table"><thead><tr>${(sec.table.headers||[]).map(x=>`<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${sec.table.rows.map(r=>`<tr>${r.map(x=>`<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    if(sec.steps?.length)h+=`<div class="lesson-steps">${sec.steps.map((x,i)=>`<div class="lesson-step"><span>${i+1}</span><div><h3>${esc(x.title)}</h3><p>${esc(x.text)}</p></div></div>`).join('')}</div>`;
    if(sec.key)h+=`<div class="callout mini lesson-key"><strong>Kom ihåg:</strong> ${esc(sec.key)}</div>`;
    if(sec.warning)h+=`<div class="callout warn lesson-warning"><strong>Fallgrop:</strong> ${esc(sec.warning)}</div>`;
    if(sec.recall)h+=`<details class="recall-box"><summary><span>🧠 Aktiv återkallning</span>${esc(sec.recall.q)}</summary><div><strong>Svar att jämföra med:</strong><p>${esc(sec.recall.a)}</p></div></details>`;
    if(sec.source)h+=`<div class="section-source">Kurskälla: ${esc(sec.source)}</div>`;
    return h;
  }
  function modulePage(id){
    const m=moduleById(id);if(!m)return modules();setActiveNav('modules');const l=lessonFor(id),rec=moduleTestRec(id),idx=D.modules.findIndex(x=>x.id===id),prev=D.modules[idx-1],next=D.modules[idx+1];

    const sectionHtml=m.sections.map((sec,i)=>{const checks=(l.quickChecks||[]).map((q,qi)=>({q,qi})).filter(x=>x.q.after===i);return `<section id="sec-${i}" class="lesson-section"><div class="section-number">${i+1}</div><h2>${esc(sec.h)}</h2>${sec.p?`<p>${esc(sec.p)}</p>`:''}${sec.bullets?`<ul>${sec.bullets.map(b=>`<li>${esc(b)}</li>`).join('')}</ul>`:''}${renderLessonExtras(sec)}${checks.map(x=>renderQuickCheck(m,l,x.q,x.qi)).join('')}</section>`;}).join('');
    const allQuick=(l.quickChecks||[]).length,answered=(l.quickChecks||[]).filter((_,qi)=>state.quick[quickKey(id,qi)]).length;
    main.innerHTML=`<div class="page module-layout v5-module-layout"><article class="module-content"><button class="back-link" data-nav="modules">← Alla moduler</button><span class="eyebrow">Modul ${m.order} · ${esc(l.block)} · ${esc(m.level)}</span><h1>${m.icon} ${esc(m.title)}</h1><p class="subtle lead">${esc(m.intro)}</p><div class="module-facts"><span>${m.sections.length} avsnitt</span><span>${allQuick} snabbfrågor</span><span>${l.caseId||l.reflectionCase?'1 case':'— case'}</span><span>${l.testSize||6} slutfrågor</span>${l.examInspiredCount?`<span>${l.examInspiredCount} situationsfrågor</span>`:''}</div><div class="tagrow">${m.tags.map(x=>`<span class="tag">#${esc(x)}</span>`).join('')}</div><div class="learning-goal-panel"><span class="eyebrow">Det här tränar du mot</span><div class="goal-links">${(l.learningGoals||[]).map(g=>`<button class="goal-link" data-nav="goals"><b>${esc(g)}</b><span>${esc(goalLabel(g).replace(g+' · ',''))}</span></button>`).join('')}</div></div><div class="callout"><strong>Efter modulen ska du kunna:</strong><ul>${m.goals.map(g=>`<li>${esc(g)}</li>`).join('')}</ul></div>${l.sourceNote?`<div class="callout warn"><strong>Avgränsning:</strong> ${esc(l.sourceNote)}</div>`:''}${sectionHtml}<div class="police-lens"><div class="police-lens-icon">🚓</div><div><span class="eyebrow">Tänk som polis</span><h2>Översätt kunskapen till ett ingripande</h2><ul>${(l.policeLens||[]).map(x=>`<li>${esc(x)}</li>`).join('')}</ul></div></div>${l.caseId?`<article class="card module-case-cta"><span class="eyebrow">Nivå 3 · Tillämpa</span><h2>Case: ${esc((D.caseScenarios.find(c=>c.id===l.caseId)||{}).title||'Tillämpningscase')}</h2><p>Gå från observation till risk, juridik, kommunikation och överlämning i flera steg.</p><button class="btn" data-nav="case/${esc(l.caseId)}">Starta caset →</button></article>`:renderReflectionCase(l.reflectionCase)}<div class="callout warn"><strong>Minneskrok:</strong> ${esc(m.memory)}</div><section class="module-mastery card"><div><span class="eyebrow">Avslutande test</span><h2>Kan du området utan att titta?</h2><p>${rec.best?`Bästa resultat: <strong>${rec.best}%</strong> · ${rec.attempts||1} försök.`:`Du har inte gjort modulens sluttest ännu.`} Minst 80 % markerar modulen som behärskad.</p></div><button class="btn gold" id="startModuleTest">${rec.best?'Gör om sluttest':'Starta sluttest'}</button></section><div class="card"><strong>Kurskälla</strong>${sourceChips(m.source)}</div><div class="actions module-nav"><div>${prev?`<button class="btn alt" data-open-module="${prev.id}">← ${esc(prev.title)}</button>`:''}</div><div>${next?`<button class="btn" data-open-module="${next.id}">${esc(next.title)} →</button>`:''}</div></div></article><aside class="module-toc card"><strong>I den här modulen</strong><div class="toc-progress"><b>${answered}/${allQuick}</b><span>snabbfrågor besvarade</span></div>${m.sections.map((sec,i)=>`<button data-scroll="sec-${i}">${i+1}. ${esc(sec.h)}</button>`).join('')}<hr><div class="mastery-badge ${rec.best>=80?'mastered':''}"><b>${rec.best?rec.best+'%':'—'}</b><span>${rec.best>=80?'Behärskad':'Sluttest'}</span></div><button class="btn small" id="tocModuleTest">Testa modulen</button></aside></div>`;
    $$('[data-scroll]').forEach(b=>b.onclick=()=>document.getElementById(b.dataset.scroll).scrollIntoView({behavior:'smooth',block:'start'}));
    $$('[data-quick-choice]').forEach(b=>b.onclick=()=>{const qi=+b.dataset.quick,choice=+b.dataset.quickChoice,q=l.quickChecks[qi],correct=choice===q.c;state.quick[quickKey(id,qi)]={choice,correct,at:Date.now()};persist(LS.quick,state.quick);updateGoalEvidence(q.goal||l.primaryGoal,correct);markQuestionResult({...q,topic:(l.quizTopics||[])[0]},correct);noteActivity();modulePage(id);setTimeout(()=>document.querySelector(`[data-quick-wrap="${qi}"]`)?.scrollIntoView({behavior:'smooth',block:'center'}),50);});
    $$('[data-quick-retry]').forEach(b=>b.onclick=()=>{const qi=+b.dataset.quickRetry;delete state.quick[quickKey(id,qi)];persist(LS.quick,state.quick);modulePage(id);setTimeout(()=>document.querySelector(`[data-quick-wrap="${qi}"]`)?.scrollIntoView({behavior:'smooth',block:'center'}),50);});
    const start=()=>startModuleTest(id);$('#startModuleTest').onclick=start;$('#tocModuleTest').onclick=start;
    if($('#revealReflection'))$('#revealReflection').onclick=()=>{$('#reflectionAnswer').hidden=false;$('#revealReflection').hidden=true;};bindDynamic();
  }
  function startModuleTest(id){
    const m=moduleById(id),l=lessonFor(id),pool=moduleQuestionPool(m,l),size=Math.min(l.testSize||6,pool.length);state.moduleRun={id,items:shuffle(pool).slice(0,size),i:0,score:0,answers:[],feedback:null};renderModuleTest();
  }
  function renderModuleTest(){
    const r=state.moduleRun;if(!r)return modules();const m=moduleById(r.id),l=lessonFor(r.id);if(r.i>=r.items.length)return finishModuleTest();const q=r.items[r.i];
    const sel=r.feedback?.choice ?? (isMulti(q)?[]:null);
    const selected=i=>isMulti(q)?Array.isArray(sel)&&sel.includes(i):sel===i;
    const optionClass=i=>{if(!r.feedback)return selected(i)?'selected':'';const right=correctChoices(q).includes(i),picked=selected(i);return right?'correct':(picked&&!right?'wrong':'');};
    main.innerHTML=`<div class="page quiz-shell module-test-shell"><button class="back-link" data-open-module="${m.id}">← Till modulen</button><div class="quiz-top"><span class="eyebrow">Sluttest · ${esc(m.title)} · Mål ${esc(q.goal||l.primaryGoal||'')}${q.origin==='situation'?' · Situationsfråga':''}</span><strong>${r.i+1} / ${r.items.length}</strong></div><div class="quiz-progress"><span style="width:${r.i/r.items.length*100}%"></span></div><h2 class="question">${esc(q.q)}</h2>${isMulti(q)?`<div class="callout mini"><strong>Flersvarsfråga:</strong> välj ${q.c.length} alternativ. Alla rätt krävs.</div>`:''}<div class="answers">${q.a.map((a,i)=>`<button class="answer ${optionClass(i)}" data-module-answer="${i}" ${r.feedback?'disabled':''}>${selected(i)?'✓ ':''}${String.fromCharCode(65+i)}. ${esc(a)}</button>`).join('')}</div>${!r.feedback&&isMulti(q)?'<button class="btn" id="checkModuleMulti" disabled>Kontrollera svar</button>':''}<div id="moduleFeedback">${r.feedback?`<div class="explain ${r.feedback.correct?'ok':'bad'}"><strong>${r.feedback.correct?'✓ Rätt':'↺ Inte riktigt'}</strong><p>${esc(q.e)}</p>${!r.feedback.correct?`<p><strong>Rätt svar:</strong> ${esc(correctAnswerText(q))}</p>`:''}<button class="btn" id="nextModuleQuestion">${r.i===r.items.length-1?'Visa resultat':'Nästa fråga →'}</button></div>`:''}</div></div>`;
    if(!r.feedback){
      if(isMulti(q)){
        let picks=[];
        $$('[data-module-answer]').forEach(b=>b.onclick=()=>{const i=+b.dataset.moduleAnswer;picks=picks.includes(i)?picks.filter(x=>x!==i):[...picks,i];b.classList.toggle('selected',picks.includes(i));b.textContent=`${picks.includes(i)?'✓ ':''}${String.fromCharCode(65+i)}. ${q.a[i]}`;$('#checkModuleMulti').disabled=picks.length===0;});
        $('#checkModuleMulti').onclick=()=>{const correct=isCorrectAnswer(q,picks);r.feedback={choice:[...picks],correct};if(correct)r.score++;r.answers.push({q:q.q,correct,goal:q.goal||l.primaryGoal});updateGoalEvidence(q.goal||l.primaryGoal,correct);markQuestionResult(q,correct);noteActivity();renderModuleTest();};
      }else{
        $$('[data-module-answer]').forEach(b=>b.onclick=()=>{const choice=+b.dataset.moduleAnswer,correct=isCorrectAnswer(q,choice);r.feedback={choice,correct};if(correct)r.score++;r.answers.push({q:q.q,correct,goal:q.goal||l.primaryGoal});updateGoalEvidence(q.goal||l.primaryGoal,correct);markQuestionResult(q,correct);noteActivity();renderModuleTest();});
      }
    }
    if($('#nextModuleQuestion'))$('#nextModuleQuestion').onclick=()=>{r.i++;r.feedback=null;renderModuleTest();};bindDynamic();
  }
  function finishModuleTest(){
    const r=state.moduleRun,m=moduleById(r.id),l=lessonFor(r.id),score=r.score,total=r.items.length,p=pct(score,total),old=moduleTestRec(r.id);state.moduleTests[r.id]={best:Math.max(old.best||0,p),last:p,attempts:(old.attempts||0)+1,at:Date.now()};persist(LS.moduleTests,state.moduleTests);if(state.moduleTests[r.id].best>=80)state.done.add(r.id);saveDone();const misses=r.answers.filter(x=>!x.correct);state.moduleRun=null;
    main.innerHTML=`<div class="page quiz-shell result-shell"><span class="eyebrow">Modulresultat · ${esc(m.title)}</span><div class="score-orb ${p>=80?'pass':'retry'}"><b>${p}%</b><span>${score}/${total} rätt</span></div><h1>${p>=80?'Modulen är behärskad':'Repetera och försök igen'}</h1><p>${p>=80?'Du nådde gränsen 80 %. Resultatet räknas nu i modulprogressen.':'Resultatet visar vad som behöver förstärkas innan modulen räknas som behärskad.'}</p>${misses.length?`<div class="card"><h2>Frågor att återvända till</h2><ul>${misses.map(x=>`<li>${esc(x.q)} <span class="goal-mini">Mål ${esc(x.goal||l.primaryGoal||'')}</span></li>`).join('')}</ul></div>`:'<div class="callout"><strong>Full träff.</strong> Inga missade frågor i den här omgången.</div>'}<div class="actions"><button class="btn" data-open-module="${m.id}">Tillbaka till modulen</button><button class="btn alt" id="retryModuleTest">Gör ett nytt test</button><button class="btn alt" data-nav="goals">Se lärandemålen</button></div></div>`;$('#retryModuleTest').onclick=()=>startModuleTest(m.id);bindDynamic();
  }


  function laws(){setActiveNav('laws');const cats=['Alla',...new Set(D.laws.map(l=>l.cat))];main.innerHTML=`<div class="page"><section class="hero compact-hero"><div><span class="eyebrow">Juridisk repetition</span><h1>Lagrumsbanken</h1><p>Fokusera på vad bestämmelsen gör och hur kursmaterialet placerar den i det polisiära flödet.</p><div class="callout warn">Lagrum återges i kursens form. Kontrollera alltid aktuell lagtext och rutin vid skarp tillämpning.</div></div>${heroArt('law.svg','Abstrakt juridikillustration')}</section><div class="filterbar" id="lawFilters">${cats.map((x,i)=>`<button class="${i?'':'active'}" data-filter="${esc(x)}">${esc(x)}</button>`).join('')}</div><div class="grid" id="lawGrid">${lawCards(D.laws)}</div></div>`;$('#lawFilters').onclick=e=>{const b=e.target.closest('button');if(!b)return;$$('#lawFilters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;$('#lawGrid').innerHTML=lawCards(D.laws.filter(l=>f==='Alla'||l.cat===f));};bindDynamic();}
  function lawCards(arr){return arr.map(l=>`<article class="card law-card"><div class="law-ref">${esc(l.ref)}</div><div><span class="tag">${esc(l.cat)}</span><h3>${esc(l.title)}</h3><p>${esc(l.text)}</p><a href="${esc(l.url)}" target="_blank" rel="noopener">Läs författningen</a></div><span class="law-dot">§</span></article>`).join('');}


  function review(){setActiveNav('review');state.reviewRun=null;const s=reviewStats(),weak=weakTopics(1)[0];main.innerHTML=`<div class="page"><section class="hero compact-hero"><div><span class="eyebrow">Spaced repetition</span><h1>Smart repetition</h1><p>Korten schemaläggs efter hur lätt du minns dem. <strong>Igen</strong> kommer snabbt tillbaka; <strong>Bra</strong> och <strong>Lätt</strong> flyttas längre fram.</p></div></section><section class="stats"><div class="stat"><b>${s.due}</b><span>förfallna nu</span></div><div class="stat"><b>${s.fresh}</b><span>nya kort</span></div><div class="stat"><b>${s.learned}</b><span>kort påbörjade</span></div><div class="stat"><b>${s.total}</b><span>kort totalt</span></div></section><div class="review-options grid cols3"><article class="card"><span class="tag">Rekommenderat</span><h3>Dagens 10</h3><p>Förfallna kort först, därefter nya kort tills du har tio.</p><button class="btn" data-review-mode="daily">Starta</button></article><article class="card"><span class="tag">Fokuserat</span><h3>Svagt område</h3><p>${weak?`Prioritera ${esc(topicMeta(weak.topic).label)} utifrån dina registrerade svar.`:'Bygg först lite resultatdata.'}</p><button class="btn" data-review-mode="weak">Starta</button></article><article class="card"><span class="tag">Alla</span><h3>Blanda kort</h3><p>En slumpad runda på 20 kort från hela kursen.</p><button class="btn alt" data-review-mode="random">Starta</button></article></div><div class="callout"><strong>Hur schemat fungerar:</strong> Igen ≈ 10 minuter · Svårt ≈ 1 dag · Bra ≈ 2+ dagar · Lätt ≈ 5+ dagar. Intervallen växer när du fortsätter minnas rätt.</div></div>`;$$('[data-review-mode]').forEach(b=>b.onclick=()=>startReview(b.dataset.reviewMode));}
  function startReview(mode){const cards=flashCards(),ts=now(),due=shuffle(cards.filter(c=>reviewRec(c.id)&&(reviewRec(c.id).due||0)<=ts)),fresh=shuffle(cards.filter(c=>!reviewRec(c.id)));let items=[];if(mode==='daily')items=[...due,...fresh].slice(0,10);if(mode==='random')items=shuffle(cards).slice(0,Math.min(20,cards.length));if(mode==='weak'){const w=weakTopics(1)[0]?.topic;items=shuffle(cards.filter(c=>c.topic===w));if(items.length<10)items=[...items,...shuffle(cards.filter(c=>c.topic!==w))];items=items.slice(0,10);}if(!items.length)items=shuffle(cards).slice(0,10);state.reviewRun={mode,items,i:0,flipped:false};renderReviewCard();}
  function renderReviewCard(){setActiveNav('review');const r=state.reviewRun;if(!r||r.i>=r.items.length)return finishReview();const c=r.items[r.i],rec=reviewRec(c.id);main.innerHTML=`<div class="page review-shell"><div class="quiz-top"><span class="eyebrow">Smart repetition · ${esc(topicMeta(c.topic).label)}</span><strong>${r.i+1} / ${r.items.length}</strong></div><div class="quiz-progress"><span style="width:${r.i/r.items.length*100}%"></span></div><div class="flash-wrap"><div class="flashcard ${r.flipped?'flipped':''}" id="reviewCard"><div class="flash-inner"><div class="flash-face front"><span class="kicker">Fråga</span><h2>${esc(c.q)}</h2><small class="subtle">Klicka för att visa svaret</small></div><div class="flash-face back"><span class="kicker">Svar</span><p>${esc(c.a)}</p></div></div></div><div id="reviewControls" class="review-controls">${r.flipped?ratingButtons():`<button class="btn" id="showAnswer">Visa svar</button>`}</div><div class="review-meta"><span>${rec?`Senaste intervall: ${Math.max(1,Math.round(rec.interval||0))} dag(ar)`:'Nytt kort'}</span><span>${rec?`Planerat: ${dueText(rec.due)}`:'Ej schemalagt ännu'}</span></div></div></div>`;$('#reviewCard').onclick=()=>{r.flipped=true;renderReviewCard();};const show=$('#showAnswer');if(show)show.onclick=e=>{e.stopPropagation();r.flipped=true;renderReviewCard();};$$('[data-rating]').forEach(b=>b.onclick=e=>{e.stopPropagation();scheduleCard(c,b.dataset.rating);r.i++;r.flipped=false;renderReviewCard();});}
  function ratingButtons(){return `<div class="rating-grid"><button data-rating="again"><b>Igen</b><small>≈ 10 min</small></button><button data-rating="hard"><b>Svårt</b><small>≈ 1 dag</small></button><button data-rating="good"><b>Bra</b><small>≈ 2+ dagar</small></button><button data-rating="easy"><b>Lätt</b><small>≈ 5+ dagar</small></button></div>`;}
  function finishReview(){const n=state.reviewRun?.items.length||0;state.reviewRun=null;main.innerHTML=`<div class="page finish-screen"><span class="eyebrow">Repetition klar</span><h1>${n} kort genomförda</h1><p>Intervallen är uppdaterade. Nästa repetition kommer automatiskt när korten förfaller.</p><div class="actions"><button class="btn" data-nav="review">Se repetitionsöversikten</button><button class="btn alt" data-nav="home">Till dashboard</button></div></div>`;bindDynamic();}

  function exam(){setActiveNav('exam');clearTimers();const topicOptions=['Alla',...allTopics()];const pref=state.prefExamTopic||'Alla';state.prefExamTopic=null;const last=state.exams[0];const inspired=D.quiz.filter(q=>q.origin==='situation').length;main.innerHTML=`<div class="page"><section class="hero compact-hero"><div><span class="eyebrow">${D.quiz.length} frågor i frågebanken · ${inspired} situationsfrågor</span><h1>Tentamensmotor</h1><p>Öva på en fråga i taget med direkt återkoppling eller välj tentamensläge för att få resultat när du lämnar in. <strong>Flersvarsfrågor stöds</strong> och rättas strikt: alla korrekta alternativ måste väljas.</p></div>${heroArt('law.svg','Illustration för tentamen och juridik')}</section><div class="exam-setup"><section class="card"><h3>1. Frågor</h3><div class="segmented" id="examLength"><button data-val="10">10</button><button class="active" data-val="20">20</button><button data-val="30">30</button><button data-val="all">Alla</button></div></section><section class="card"><h3>2. Område</h3><select id="examTopic">${topicOptions.map(t=>`<option value="${esc(t)}" ${t===pref?'selected':''}>${t==='Alla'?'Blandat':esc(topicMeta(t).label)}</option>`).join('')}</select><label class="checkline"><input type="checkbox" id="weakFirst"> Prioritera svaga områden</label></section><section class="card"><h3>3. Frågestil</h3><select id="examSource"><option value="all">Blanda allt</option><option value="situation">Situationsfråga</option><option value="course">Kunskapsfrågor</option></select><small class="subtle">Frågorna är framtagna för självstudier utifrån kursmaterialet.</small></section><section class="card"><h3>4. Läge</h3><div class="segmented" id="examMode"><button class="active" data-val="exam">Tentamen</button><button data-val="training">Träning</button></div></section><section class="card"><h3>5. Tid</h3><div class="segmented" id="examTime"><button class="active" data-val="0">Ingen</button><button data-val="2700">45 min</button><button data-val="3600">60 min</button><button data-val="5400">90 min</button></div></section></div><div class="actions"><button class="btn gold big" id="startExam">Starta testet</button>${Object.keys(state.wrong).length?`<button class="btn alt" id="retryWrong">Träna mina ${Object.keys(state.wrong).length} felfrågor</button>`:''}</div>${last?`<div class="callout"><strong>Senaste test:</strong> ${last.score}/${last.total} (${last.pct}%) · ${new Date(last.at).toLocaleString('sv-SE')}</div>`:''}<div class="section-head"><div><span class="eyebrow">Ditt resultat per område</span><h2>Kunskapskartan</h2></div></div><div class="mastery-grid">${allTopics().map(masteryBar).join('')}</div></div>`;
    setupSegment('#examLength');setupSegment('#examMode');setupSegment('#examTime');$('#startExam').onclick=()=>{const len=$('#examLength .active').dataset.val,topic=$('#examTopic').value,mode=$('#examMode .active').dataset.val,time=+$('#examTime .active').dataset.val,weak=$('#weakFirst').checked,source=$('#examSource').value;startExam({len,topic,mode,time,weak,source});};const rw=$('#retryWrong');if(rw)rw.onclick=()=>startWrongExam();bindDynamic();}

  function buildExamPool(topic,weak,source='all'){let pool=D.quiz.map(q=>({...q,topic:inferTopic(q)}));if(topic!=='Alla')pool=pool.filter(q=>q.topic===topic);if(source==='situation')pool=pool.filter(q=>q.origin==='situation');if(source==='course')pool=pool.filter(q=>q.origin!=='situation');if(weak&&topic==='Alla'){const order=new Map(allTopics().sort((a,b)=>masteryFor(a).pct-masteryFor(b).pct).map((t,i)=>[t,i]));pool=shuffle(pool).sort((a,b)=>(order.get(a.topic)||0)-(order.get(b.topic)||0));}else pool=shuffle(pool);return pool;}
  function startExam(cfg){setActiveNav('exam');let pool=buildExamPool(cfg.topic,cfg.weak,cfg.source||'all'),n=cfg.len==='all'?pool.length:Math.min(+cfg.len,pool.length);if(!n){toast('Inga frågor matchar filtret.');return exam();}const items=pool.slice(0,n);state.exam={items,answers:items.map(q=>isMulti(q)?[]:null),i:0,mode:cfg.mode,duration:cfg.time,ends:cfg.time?Date.now()+cfg.time*1000:0,feedback:false};renderExamQuestion();}
  function startWrongExam(){const wrongQs=Object.values(state.wrong);let items=wrongQs.map(w=>D.quiz.find(q=>q.q===w.q)).filter(Boolean).map(q=>({...q,topic:inferTopic(q)}));if(!items.length){toast('Fellistan är redan tom.');return;}items=shuffle(items);state.exam={items,answers:items.map(q=>isMulti(q)?[]:null),i:0,mode:'training',duration:0,ends:0,feedback:false};renderExamQuestion();}
  function startExamTimer(){if(!state.exam?.ends)return;const tick=()=>{const el=$('#examTimer');if(!el)return;const sec=Math.max(0,Math.floor((state.exam.ends-Date.now())/1000)),m=Math.floor(sec/60),s=sec%60;el.textContent=`${m}:${String(s).padStart(2,'0')}`;if(sec<=0){clearTimers();finishExam(true);}};tick();const id=setInterval(tick,1000);state.timers.push(id);}
  function renderExamQuestion(){clearTimers();const z=state.exam;if(!z)return exam();if(z.i>=z.items.length)return finishExam(false);const q=z.items[z.i],selected=z.answers[z.i];const picked=i=>isMulti(q)?selected.includes(i):selected===i;const cls=i=>z.feedback?(correctChoices(q).includes(i)?'correct':(picked(i)?'wrong':'')):(picked(i)?'selected':'');main.innerHTML=`<div class="page quiz-shell"><div class="quiz-top"><span class="eyebrow">${z.mode==='exam'?'Tentamensläge':'Träningsläge'} · ${esc(topicMeta(q.topic).label)}${q.origin==='situation'?' · Situationsfråga':''}</span><div><strong>${z.i+1} / ${z.items.length}</strong>${z.ends?`<span class="timer" id="examTimer"></span>`:''}</div></div><div class="quiz-progress"><span style="width:${z.i/z.items.length*100}%"></span></div><h2 class="question">${esc(q.q)}</h2>${isMulti(q)?`<div class="callout mini"><strong>Flersvarsfråga:</strong> välj ${q.c.length} alternativ. Alla rätt krävs för poäng.</div>`:''}<div class="answers">${q.a.map((a,i)=>`<button class="answer ${cls(i)}" data-answer="${i}" ${z.feedback?'disabled':''}>${picked(i)?'✓ ':''}${String.fromCharCode(65+i)}. ${esc(a)}</button>`).join('')}</div><div id="examFeedback">${z.feedback?trainingFeedback(q,selected):''}</div><div class="exam-nav">${z.i>0&&!z.feedback&&z.mode==='exam'?'<button class="btn alt" id="prevExam">← Föregående</button>':'<span></span>'}${z.mode==='training'&&isMulti(q)&&!z.feedback?'<button class="btn alt" id="checkExamMulti">Kontrollera svar</button>':''}<button class="btn" id="nextExam" ${selectionEmpty(q,selected)|| (z.mode==='training'&&isMulti(q)&&!z.feedback)?'disabled':''}>${z.feedback?'Nästa fråga →':z.i===z.items.length-1?'Lämna in':'Nästa →'}</button></div></div>`;
    $$('.answer').forEach(b=>b.onclick=()=>{if(z.feedback)return;const i=+b.dataset.answer;if(isMulti(q)){const arr=z.answers[z.i];z.answers[z.i]=arr.includes(i)?arr.filter(x=>x!==i):[...arr,i];renderExamQuestion();}else{z.answers[z.i]=i;if(z.mode==='training'){z.feedback=true;renderExamQuestion();}else renderExamQuestion();}});
    const check=$('#checkExamMulti');if(check)check.onclick=()=>{if(selectionEmpty(q,z.answers[z.i]))return;z.feedback=true;renderExamQuestion();};
    const nx=$('#nextExam');nx.onclick=()=>{if(selectionEmpty(q,z.answers[z.i]))return;if(z.mode==='training'&&z.feedback){z.feedback=false;z.i++;renderExamQuestion();}else if(z.i===z.items.length-1){finishExam(false);}else{z.i++;renderExamQuestion();}};const pv=$('#prevExam');if(pv)pv.onclick=()=>{z.i--;renderExamQuestion();};startExamTimer();}

  function trainingFeedback(q,selected){const ok=isCorrectAnswer(q,selected);return `<div class="explain ${ok?'ok':'bad'}"><strong>${ok?'✓ Rätt':'↺ Inte riktigt'}</strong><p>${esc(q.e)}</p>${!ok?`<p><strong>Rätt svar:</strong> ${esc(correctAnswerText(q))}</p>`:''}<small>Kurskälla: ${esc(q.source||topicMeta(q.topic).source)}</small></div>`;}

  function finishExam(timedOut){clearTimers();const z=state.exam;if(!z)return exam();let score=0;const breakdown={};z.items.forEach((q,i)=>{const ok=isCorrectAnswer(q,z.answers[i]);if(ok)score++;const t=q.topic||inferTopic(q);breakdown[t]=breakdown[t]||{c:0,n:0};breakdown[t].n++;if(ok)breakdown[t].c++;markQuestionResult(q,ok);});const p=pct(score,z.items.length),rec={at:Date.now(),score,total:z.items.length,pct:p,mode:z.mode,timedOut};state.exams.unshift(rec);state.exams=state.exams.slice(0,20);persist(LS.exams,state.exams);const wrong=z.items.map((q,i)=>({q,sel:z.answers[i],ok:isCorrectAnswer(q,z.answers[i])})).filter(x=>!x.ok);state.exam=null;main.innerHTML=`<div class="page results-page"><span class="eyebrow">${timedOut?'Tiden gick ut':'Test inlämnat'}</span><div class="score-hero"><div class="score-ring" style="--score:${p*3.6}deg"><span><b>${p}%</b><small>${score}/${rec.total}</small></span></div><div><h1>${p>=80?'Stabil nivå.':p>=60?'Bra – nu syns luckorna.':'Bygg grunden och testa igen.'}</h1><p>Resultatet har sparats lokalt och påverkar dashboardens rekommendationer.</p></div></div><div class="section-head"><div><span class="eyebrow">Per område</span><h2>Resultatprofil</h2></div></div><div class="mastery-grid">${Object.entries(breakdown).map(([t,b])=>`<div class="mastery-row"><div><strong>${esc(topicMeta(t).label)}</strong><small>${b.c}/${b.n} rätt</small></div><div class="mastery-track"><span style="width:${pct(b.c,b.n)}%"></span></div><b>${pct(b.c,b.n)}%</b></div>`).join('')}</div>${wrong.length?`<div class="section-head"><div><span class="eyebrow">Återkoppling</span><h2>Frågor att repetera</h2></div><p>${wrong.length} fel / obesvarade</p></div><div class="wrong-list">${wrong.map((x,i)=>`<details class="card"><summary><span>${i+1}</span>${esc(x.q.q)}</summary><div class="wrong-body"><p><strong>Ditt svar:</strong> ${esc(answerText(x.q,x.sel))}</p><p><strong>Rätt svar:</strong> ${esc(correctAnswerText(x.q))}</p><p>${esc(x.q.e)}</p><small>Kurskälla: ${esc(x.q.source||topicMeta(x.q.topic).source)}</small></div></details>`).join('')}</div>`:`<div class="callout"><strong>Alla rätt.</strong> Fellistan har inget nytt från den här rundan.</div>`}<div class="actions"><button class="btn" data-nav="exam">Ny tentamen</button><button class="btn alt" data-nav="review">Repetera kort</button><button class="btn alt" data-nav="home">Dashboard</button></div></div>`;bindDynamic();}

  function cases(){setActiveNav('cases');main.innerHTML=`<div class="page"><section class="hero compact-hero"><div><span class="eyebrow">Flerstegsbeslut</span><h1>Case-tränare</h1><p>Varje case går i flera steg. Ta ställning till vad du behöver veta, vilket lagrum som passar och vad patrullen ska dokumentera.</p></div>${heroArt('dialogue.svg','Illustration av polisiärt samtal')}</section><div class="grid cols2">${D.caseScenarios.map(c=>{const h=state.caseHistory[c.id];return `<article class="card hover case-launch" data-open-case="${c.id}"><div class="tagrow"><span class="tag">${esc(c.difficulty)}</span><span class="tag">${c.steps.length} steg</span>${h?`<span class="tag success">Bäst ${h.best}/${c.steps.length}</span>`:''}</div><h3>${esc(c.title)}</h3><p>${esc(c.scenario)}</p><div class="case-facts">${c.facts.slice(0,4).map(f=>`<div class="case-fact">${esc(f)}</div>`).join('')}</div><button class="btn small">${h?'Kör igen':'Starta case'} →</button></article>`}).join('')}</div></div>`;$$('[data-open-case]').forEach(b=>b.onclick=()=>navigate('case/'+b.dataset.openCase));}
  function caseRun(id){setActiveNav('cases');const c=D.caseScenarios.find(x=>x.id===id);if(!c)return cases();if(!state.caseRun||state.caseRun.id!==id)state.caseRun={id,step:0,score:0,answered:false};renderCaseStep(c);}
  function renderCaseStep(c){const r=state.caseRun;if(r.step>=c.steps.length)return finishCase(c);const s=c.steps[r.step];main.innerHTML=`<div class="page case-shell"><button class="back-link" data-nav="cases">← Alla case</button><div class="case-header"><div><span class="eyebrow">${esc(c.difficulty)} · ${r.step+1}/${c.steps.length}</span><h1>${esc(c.title)}</h1></div><div class="case-score">${r.score}<small>poäng</small></div></div><div class="quiz-progress"><span style="width:${r.step/c.steps.length*100}%"></span></div><article class="scenario-card"><p>${esc(c.scenario)}</p><div class="case-facts">${c.facts.map(f=>`<div class="case-fact">${esc(f)}</div>`).join('')}</div></article><article class="card decision-card"><span class="phase">${esc(s.phase)}</span><h2>${esc(s.prompt)}</h2><div class="case-options">${s.choices.map((o,i)=>`<button class="case-option" data-case-choice="${i}">${esc(o.t)}</button>`).join('')}</div><div id="caseFeedback"></div></article>${sourceChips(c.source)}</div>`;$$('[data-case-choice]').forEach(b=>b.onclick=()=>{if(r.answered)return;r.answered=true;const idx=+b.dataset.caseChoice,o=s.choices[idx];if(o.ok)r.score++;updateMastery(c.topic,o.ok);$$('[data-case-choice]').forEach((x,i)=>{x.disabled=true;if(s.choices[i].ok)x.classList.add('correct');if(i===idx&&!o.ok)x.classList.add('wrong');});$('#caseFeedback').innerHTML=`<div class="explain ${o.ok?'ok':'bad'}"><strong>${o.ok?'✓ Bra resonemang':'↺ Tänk ett varv till'}</strong><p>${esc(o.why)}</p><button class="btn" id="nextCase">${r.step===c.steps.length-1?'Visa resultat':'Nästa steg →'}</button></div>`;$('#nextCase').onclick=()=>{r.step++;r.answered=false;renderCaseStep(c);};});bindDynamic();}
  function finishCase(c){const r=state.caseRun,p=pct(r.score,c.steps.length),old=state.caseHistory[c.id]||{best:0,runs:0};old.best=Math.max(old.best,r.score);old.runs++;old.last=Date.now();state.caseHistory[c.id]=old;persist(LS.cases,state.caseHistory);state.caseRun=null;main.innerHTML=`<div class="page finish-screen"><span class="eyebrow">Case genomfört</span><h1>${r.score} / ${c.steps.length}</h1><p>${p>=80?'Du höll ihop risk, juridik och bemötande väl.':'Läs återkopplingen i minnet och kör gärna caset igen senare.'}</p><div class="callout"><strong>Ta med dig:</strong> ${esc(c.takeaway)}</div>${sourceChips(c.source)}<div class="actions"><button class="btn" data-open-case="${c.id}">Kör igen</button><button class="btn alt" data-nav="cases">Alla case</button><button class="btn alt" data-nav="home">Dashboard</button></div></div>`;$$('[data-open-case]').forEach(b=>b.onclick=()=>navigate('case/'+b.dataset.openCase));bindDynamic();}


  function goals(){
    setActiveNav('goals');
    const overall=allGoalStats(), groups=['Alla','Kunskap & förståelse','Färdighet & förmåga','Värderingsförmåga & förhållningssätt'];
    const renderCards=(items)=>items.map(g=>{const st=goalStats(g),ev=goalEvidence(g.id);return `<details class="card goal-card" data-goal-card="${g.id}"><summary><div class="goal-code">${esc(g.id)}</div><div class="goal-summary"><div class="tagrow">${g.examined.map(x=>`<span class="tag exam-tag">${esc(x)}</span>`).join('')}<span class="tag">${esc(g.group)}</span>${ev.total?`<span class="tag evidence-tag">Testdata ${ev.pct}% · ${ev.total} svar</span>`:''}</div><h3>${esc(g.goal)}</h3><div class="goal-progress"><span><i style="width:${st.pct}%"></i></span><b>${st.done}/${st.total}</b></div></div><span class="goal-chevron">⌄</span></summary><div class="goal-body"><div class="callout mini"><strong>Så här har portalen konkretiserat målet</strong><p>Checklistan är en pedagogisk nedbrytning av kursmålet utifrån de uppladdade kursfilerna. Rubrikerna sammanfattar målen i kursplanen D1PT2U.</p></div><div class="goal-checklist">${g.concrete.map((item,i)=>`<label class="goal-check ${goalDone(g.id,i)?'done':''}"><input type="checkbox" data-goal-check="${g.id}" data-goal-index="${i}" ${goalDone(g.id,i)?'checked':''}><span><b>${goalDone(g.id,i)?'Kan':'Träna'}</b>${esc(item)}</span></label>`).join('')}</div>${sourceChips(g.sources)}<div class="actions goal-actions">${(g.routes||[]).map(a=>`<button class="btn alt small" data-nav="${esc(a.route)}">${esc(a.label)} →</button>`).join('')}</div></div></details>`}).join('');
    main.innerHTML=`<div class="page"><section class="hero compact-hero goals-hero"><div><span class="eyebrow">Examinationsstyrt plugg</span><h1>Lärandemål</h1><p>Här är kursmålen från kursplanen översatta till <strong>konkret kunskap du ska kunna visa</strong>. Kryssa bara när du själv kan förklara eller tillämpa punkten utan att titta.</p><div class="goal-overall"><div><b>${overall.pct}%</b><span>${overall.done} av ${overall.total} kunskapspunkter markerade</span></div><div class="mastery-track"><span style="width:${overall.pct}%"></span></div></div><div class="callout warn"><strong>Examinationerna:</strong> Individuell salstentamen 3,5 hp och skriftlig basgruppsuppgift 3 hp.</div></div></section><div class="filterbar" id="goalFilters">${groups.map((x,i)=>`<button class="${i?'':'active'}" data-filter="${esc(x)}">${esc(x)}</button>`).join('')}</div><div class="goal-list" id="goalList">${renderCards(D.learningGoals)}</div></div>`;
    $('#goalFilters').onclick=e=>{const b=e.target.closest('button');if(!b)return;$$('#goalFilters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;$('#goalList').innerHTML=renderCards(D.learningGoals.filter(g=>f==='Alla'||g.group===f));bindGoalChecks();bindDynamic();};
    bindGoalChecks();bindDynamic();
  }
  function bindGoalChecks(){
    $$('[data-goal-check]').forEach(cb=>cb.onchange=()=>{const k=goalKey(cb.dataset.goalCheck,+cb.dataset.goalIndex);if(cb.checked)state.goals[k]=true;else delete state.goals[k];persist(LS.goals,state.goals);noteActivity();const d=cb.closest('details');const wasOpen=d?.open;goals();const nd=$(`[data-goal-card="${cb.dataset.goalCheck}"]`);if(nd&&wasOpen)nd.open=true;toast(cb.checked?'Markerat som behärskat':'Flyttat tillbaka till träning');});
  }


  function notes(){setActiveNav('notes');const val=localStorage.getItem(LS.notes)||'';main.innerHTML=`<div class="page"><span class="eyebrow">Lokalt i din webbläsare</span><h1 class="page-title">Mina anteckningar</h1><p class="subtle">Anteckningarna sparas automatiskt på den här enheten.</p><textarea class="notes-area" id="notesArea" placeholder="Skriv egna minnesregler, frågor till handledningen, case-resonemang…">${esc(val)}</textarea><div class="actions"><button class="btn alt" id="exportNotes">Exportera .txt</button><button class="btn alt" id="clearNotes">Rensa</button></div></div>`;let timer;$('#notesArea').oninput=e=>{clearTimeout(timer);timer=setTimeout(()=>{localStorage.setItem(LS.notes,e.target.value);toast('Anteckningar sparade')},500);};$('#clearNotes').onclick=()=>{if(confirm('Rensa alla anteckningar?')){$('#notesArea').value='';localStorage.removeItem(LS.notes);}};$('#exportNotes').onclick=()=>{const blob=new Blob([$('#notesArea').value],{type:'text/plain;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='mina-anteckningar-trafik.txt';a.click();URL.revokeObjectURL(a.href);};}
  function sources(){
    setActiveNav('sources');
    main.innerHTML=`<div class="page"><span class="eyebrow">D1PT2U</span><h1 class="page-title">Källor och kursmaterial</h1>
      <div class="grid cols2"><article class="card"><h2>Underlag från kursen</h2><ul>${D.sources.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></article>
      <article class="card"><h2>Författningar och myndighetskällor</h2><ul>${D.links.map(([label,url])=>`<li><a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)}</a></li>`).join('')}</ul></article></div>
      <div class="card"><h2>Om frågorna</h2><p>Övningsfallen och frågorna är skrivna för repetition inför kursens examinationer. Kursmål och examinationsformer kommer från kursplanen och studiehandledningen. I Canvas finns kursens fullständiga läsanvisningar.</p></div></div>`;
  }
  function searchOpen(){const o=$('#searchOverlay');o.hidden=false;setTimeout(()=>$('#searchInput').focus(),20);search('');}
  function searchClose(){$('#searchOverlay').hidden=true;}
  function search(term){
    const t=term.trim().toLocaleLowerCase('sv');
    const items=[
      ...D.modules.map(x=>({title:x.title,text:x.sections.map(s=>s.h+' '+s.p).join(' '),type:'Kursmodul',route:'module/'+x.id})),
      ...D.laws.map(x=>({title:x.ref+' · '+x.title,text:x.text,type:'Lagrum',route:'laws'})),
      ...D.caseScenarios.map(x=>({title:x.title,text:x.scenario,type:'Trafikfall',route:'case/'+x.id})),
      ...D.learningGoals.map(x=>({title:x.id+' · '+x.goal,text:x.concrete.join(' '),type:'Kursmål',route:'goals'}))
    ];
    const hits=items.filter(x=>(x.title+' '+x.text).toLocaleLowerCase('sv').includes(t));
    $('#searchResults').innerHTML=hits.slice(0,20).map(x=>`<button class="search-result" data-result="${esc(x.route)}"><small>${esc(x.type)}</small><b>${esc(x.title)}</b></button>`).join('')||'<p>Inga träffar.</p>';
    $$('[data-result]').forEach(b=>b.onclick=()=>{searchClose();navigate(b.dataset.result);});
  }
  function bindDynamic(){$$('[data-nav]').forEach(b=>b.onclick=()=>navigate(b.dataset.nav));$$('[data-open-module]').forEach(b=>b.onclick=()=>navigate('module/'+b.dataset.openModule));}
  function render(route){route=route||'home';if(route.startsWith('module/'))return modulePage(route.split('/')[1]);if(route.startsWith('case/'))return caseRun(route.split('/')[1]);if(route==='flashcards')route='review';if(route==='quiz')route='exam';const fn={home,modules,laws,goals,review,exam,cases,notes,sources}[route]||home;fn();}

  $('#mobileNav').onchange=e=>{navigate(e.target.value);};
  bindDynamic();
  $('#searchBtn').onclick=searchOpen;$('#searchClose').onclick=searchClose;$('#searchOverlay').onclick=e=>{if(e.target===$('#searchOverlay'))searchClose();};$('#searchInput').oninput=e=>search(e.target.value);
  $('#themeBtn').onclick=()=>{state.theme=state.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=state.theme;localStorage.setItem(LS.theme,state.theme);};
  window.addEventListener('hashchange',()=>{clearTimers();render(location.hash.slice(1));window.scrollTo(0,0);});
  document.addEventListener('keydown',e=>{if($('#portalShell').hidden)return;if(e.key==='/'&&!/input|textarea|select/i.test(document.activeElement.tagName)){e.preventDefault();searchOpen();}if(e.key==='Escape')searchClose();if(e.key===' '&&location.hash==='#review'&&state.reviewRun&&!/input|textarea|select|button/i.test(document.activeElement.tagName)){e.preventDefault();state.reviewRun.flipped=true;renderReviewCard();}});
  render(location.hash.slice(1)||'home');
})();
