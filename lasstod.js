'use strict';
window.createReading = function({main, read, write, esc, block, heading, link, row, crumb, tag, units}){
  const data=window.LASUNDERLAG;
  const texts=new Map(data.texts.map(x=>[x.id,x]));
  const dom=id=>document.getElementById(id);
  const prefs=()=>read('lasval');
  function appearance(){
    document.documentElement.classList.toggle('luftig',!!prefs().large);
    dom('large-print').setAttribute('aria-pressed',String(!!prefs().large));
  }
  dom('large-print').onclick=()=>{write('lasval',{large:!prefs().large});appearance();};appearance();
  let token=0,active=null;
  function stop(){
    token++;
    if(active&&'speechSynthesis' in window)window.speechSynthesis.cancel();
    active=null;dom('stop-reading').disabled=true;
    dom('speech-state').textContent='';
  }
  function speak(raw){
    stop();const api=window.speechSynthesis;
    if(!api||!window.SpeechSynthesisUtterance){dom('speech-state').textContent='Uppläsning saknas i den här webbläsaren. Använd enhetens uppläsning.';return;}
    const chunks=raw.split(/\n+|(?<=[.!?])\s+/u).map(x=>x.trim()).filter(Boolean);
    const gen=token;
    const voice=api.getVoices().find(v=>v.lang.toLowerCase().startsWith('sv'));
    function next(){
      if(token!==gen)return;
      const sentence=chunks.shift();if(!sentence){stop();return;}
      active=new SpeechSynthesisUtterance(sentence);active.lang='sv-SE';active.rate=.9;
      if(voice)active.voice=voice;
      active.onend=next;active.onerror=()=>{if(token!==gen)return;stop();dom('speech-state').textContent='Rösten kunde inte starta. Kontrollera uppläsningen i enhetens inställningar.';};
      dom('speech-state').textContent='Läser upp';dom('stop-reading').disabled=false;api.speak(active);
    }
    next();
  }
  dom('stop-reading').onclick=stop;
  dom('read-page').onclick=()=>speak(main.innerText);
  window.addEventListener('pagehide',stop);
  dom('lockBtn').addEventListener('click',stop);
  function films(items){
    if(!items.length)return '';
    return '<section class="paper short-group"><h2>Scenariofilmer</h2>'+items.map(f=>'<section class="tool-section">'+tag(f.ref)+'<h3>'+esc(f.title)+'</h3><video controls playsinline preload="metadata" aria-label="'+esc(f.title)+'" style="display:block;width:100%;max-width:720px;margin:1rem auto;border-radius:8px" src="'+esc(f.url)+'"><track kind="captions" srclang="sv" label="Svenska" src="'+esc(f.captions)+'">Din webbläsare kan inte spela filmen.</video><details class="source"><summary>Läs filmen i fyra korta delar</summary>'+f.text.map((p,i)=>'<section class="short-part"><h3>'+['Situationen','Pausa och fundera','Lagstödet','Vad gör patrullen?'][i]+'</h3><p>'+esc(p)+'</p></section>').join('')+'</details></section>').join('')+'</section>';
  }
  function cinema(){main.innerHTML=block(heading('Scenariofilmer','Spela upp med ljud eller följ texten i bilden.')+'<div class="study-column">'+films(window.SCENARIOFILMER)+'</div>');}
  function directory(){
    const list=items=>items.map(x=>row('kortlast/'+x.id,x.title,x.ref)).join('');
    main.innerHTML=block(heading('Kortläst','Välj en text. Läs eller lyssna på en del i taget.')+'<div class="study-column"><section class="paper"><h2>Rättsfall</h2>'+list(data.texts.filter(x=>x.id.startsWith('r')))+'</section><section class="paper short-group"><h2>Rättsliga vägledningar</h2>'+list(data.texts.filter(x=>x.id.startsWith('v')))+'</section>'+films(window.SCENARIOFILMER)+'</div>');
  }
  function card(id,returnTo){
    const x=texts.get(id);if(!x){directory();return;}
    const allParts=prefs().whole===true;
    let i=0,shown=false;
    const destination=returnTo&&units.has(returnTo)?'studiepass/'+returnTo:'kortlast';
    function draw(move=false){
      stop();
      const part=x.parts[i],body=allParts?x.parts:[part];
      main.innerHTML=block(crumb(destination,returnTo?'Till studiepasset':'Alla korta texter')+heading(x.title,'',x.ref)+'<article class="paper study-column short-card"><div class="short-tools"><span>'+ (allParts?'Hela kortversionen':'Del '+(i+1)+' av '+x.parts.length)+'</span><button id="whole" class="quiet">'+(allParts?'Läs en del i taget':'Visa alla delar')+'</button></div>'+body.map(p=>'<section class="short-part"><h2>'+esc(p.title)+'</h2><p>'+esc(p.text)+'</p></section>').join('')+'<div class="actions"><button class="secondary" id="speak-part">Lyssna på '+(allParts?'kortversionen':'delen')+'</button>'+(!allParts&&i>0?'<button class="secondary" id="back-part">Föregående del</button>':'')+(!allParts&&i<x.parts.length-1?'<button class="primary" id="next-part">Nästa del</button>':'')+'</div>'+
        ((allParts||i===x.parts.length-1)?'<section class="practice"><h2>Testa din förståelse</h2><p>'+esc(x.question)+'</p><button class="secondary" id="see-answer" aria-expanded="'+shown+'">'+(shown?'Dölj svaret':'Visa ett möjligt svar')+'</button>'+(shown?'<div class="feedback"><p>'+esc(x.answer)+'</p></div>':'')+'</section>':'')+
        '<details class="source"><summary>Källa och fördjupning</summary><p>'+esc(x.source)+'</p><p><a target="_blank" rel="noopener" href="'+esc(x.url)+'">Öppna källan hos utgivaren</a></p>'+x.units.filter(k=>units.has(k)).map(k=>link('moment/'+k,units.get(k).title)).join('<br>')+'</details></article>');
      dom('speak-part').onclick=()=>speak(body.map(p=>p.title+'. '+p.text).join('\n'));
      dom('whole').onclick=()=>{write('lasval',{whole:!allParts});card(id,returnTo);};
      if(dom('next-part'))dom('next-part').onclick=()=>{i++;draw(true);};
      if(dom('back-part'))dom('back-part').onclick=()=>{i--;draw(true);};
      if(dom('see-answer'))dom('see-answer').onclick=()=>{shown=!shown;draw();dom('see-answer').focus();};
      if(move){const h=main.querySelector('.short-part h2');h.tabIndex=-1;h.focus();}
    }draw();
  }
  function related(u,guided){
    const entries=data.texts.filter(x=>x.id===u.id||x.id.startsWith('v')&&x.units.includes(u.id));
    const movies=films(window.SCENARIOFILMER.filter(f=>f.id===u.id));
    if(!entries.length)return movies;
    return movies+'<div class="short-related">'+entries.map(x=>link('kortlast/'+x.id+(guided?'/'+u.id:''),'Kortläst · '+x.title)).join('')+'</div>';
  }
  function partner(u){
    const exercises={
      'basgrupp-kallor':{title:'Öva på en vetenskaplig källa',tasks:['Välj en studie ur kurslitteraturen. Läs syftet och resultatet tillsammans.','Förklara ett resultat med egna ord. Vad mätte forskarna och vilka ingick i studien?','Skriv två meningar om vad resultatet kan säga om ert trafikproblem. Lägg till källhänvisningen och en begränsning.']},
      l11:{title:'Öva på samtalet i en förarkontroll',tasks:['En är förare, en är polis. Börja med att förklara varför ni pratar med föraren.','Föraren återberättar vad kontrollen gäller och vad som händer härnäst. Vad blev oklart?','Byt roller och pröva en tydligare formulering.']},
      l12:{title:'Öva på muntlig avrapportering',tasks:['Välj ett olycksfall från veckan. Berätta kort vad patrullen såg och vad ett vittne berättade.','Den som lyssnar återger händelsen. Vilken uppgift behöver förtydligas?','Skriv om en mening så att det framgår vem som har sett vad.']}
    };
    const ex=exercises[u.id];if(!ex)return '';
    return '<details class="source"><summary>'+esc(ex.title)+'</summary><ol>'+ex.tasks.map(t=>'<li>'+esc(t)+'</li>').join('')+'</ol><label for="partner-note">Vår slutsats</label><textarea id="partner-note">'+esc(read('par-'+u.id).note||'')+'</textarea></details>';
  }
  function bindPartner(u){if(dom('partner-note'))dom('partner-note').oninput=e=>write('par-'+u.id,{note:e.target.value});}
  function audit(u){
    const prompts=data.audit[u.id]||[],state=read('skrivstod-'+u.id);
    return '<section class="self-check"><h3>Granska ditt eget svar</h3><p>Jämför med modellen. Kryssa för det du hittar i din egen text.</p>'+prompts.map((q,i)=>'<label><input type="checkbox" data-check="'+i+'" '+(state[i]?'checked':'')+'>'+esc(q)+'</label>').join('')+'<label for="rewrite">En mening jag vill förbättra</label><textarea id="rewrite">'+esc(state.rewrite||'')+'</textarea></section>';
  }
  function bindAudit(id){
    main.querySelectorAll('[data-check]').forEach(b=>b.onchange=()=>write('skrivstod-'+id,{[b.dataset.check]:b.checked}));
    if(dom('rewrite'))dom('rewrite').oninput=e=>write('skrivstod-'+id,{rewrite:e.target.value});
  }
  return {directory,cinema,card,related,stop,speak,audit,bindAudit,partner,bindPartner};
};
