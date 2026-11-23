'use strict';
window.createExamEngine = function({main, data, read, write, esc, block, heading, link, crumb, tag, meter, weekPasses}) {
  const originalKey = s => {
    let h=2166136261;
    for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}
    return (h>>>0).toString(36);
  };
  const questions=new Map(data.quiz.map(q=>[originalKey(q.q),q]));
  const all=[...questions.keys()];
  const topics=Object.keys(data.topicMeta);
  const goals=data.learningGoals.filter(g=>g.examined.includes('Salstentamen')).map(g=>g.id);
  const lessonIds=['l14','l11','l2','l3','l4','l6','l12'];
  const unitFor=topic=>lessonIds[topics.indexOf(topic)];
  const dom=id=>document.getElementById(id);
  const current=()=>read('tentamensmotor');
  const modeLabel=mode=>mode==='exam'?'Tentamen':'Träning';
  const options=(items,selected)=>items.map(([value,label])=>'<option value="'+esc(value)+'" '+(String(value)===String(selected)?'selected':'')+'>'+esc(label)+'</option>').join('');
  const correctChoices=q=>Array.isArray(q.c)?q.c:[q.c];
  const isCorrect=(q,picks=[])=>{
    const expected=correctChoices(q);
    return expected.length===picks.length && expected.every(x=>picks.includes(x));
  };
  function shuffle(input){
    const out=[...input];for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;
  }
  function oldStore(key,fallback){
    try{return JSON.parse(localStorage.getItem('trafik.d1pt2u.v2.'+key))||fallback;}catch{return fallback;}
  }
  if(!current().initialized){
    const oldWrong=Object.values(oldStore('wrong',{})).filter(x=>x?.q).map(x=>originalKey(x.q)).filter(x=>questions.has(x));
    write('tentamensmotor',{initialized:true,wrong:oldWrong,history:oldStore('examHistory',[]),stats:oldStore('mastery',{})});
  }
  let timer=0;
  function leave(){clearInterval(timer);timer=0;}
  function launch(ids,mode,minutes=0,week=0){
    if(!ids.length)return;
    const run={ids,mode,week,i:0,answers:{},checked:{},end:minutes?Date.now()+minutes*60000:0};
    write('tentamensmotor',{run});location.hash='tentamensmotor/pass';
    displayQuestion();
  }
  function goalPass(){return shuffle(goals.flatMap(g=>shuffle(all.filter(id=>questions.get(id).goal===g)).slice(0,2)));}
  function setup(section,weekId){
    const state=current(),run=state.run;
    if(run?.end && Date.now()>=run.end){finish(run,true);return;}
    if(section==='pass'&&run){displayQuestion();return;}
    if(section==='resultat'&&state.result){results();return;}
    const week=section==='vecka'?weekPasses.find(w=>w.week===Number(weekId)):null;
    const topic=week?.topic||'';
    const eligible=week?all.filter(id=>questions.get(id).topic===topic):goalPass();
    const misses=(state.wrong||[]).filter(id=>questions.has(id));
    const setupPanel='<section class="paper engine-start">'+tag(week?'Vecka '+week.week:'Kortpass · Salstentans fyra kursmål')+'<h2>'+(week?esc(topic):'Testa vad du kan')+'</h2><p>'+(week?'Pröva veckans område med '+eligible.length+' frågor.':'Åtta frågor om trafikbrott, trafikregler, rapportering och trafikolyckor. Du får en förklaring efter varje svar.')+'</p><button id="goal-start" class="primary">'+(week?'Starta veckans kontroll':'Starta kortpasset')+'</button></section>';
    const custom='<details class="source engine-settings"><summary>Bygg en egen tentamen</summary><form id="exam-form"><div class="engine-fields">'+[
      ['exam-mode','Återkoppling',[['exam','Efter inlämning'],['training','Efter varje fråga']],'exam'],
      ['exam-length','Antal frågor',[[5,'5'],[10,'10'],[20,'20'],[30,'30'],['all','Alla tillgängliga']],10],
      ['exam-topic','Område',[['','Blandat'],...topics.map(t=>[t,t])],topic],
      ['exam-kind','Frågetyp',[['','Alla'],['situation','Situationsfrågor'],['course','Kunskapsfrågor']],''],
      ['exam-time','Tid',[[0,'Ingen tidsgräns'],[45,'45 minuter'],[60,'60 minuter'],[90,'90 minuter']],0]
    ].map(([id,label,values,value])=>'<div><label for="'+id+'">'+label+'</label><select id="'+id+'">'+options(values,value)+'</select></div>').join('')+'</div><label class="inline-check"><input type="checkbox" id="weak-first"> Prioritera mina svagare områden</label><p id="available" class="saved" role="status"></p><button type="submit" class="primary" id="exam-start">Starta mitt pass</button></form></details>';
    const resume=run?'<section class="paper engine-start">'+tag('Pågående pass')+'<h2>Fortsätt på fråga '+(run.i+1)+' av '+run.ids.length+'</h2><p>'+modeLabel(run.mode)+(run.end?' · Tidsgränsen fortsätter löpa.':' · Dina svar är sparade.')+'</p>'+link('tentamensmotor/pass','Fortsätt passet','primary')+'</section>':'';
    const history=state.history||[];
    const records=history.length?'<details class="source"><summary>Mina tidigare resultat</summary><ol>'+history.slice(0,15).map(r=>'<li>'+esc(new Date(r.at).toLocaleDateString('sv-SE'))+' · '+modeLabel(r.mode)+' · '+r.score+' av '+r.total+' rätt</li>').join('')+'</ol>'+(state.result?link('tentamensmotor/resultat','Öppna senaste återkopplingen'):'')+'</details>':'';
    main.innerHTML=block((week?crumb('vecka/'+week.week,'Vecka '+week.week):'')+heading('Tentamensmotor','Välj ett kortpass, bygg en egen tentamen eller öva på att skriva ett fullständigt svar.')+'<div class="study-column">'+resume+setupPanel+custom+(misses.length?'<button class="secondary retry-missed" id="retry-missed">Öva på mina missade frågor ('+misses.length+')</button>':'')+'<details class="source"><summary>Träna på skrivfrågor</summary><p>Två pass med sju fritextfrågor vardera utifrån kursens övningstentor. Jämför med modellresonemang efter inlämning.</p>'+link('prov','Öppna skrivpassen')+'</details>'+records+'</div>');
    function start(ids,mode,min,weekNo){
      if(run&&!confirm('Ersätta det pågående passet? Svaren i det passet tas då bort.'))return;
      launch(ids,mode,min,weekNo);
    }
    dom('goal-start').onclick=()=>start(shuffle(eligible),'training',0,week?.week||0);
    if(dom('retry-missed'))dom('retry-missed').onclick=()=>start(shuffle(misses),'training');
    const pool=()=>all.filter(id=>{
      const q=questions.get(id);return (!dom('exam-topic').value||q.topic===dom('exam-topic').value)&&(!dom('exam-kind').value||q.origin===dom('exam-kind').value);
    });
    const length=n=>Math.min(Number(dom('exam-length').value)||n,n);
    function update(){const n=pool().length;dom('available').textContent=n?length(n)+' frågor i passet av '+n+' tillgängliga med dina val.':'Inga frågor matchar. Välj ett annat område eller en annan frågetyp.';dom('exam-start').disabled=!n;}
    dom('exam-form').onchange=update;update();
    dom('exam-form').onsubmit=e=>{
      e.preventDefault();const ids=shuffle(pool());
      if(dom('weak-first').checked){
        const score=id=>{const s=state.stats?.[questions.get(id).topic];return s?.total?s.correct/s.total:.5;};
        ids.sort((a,b)=>score(a)-score(b));
      }
      start(ids.slice(0,length(ids.length)),dom('exam-mode').value,Number(dom('exam-time').value),0);
    };
  }
  function feedback(q,selected){
    const ok=isCorrect(q,selected);
    return '<div class="feedback '+(ok?'':'wrong')+'"><h3>'+(ok?'Rätt svar':'Jämför med facit')+'</h3><p><strong>'+esc(correctChoices(q).map(i=>q.a[i]).join(' · '))+'</strong></p><p>'+esc(q.e)+'</p><p class="saved">'+esc(q.source||'')+'</p></div>';
  }
  function displayQuestion(){
    leave();const run=current().run;if(!run){setup();return;}
    if(run.end&&Date.now()>=run.end){finish(run,true);return;}
    const id=run.ids[run.i],q=questions.get(id),selected=run.answers[id]||[],checked=run.checked[id];
    const multi=Array.isArray(q.c),training=run.mode==='training',last=run.i===run.ids.length-1;
    main.innerHTML=block(crumb('tentamensmotor','Tentamensmotor')+'<article class="paper study-column exam-question"><div class="question-meta">'+tag(modeLabel(run.mode)+' · '+(run.i+1)+' av '+run.ids.length)+(run.end?'<span id="exam-clock" aria-label="Återstående tid"></span>':'')+'</div>'+meter(run.i+1,run.ids.length)+'<p class="saved">'+esc(q.topic)+'</p><h1>'+esc(q.q)+'</h1><p>'+(multi?'Välj '+q.c.length+' alternativ.':'Välj ett alternativ.')+'</p><div class="exam-options">'+q.a.map((a,i)=>'<button class="option" data-choice="'+i+'" aria-pressed="'+selected.includes(i)+'" '+(checked?'disabled':'')+'>'+esc(a)+'</button>').join('')+'</div>'+
      (checked?feedback(q,selected):'')+'<div class="actions">'+(!training&&run.i>0?'<button class="secondary" id="prev">Föregående</button>':'')+'<button class="primary" id="next" '+(!selected.length?'disabled':'')+'>'+(training&&!checked?'Kontrollera svaret':last?'Lämna in passet':'Nästa fråga')+'</button></div></article>');
    main.querySelectorAll('[data-choice]').forEach(button=>{button.onclick=()=>{
      const k=Number(button.dataset.choice);
      run.answers[id]=multi?(selected.includes(k)?selected.filter(v=>v!==k):[...selected,k]):[k];
      write('tentamensmotor',{run});displayQuestion();main.querySelector('[data-choice="'+k+'"]').focus();
    };});
    if(dom('prev'))dom('prev').onclick=()=>{run.i--;write('tentamensmotor',{run});displayQuestion();main.focus();};
    dom('next').onclick=()=>{
      if(run.end&&Date.now()>=run.end){finish(run,true);return;}
      if(training&&!checked)run.checked[id]=true;else if(last){finish(run,false);return;}else run.i++;
      write('tentamensmotor',{run});displayQuestion();
      if(training&&!checked)dom('next').focus();else{main.focus();window.scrollTo(0,0);}
    };
    if(run.end){
      function tick(){const sec=Math.max(0,Math.ceil((run.end-Date.now())/1000));if(!sec){finish(current().run,true);return;}dom('exam-clock').textContent=Math.floor(sec/60)+':'+String(sec%60).padStart(2,'0');}
      timer=setInterval(tick,1000);tick();
    }
  }
  function finish(run,timedOut){
    leave();if(!run||!current().run)return;
    const state=current(),stats={...state.stats},wrong=new Set(state.wrong||[]);let score=0;
    for(const id of run.ids){
      const q=questions.get(id),ok=isCorrect(q,run.answers[id]||[]),s=stats[q.topic]||{correct:0,total:0};
      stats[q.topic]={total:s.total+1,correct:s.correct+Number(ok)};if(ok){score++;wrong.delete(id);}else wrong.add(id);
    }
    const result={...run,timedOut,score,at:Date.now(),total:run.ids.length};
    write('tentamensmotor',{run:null,result,stats,wrong:[...wrong],history:[{at:result.at,total:result.total,score,mode:run.mode},...(state.history||[])].slice(0,20)});
    if(run.week)write('veckokoll-'+run.week,{at:result.at,score,total:result.total});
    location.hash='tentamensmotor/resultat';results();window.scrollTo(0,0);
  }
  function results(){
    const r=current().result;if(!r){setup();return;}
    const missed=r.ids.filter(id=>!isCorrect(questions.get(id),r.answers[id]||[]));
    const byTopic=new Map();for(const id of r.ids){const t=questions.get(id).topic;const v=byTopic.get(t)||[0,0];v[0]+=Number(!missed.includes(id));v[1]++;byTopic.set(t,v);}
    function review(id){
      const q=questions.get(id),selection=r.answers[id]||[];
      return '<details class="source"><summary>'+esc(q.q)+'</summary><p><strong>Ditt svar</strong> · '+esc(selection.length?selection.map(i=>q.a[i]).join(' · '):'Obesvarad')+'</p>'+feedback(q,selection)+link('moment/'+unitFor(q.topic),'Läs genomgången om området')+'</details>';
    }
    main.innerHTML=block(crumb('tentamensmotor','Tentamensmotor')+heading('Ditt resultat',r.timedOut?'Tiden tog slut och de sparade svaren rättades.':'Dina svar är rättade och resultatet är sparat.')+'<section class="paper study-column"><p class="exam-score">'+r.score+' <small>av '+r.total+' rätt</small></p>'+meter(r.score,r.total)+'<div class="topic-results">'+[...byTopic].map(([k,[a,b]])=>'<p><span>'+esc(k)+'</span><strong>'+a+'/'+b+'</strong></p>').join('')+'</div>'+(missed.length?'<h2>Gå igenom dina missar</h2>'+missed.map(review).join('')+'<button id="retry-this" class="primary">Träna på de här frågorna igen</button>':'<p>Du svarade rätt på alla frågor i passet.</p>')+'<details class="source"><summary>Visa de rätt besvarade frågorna</summary>'+r.ids.filter(id=>!missed.includes(id)).map(review).join('')+'</details><div class="actions">'+(r.week?link('vecka/'+r.week,'Tillbaka till veckan','secondary'):'')+link('tentamensmotor','Välj ett nytt pass','secondary')+'</div></section>');
    if(dom('retry-this'))dom('retry-this').onclick=()=>{if(current().run&&!confirm('Ersätta ditt pågående pass med dessa frågor?'))return;launch(shuffle(missed),'training');};
  }
  return {render:setup,leave,short(){if(current().run){location.replace('#tentamensmotor/pass');displayQuestion();}else launch(goalPass(),'training');}};
};
