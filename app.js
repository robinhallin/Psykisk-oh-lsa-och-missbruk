(() => {
  const D = window.STUDY_DATA;
  const $ = (s, el=document) => el.querySelector(s);
  const $$ = (s, el=document) => [...el.querySelectorAll(s)];
  const main = $('#main');
  const state = {
    done: new Set(JSON.parse(localStorage.getItem('study.done') || '[]')),
    theme: localStorage.getItem('study.theme') || 'light',
    flashIndex: +(localStorage.getItem('study.flashIndex') || 0),
    flashFilter: 'Alla',
    quiz: null
  };

  document.documentElement.dataset.theme = state.theme;

  const esc = (s='') => String(s).replace(/[&<>'"]/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]));
  const slug = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
  const moduleById = id => D.modules.find(m => m.id === id);

  function saveDone(){ localStorage.setItem('study.done', JSON.stringify([...state.done])); updateProgress(); }
  function updateProgress(){
    const total = D.modules.length, n = state.done.size, pct = Math.round(n/total*100);
    $('#progressPct').textContent = pct+'%';
    $('#progressText').textContent = `${n} av ${total} moduler klara`;
    $('#progressRing').style.setProperty('--p', `${pct*3.6}deg`);
  }
  updateProgress();

  function toast(msg){
    const t = document.createElement('div'); t.className='toast'; t.textContent=msg; document.body.append(t);
    setTimeout(()=>t.remove(),2200);
  }

  function setActiveNav(name){
    $$('.side-link').forEach(b=>b.classList.toggle('active', b.dataset.nav===name));
  }

  function navigate(route, push=true){
    if(push) location.hash = route;
    render(route.replace(/^#/,''));
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function heroArt(file, alt=''){ return `<div class="hero-art"><img src="assets/${file}" alt="${esc(alt)}"></div>`; }

  function home(){
    setActiveNav('home');
    const done = state.done.size;
    const next = D.modules.find(m=>!state.done.has(m.id)) || D.modules[0];
    main.innerHTML = `<div class="page">
      <section class="hero">
        <div>
          <span class="eyebrow">${esc(D.course.code)}</span>
          <h1>Lär dig se <em>mönstret</em> – och välja rätt åtgärd.</h1>
          <p>En interaktiv studieportal byggd kring ditt kursmaterial. Träna diagnosområden, drogtecken, bemötande, lagrum och polisiära beslut i samma struktur.</p>
          <div class="actions"><button class="btn gold" data-open-module="${next.id}">${done ? 'Fortsätt där du är' : 'Starta studievägen'}</button><button class="btn alt" data-nav="quiz">Gör ett snabbquiz</button></div>
          <div class="callout warn"><strong>Kom ihåg:</strong> ${esc(D.course.disclaimer)}</div>
        </div>${heroArt('brain.svg','Abstrakt illustration av hjärna och samtal')}
      </section>
      <section class="stats">
        <div class="stat"><b>${D.modules.length}</b><span>pedagogiska moduler</span></div>
        <div class="stat"><b>${D.flashcards.length}</b><span>flashcards</span></div>
        <div class="stat"><b>${D.quiz.length}</b><span>quizfrågor</span></div>
        <div class="stat"><b>${D.laws.length}</b><span>lagrum i banken</span></div>
      </section>
      <div class="section-head"><div><span class="eyebrow">Rekommenderad ordning</span><h2>Studievägen</h2></div><p>Varva teori med aktiv återkallning.</p></div>
      <div class="grid cols3">${D.modules.slice(0,6).map(moduleCard).join('')}</div>
      <div class="section-head"><div><span class="eyebrow">Tillämpning</span><h2>Tre sätt att plugga smartare</h2></div></div>
      <div class="grid cols3">
        <article class="card hover" data-nav="symptom"><h3>◉ Symtomkompassen</h3><p>Jämför psykiatriska symtom och drogkategorier sida vid sida. Bra för att träna differentialt tänkande utan att diagnostisera.</p></article>
        <article class="card hover" data-nav="laws"><h3>§ Lagrumsbanken</h3><p>Filtrera LPT, LVM, LRV, handräckning, polislagen och narkotikafrågor. Varje kort ger funktionen i kursens kontext.</p></article>
        <article class="card hover" data-nav="cases"><h3>◇ Polisiära case</h3><p>Öva på ordningsföljd: säkerhet, risk, rättslig grund, bemötande, överlämning och dokumentation.</p></article>
      </div>
    </div>`;
    bindDynamic();
  }

  function moduleCard(m){
    const done = state.done.has(m.id);
    return `<article class="card hover module-card" style="--accent:${m.accent}" data-open-module="${m.id}">
      <div class="tagrow"><span class="tag">${m.icon} ${esc(m.level)}</span><span class="tag">${esc(m.time)}</span></div>
      <h3>${esc(m.title)}</h3><p>${esc(m.intro)}</p>
      <div class="meta"><span>${m.tags.slice(0,2).map(x=>'#'+x).join(' ')}</span>${done?'<span class="check">✓ Klar</span>':'<span class="subtle">Öppna →</span>'}</div>
    </article>`;
  }

  function modules(){
    setActiveNav('modules');
    main.innerHTML = `<div class="page"><span class="eyebrow">Hela kurskartan</span><h1 class="page-title">Alla moduler</h1><p class="subtle">Modulerna följer kursens huvudområden, men är ombyggda för repetition och tillämpning.</p>
      <div class="filterbar" id="moduleFilters"><button class="active" data-filter="Alla">Alla</button>${[...new Set(D.modules.map(m=>m.level))].map(x=>`<button data-filter="${x}">${x}</button>`).join('')}</div>
      <div class="grid cols3" id="moduleGrid">${D.modules.map(moduleCard).join('')}</div></div>`;
    $('#moduleFilters').addEventListener('click',e=>{
      const b=e.target.closest('button');if(!b)return; $$('#moduleFilters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');
      const f=b.dataset.filter; $('#moduleGrid').innerHTML=D.modules.filter(m=>f==='Alla'||m.level===f).map(moduleCard).join(''); bindDynamic();
    }); bindDynamic();
  }

  function modulePage(id){
    const m = moduleById(id); if(!m) return modules();
    setActiveNav('modules');
    const done=state.done.has(id);
    const idx=D.modules.findIndex(x=>x.id===id), prev=D.modules[idx-1], next=D.modules[idx+1];
    main.innerHTML = `<div class="page module-layout">
      <article class="module-content">
        <span class="eyebrow">Modul ${m.order} · ${esc(m.level)} · ${esc(m.time)}</span>
        <h1>${m.icon} ${esc(m.title)}</h1><p class="subtle" style="font-size:18px">${esc(m.intro)}</p>
        <div class="tagrow">${m.tags.map(x=>`<span class="tag">#${esc(x)}</span>`).join('')}</div>
        <div class="callout"><strong>Efter modulen ska du kunna:</strong><ul>${m.goals.map(g=>`<li>${esc(g)}</li>`).join('')}</ul></div>
        ${m.sections.map((s,i)=>`<section id="sec-${i}"><h2>${esc(s.h)}</h2>${s.p?`<p>${esc(s.p)}</p>`:''}${s.bullets?`<ul>${s.bullets.map(b=>`<li>${esc(b)}</li>`).join('')}</ul>`:''}</section>`).join('')}
        <div class="callout warn"><strong>Minneskrok:</strong> ${esc(m.memory)}</div>
        <div class="card"><strong>Kurskälla</strong><div class="tagrow" style="margin-top:9px">${m.source.map(s=>`<span class="source-chip">▣ ${esc(s)}</span>`).join('')}</div></div>
        <div class="actions" style="justify-content:space-between;margin-top:28px"><div>${prev?`<button class="btn alt" data-open-module="${prev.id}">← ${esc(prev.title)}</button>`:''}</div><div>${next?`<button class="btn" data-open-module="${next.id}">${esc(next.title)} →</button>`:''}</div></div>
      </article>
      <aside class="module-toc card"><strong>I den här modulen</strong>${m.sections.map((s,i)=>`<button data-scroll="sec-${i}">${i+1}. ${esc(s.h)}</button>`).join('')}<hr style="border:0;border-top:1px solid var(--line);margin:12px 0"><button class="btn ${done?'alt':''}" id="completeModule">${done?'✓ Markerad som klar':'Markera som klar'}</button></aside>
    </div>`;
    $('#completeModule').onclick=()=>{ state.done.has(id)?state.done.delete(id):state.done.add(id);saveDone();toast(state.done.has(id)?'Modulen markerad som klar':'Markering borttagen');modulePage(id); };
    $$('[data-scroll]').forEach(b=>b.onclick=()=>document.getElementById(b.dataset.scroll).scrollIntoView({behavior:'smooth',block:'start'})); bindDynamic();
  }

  function symptom(){
    setActiveNav('symptom');
    const tones=['Alla',...new Set(D.symptomGroups.map(x=>x.tone))];
    main.innerHTML=`<div class="page"><section class="hero" style="padding-top:0"><div><span class="eyebrow">Jämför mönster</span><h1>Symtomkompassen</h1><p>Träna igenkänning utan att låsa dig vid en diagnos eller ett preparat. I skarpa situationer måste helheten, medicinsk risk och rättslig grund bedömas.</p></div>${heroArt('drugs.svg','Abstrakt illustration av observation och drogtecken')}</section>
    <div class="filterbar" id="symFilters">${tones.map((x,i)=>`<button class="${i?'':'active'}" data-filter="${esc(x)}">${esc(x)}</button>`).join('')}</div><div class="symptom-grid" id="symGrid">${symCards(D.symptomGroups)}</div></div>`;
    $('#symFilters').onclick=e=>{const b=e.target.closest('button');if(!b)return;$$('#symFilters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;$('#symGrid').innerHTML=symCards(D.symptomGroups.filter(x=>f==='Alla'||x.tone===f));};
  }
  function symCards(arr){return arr.map(x=>`<article class="sym-card"><span class="tag">${esc(x.tone)}</span><h3>${esc(x.name)}</h3><ul>${x.clues.map(c=>`<li>${esc(c)}</li>`).join('')}</ul><div class="callout" style="font-size:13px"><strong>Bemötande/fokus:</strong><br>${esc(x.meet)}</div></article>`).join('')}

  function laws(){
    setActiveNav('laws');
    const cats=['Alla',...new Set(D.laws.map(l=>l.cat))];
    main.innerHTML=`<div class="page"><section class="hero" style="padding-top:0"><div><span class="eyebrow">Juridisk repetition</span><h1>Lagrumsbanken</h1><p>Fokusera på <strong>vad bestämmelsen gör</strong>, vilka förutsättningar som krävs och hur den kopplas till den polisiära uppgiften.</p><div class="callout warn">Lagrum och beslutsnivåer återges så som de behandlas i kursmaterialet. Kontrollera aktuell lagtext/rutin inför operativ användning.</div></div>${heroArt('law.svg','Illustration av lagbok och vågskål')}</section>
    <div class="filterbar" id="lawFilters">${cats.map((x,i)=>`<button class="${i?'':'active'}" data-filter="${esc(x)}">${esc(x)}</button>`).join('')}</div><div class="grid" id="lawGrid">${lawCards(D.laws)}</div></div>`;
    $('#lawFilters').onclick=e=>{const b=e.target.closest('button');if(!b)return;$$('#lawFilters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;$('#lawGrid').innerHTML=lawCards(D.laws.filter(x=>f==='Alla'||x.cat===f));};
  }
  function lawCards(arr){return arr.map(l=>`<article class="card law-card"><div class="law-ref">${esc(l.ref)}</div><div><strong>${esc(l.title)}</strong><p>${esc(l.text)}</p></div><span class="tag">${esc(l.cat)}</span></article>`).join('')}

  function flashcards(){
    setActiveNav('flashcards');
    state.flashIndex=Math.min(state.flashIndex,D.flashcards.length-1);
    renderFlash();
  }
  function renderFlash(){
    const [q,a]=D.flashcards[state.flashIndex];
    main.innerHTML=`<div class="page"><span class="eyebrow">Aktiv återkallning</span><h1 class="page-title">Flashcards</h1><p class="subtle">Försök svara högt innan du vänder kortet. Tangenter: <kbd>←</kbd> <kbd>→</kbd> och <kbd>mellanslag</kbd>.</p>
      <div class="flash-wrap"><div class="quiz-top"><span>${state.flashIndex+1} / ${D.flashcards.length}</span><button class="btn alt small" id="shuffleFlash">Blanda</button></div>
      <div class="quiz-progress"><span style="width:${(state.flashIndex+1)/D.flashcards.length*100}%"></span></div>
      <div class="flashcard" id="flashcard" tabindex="0" aria-label="Flashcard. Klicka för att vända."><div class="flash-inner"><div class="flash-face front"><span class="kicker">Fråga</span><h2>${esc(q)}</h2><small class="subtle">Klicka eller tryck mellanslag för svar</small></div><div class="flash-face back"><span class="kicker">Svar</span><p>${esc(a)}</p></div></div></div>
      <div class="flash-controls"><button class="btn alt" id="prevFlash">← Föregående</button><button class="btn" id="flipFlash">Vänd kort</button><button class="btn alt" id="nextFlash">Nästa →</button></div></div></div>`;
    const move=d=>{state.flashIndex=(state.flashIndex+d+D.flashcards.length)%D.flashcards.length;localStorage.setItem('study.flashIndex',state.flashIndex);renderFlash()};
    $('#flashcard').onclick=()=>$('#flashcard').classList.toggle('flipped');$('#flipFlash').onclick=()=>$('#flashcard').classList.toggle('flipped');$('#prevFlash').onclick=()=>move(-1);$('#nextFlash').onclick=()=>move(1);$('#shuffleFlash').onclick=()=>{state.flashIndex=Math.floor(Math.random()*D.flashcards.length);renderFlash()};
  }

  function quiz(){
    setActiveNav('quiz');
    state.quiz={items:[...D.quiz].sort(()=>Math.random()-.5).slice(0,15),i:0,score:0,answered:false}; renderQuizQuestion();
  }
  function renderQuizQuestion(){
    const z=state.quiz; if(!z) return quiz();
    if(z.i>=z.items.length){
      const pct=Math.round(z.score/z.items.length*100);main.innerHTML=`<div class="page quiz-shell"><span class="eyebrow">Resultat</span><h1 class="page-title">${z.score} / ${z.items.length}</h1><div class="card" style="margin-top:20px"><h2>${pct>=80?'Stabil grund.':pct>=60?'Bra – nu ser du luckorna.':'Gör en ny runda efter repetition.'}</h2><p>${pct}% rätt. Quizet väljer 15 slumpade frågor varje gång.</p><div class="actions"><button class="btn" id="quizAgain">Ny runda</button><button class="btn alt" data-nav="modules">Till modulerna</button></div></div></div>`;$('#quizAgain').onclick=quiz;bindDynamic();return;
    }
    const q=z.items[z.i];main.innerHTML=`<div class="page quiz-shell"><div class="quiz-top"><span class="eyebrow">Tentaträning</span><strong>${z.i+1} / ${z.items.length}</strong></div><div class="quiz-progress"><span style="width:${z.i/z.items.length*100}%"></span></div><h2 class="question">${esc(q.q)}</h2><div class="answers">${q.a.map((a,i)=>`<button class="answer" data-answer="${i}">${String.fromCharCode(65+i)}. ${esc(a)}</button>`).join('')}</div><div id="quizExplain"></div></div>`;
    $$('.answer').forEach(b=>b.onclick=()=>answerQuiz(+b.dataset.answer,q));
  }
  function answerQuiz(i,q){
    if(state.quiz.answered)return;state.quiz.answered=true; if(i===q.c)state.quiz.score++;
    $$('.answer').forEach((b,j)=>{b.disabled=true;if(j===q.c)b.classList.add('correct');else if(j===i)b.classList.add('wrong')});
    $('#quizExplain').innerHTML=`<div class="explain"><strong>${i===q.c?'✓ Rätt':'✕ Inte riktigt'}</strong><p>${esc(q.e)}</p><button class="btn" id="nextQ">Nästa fråga →</button></div>`;
    $('#nextQ').onclick=()=>{state.quiz.i++;state.quiz.answered=false;renderQuizQuestion()};
  }

  function cases(){
    setActiveNav('cases');
    main.innerHTML=`<div class="page"><section class="hero" style="padding-top:0"><div><span class="eyebrow">Tillämpa under osäkerhet</span><h1>Polisiära case</h1><p>Syftet är inte att memorera ett facit, utan att träna en ordningsföljd: <strong>säkerhet → iakttagelser → risk → rättslig grund → bemötande → överlämning.</strong></p></div>${heroArt('dialogue.svg','Illustration av två personer i samtal')}</section><div class="grid cols2">${D.cases.map(c=>caseCard(c)).join('')}</div></div>`;
    $$('.case-option').forEach(b=>b.onclick=()=>caseAnswer(b));
  }
  function caseCard(c){return `<article class="card case-card" data-case="${c.id}"><span class="tag">${esc(c.difficulty)}</span><h3>${esc(c.title)}</h3><p>${esc(c.scenario)}</p><div class="case-facts">${c.facts.map(f=>`<div class="case-fact">${esc(f)}</div>`).join('')}</div><h4>${esc(c.question)}</h4><div class="case-options">${c.options.map((o,i)=>`<button class="case-option" data-case-id="${c.id}" data-opt="${i}">${esc(o.t)}</button>`).join('')}</div><div class="case-feedback" hidden></div></article>`}
  function caseAnswer(b){const c=D.cases.find(x=>x.id===b.dataset.caseId),o=c.options[+b.dataset.opt],card=b.closest('.case-card'),fb=$('.case-feedback',card);$$('.case-option',card).forEach(x=>x.disabled=true);b.style.borderColor=o.ok?'var(--ok)':'var(--danger)';fb.hidden=false;fb.innerHTML=`<strong>${o.ok?'✓ Bra resonemang':'↺ Tänk ett varv till'}</strong><p>${esc(o.why)}</p><p><strong>Ta med dig:</strong> ${esc(c.takeaway)}</p><button class="btn alt small" data-reset-case>Försök igen</button>`;$('[data-reset-case]',fb).onclick=()=>{card.outerHTML=caseCard(c);const n=document.querySelector(`[data-case="${c.id}"]`);$$('.case-option',n).forEach(x=>x.onclick=()=>caseAnswer(x));};}

  function notes(){
    setActiveNav('notes'); const val=localStorage.getItem('study.notes')||'';
    main.innerHTML=`<div class="page"><span class="eyebrow">Lokalt i din webbläsare</span><h1 class="page-title">Mina anteckningar</h1><p class="subtle">Anteckningarna sparas automatiskt i localStorage på den här enheten.</p><textarea class="notes-area" id="notesArea" placeholder="Skriv egna minnesregler, frågor till handledningen, case-resonemang…">${esc(val)}</textarea><div class="actions"><button class="btn alt" id="exportNotes">Exportera .txt</button><button class="btn alt" id="clearNotes">Rensa</button></div></div>`;
    let timer;$('#notesArea').oninput=e=>{clearTimeout(timer);timer=setTimeout(()=>{localStorage.setItem('study.notes',e.target.value);toast('Anteckningar sparade')},500)};
    $('#clearNotes').onclick=()=>{if(confirm('Rensa alla anteckningar?')){$('#notesArea').value='';localStorage.removeItem('study.notes')}};
    $('#exportNotes').onclick=()=>{const blob=new Blob([$('#notesArea').value],{type:'text/plain;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='mina-anteckningar-psykisk-ohalsa.txt';a.click();URL.revokeObjectURL(a.href)};
  }

  function sources(){
    setActiveNav('sources');
    main.innerHTML=`<div class="page"><span class="eyebrow">Transparens</span><h1 class="page-title">Källor & avgränsning</h1><div class="callout"><strong>Hur sidan är byggd</strong><p>Innehållet är pedagogiskt omarbetat från de kursfiler som fanns tillgängliga i projektet. Jag har prioriterat materialets egen terminologi och inte fyllt ut luckor med extern medicinsk eller juridisk kunskap.</p></div><div class="callout warn"><strong>Viktigt om juridiken</strong><p>Sidan är ett studieverktyg. Lagtext, praxis, föreskrifter, beslutsnivåer och lokala rutiner kan ändras. Använd därför inte sidan som operativt beslutsstöd.</p></div><div class="card"><h2>Inlästa kurskällor</h2><ul class="source-list">${D.sources.map(s=>`<li>▣ ${esc(s)}</li>`).join('')}</ul></div><div class="card" style="margin-top:16px"><h2>Avgränsning</h2><p>Studiehandledningen nämner även suicidologi, vardagsförhandling och dödsfall. I de tillgängliga uppladdade dokumenten fanns inte ett komplett separat föreläsningsunderlag för alla dessa delar. Suicidriskmodulen på sidan är därför markerad som en <em>syntes</em> av de tillgängliga affektiva, LPT- och kommunikationsdokumenten.</p></div></div>`;
  }

  function searchOpen(){const o=$('#searchOverlay');o.hidden=false;setTimeout(()=>$('#searchInput').focus(),20);search('')}
  function searchClose(){ $('#searchOverlay').hidden=true; }
  function search(term){
    const t=term.trim().toLowerCase(); let results=[];
    D.modules.forEach(m=>{const hay=[m.title,m.intro,m.tags.join(' '),...m.sections.map(s=>s.h+' '+(s.p||'')+' '+(s.bullets||[]).join(' '))].join(' ').toLowerCase();if(!t||hay.includes(t))results.push({type:'Modul',title:m.title,sub:m.tags.join(' · '),route:'module/'+m.id})});
    D.laws.forEach(l=>{const hay=(l.ref+' '+l.title+' '+l.text+' '+l.cat).toLowerCase();if(t&&hay.includes(t))results.push({type:'Lagrum',title:l.ref+' – '+l.title,sub:l.cat,route:'laws'})});
    $('#searchResults').innerHTML=results.slice(0,18).map(r=>`<div class="search-result" data-search-route="${r.route}"><small>${esc(r.type)}</small><b>${esc(r.title)}</b><small>${esc(r.sub)}</small></div>`).join('') || '<div class="empty">Inga träffar.</div>';
    $$('[data-search-route]').forEach(x=>x.onclick=()=>{searchClose();navigate(x.dataset.searchRoute)});
  }

  function bindDynamic(){
    $$('[data-nav]').forEach(b=>{b.onclick=()=>navigate(b.dataset.nav)});
    $$('[data-open-module]').forEach(b=>{b.onclick=()=>navigate('module/'+b.dataset.openModule)});
  }

  function render(route){
    route=route||'home';
    if(route.startsWith('module/')) return modulePage(route.split('/')[1]);
    const fn={home,modules,symptom,laws,flashcards,quiz,cases,notes,sources}[route]||home;fn();
  }

  bindDynamic();
  $('#searchBtn').onclick=searchOpen; $('#searchClose').onclick=searchClose; $('#searchOverlay').onclick=e=>{if(e.target===$('#searchOverlay'))searchClose()}; $('#searchInput').oninput=e=>search(e.target.value);
  $('#themeBtn').onclick=()=>{state.theme=state.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=state.theme;localStorage.setItem('study.theme',state.theme)};
  window.addEventListener('hashchange',()=>render(location.hash.slice(1)));
  document.addEventListener('keydown',e=>{
    if(e.key==='/' && !/input|textarea/i.test(document.activeElement.tagName)){e.preventDefault();searchOpen()}
    if(e.key==='Escape')searchClose();
    if((location.hash==='#flashcards'||(!location.hash&&false)) && !/input|textarea/i.test(document.activeElement.tagName)){
      if(e.key==='ArrowRight'){state.flashIndex=(state.flashIndex+1)%D.flashcards.length;renderFlash()}
      if(e.key==='ArrowLeft'){state.flashIndex=(state.flashIndex-1+D.flashcards.length)%D.flashcards.length;renderFlash()}
      if(e.key===' '){e.preventDefault();const f=$('#flashcard');if(f)f.classList.toggle('flipped')}
    }
  });
  render(location.hash.slice(1)||'home');
})();
