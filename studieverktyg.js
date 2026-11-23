'use strict';
window.createStudyTools = function ({ main, units, read, write, esc, link, row, block, heading, tag, crumb, listing, unitRoute }) {
  const norm = x => String(x || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,' ').trim();
  const slug = x => norm(x).replaceAll(' ','-');
  const laws = window.TRAFIK_BANK.map(l => ({...l, id:slug([l.law,l.ref,l.title].join(' '))}));
  const cases = window.TRAFIK_CASES;
  const lawById = new Map(laws.map(l => [l.id,l]));
  const titles = new Map(laws.map(l => [l.law,l.name]));
  const instruments = [...titles.keys()].sort((a,b)=>a.localeCompare(b,'sv'));
  const dom = id => document.getElementById(id);
  const focus = id => dom(id)?.focus({preventScroll:true});
  const label = l => l.law+' '+l.ref;
  const lawRow = l => row('paragraf/'+l.id,l.title,label(l));
  const offsite = (url, text) => /^https:\/\//.test(url) ? '<a rel="noopener noreferrer" target="_blank" href="'+esc(url)+'">'+esc(text)+'</a>' : '';
  const saved = () => read('bank.saved');
  const marked = () => {const flags=saved();return laws.filter(l=>flags[l.id]);};
  const checkpoint = (id,patch) => write('fall.'+id,patch);
  const byUnit = new Map();
  laws.forEach(l => (l.units||[]).forEach(id=>{
    if (!byUnit.has(id)) byUnit.set(id,[]);
    byUnit.get(id).push(l);
  }));
  function section(title,html) {
    return html ? '<section class="tool-section"><h2>'+esc(title)+'</h2>'+html+'</section>' : '';
  }
  function box(route,title,meta,description) {
    return '<a class="tool-card" href="#'+esc(route)+'"><small>'+esc(meta)+'</small><strong>'+esc(title)+'</strong><span>'+esc(description)+'</span><b aria-hidden="true">↗</b></a>';
  }
  function searchTokens(ref) {
    const tokens = new Set();
    let chapter='';
    for(const part of ref.split(/(?=\d+\s*kap\.)/i)){
      const ch=part.match(/^(\d+)\s*kap\./i);
      if(ch)chapter=ch[1];
      const raw=ch?part.slice(ch[0].length):part;
      const cited=raw.includes('§') ? raw.slice(0,raw.lastIndexOf('§')) : raw;
      for(const [,n,a="",end,suffix=""] of cited.matchAll(/(\d+)(?:\s*([a-z])\b)?(?:\s*[–-]\s*(\d+)(?:\s*([a-z])\b)?)?/gi)){
        const add=v=>{tokens.add((chapter?chapter+':':'')+v);};
        add(n+a.trim());
        if(end){add(end+suffix.trim());if(!a&&!suffix&&+end-+n<=40)for(let i=+n+1;i<+end;i++)add(i);if(n===end && a && suffix)for(let c=a.charCodeAt(0)+1;c<suffix.charCodeAt(0);c++)add(n+String.fromCharCode(c));}
      }
    }
    return tokens;
  }
  laws.forEach(l=>{
    l.tokens=searchTokens(l.ref.toLowerCase());
    l.index=norm([label(l),l.name,l.title,l.rule,l.apply,l.pitfall,...l.sources].join(' '));
  });
  function searchBank(raw, instrument, stars){
    const words=norm(raw).split(' ').filter(Boolean);
    const q=raw.toLowerCase().replace(/\s+/g,' ').trim();
    const specific=q.match(/^(.*?)\s*(\d+)\s*(?::|kap\.?\s*)\s*(\d+)\s*([a-zåäö]?)(?:\s*§+)?$/i);
    const single=!specific&&q.match(/^([^\d]+?)\s+(\d+)\s*([a-z]?)(?:\s*§+)?$/i);
    const hint=specific||single;
    const code=hint&&norm(hint[1]);
    const token=specific?specific[2]+':'+specific[3]+specific[4]:single?single[2]+single[3]:'';
    const flags=saved();
    const results=laws.filter(l=>(!instrument||l.law===instrument)&&(!stars||flags[l.id]));
    if(hint){
      const strict=results.filter(l=>(!code||norm(l.law)===code||norm(l.name).includes(code))&&l.tokens.has(token));
      if(strict.length)return strict;
    }
    const score=l=>words.reduce((sum,w)=>sum+(norm(label(l)).split(' ').includes(w)?6:0)+(norm(l.title).includes(w)?3:0),0);
    return results.filter(l=>words.every(w=>l.index.includes(w))).sort((a,b)=>score(b)-score(a));
  }
  function bank(initial='',initialLaw='',initialStars=false) {
    const topics=[['Vårdslös körning','vårdslöshet'],['Kontrollera körkort','behörighet'],['På olycksplatsen','trafikolycka'],['Utfärda ordningsbot','ordningsbot'],['Kontrollera nykterhet','alkoholutandningsprov'],['Förbjuda fortsatt färd','fortsatt färd']];
    const params=new URLSearchParams(initial);
    let showCount=30;
    const q=params.get('q')||'', selected=params.get('lag')||initialLaw, stars=params.get('sparade')==='1'||initialStars;
    main.innerHTML=block(heading('Lagrumsbanken','Sök på situation, författning eller paragraf. Varje kort visar vad du behöver pröva, hur regeln används och var den förekommer i kursen.')+
      '<div class="bank-layout"><section class="bank-main"><div class="bank-finder"><div><label for="bank-q">Sök i lagrumsbanken</label><input class="search" id="bank-q" type="search" placeholder="Exempelvis olovlig körning, TBL 3 eller TrF 3:22" value="'+esc(q)+'"></div><div><label for="bank-law">Författning</label><select id="bank-law"><option value="">Alla författningar</option>'+instruments.map(l=>'<option value="'+esc(l)+'" '+(l===selected?'selected':'')+'>'+esc(l+' · '+titles.get(l))+'</option>').join('')+'</select></div><label class="check"><input id="bank-stars" type="checkbox" '+(stars?'checked':'')+'> Mina sparade lagrum</label></div><p id="bank-count" class="saved" role="status"></p><div id="bank-results"></div></section><aside class="sidebox"><h2>Öva på lagrummen</h2><p>Ta fem kort. Förklara med egna ord och jämför med kommentaren.</p>'+link('lagrumspass','Öppna lagrumspasset','secondary')+'<h3>Om lagrumskorten</h3><p>Kommentarerna är skrivna för kursen. När ett äldre facit använder tidigare lagtext framgår det på kortet. Längre paragrafserier och tekniska hänvisningar kan vara samlade på ett kort.</p><h3>Vanliga författningar</h3><div class="pills">'+['TBL','TrF','KKL','PL','RB'].filter(l=>titles.has(l)).map(l=>link('lagrumsbank/'+encodeURIComponent('lag='+l),l,'pill')).join('')+'</div></aside></div>');
    function update(replace=false){
      const input=dom('bank-q').value, law=dom('bank-law').value, starred=dom('bank-stars').checked;
      if(replace){
        const p=new URLSearchParams();if(input)p.set('q',input);if(law)p.set('lag',law);if(starred)p.set('sparade','1');
        history.replaceState(null,'','#lagrumsbank'+(p.size?'/'+encodeURIComponent(p.toString()):''));showCount=30;
      }
      const results=searchBank(input,law,starred);
      const browse=!input.trim()&&!law&&!starred;
      dom('bank-count').textContent=browse?laws.length+' lagrumskort · '+instruments.length+' författningar och regelverk':results.length+' lagrumskort';
      let html;
      if(browse){
        html='<div class="bank-topics"><h2>Sök utifrån situationen</h2><div class="pills">'+topics.map(([title,q])=>link('lagrumsbank/'+encodeURIComponent(new URLSearchParams({q}).toString()),title,'pill')).join('')+'</div></div><h2 class="bank-list-title">Hitta din författning</h2><div class="instrument-list">'+[...instruments].sort((a,b)=>Number(coreAreas.has(b))-Number(coreAreas.has(a))).map(k=>row('lagrumsbank/'+encodeURIComponent(new URLSearchParams({lag:k}).toString()),titles.get(k),k,laws.filter(l=>l.law===k).length+' kort')).join('')+'</div>';
      }else{
        html=results.length?'<div class="frame">'+results.slice(0,showCount).map(lawRow).join('')+'</div>':'<p class="empty">Inga träffar med de här valen. '+link('lagrumsbank','Visa hela banken')+'</p>';
        if(results.length>showCount)html+='<button class="secondary more" id="bank-more">Visa fler lagrum</button>';
      }
      dom('bank-results').innerHTML=html;
      if(dom('bank-more'))dom('bank-more').onclick=()=>{const previous=showCount;showCount+=30;update();dom('bank-results').querySelectorAll('.index-row')[previous]?.focus();};
    }
    dom('bank-q').oninput=()=>update(true);dom('bank-law').onchange=()=>update(true);dom('bank-stars').onchange=()=>update(true);update();
  }
  function fields(l) {
    return [['Vad säger regeln?',l.rule],['Så tillämpar du den',l.apply],['Vanlig fallgrop',l.pitfall]].map(([heading,value])=>section(heading,'<p>'+esc(value)+'</p>')).join('');
  }
  function unitLinks(ids){return [...new Set(ids)].filter(id=>units.has(id)).map(id=>row(unitRoute(id),units.get(id).title,units.get(id).group)).join('');}
  function detail(id){
    const l=lawById.get(id);if(!l)return bank();
    const groupCases=cases.filter(c=>c.laws.some(k=>norm(k)===norm(l.law)) && c.related.some(k=>l.units.includes(k)));
    main.innerHTML=block(crumb('lagrumsbank/'+encodeURIComponent(new URLSearchParams({lag:l.law}).toString()),'Lagrumsbanken · '+l.law)+'<div class="bank-layout"><article class="paper law-paper">'+tag(label(l))+'<h1>'+esc(l.title)+'</h1><p class="saved">'+esc(l.name)+'</p>'+fields(l)+section('Källor',listing(l.sources)+offsite(l.url,'Läs källan hos utgivaren ↗'))+'</article><aside class="sidebox"><button class="secondary" id="law-star"></button><h3>Träna på området</h3>'+unitLinks(l.units)+groupCases.map(c=>row('gruppfall/'+c.id,c.title,'Fallverkstaden')).join('')+'</aside></div>');
    function sync(){const has=Boolean(saved()[id]);dom('law-star').textContent=has?'★ Sparat till repetition':'☆ Spara till repetition';dom('law-star').setAttribute('aria-pressed',has);}
    dom('law-star').onclick=()=>{write('bank.saved',{[id]:!saved()[id]});sync();};sync();
  }
  const coreAreas=new Set(['TBL','TrF','KKL','PL','RB','LAU','FoL','FoF','FAP 261-1','BrB','UtlL','KlampL']);
  const core=laws.filter(l=>coreAreas.has(l.law) && !/historisk|upphävd/i.test(l.ref+' '+l.title));
  const draftKey='bank.pass';
  function selectCards(pool){const arr=Array.from(pool);for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}return arr.slice(0,5).map(l=>l.id);}
  function drill(){
    const state=read(draftKey), ids=(state.ids||[]).filter(id=>lawById.has(id)), i=state.i||0;
    const poolChoice='<div class="actions"><button id="new-pass" class="primary">Fem kort ur kursens kärna</button><button id="all-pass" class="secondary">Dra från hela banken</button>'+(marked().length?'<button id="star-pass" class="secondary">Öva på mina sparade</button>':'')+'</div>';
    function start(pool){write(draftKey,{ids:selectCards(pool),i:0,again:[],shown:false});drill();}
    const startButtons=()=>{dom('new-pass').onclick=()=>start(core);dom('all-pass').onclick=()=>start(laws);if(dom('star-pass'))dom('star-pass').onclick=()=>start(marked());};
    if(!ids.length||i>=ids.length){
      const again=(state.again||[]).map(id=>lawById.get(id)).filter(Boolean);
      main.innerHTML=block(crumb('lagrumsbank','Lagrumsbanken')+heading('Lagrumspasset',ids.length?'Du kunde förklara '+(ids.length-again.length)+' av '+ids.length+' kort vid din egen bedömning.':'Förklara regeln, ge ett eget trafikexempel och nämn en omständighet som skulle kunna ändra din bedömning.')+'<section class="paper compact">'+(again.length?section('Att pröva igen',again.map(lawRow).join('')):'')+poolChoice+'</section>');startButtons();return;
    }
    const l=lawById.get(ids[i]);
    main.innerHTML=block(crumb('lagrumsbank','Lagrumsbanken')+heading('Lagrumspasset','','Kort '+(i+1)+' av '+ids.length)+'<article class="paper compact">'+tag(label(l))+'<h2>'+esc(l.title)+'</h2><p class="lead exercise-prompt">Vad behöver vara uppfyllt? Ge ett exempel där regeln får betydelse.</p>'+(state.shown?fields(l)+'<div class="actions"><button class="secondary" id="again">Spara och öva igen</button><button class="primary" id="ready">Kan förklara</button></div>':'<button class="primary" id="reveal-law">Visa kommentar</button>')+'</article>');
    if(!state.shown){dom('reveal-law').onclick=()=>{write(draftKey,{shown:true});drill();focus('again');};return;}
    function advance(again){if(again)write('bank.saved',{[l.id]:true});write(draftKey,{i:i+1,shown:false,again:again?[...(state.again||[]),l.id]:state.again||[]});drill();main.focus();}
    dom('again').onclick=()=>advance(true);dom('ready').onclick=()=>advance(false);
  }
  function caseDirectory(){
    main.innerHTML=block(heading('Fallverkstaden','Öppna ett fall själv eller tillsammans i basgruppen. Situationen utvecklas i tre steg. Efter varje beslut får ni jämföra era skäl med ett svarsstöd.')+'<div class="case-grid">'+cases.map(c=>box('gruppfall/'+c.id,c.title,'Vecka '+c.week+' · cirka '+c.minutes+' min',c.theme)).join('')+'</div>');
  }
  function groupCase(id,mode){
    const c=cases.find(x=>x.id===id);if(!c)return caseDirectory();
    const base='gruppfall/'+id;
    if(!['egen','grupp'].includes(mode)){
      main.innerHTML=block(crumb('fallverkstad','Fallverkstaden')+heading(c.title,c.scene,'Vecka '+c.week+' · '+c.minutes+' min')+'<div class="case-grid">'+['egen','grupp'].map((m,i)=>{
        const progress=read('fall.'+id+'.'+m);
        return box(base+'/'+m,i?'Basgrupp':'Egen träning',progress.done?'Genomfört':progress.step||progress.drafts?'Fortsätt där du slutade':'Tre steg',i?'Använd en gemensam skärm. Turas om att föreslå beslut, leta lagstöd och pröva invändningar.':'Formulera din bedömning i egen takt och jämför med svarsstödet.');
      }).join('')+'</div>');return;
    }
    const key=id+'.'+mode, state=read('fall.'+key), s=Math.min(state.step||0,c.stages.length-1), stage=c.stages[s], drafts=state.drafts||{}, group=mode==='grupp';
    const header=crumb(base,c.title)+heading(c.title,group?'Basgrupp · turas om att leda varje steg.':'Egen träning',state.done?'Genomfört':'Steg '+(s+1)+' av '+c.stages.length);
    const answer=listing(stage.model);
    const sources=listing(c.sources)+(c.refs||[]).map(r=>'<p>'+offsite(r.url,r.label+' ↗')+'</p>').join('');
    if(state.done){
      main.innerHTML=block(header+'<article class="paper compact">'+section(group?'Gemensam återblick':'Din återblick',listing(c.debrief))+section(group?'Era bedömningar':'Dina bedömningar',c.stages.map((x,n)=>'<details class="source"><summary>Steg '+(n+1)+' · '+esc(x.prompt)+'</summary><p>'+esc(drafts[n]||'Ingen anteckning sparad.')+'</p>'+listing(x.model)+'</details>').join(''))+section('Fördjupning',unitLinks(c.related)+'<div class="pills">'+c.laws.map(l=>link('lagrumsbank/'+encodeURIComponent(new URLSearchParams(titles.has(l)?{lag:l}:{q:l}).toString()),l,'pill')).join('')+'</div>')+section('Källor',sources)+'<div class="actions">'+link('fallverkstad','Välj nästa fall','primary')+'<button id="replay" class="secondary">Gör om fallet</button></div></article>');
      dom('replay').onclick=()=>{if(confirm('Starta om det här fallet och tömma svaren för det valda läget?')){checkpoint(key,{step:0,done:false,shown:false,drafts:{}});groupCase(id,mode);}};return;
    }
    const history=c.stages.slice(1,s+1).map((x,n)=>'<div class="case-update">'+tag('Ny uppgift · steg '+(n+2))+'<p>'+esc(x.update)+'</p></div>').join('');
    main.innerHTML=block(header+'<div class="bank-layout"><article class="paper">'+tag('Utgångsläge')+'<p class="lead">'+esc(c.scene)+'</p>'+history+section('Ta ställning','<p>'+esc(stage.prompt)+'</p>')+'<label for="case-draft">'+(group?'Gruppens resonemang':'Ditt resonemang')+'</label><textarea id="case-draft" placeholder="Vilka fakta bär bedömningen? Vilken regel använder du?">'+esc(drafts[s]||'')+'</textarea><p id="case-save" role="status" class="saved"></p>'+
      (state.shown?'<div class="feedback"><h3>Jämför med svarsstödet</h3>'+answer+'</div><button id="next-stage" class="primary">'+(s===c.stages.length-1?'Öppna återblicken':'Gå till nästa steg')+'</button>':'<button id="case-reveal" class="primary">Visa svarsstöd för steget</button>')+'</article><aside class="sidebox"><h2>'+(group?'Fördela rollerna':'Bygg din motivering')+'</h2><ol>'+(group?'<li>En person föreslår ett beslut och pekar ut avgörande fakta.</li><li>En person slår upp lagstöd och läser rekvisiten.</li><li>En person testar vad som skulle ändra beslutet. Byt roller vid nästa steg.</li>':'<li>Beskriv vad som är känt.</li><li>Ange bestämmelsen och koppla den till omständigheterna.</li><li>Motivera åtgärden och säg vad du behöver veta mer.</li>')+'</ol><p class="saved">Svaren sparas i den här webbläsaren.</p></aside></div>');
    dom('case-draft').oninput=e=>{drafts[s]=e.target.value;dom('case-save').textContent=checkpoint(key,{drafts})?'Sparat på enheten.':'Kunde inte spara på enheten.';};
    if(state.shown)dom('next-stage').onclick=()=>{checkpoint(key,s===c.stages.length-1?{done:true}:{step:s+1,shown:false});groupCase(id,mode);main.scrollIntoView();main.focus({preventScroll:true});};
    else dom('case-reveal').onclick=()=>{checkpoint(key,{shown:true});groupCase(id,mode);focus('next-stage');dom('next-stage').scrollIntoView({block:'nearest'});};
  }
  function precedent(){
    const groups=[['Vårdslöshet i trafik',['r1','r2'],'Vilken konkret risk tog föraren? Jämför vad som gick att förutse i de två situationerna.'],['Behörighet och fordonsklass',['r3','r4','r5','r6'],'Skilj på vad som visar fordonets klass och vad som visar förarens uppsåt.'],['Förverkande',['r7'],'Vad räknades till fordonet? Följ sedan hänvisningen till dagens regler.']];
    main.innerHTML=block(heading('Rättsfall','Läs omständigheterna, formulera ditt domskäl och jämför med avgörandet. Använd frågan vid varje grupp för att läsa fallen tillsammans.')+'<div class="case-grid praxis-grid">'+groups.map(([title,ids,q])=>'<section class="paper"><h2>'+esc(title)+'</h2><p>'+esc(q)+'</p>'+unitLinks(ids)+'</section>').join('')+'</div>');
  }
  return {
    entries:laws.map(l=>({type:'Lagrum',title:label(l)+' · '+l.title,text:l.name+' '+l.rule+' '+l.apply,route:'paragraf/'+l.id})),
    routes:{lagrumsbank:'lagrumsbank',paragraf:'lagrumsbank',lagrumspass:'lagrumsbank',fallverkstad:'fallverkstad',gruppfall:'fallverkstad',rattsfall:'rattsfall'},
    render(a,b,c){({lagrumsbank:bank,paragraf:detail,lagrumspass:drill,fallverkstad:caseDirectory,gruppfall:groupCase,rattsfall:precedent})[a](b,c);},
    home(){return '<div class="tool-strip">'+box('lagrumsbank','Slå upp ett lagrum','Lagrumsbanken','Sök regel, läs kommentaren och pröva den i ett kursmoment.')+box('fallverkstad','Lös ett fall tillsammans','Fallverkstaden','Fatta tre beslut medan situationen utvecklas.')+box('lagrumspass','Testa vad du minns','Lagrumspasset','Förklara fem lagrum utan att titta i anteckningarna.')+'</div>';},
    week(n){const selected=cases.filter(c=>c.week===n);return selected.length?section('Tillämpa veckans kunskaper',selected.map(c=>row('gruppfall/'+c.id,c.title,'Fallverkstaden · '+c.minutes+' min')).join('')):'';},
    resources(id){const found=byUnit.get(id)||[];return found.length?'<details class="source"><summary>Fördjupa dig i områdets lagrum ('+found.length+')</summary>'+found.map(lawRow).join('')+'</details>':'';},
    markedCount(){return marked().length;},
    review(){const found=marked();return section('Mina sparade lagrum',found.length?'<div class="compact frame">'+found.map(lawRow).join('')+'</div><div class="actions">'+link('lagrumspass','Öva med lagrumskort','secondary')+'</div>':'<p>Spara kort i '+link('lagrumsbank','Lagrumsbanken')+' för att samla dem här.</p>');},
    old(index){const terms=['TBL 1','TBL 2','TBL 3','TBL 4','TBL 5','TBL 7','TrF 2:8','TrF 3:22','PL 22','RB 48:15','alkoholutandningsprov','FAP 261-1'];return terms[index]?'lagrumsbank/'+encodeURIComponent('q='+encodeURIComponent(terms[index])):'lagrumsbank';}
  };
};
