/* Kursrummet delar navigering med portalens befintliga studieverktyg. */
window.CourseRoom = (() => {
  'use strict';
  const data = window.COURSE_ROOM_DATA;
  const units = data.units;
  const main = document.getElementById('main');
  const groups = {
    lektioner: ['Lektioner', 'Läs ett resonemang, tillämpa det och pröva sedan vad du minns.'],
    veckor: ['Veckoträning', 'Välj vecka och träna på samma slags bedömningar som i kursuppgifterna.'],
    verkstad: ['Ordningsbotsverkstad', 'Ta ställning till en fråga i taget. Efter varje beslut ser du varför ett alternativ håller.'],
    praxis: ['Rättsfall', 'Läs om händelsen och domstolens bedömning. Pröva vad som händer när en omständighet ändras.'],
    prov: ['Skrivna provpass', 'Svara på hela passet med lagtext till hands. När du lämnar in för egen rättning visas svarsstödet.'],
    seminarium: ['Seminarieträning', 'Öva enskilt och ta sedan med dina motiveringar till basgruppen.'],
    repetera: ['Min repetition', 'Här samlas moment som du har markerat för att öva igen.'],
    material: ['Kursmaterial', 'Hitta föreläsningen, veckofacit eller vägledningen som hör till ditt studiepass. Originalen finns i kursmaterialet.']
  };
  const slug = u => u.group === 'Lektioner' ? 'lektioner' : u.group === 'Rättsfall' ? 'praxis' :
    u.group === 'Seminarium' ? 'seminarium' : u.group.startsWith('Provpass') ? 'prov' :
    u.group.startsWith('Vecka') ? 'veckor' : 'verkstad';
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const itemHref = u => slug(u) === 'prov' ? '#kurs/prov/'+u.group.split(' ').pop()+'/'+u.id : '#kurs/kort/'+u.id;
  const key = id => 'trafik.d1pt2u.kursrum.'+id;
  function record(id) {
    try { return JSON.parse(localStorage.getItem(key(id))) || {}; }
    catch { return {}; }
  }
  function save(id,patch) {
    const current = {...record(id), ...patch};
    localStorage.setItem(key(id),JSON.stringify(current));
    if('rating' in patch)window.dispatchEvent(new Event('course-progress'));
    return current;
  }
  const label = u => ({ready:'Kan förklara',repeat:'Repetera'}[record(u.id).rating] || (record(u.id).draft || record(u.id).choices?.length ? 'Påbörjad' : 'Oprövad'));
  const status = u => '<span class="cr-status '+(record(u.id).rating || '')+'">'+label(u)+'</span>';
  const by = section => units.filter(u=>slug(u)===section);
  const href = (to,title,cls='') => '<a class="'+cls+'" href="'+esc(to)+'">'+esc(title)+'</a>';
  const bullets = lines => '<ul>'+lines.map(t=>'<li>'+esc(t)+'</li>').join('')+'</ul>';
  const back = (section='home') => href(section==='home'?'#home':'#kurs/'+section,section==='home'?'Kursöversikt':groups[section][0],'cr-back');
  function reference(u) {
    const refs=(u.refs||[]).filter(r=>/^https:\/\//.test(r.url));
    return '<details class="cr-source"><summary>Källor till momentet</summary>'+bullets(u.sources||[])+
      (refs.length?'<ul>'+refs.map(r=>'<li><a target="_blank" rel="noopener" href="'+esc(r.url)+'">'+esc(r.label)+'</a></li>').join('')+'</ul>':'')+'</details>';
  }
  function top(section) {
    return back()+'<header class="cr-title"><h1>'+groups[section][0]+'</h1><p>'+groups[section][1]+'</p></header>';
  }
  function row(u) {
    return '<a class="cr-row" href="'+itemHref(u)+'"><div><small>'+esc(u.group)+'</small><strong>'+esc(u.title)+'</strong></div>'+status(u)+'</a>';
  }
  function count(items) { return items.filter(u=>record(u.id).rating==='ready').length; }
  const groupItems = (section,name) => by(section).filter(u=>u.group===name);
  const weekNames = ['Körförbud, däck och trafikmiljö','Förare, passagerare och behörighet','Hastighet, väjningsplikt och ansvar','A-traktor, släp och fordonsstatus','Bälte, signaler och flera förseelser','Blandade förar- och fordonskontroller'];
  const related = {
    l1:['w2-1','b1'],l2:['r1','r2','p2-7'],l3:['r3','w5-1','p1-7'],l4:['r6','s-2'],l5:['r7','w5-3','p2-4'],
    l6:['b2','b3','b4'],l7:['w6-3','w4-2'],l8:['w5-5','w6-5'],l9:['r4','r5','w3-4'],l10:['b1','w5-4'],
    l11:['w3-3','p2-6'],l12:['p1-6','p2-4'],l13:['w3-5','w2-4'],l14:['basgrupp-kallor'],
    'kontroll-vistelse':['l11','r3'],'basgrupp-kallor':['l14','l11']
  };
  function relatedLinks(u) {
    const ids=related[u.id] || Object.keys(related).filter(k=>related[k].includes(u.id));
    const others=ids.map(id=>units.find(x=>x.id===id)).filter(Boolean);
    return others.length?'<section class="cr-panel"><h2>Träna vidare på samma ämne</h2>'+others.map(row).join('')+'</section>':'';
  }
  function originalTasks(n) {
    const group=data.weekMap.find(g=>g.week===Number(n));
    if(!group)return '';
    return '<details class="cr-panel"><summary>Originaluppgifterna i Canvas ('+group.items.length+')</summary><ol>'+
      group.items.map(x=>{
        const practice=units.find(u=>u.id===x.practice);
        return '<li><strong>'+esc(x.title)+'</strong><p>'+esc(x.focus)+'</p>'+
          (practice?href(itemHref(practice),'Öva på ett liknande fall'):'')+'</li>';
      }).join('')+'</ol></details>';
  }
  function home() {
    const latest = units.find(u=>u.id===record('last').id);
    const needs = units.filter(u=>record(u.id).rating==='repeat');
    const next = (latest && !record(latest.id).rating && latest) || needs[0] || units.find(u=>!record(u.id).rating) || units[0];
    const cta = latest && latest.id===next.id ? 'Fortsätt plugga' : 'Öppna momentet';
    const sections = [
      ['lektioner','Läs & förstå','Läs ett kursområde och pröva resonemanget på ett eget fall.'],
      ['veckor','Träna vecka för vecka','Lös korta fall hämtade ur teman i vecka 2–7.'],
      ['verkstad','Öva ordningsbot','Välj regel, ansvar och rapporteringsväg steg för steg.'],
      ['praxis','Förstå rättsfallen','Se vilka omständigheter som blev avgörande i domstolen.'],
      ['prov','Skriv ett provpass','Motivera dina svar och rätta hela passet i efterhand.'],
      ['seminarium','Förbered seminariet','Träna på ordningsbot och initiala utredningsåtgärder.']
    ];
    main.innerHTML='<div class="page cr"><header class="traffic-hero"><div class="hero-copy"><span class="course-code">D1PT2U · 6,5 HP · BORÅS</span><h1>Polisiärt arbete<br><em>i trafik.</em></h1><p>Från första iakttagelsen på vägen till en motiverad bedömning och rapport.</p></div><div class="road-scene" aria-hidden="true"><div class="road-cross"></div><div class="roundabout"></div></div></header>'+
      '<section class="cr-next"><div><small>Ditt nästa moment</small><h2>'+esc(next.title)+'</h2><p>'+esc(next.group)+'</p></div>'+href(itemHref(next),cta,'btn')+'</section>'+
      '<div class="cr-heading"><h2>Välj hur du vill plugga</h2>'+href('#kurs/material','Kursmaterial')+'</div><div class="cr-grid">'+sections.map(([s,t,d])=>'<a class="cr-tile" href="#kurs/'+s+'"><small>'+by(s).length+' '+(s==='lektioner'?'lektioner':s==='praxis'?'rättsfall':s==='prov'?'skrivfrågor':'övningar')+'</small><h3>'+t+'</h3><p>'+d+'</p></a>').join('')+'</div>'+
      '<section class="cr-progress"><h2>Din träning</h2><p>'+count(units)+' av '+units.length+' moment klara. Dina svar och markeringar sparas i den här webbläsaren.</p><progress value="'+count(units)+'" max="'+units.length+'"></progress>'+href('#kurs/repetera','Repetera markerade moment ('+needs.length+')')+'</section>'+
      '<div class="cr-heading"><h2>Inför examinationen</h2></div><div class="cr-grid two"><div class="cr-tile"><small>Individuell salstentamen · 3,5 hp</small><h3>Trafikbrott och trafikolyckor</h3><p>Mål 1.3, 1.4, 2.1 och 2.3. Enligt tentamensinformationen skriver du den 16 januari kl. 09.30–12.30 med JUNO eller okommenterad lagtext.</p>'+href('#study/salstenta','Följ studievägen till salstentan')+'</div><div class="cr-tile"><small>Skriftlig basgruppsuppgift · 3 hp</small><h3>Analysera polisens arbete</h3><p>Mål 1.1, 1.2, 2.1, 2.2, 2.4 och 3.1. Öva på att koppla problembild, kontroll och bemötande till källor och uppföljning.</p>'+href('#study/basgrupp','Följ basgruppens studieväg')+'</div></div></div>';
  }
  function list(section,detail) {
    let body='';
    if(section==='material'){
      body=data.material.map(block=>'<section class="cr-panel"><h2>'+esc(block.title)+'</h2>'+bullets(block.files)+href('#kurs/'+block.route,'Träna på området')+'</section>').join('');
    } else if(section==='veckor'||section==='prov'){
      const names=[...new Set(by(section).map(u=>u.group))];
      if(section==='veckor' && detail==='1'){
        const items=['l1','l2','r1','l3'].map(id=>units.find(u=>u.id===id)).filter(Boolean);
        main.innerHTML='<div class="page cr">'+back('veckor')+'<header class="cr-title"><small>Förslag till första studiepasset</small><h1>Vecka 1 · Trafikjuridikens grunder</h1><p>Börja med skillnaden mellan handlingsregel och ansvarsbestämmelse. Gå sedan från föreläsningens rekvisit till ett avgjort fall och olovlig körning.</p></header>'+items.map(row).join('')+href('#kurs/veckor/2','Fortsätt till vecka 2','btn')+'</div>';return;
      }
      if(detail && names.includes((section==='prov'?'Provpass ':'Vecka ')+detail)){
        const name=(section==='prov'?'Provpass ':'Vecka ')+detail;
        if(section==='prov')return exam(name);
        body='<h2>'+esc(name)+' · '+esc(weekNames[Number(detail)-2])+'</h2>'+groupItems(section,name).map(row).join('')+originalTasks(detail);
      }else{
        body=(section==='veckor'?'<section class="cr-next"><div><small>Vecka 1</small><h2>Trafikjuridikens grunder</h2><p>Ett första pass med Trafikjuridik 1 och rättspraxis.</p></div>'+href('#kurs/veckor/1','Börja här','btn')+'</section><br>':'')+'<div class="cr-grid two">'+names.map(name=>{
          const n=name.split(' ').pop(), items=groupItems(section,name);
          return '<a class="cr-tile" href="#kurs/'+section+'/'+n+'"><small>'+esc(name)+'</small><h2>'+esc(section==='prov'?(n==='1'?'Brott, bevisning och rapport':'Pröva nya omständigheter'):weekNames[n-2])+'</h2><p>'+items.length+' uppgifter · '+count(items)+' klara</p><progress value="'+count(items)+'" max="'+items.length+'"></progress></a>';
        }).join('')+'</div>';
      }
    }else{
      const items=section==='repetera'?units.filter(u=>record(u.id).rating==='repeat'):by(section);
      body=items.length?items.map(row).join(''):'<div class="cr-panel"><h2>Din repetitionslista är tom</h2><p>Välj ”Öva igen” när du har jämfört ditt svar med svarsstödet. I verkstaden läggs ett fall hit om du missar något steg.</p>'+href('#kurs/veckor','Öppna veckoträningen','btn')+'</div>';
    }
    main.innerHTML='<div class="page cr">'+top(section)+body+'</div>';
  }
  function assessment(u) {
    const selected=record(u.id).rating;
    return '<div class="cr-rating" data-id="'+u.id+'"><span>Kan du motivera svaret?</span>'+[['repeat','Öva igen'],['ready','Kan förklara']].map(([v,t])=>'<button type="button" class="btn alt" data-rate="'+v+'" aria-pressed="'+(selected===v)+'">'+t+'</button>').join('')+'</div>';
  }
  function bindRatings() {
    main.querySelectorAll('[data-rate]').forEach(btn=>btn.onclick=()=>{
      const box=btn.closest('[data-id]');
      save(box.dataset.id,{rating:btn.dataset.rate});
      box.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));
    });
  }
  function bindDrafts(){
    main.querySelectorAll('textarea[data-draft]').forEach(el=>el.oninput=()=>save(el.dataset.draft,{draft:el.value}));
  }
  function answerBox(u, title='Ditt svar'){
    const id='ans-'+u.id;
    return '<label class="cr-label" for="'+id+'">'+title+'</label><textarea id="'+id+'" rows="5" data-draft="'+u.id+'" placeholder="Skriv hur du resonerar …">'+esc(record(u.id).draft||'')+'</textarea>';
  }
  function card(u) {
    if(slug(u)==='prov')return exam(u.group);
    save('last',{id:u.id});
    if(u.steps)return workshop(u);
    const section=slug(u), items=groupItems(section,u.group), next=items[items.indexOf(u)+1];
    const parent='#kurs/'+section+(section==='veckor'?'/'+u.group.split(' ').pop():'');
    main.innerHTML='<div class="page cr cr-reading">'+href(parent,u.group,'cr-back')+
      '<header class="cr-title"><small>'+esc(u.group)+' · '+(items.indexOf(u)+1)+' av '+items.length+'</small><h1>'+esc(u.title)+'</h1><p>'+esc(u.prompt)+'</p></header>'+
      (u.sections||[]).map(s=>'<section class="cr-prose"><h2>'+esc(s.title)+'</h2><p>'+esc(s.text)+'</p></section>').join('')+
      '<section class="cr-panel cr-practice">'+(u.question?'<h2>'+esc(u.question)+'</h2>':'<h2>Hur motiverar du din bedömning?</h2>')+answerBox(u)+
      '<details id="cr-solution"><summary>Visa svarsstöd</summary>'+bullets(u.answer)+assessment(u)+'</details></section>'+reference(u)+relatedLinks(u)+
      '<div class="cr-controls">'+href(parent,'Till översikten','btn alt')+(next?href(itemHref(next),'Nästa moment','btn'):'')+'</div></div>';
    bindDrafts();bindRatings();
  }
  function exam(name) {
    const items=groupItems('prov',name), keyId='prov-'+name.split(' ').pop();
    const submitted=!!record(keyId).submitted;
    const at=items.find(u=>!record(u.id).draft?.trim()) || items[0];
    save('last',{id:at.id});
    main.innerHTML='<div class="page cr cr-reading">'+back('prov')+'<header class="cr-title"><small>Individuell skrivträning</small><h1>'+esc(name)+'</h1><p>'+ (submitted?'Jämför varje svar med svarsstödet och markera vad du vill repetera.':'Svara i egen takt. Dina utkast sparas här när du skriver. Efter inlämning ser du portalens modellresonemang och vilka delar av kursens övningstentor som frågorna bygger på.')+'</p></header>'+
      items.map((u,i)=>'<section class="cr-panel" id="question-'+u.id+'"><small>Fråga '+(i+1)+' av '+items.length+'</small><h2>'+esc(u.title)+'</h2><p>'+esc(u.prompt)+'</p>'+
        (submitted?'<h3>Ditt svar</h3><p class="cr-user">'+esc(record(u.id).draft||'Inget svar lämnat.')+'</p><h3>Svarsstöd</h3>'+bullets(u.answer)+assessment(u)+reference(u):answerBox(u))+'</section>').join('')+
      '<div class="cr-controls"><button class="btn" id="exam-submit">'+(submitted?'Återgå till skrivläget':'Lämna in för egen rättning')+'</button>'+href('#kurs/prov','Alla provpass','btn alt')+'</div></div>';
    bindDrafts();bindRatings();
    document.getElementById('exam-submit').onclick=()=>{
      if(!submitted && items.some(u=>!record(u.id).draft?.trim()) && !confirm('Du har obesvarade frågor. Vill du öppna svarsstödet ändå?'))return;
      save(keyId,{submitted:!submitted});exam(name);window.scrollTo(0,0);
    };
  }
  function workshop(u) {
    const stored=record(u.id), picks=stored.choices||[];
    const done=picks.length===u.steps.length;
    const score=u.steps.filter((s,i)=>picks[i]===s.correct).length;
    const current=u.steps[picks.length];
    function feedback(step,choice) {
      const ok=choice===step.correct;
      return '<div class="cr-feedback '+(ok?'right':'wrong')+'"><strong>'+(ok?'Rätt bedömt':'Titta på det här')+'</strong><p>'+esc(step.explanation)+'</p></div>';
    }
    main.innerHTML='<div class="page cr cr-reading">'+back('verkstad')+'<header class="cr-title"><small>'+esc(u.group)+'</small><h1>'+esc(u.title)+'</h1><p>'+esc(u.prompt)+'</p></header>'+
      picks.map((v,i)=>'<section class="cr-panel"><small>Beslut '+(i+1)+'</small><h2>'+esc(u.steps[i].question)+'</h2><p>Ditt val · '+esc(u.steps[i].options[v])+'</p>'+feedback(u.steps[i],v)+'</section>').join('')+
      (done?'<section id="cr-current" class="cr-panel"><h2>'+score+' av '+u.steps.length+' beslut rätt</h2><p>'+(score===u.steps.length?'Du har klarat fallet.':'Fallet ligger i din repetitionslista.')+'</p><div class="cr-controls"><button class="btn alt" id="again">Försök igen</button>'+href('#kurs/verkstad','Välj nästa fall','btn')+'</div></section>':
      '<section id="cr-current" class="cr-panel"><small>Beslut '+(picks.length+1)+' av '+u.steps.length+'</small><h2>'+esc(current.question)+'</h2>'+current.options.map((o,i)=>'<button class="cr-option" data-choice="'+i+'">'+esc(o)+'</button>').join('')+'</section>')+reference(u)+'</div>';
    main.querySelectorAll('[data-choice]').forEach(btn=>btn.onclick=()=>{
      const choices=[...picks,Number(btn.dataset.choice)], patch={choices};
      if(choices.length===u.steps.length)patch.rating=choices.every((c,i)=>c===u.steps[i].correct)?'ready':'repeat';
      save(u.id,patch);workshop(u);
      const panels=main.querySelectorAll('.cr-panel');panels[picks.length].scrollIntoView({block:'start'});
    });
    const again=main.querySelector('#again');
    if(again)again.onclick=()=>{save(u.id,{choices:[]});workshop(u);window.scrollTo(0,0);};
  }
  function render(route,nav) {
    if(route==='home'){nav('home');home();return;}
    const [,section,id]=route.split('/');
    if(section==='kort'){
      const u=units.find(x=>x.id===id);
      if(u){nav('kurs/'+slug(u));card(u);return;}
    }
    if(!groups[section]){nav('home');home();return;}
    nav('kurs/'+section);list(section,id);
    if(section==='prov' && route.split('/')[3]){
      const target=document.getElementById('question-'+route.split('/')[3]);
      if(target)requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));
    }
    if(section==='veckor' && route.split('/')[3]?.startsWith('uppgift-')){
      const details=main.querySelector('details');
      if(details){
        details.open=true;
        const target=details.querySelectorAll('li')[Number(route.split('/')[3].slice(8))-1];
        if(target)requestAnimationFrame(()=>target.scrollIntoView({block:'center'}));
      }
    }
  }
  function searchEntries(){
    return units.map(u=>({title:u.title,type:u.group,route:itemHref(u).slice(1),text:[u.prompt,u.question,...(u.answer||[]),...(u.sections||[]).map(s=>s.text),...(u.sources||[])].join(' ')})).concat(data.weekMap.flatMap(w=>w.items.map(x=>({title:x.title,type:'Originaluppgift · vecka '+w.week+' · '+x.number,text:x.focus,route:'kurs/veckor/'+w.week+'/uppgift-'+x.number}))));
  }
  return {render,searchEntries,progress:()=>({ready:count(units),total:units.length})};
})();
