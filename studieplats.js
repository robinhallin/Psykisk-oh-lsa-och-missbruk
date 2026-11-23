(() => {
  'use strict';
  const course = window.COURSE_ROOM_DATA;
  const reference = window.STUDY_DATA;
  const units = new Map(course.units.map(unit => [unit.id, unit]));
  const weeks = [
    { title:'Trafikjuridikens grunder', focus:'Handlingsregel, ansvar, vårdslöshet och olovlig körning.', ids:'l1 l2 r1 r2 l3 r3', goals:'1.3, 1.4' },
    { title:'Från förseelse till ordningsbot', focus:'Körförbud, däck och vem som kan rapporteras.', ids:'l6 l10 w2-1 b1 w2-2 w2-3 w2-4 s-1', goals:'1.4, 2.1' },
    { title:'Förare, behörighet och fordon', focus:'Körkort, fordonsklass och ansvar under färd.', ids:'l8 w3-1 w3-2 w3-3 l9 r4 r5 w3-4 l13 w3-5', goals:'1.3, 1.4, 2.2' },
    { title:'Bedöm körningen', focus:'Hastighet, väjningsplikt och flera överträdelser.', ids:'l7 w4-1 w4-2 b3 w4-3 w4-4 b2 w4-5', goals:'1.4, 2.1' },
    { title:'Utred trafikbrottet', focus:'Rattfylleri, smitning, förverkande och fordonsstatus.', ids:'l4 r6 s-2 w5-1 w5-2 l5 w5-3 r7 w5-4 w5-5', goals:'1.3, 2.1' },
    { title:'Åtgärder på plats', focus:'Trafikolyckor, dokumentation och förarens uppgifter.', ids:'l12 w6-1 w6-2 b4 w6-3 w6-4 w6-5 s-3', goals:'1.4, 2.1, 2.3' },
    { title:'Genomför hela kontrollen', focus:'Blandade kontroller, bemötande och förebyggande arbete.', ids:'l11 kontroll-vistelse w7-1 w7-2 w7-3 w7-4 w7-5 w7-6 s-4 l14 basgrupp-kallor', goals:'1.1, 1.2, 2.1, 2.2, 2.4, 3.1' }
  ].map((w,i) => ({...w,n:i+1,ids:w.ids.split(' ')}));
  const sequence = weeks.flatMap(w=>w.ids);
  const main = document.querySelector('#main');
  const ownTools = document.querySelector('#tools');
  const esc = value => String(value ?? '').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const prefix = 'trafik.d1pt2u.kursrum.';
  const local = {get(k){try{return localStorage.getItem(k)}catch{return null}},set(k,v){try{localStorage.setItem(k,v);return true}catch{return false}}};
  function read(id){try{return JSON.parse(local.get(prefix+id)) || {}}catch{return {}}}
  function write(id,patch){return local.set(prefix+id,JSON.stringify({...read(id),...patch}));}
  const unitWeek = id => weeks.find(w=>w.ids.includes(id));
  const isDone = id => Boolean(read(id).rating);
  const doneCount = ids => ids.filter(isDone).length;
  const nextIn = w => w.ids.find(id=>!isDone(id)) || w.ids[0];
  const stateLabel = id => ({repeat:'Till repetition',ready:'Klar'}[read(id).rating] || (read(id).draft || read(id).choices?.length?'Påbörjad':''));
  const unitType = u => u.group==='Lektioner'?'Genomgång':u.steps?'Beslutsövning':u.group==='Rättsfall'?'Rättsfall':u.group==='Seminarium'?'Seminariefall':'Övningsfall';
  const examUnits = n => course.units.filter(u=>u.group==='Provpass '+n);
  function unitRoute(id){
    const u=units.get(id);
    if(u?.group.startsWith('Provpass')){const n=u.group.slice(-1);return 'prov/'+n+'/'+(examUnits(n).findIndex(x=>x.id===id)+1);}
    return 'moment/'+id;
  }
  const link = (route,label,cls='') => '<a class="'+cls+'" href="#'+esc(route)+'">'+esc(label)+'</a>';
  const listing = items => '<ul>'+items.map(s=>'<li>'+esc(s)+'</li>').join('')+'</ul>';
  const block = html => '<div class="wrap">'+html+'</div>';
  const tag = text => '<p class="eyebrow">'+esc(text)+'</p>';
  const crumb = (route,text) => link(route,text,'crumb');
  const heading = (title,desc='',over='') => '<header class="heading">'+(over?tag(over):'')+'<h1>'+esc(title)+'</h1>'+(desc?'<p>'+esc(desc)+'</p>':'')+'</header>';
  const meter = (n,total) => '<div class="meter" aria-hidden="true"><i style="width:'+Math.round(100*n/(total||1))+'%"></i></div>';
  const row = (route,title,meta='',desc='') => '<a class="index-row" href="#'+esc(route)+'">'+(meta?'<small>'+esc(meta)+'</small>':'')+'<strong>'+esc(title)+'</strong>'+(desc?'<span class="desc">'+esc(desc)+'</span>':'')+'</a>';
  const repeats = () => course.units.filter(u=>read(u.id).rating==='repeat');
  function resources(u){
    const urls=(u.refs||[]).filter(r=>r.url.startsWith('https://'));
    return '<details class="source"><summary>Källor till momentet</summary>'+listing(u.sources||[])+(urls.length?'<ul>'+urls.map(r=>'<li><a href="'+esc(r.url)+'" target="_blank" rel="noopener">'+esc(r.label)+'</a></li>').join('')+'</ul>':'')+'</details>';
  }
  function remembered(){
    const last=read('last').id;
    if(sequence.includes(last)&&!isDone(last))return last;
    if(sequence.includes(last)){
      const i=sequence.indexOf(last);
      const next=sequence.slice(i+1).find(id=>!isDone(id));
      if(next)return next;
    }
    return sequence.find(id=>!isDone(id)) || repeats()[0]?.id || sequence[0];
  }
  function dashboard(){
    const id=remembered(), week=unitWeek(id)||weeks[0], completed=doneCount(sequence), seen=Boolean(read('last').id);
    const action=completed===sequence.length?'Repetera kursen':seen?'Fortsätt studiepasset':'Börja med vecka 1';
    const rows=weeks.map(w=>'<a class="week-row '+(week.n===w.n?'current':'')+'" href="#vecka/'+w.n+'"><span class="week-num"><small>VECKA</small>'+w.n+'</span><span><strong>'+esc(w.title)+'</strong><span class="desc">'+esc(w.focus)+'</span></span><span class="tally" aria-label="'+doneCount(w.ids)+' av '+w.ids.length+' genomgångna">'+doneCount(w.ids)+'/'+w.ids.length+'</span></a>').join('');
    main.innerHTML=block('<section class="hero"><div class="hero-copy">'+tag('Polisutbildningen · Borås')+'<h1>Polisiärt arbete<br>i trafik<span>.</span></h1><p>'+ (seen?'Nästa moment · '+esc(units.get(id).title)+'':'Börja med vad patrullen ser. Träna sedan på att välja lagrum, motivera beslutet och skriva rapporten.')+'</p>'+link(unitRoute(id),action,'primary')+'</div><img src="road.webp" alt="En slingrande landsväg genom barrskog, sedd ovanifrån."></section>'+
      '<div class="dashboard"><section><div class="section-head"><h2>Din studieplan</h2><small>7 veckor</small></div><div class="week-list">'+rows+'</div></section><aside><section class="sidebox"><h2>Dina framsteg</h2><p class="metric">'+completed+' <small>/ '+sequence.length+' moment</small></p>'+meter(completed,sequence.length)+'<p>Genomgångna i studieplanen.</p>'+link('repetition','Min repetition ('+repeats().length+')')+'</section><section class="sidebox"><h2>Inför salstentan</h2><p>16 januari · 09.30–12.30<br>JUNO eller okommenterad lagtext enligt kursens tentamensinformation.</p>'+link('prov','Öppna provpassen')+'</section></aside></div>');
  }
  function originals(w,active){
    const group=course.weekMap.find(g=>g.week===w.n);
    if(!group)return '';
    return '<details class="source" '+(active?'open':'')+'><summary>Originaluppgifter i Canvas ('+group.items.length+')</summary><ol class="checklist">'+group.items.map(x=>'<li id="original-'+x.number+'"><strong>'+esc(x.title)+'</strong><p>'+esc(x.focus)+'</p>'+(x.practice?link(unitRoute(x.practice),'Träna på ett liknande fall'):'')+'</li>').join('')+'</ol></details>';
  }
  function weekPage(w,original){
    const id=nextIn(w), n=doneCount(w.ids);
    main.innerHTML=block(crumb('plan','Studieplan')+heading(w.title,w.focus,'Vecka '+w.n)+'<div class="reader-grid"><div><div class="frame">'+w.ids.map((id,i)=>{const u=units.get(id);return row(unitRoute(id),u.title,(i+1)+' / '+w.ids.length+' · '+unitType(u),stateLabel(id));}).join('')+'</div>'+originals(w,original)+'</div><aside class="sidebox"><h2>Veckans studiepass</h2><p>'+n+' av '+w.ids.length+' moment genomgångna.</p>'+meter(n,w.ids.length)+link(unitRoute(id),n===w.ids.length?'Repetera veckan':'Öppna nästa moment','primary')+'<p class="saved">Kursmål '+esc(w.goals)+'</p><p class="saved">Veckouppgifterna följer Canvas. Genomgångar och rättsfall är ordnade för självstudier.</p></aside></div>');
    if(original)requestAnimationFrame(()=>document.getElementById('original-'+original)?.scrollIntoView({block:'center'}));
  }
  function outline(w,id){
    return '<details class="outline" '+(matchMedia('(min-width:761px)').matches?'open':'')+'><summary>Moment i vecka '+w.n+'</summary>'+w.ids.map((x,i)=>'<a '+(x===id?'class="current" aria-current="step"':'')+' href="#'+unitRoute(x)+'"><small>'+esc(unitType(units.get(x)))+' · '+(i+1)+'/'+w.ids.length+(stateLabel(x)?' · '+stateLabel(x):'')+'</small>'+esc(units.get(x).title)+'</a>').join('')+'</details>';
  }
  function nextUnit(u,w,reviewMode){
    if(reviewMode)return link('repetition','Till min repetition','primary');
    const i=w.ids.indexOf(u.id);
    return i<w.ids.length-1?link(unitRoute(w.ids[i+1]),'Nästa moment','primary'):link('avslut/'+w.n,'Summera veckan','primary');
  }
  function endWeek(w){
    const done=doneCount(w.ids), again=w.ids.filter(id=>read(id).rating==='repeat');
    main.innerHTML=block(crumb('plan','Studieplan')+heading('Din sammanfattning','Du har gått igenom '+done+' av '+w.ids.length+' moment i '+w.title.toLocaleLowerCase('sv')+'.','Vecka '+w.n)+'<div class="paper compact"><h2>'+ (again.length?'Att öva igen':'Veckans resultat')+'</h2>'+ (again.length?again.map(id=>row(unitRoute(id),units.get(id).title)).join(''):'<p class="boxcopy">Du har inga markeringar för repetition i den här veckan.</p>')+'<div class="actions">'+(done<w.ids.length?link(unitRoute(nextIn(w)),'Fortsätt veckan','primary'):w.n<7?link('vecka/'+(w.n+1),'Öppna nästa vecka','primary'):link('prov','Öppna provpassen','primary'))+link('plan','Till studieplanen','secondary')+'</div></div>');
  }
  function draftBox(u){
    return '<label for="draft">Ditt resonemang</label><textarea id="draft" data-draft="'+u.id+'" rows="4" placeholder="Vilken omständighet avgör din bedömning?">'+esc(read(u.id).draft||'')+'</textarea><span class="saved" role="status" id="save-status"></span>';
  }
  function bindDraft(){
    const field=main.querySelector('[data-draft]');
    if(field)field.oninput=()=>{const saved=write(field.dataset.draft,{draft:field.value});document.getElementById('save-status').textContent=saved?'Sparat på den här enheten.':'Webbläsaren kunde inte spara svaret.';};
  }
  function rating(u){
    const val=read(u.id).rating;
    return '<div class="actions"><button class="secondary '+(val==='ready'?'rate-selected':'')+'" data-rating="ready" aria-pressed="'+(val==='ready')+'">Kan förklara</button><button class="secondary '+(val==='repeat'?'rate-selected':'')+'" data-rating="repeat" aria-pressed="'+(val==='repeat')+'">Öva igen</button></div><p class="saved" id="rating-status" role="status">'+(val==='ready'?'Markerat som klart.':val==='repeat'?'Ligger i din repetition.':'')+'</p>';
  }
  function bindRating(u,callback){
    main.querySelectorAll('[data-rating]').forEach(b=>b.onclick=()=>{
      write(u.id,{rating:b.dataset.rating});
      main.querySelectorAll('[data-rating]').forEach(other=>{other.classList.toggle('rate-selected',b===other);other.setAttribute('aria-pressed',String(b===other));});
      document.getElementById('rating-status').textContent=b.dataset.rating==='ready'?'Markerat som klart.':'Sparat i min repetition.';
      if(callback)callback();
    });
  }
  const examples = new Map(reference.tracks.flatMap(track=>track.lessons).map(lesson=>[lesson.id,lesson]));
  const exampleFor = {l1:'underlag',l2:'rekvisit',l6:'rapport',l7:'regel',l11:'mote',l12:'ankomst',l14:'problem','basgrupp-kallor':'kallor'};
  function workedExample(u){
    const e=examples.get(exampleFor[u.id]);
    if(!e)return '';
    return '<details class="worked"><summary>Se ett genomarbetat exempel</summary><h3>'+esc(e.title)+'</h3><p>'+esc(e.scene)+'</p><div class="feedback"><h3>Exempel på motivering</h3><p>'+esc(e.example)+'</p></div><small>'+esc(e.source)+'</small></details>';
  }
  function study(u,reviewMode=false){
    const w=unitWeek(u.id); write('last',{id:u.id});
    const intro=tag('Vecka '+w.n+' · '+unitType(u))+'<h1>'+esc(u.title)+'</h1><p class="lead">'+esc(u.prompt)+'</p>';
    main.innerHTML=block(crumb(reviewMode?'repetition':'vecka/'+w.n,reviewMode?'Min repetition':'Vecka '+w.n+' · '+w.title)+'<div class="reader-grid"><article class="paper">'+intro+'<div id="lesson-body"></div></article><aside>'+outline(w,u.id)+'</aside></div>');
    const body=document.getElementById('lesson-body');
    if(u.steps){workshop(u,body,nextUnit(u,w,reviewMode));return;}
    body.innerHTML=(u.sections||[]).map(s=>'<section class="prose"><h2>'+esc(s.title)+'</h2><p>'+esc(s.text)+'</p></section>').join('')+workedExample(u)+
      '<section class="practice"><h2>'+esc(u.question||'Hur bedömer du fallet?')+'</h2>'+draftBox(u)+'<div class="actions" id="show-feedback"><button class="primary" id="compare">Jämför med svarsstödet</button></div>'+
      '<div id="solution" hidden><div class="feedback"><h3>Så kan du resonera</h3>'+listing(u.answer)+'</div><h3>Kan du förklara vad som avgör?</h3>'+rating(u)+'<div class="actions" id="continue" '+(isDone(u.id)?'':'hidden')+'>'+nextUnit(u,w,reviewMode)+'</div></div></section>'+resources(u);
    bindDraft();bindRating(u,()=>{document.getElementById('continue').hidden=false;});
    document.getElementById('compare').onclick=()=>{document.getElementById('solution').hidden=false;document.getElementById('show-feedback').hidden=true;document.getElementById('solution').scrollIntoView({block:'nearest'});};
  }
  function workshop(u,body,next){
    const picks=read(u.id).choices||[], current=u.steps[picks.length], score=u.steps.filter((s,i)=>s.correct===picks[i]).length;
    const review=picks.map((p,i)=>{const s=u.steps[i],ok=p===s.correct;return '<div class="feedback '+(ok?'':'wrong')+'"><h3>'+esc(s.question)+'</h3><p>Ditt val · '+esc(s.options[p])+'</p><p><b>'+(ok?'Rätt bedömt.':'Jämför med svarsstödet.')+'</b> '+esc(s.explanation)+'</p></div>';}).join('');
    body.innerHTML='<section class="practice">'+review+(current?tag('Beslut '+(picks.length+1)+' av '+u.steps.length)+'<h2>'+esc(current.question)+'</h2>'+current.options.map((o,i)=>'<button class="option" data-option="'+i+'">'+esc(o)+'</button>').join(''):'<h2>'+score+' av '+u.steps.length+' beslut rätt</h2><p>'+ (score===u.steps.length?'Momentet är klart.':'Du kan göra om fallet från Min repetition.')+'</p><div class="actions">'+next+'<button class="secondary" id="retry">Gör om fallet</button></div>')+'</section>'+resources(u);
    body.querySelectorAll('[data-option]').forEach(b=>b.onclick=()=>{const choices=[...picks,Number(b.dataset.option)],patch={choices};if(choices.length===u.steps.length)patch.rating=choices.every((p,i)=>p===u.steps[i].correct)?'ready':'repeat';write(u.id,patch);workshop(u,body,next);body.querySelectorAll('.feedback')[picks.length].scrollIntoView({block:'start'});});
    const again=document.getElementById('retry');if(again)again.onclick=()=>{write(u.id,{choices:[]});workshop(u,body,next);body.scrollIntoView();};
  }
  function exams(){
    const names=['Brott, bevisning och rapport','När omständigheterna ändras'];
    main.innerHTML=block(heading('Provpass','Skriv först, jämför sedan. Båda passen utgår från kursens övningstentor och rättas med modellresonemang.','Inför salstentan')+'<div class="pair">'+[1,2].map((n,i)=>{
      const items=examUnits(n),submitted=read('prov-'+n).submitted,answered=items.filter(u=>read(u.id).draft?.trim()).length;
      const next=Math.max(0,items.findIndex(u=>!read(u.id).draft?.trim()))+1;
      return '<section class="paper">'+tag('Provpass '+n+' · 7 skrivfrågor')+'<h2>'+names[i]+'</h2><p>'+ (n===1?'Bedöm bland annat en påkörd cyklist, en godkänd ordningsbot och vem som får låna en bil.':'Pröva bland annat fordonsklass, föraridentitet och vilka uppgifter som behövs efter en kollision.')+'</p><p class="saved">'+answered+' av '+items.length+' svar sparade</p>'+meter(answered,items.length)+'<div class="actions">'+link('prov/'+n+'/'+(submitted?1:next),submitted?'Granska svaren':answered?'Fortsätt provpasset':'Starta provpasset','primary')+'</div></section>';
    }).join('')+'</div><div class="sidebox trail"><h2>Kort kunskapskoll</h2><p>Åtta blandade flervalsfrågor. Du får förklaringen efter varje val.</p>'+link('snabbtest',read('snabbtest').ids?'Öppna kunskapskollen':'Starta kunskapskollen')+'</div>');
  }
  function exam(n,i){
    const items=examUnits(n),u=items[i-1],submitted=read('prov-'+n).submitted;
    if(!u){exams();return;}
    const next=i<items.length?link('prov/'+n+'/'+(i+1),'Nästa fråga','primary'):submitted?link('prov','Till provpassen','primary'):'<button id="submit-exam" class="primary">Öppna rättningen</button>';
    main.innerHTML=block(crumb('prov','Alla provpass')+'<div class="reader-grid"><article class="paper">'+tag('Provpass '+n+' · Fråga '+i+' av '+items.length)+'<h1>'+esc(u.title)+'</h1><p class="lead">'+esc(u.prompt)+'</p><section class="practice">'+
      (submitted?'<h2>Ditt svar</h2><p class="your-answer">'+esc(read(u.id).draft||'Frågan lämnades obesvarad.')+'</p><div class="feedback"><h3>Modellresonemang</h3>'+listing(u.answer)+'</div>'+rating(u)+resources(u):draftBox(u))+'</section><div class="actions">'+next+(i>1?link('prov/'+n+'/'+(i-1),'Föregående fråga','secondary'):'')+'</div></article><aside class="sidebox"><h2>'+ (submitted?'Rättning':'Frågor i passet')+'</h2><p>'+ (submitted?'Jämför ditt svar och markera det du vill träna mer på.':'Du kan gå tillbaka och ändra dina svar före rättningen.')+'</p><div class="exam-nav">'+items.map((q,k)=>'<a aria-label="Fråga '+(k+1)+(read(q.id).draft?' · besvarad':'')+'" class="'+(read(q.id).draft?'answered':'')+'" '+(k===i-1?'aria-current="step"':'')+' href="#prov/'+n+'/'+(k+1)+'">'+(k+1)+'</a>').join('')+'</div><p id="answer-count">'+items.filter(q=>read(q.id).draft?.trim()).length+' av '+items.length+' besvarade</p>'+(submitted?'<button class="secondary" id="edit-exam">Återgå till skrivläget</button>':'')+'</aside></div>');
    bindDraft();bindRating(u);
    const field=document.getElementById('draft');
    if(field)field.addEventListener('input',()=>{document.getElementById('answer-count').textContent=items.filter(q=>read(q.id).draft?.trim()).length+' av '+items.length+' besvarade';const current=main.querySelector('[aria-current="step"]');current.classList.toggle('answered',!!field.value.trim());});
    const submit=document.getElementById('submit-exam');
    if(submit)submit.onclick=()=>{const empty=items.filter(q=>!read(q.id).draft?.trim()).length;if(empty&&!confirm(empty+' frågor är obesvarade. Vill du öppna rättningen ändå?'))return;write('prov-'+n,{submitted:true});if(i===1)exam(n,1);else location.hash='prov/'+n+'/1';};
    const edit=document.getElementById('edit-exam');if(edit)edit.onclick=()=>{write('prov-'+n,{submitted:false});exam(n,i);};
  }
  function newQuiz(){
    const ids=reference.quiz.map((_,i)=>i);
    for(let i=ids.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[ids[i],ids[j]]=[ids[j],ids[i]];}
    write('snabbtest',{ids:ids.slice(0,8),answers:[],i:0});
  }
  function quickTest(){
    if(!read('snabbtest').ids?.length)newQuiz();
    const {ids,answers,i}=read('snabbtest');
    const correct=(q,p)=>{const c=[q.c].flat().sort(),s=[p].flat().sort();return c.length===s.length&&c.every((v,k)=>v===s[k]);};
    if(i>=ids.length){
      const score=ids.filter((id,k)=>correct(reference.quiz[id],answers[k])).length;
      main.innerHTML=block(crumb('prov','Alla provpass')+heading(score+' av '+ids.length+' rätt','Så gick det på din kunskapskoll.')+'<div class="compact frame tool-list">'+ids.map((id,k)=>{const q=reference.quiz[id];return '<details><summary>'+ (correct(q,answers[k])?'Rätt':'Repetera')+' · '+esc(q.q)+'</summary><p>'+esc(q.e)+'</p></details>';}).join('')+'</div><div class="actions"><button class="primary" id="again-quiz">Nya frågor</button></div>');
      document.getElementById('again-quiz').onclick=()=>{newQuiz();quickTest();};return;
    }
    const q=reference.quiz[ids[i]], answered=answers.length>i,multi=Array.isArray(q.c);
    main.innerHTML=block(crumb('prov','Alla provpass')+'<article class="paper compact">'+tag('Kunskapskoll · Fråga '+(i+1)+' av '+ids.length)+'<h1>'+esc(q.q)+'</h1>'+ (multi&&!answered?'<p>Flera alternativ kan vara rätt.</p>':'')+
      q.a.map((a,k)=>'<button class="option" data-q="'+k+'" aria-pressed="'+(answered&&[answers[i]].flat().includes(k))+'" '+(answered?'disabled':'')+'>'+esc(a)+'</button>').join('')+
      (answered?'<div class="feedback '+(correct(q,answers[i])?'':'wrong')+'"><h3>'+ (correct(q,answers[i])?'Rätt svar':'Jämför med svaret')+'</h3><p>'+esc([q.c].flat().map(x=>q.a[x]).join(' · '))+'</p><p>'+esc(q.e)+'</p></div><button class="primary" id="next-q">'+(i+1===ids.length?'Visa resultat':'Nästa fråga')+'</button>':multi?'<button id="check-q" class="primary" disabled>Kontrollera svar</button>':'')+'</article>');
    let selected=[];
    const commit=value=>{write('snabbtest',{answers:[...answers,value]});quickTest();};
    main.querySelectorAll('[data-q]').forEach(b=>b.onclick=()=>{const k=Number(b.dataset.q);if(!multi){commit(k);return;}selected=selected.includes(k)?selected.filter(x=>x!==k):[...selected,k];b.setAttribute('aria-pressed',String(selected.includes(k)));document.getElementById('check-q').disabled=!selected.length;});
    if(document.getElementById('check-q'))document.getElementById('check-q').onclick=()=>commit(selected);
    if(document.getElementById('next-q'))document.getElementById('next-q').onclick=()=>{write('snabbtest',{i:i+1});quickTest();window.scrollTo(0,0);};
  }
  function repetition(){
    const list=repeats();
    main.innerHTML=block(crumb('plan','Studieplan')+heading('Min repetition',list.length?'Öppna ett moment och pröva bedömningen igen. När du markerar ”Kan förklara” försvinner det härifrån.':'När du väljer ”Öva igen” hamnar momentet här. Här samlas också beslutsövningar där du missade ett steg.')+'<div class="compact frame">'+ (list.length?list.map(u=>row(unitWeek(u.id)?'repetera/'+u.id:unitRoute(u.id),u.title,u.group)).join(''):'<div class="empty">Du har inga moment markerade för repetition.</div>')+'</div><div class="actions">'+link(unitRoute(remembered()),'Fortsätt studieplanen','secondary')+'</div>');
  }
  const noteKey='trafik.d1pt2u.notes';
  function notes(){
    main.innerHTML=block(crumb('plan','Studieplan')+heading('Mina anteckningar','Dina anteckningar sparas på den här enheten.')+'<section class="compact paper"><label for="notes">Anteckningar</label><textarea class="note" id="notes">'+esc(local.get(noteKey)||'')+'</textarea><p class="saved" id="saved-note" role="status"></p><button class="secondary" id="export">Ladda ned som text</button></section>');
    const input=document.getElementById('notes');input.oninput=()=>document.getElementById('saved-note').textContent=local.set(noteKey,input.value)?'Sparat.':'Kunde inte spara i webbläsaren.';
    document.getElementById('export').onclick=()=>{const a=document.createElement('a'),url=URL.createObjectURL(new Blob([input.value],{type:'text/plain;charset=utf-8'}));a.href=url;a.download='Trafikportalen-anteckningar.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
  }
  const categories=['Lagrum','Genomgångar','Rättsfall','Övningar','Canvasuppgifter','Kursmaterial','Kursmål'];
  const entries=[
    ...reference.laws.map((x,i)=>({type:'Lagrum',title:x.ref+' · '+x.title,text:x.text,route:'lagrum/'+i})),
    ...course.units.map(u=>({type:u.group==='Lektioner'?'Genomgångar':u.group==='Rättsfall'?'Rättsfall':'Övningar',title:u.title,text:[u.group,u.prompt,u.question,...(u.answer||[]),...(u.sources||[])].join(' '),route:unitRoute(u.id),context:unitWeek(u.id)?'Vecka '+unitWeek(u.id).n+' · '+unitType(u):u.group})),
    ...course.weekMap.flatMap(w=>w.items.map(x=>({type:'Canvasuppgifter',title:x.title,text:x.focus,context:'Vecka '+w.week+' · Uppgift '+x.number,route:'vecka/'+w.week+'/'+x.number}))),
    ...course.material.flatMap((g,i)=>g.files.map(f=>({type:'Kursmaterial',title:f,text:g.title,route:'material/'+i}))),
    ...reference.learningGoals.map((g,i)=>({type:'Kursmål',title:g.id+' · '+g.goal,text:g.concrete.join(' '),route:'kursmal/'+i}))
  ];
  const normalize=s=>s.toLocaleLowerCase('sv').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
  function book(filter='',query=''){
    main.innerHTML=block(heading('Uppslagsbok','Hitta lagrum, rättsfall och originaluppgifter. Du kan söka på exempelvis ”olovlig körning” eller ”TBL 3”.')+
      '<div class="finder"><div><label for="search">Sök i kursen</label><input class="search" type="search" id="search" value="'+esc(query)+'" placeholder="Sök ämne eller lagrum"></div><div><label for="type">Visa</label><select id="type"><option value="">Alla typer</option>'+categories.map(t=>'<option '+(t===filter?'selected':'')+'>'+t+'</option>').join('')+'</select></div></div><p class="saved" role="status" id="result-count"></p><div id="results" class="results"></div>');
    const input=document.getElementById('search'),select=document.getElementById('type');
    function results(){
      const words=normalize(input.value).split(' ').filter(Boolean);
      const filtered=entries.filter(e=>(!select.value||select.value===e.type)&&words.every(w=>normalize(e.title+' '+e.text+' '+(e.context||'')).includes(w)));
      if(!words.length&&!select.value){
        document.getElementById('result-count').textContent='';
        document.getElementById('results').innerHTML='<div class="frame">'+categories.map(t=>row('bok/'+encodeURIComponent(t),t,'',entries.filter(e=>e.type===t).length+' poster')).join('')+'</div>';return;
      }
      const sorted=filtered.sort((a,b)=>words.filter(w=>normalize(b.title).includes(w)).length-words.filter(w=>normalize(a.title).includes(w)).length);
      document.getElementById('result-count').textContent=sorted.length+' träffar';
      document.getElementById('results').innerHTML='<div class="frame">'+(sorted.length?sorted.map(e=>row(e.route,e.title,e.context||e.type)).join(''):'<p class="empty">Prova ett annat sökord eller välj Alla typer.</p>')+'</div>';
    }
    function changed(){const hash='#bok/'+encodeURIComponent(select.value)+'/'+encodeURIComponent(input.value);history.replaceState(null,'',hash);results();}
    input.oninput=changed;select.onchange=changed;results();
  }
  function refPage(kind,index){
    if(!Number.isInteger(index)||index<0)return book();
    let title,html,category;
    if(kind==='lagrum' && reference.laws[index]){
      const l=reference.laws[index];category='Lagrum';title=l.ref+' · '+l.title;html='<p class="lead">'+esc(l.text)+'</p><div class="actions"><a class="secondary" rel="noopener" target="_blank" href="'+esc(l.url)+'">Läs författningen</a></div>';
    }else if(kind==='material'&&course.material[index]){
      const m=course.material[index];category='Kursmaterial';title=m.title;html='<p>Originalmaterialet finns i kursen i Canvas.</p>'+listing(m.files);
    }else if(kind==='kursmal'&&reference.learningGoals[index]){
      const g=reference.learningGoals[index];category='Kursmål';title=g.id+' · '+g.goal;html=listing(g.concrete)+'<p>Examination · '+esc(g.examined.join(', '))+'</p><h2 class="subhead">Träna mot målet</h2>'+weeks.filter(w=>w.goals.split(', ').includes(g.id)).map(w=>row('vecka/'+w.n,w.title,'Vecka '+w.n)).join('');
    }else return book();
    main.innerHTML=block(crumb('bok/'+encodeURIComponent(category),'Uppslagsbok · '+category)+'<article class="paper compact">'+tag(category)+'<h1>'+esc(title)+'</h1>'+html+'</article>');
  }
  const oldModules={uppdrag:'l14',kontroll:'l11',vardsloshet:'l2',behorighet:'l3',nykterhet:'l4',ordningsbot:'l6',olycka:'l12'};
  const oldCases={kollision:'l12',kvall:'s-2',balte:'w4-4',lanebil:'b1'};
  function legacy(parts){
    const [a,b,c,d]=parts;
    if(a==='kurs'){
      if(b==='kort'&&units.has(c))return unitRoute(c);
      if(b==='veckor'&&weeks[Number(c)-1])return 'vecka/'+c+(d?'/'+d.replace('uppgift-',''):'');
      if(b==='prov')return units.has(d)?unitRoute(d):c?'prov/'+c+'/1':'prov';
      return {veckor:'plan',repetera:'repetition',material:'bok/Kursmaterial',praxis:'bok/Rättsfall',lektioner:'bok/Genomgångar',verkstad:'moment/b1',seminarium:'moment/s-1'}[b]||'plan';
    }
    if(a==='module')return unitRoute(oldModules[b]||'l1');
    if(a==='case')return unitRoute(oldCases[b]||'l1');
    if(a==='study')return b==='basgrupp'?'moment/basgrupp-kallor':'prov';
    return {home:'plan',exam:'prov',quiz:'snabbtest',review:'repetition',flashcards:'snabbtest',notes:'anteckningar',modules:'bok/Genomgångar',cases:'bok/Övningar',sources:'bok/Kursmaterial',laws:'bok/Lagrum',goals:'bok/Kursmål'}[a]||'plan';
  }
  function render(){
    ownTools.open=false;
    let parts=location.hash.slice(1).split('/').map(s=>{try{return decodeURIComponent(s)}catch{return ''}});
    let [a,b,c]=parts;
    if(!a)a='plan';
    const valid=['plan','vecka','moment','avslut','repetera','repetition','prov','snabbtest','anteckningar','bok','lagrum','material','kursmal'];
    if(!valid.includes(a)){const path=legacy(parts);history.replaceState(null,'','#'+path);[a,b,c]=path.split('/');}
    const nav=['bok','lagrum','kursmal','material'].includes(a)?'bok':['prov','snabbtest'].includes(a)?'prov':'plan';
    document.querySelectorAll('[data-tab]').forEach(el=>{if(el.dataset.tab===nav)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current');});
    if((a==='moment'||a==='repetera')&&unitWeek(b))study(units.get(b),a==='repetera');
    else if(a==='vecka'&&weeks[Number(b)-1])weekPage(weeks[Number(b)-1],Number(c));
    else if(a==='avslut'&&weeks[Number(b)-1])endWeek(weeks[Number(b)-1]);
    else if(a==='repetition')repetition();
    else if(a==='prov'&&[1,2].includes(Number(b)))exam(Number(b),Number(c)||1);
    else if(a==='prov')exams();
    else if(a==='snabbtest')quickTest();
    else if(a==='anteckningar')notes();
    else if(a==='bok')book(b,c);
    else if(['lagrum','material','kursmal'].includes(a))refPage(a,Number(b));
    else dashboard();
    document.title=(a==='plan'?'Polisiärt arbete i trafik':main.querySelector('h1')?.textContent||'Studieplan')+' · Trafikportalen';
  }
  document.documentElement.dataset.theme=local.get('study.theme')||'light';
  document.getElementById('themeBtn').onclick=()=>{const value=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=value;local.set('study.theme',value);ownTools.open=false;};
  document.addEventListener('click',e=>{if(ownTools.open&&!ownTools.contains(e.target))ownTools.open=false;});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')ownTools.open=false;if(e.key==='/'&&!document.getElementById('portalShell').hidden&&!/input|textarea|select/i.test(document.activeElement.tagName)){e.preventDefault();if(!location.hash.startsWith('#bok'))location.hash='bok';requestAnimationFrame(()=>document.getElementById('search')?.focus());}});
  document.querySelector('.skip').onclick=e=>{e.preventDefault();main.focus();};
  window.addEventListener('hashchange',()=>{window.scrollTo(0,0);render();main.focus({preventScroll:true});});
  render();
})();
