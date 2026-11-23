'use strict';
window.createGuidedPasses = function({main, read, write, esc, link, block, crumb, tag, reading}) {
  const passes = [
    {
      title:'Vårdslöshet i trafik', week:1, unit:'l2', source:'r1', law:'TBL 1 §',
      scene:'En bil kör på en fotgängare vid ett övergångsställe i mörkret. Föraren säger att hon såg personen först precis före krocken.',
      question:'Vad behöver du ta reda på för att bedöma körningen?',
      options:['Hur svårt skadad blev fotgängaren?', 'Vad kunde föraren se och hur anpassade hon farten?', 'Var det mörkt?'],
      feedback:['Skadan behöver utredas. Tänk också på vad föraren kunde upptäcka före krocken.','Precis. Förarens sikt och fart före krocken hjälper dig att bedöma vilka risker hon kunde uppfatta.','Mörkret känner du redan till. Undersök belysningen, sikten och på vilket avstånd fotgängaren gick att upptäcka.'],
      change:'Du får nu veta att en parkerad skåpbil skymde fotgängaren.',
      rethink:'Hur påverkar skåpbilen vad du behöver utreda?',
      explain:'Ta reda på när fotgängaren blev synlig och om den skymda sikten gav föraren anledning att sänka farten tidigare.',
      model:'Skåpbilen begränsade sikten mot övergångsstället. Jag behöver veta hur fort bilen körde och när fotgängaren kunde upptäckas. Enligt 1 § trafikbrottslagen ska jag bedöma om föraren i väsentlig mån brast i omsorg och varsamhet. Kollisionen ensam räcker inte för den slutsatsen.',
      retryModel:'Jag vill veta bilens fart före bussen och från vilket avstånd föraren kunde upptäcka fotgängaren. De uppgifterna hjälper mig att bedöma om farten var anpassad till sikten.',
      retry:'En fotgängare kliver ut bakom en buss i dagsljus. Vilka två uppgifter om färden vill du ha innan du bedömer körningen?'
    },{
      title:'Olovlig körning', week:1, unit:'l3', source:'r3', law:'TBL 3 §',
      scene:'Du stoppar en personbil. Kontrollen visar att förarens utländska körkort har upphört att gälla här. Föraren säger att han trodde att det fortfarande gällde.',
      question:'Vad behöver du utreda efter kontrollen av behörigheten?',
      options:['Vem som äger bilen.', 'Vad föraren visste om sin behörighet när han körde.', 'Om körkortet ser välbevarat ut.'],
      feedback:['Ägaren kan vara relevant för andra frågor. För förarens ansvar behöver du också utreda hans uppsåt.','Precis. Fråga vilka besked han fått, när han fick dem och hur han uppfattade dem.','Kortets skick berättar lite om vad föraren visste. Fråga vad han gjort för att kontrollera giltigheten.'],
      change:'Föraren visar ett daterat meddelande där han före färden frågat en myndighet om giltigheten.',
      rethink:'Vad i meddelandeväxlingen vill du kontrollera?',
      explain:'Läs både frågan och svaret. Kontrollera datum, om svaret gällde hans situation och hur han uppfattade beskedet.',
      model:'Föraren körde bil trots att behörigheten hade upphört. För ansvar för olovlig körning enligt 3 § första stycket trafikbrottslagen krävs uppsåt. Jag vill kontrollera beskedet han fick före färden. Att han ställde en fråga räcker inte för att avgöra vad han förstod.',
      retryModel:'Jag vill se vad brevet faktiskt sade, när det nådde föraren och vad hon uppfattade före färden. Det hjälper mig att bedöma uppsåtet.',
      retry:'En förare säger att hon har fått ett brev om sin behörighet men missförstått det. Vad vill du veta om brevet och tidpunkten för färden?'
    },{
      title:'Utred en trafikolycka', week:6, unit:'l12', law:'TBL 5 §', 
      scene:'När patrullen kommer fram är en parkerad bil skadad. Ett vittne såg en skåpbil lämna platsen. De inblandade är oskadda och platsen är säkrad.',
      question:'Vilken fråga hjälper dig att rekonstruera händelsen?',
      options:['Vad såg du själv före, under och efter sammanstötningen?', 'Var det smitning?', 'Hur dyr blir reparationen?'],
      feedback:['Precis. En fri berättelse gör det lättare att skilja iakttagelser från slutsatser.','Det är din uppgift att bedöma. Be vittnet beskriva vad föraren faktiskt gjorde.','Skadekostnaden säger lite om förarens agerande efter krocken. Be vittnet beskriva förloppet.'],
      change:'Vittnet berättar nu att föraren stannade och pratade med någon innan skåpbilen körde iväg.',
      rethink:'Vad behöver du ta reda på genom det nya vittnet?',
      explain:'Identifiera personen och fråga vad som sades. Utred om föraren förstod att en olycka inträffat, vilka uppgifter som lämnades och vad som återstod att göra.',
      model:'Vittnet såg skåpbilen lämna platsen efter ett samtal. Enligt 5 § trafikbrottslagen behöver jag utreda om föraren undandrog sig en skyldighet efter olyckan. Jag tar reda på vad föraren uppfattade och vilka uppgifter som utbyttes. Först då har jag bättre underlag för bedömningen.',
      retryModel:'Vittnet kan beskriva ljudet och bilen. Själva sammanstötningen och vad föraren uppfattade behöver utredas med andra uppgifter.',
      retry:'Ett vittne har bara sett en bil köra därifrån och hört en smäll. Vilken del av förloppet saknar du en direkt iakttagelse av?'
    },{
      title:'Ordningsbot när föraren invänder', week:2, unit:'l6', law:'RB 48 kap. 15 §',
      scene:'Du ser en bil passera stopplinjen när signalen visar rött. Vid kontrollen säger föraren att signalen var grön vid passagen.',
      question:'Vilken betydelse har förarens uppgift för ordningsboten?',
      options:['Min säkra iakttagelse räcker för att utfärda boten.', 'Jag måste avgöra vem som minns rätt på plats.', 'Föraren förnekar gärningen. Då får jag inte utfärda ordningsbot.'],
      feedback:['Din iakttagelse är viktig för rapporten. Förnekandet hindrar dig från att utfärda ordningsbot.','Dokumentera de olika uppgifterna. Ett förnekande hindrar ordningsbot även om din egen iakttagelse är tydlig.','Precis. Håll isär vad du själv såg och vad föraren berättar när du dokumenterar händelsen.'],
      change:'Ändra bara förarens svar. Nu säger hon: ”Det var rött, men beloppet känns högt.”',
      rethink:'Vad behöver du klarlägga innan du går vidare?',
      explain:'Fråga vad invändningen gäller och om hon vill godkänna föreläggandet. Hennes kommentar om beloppet är i sig inget förnekande av körningen.',
      model:'Föraren bekräftar nu att signalen var röd. Hennes invändning gäller beloppet, så förnekandehindret i 48 kap. 15 § rättegångsbalken är inte aktuellt på den uppgiften. Jag klarlägger hennes inställning till godkännande och kontrollerar övriga förutsättningar för ordningsbot.',
      retryModel:'Jag kan fråga: ”Berätta vad du menar. Vad hände enligt dig när du passerade linjen?” Då kan jag skilja invändningen mot händelsen från inställningen till beloppet.',
      retry:'En förare säger bara ”det där går jag inte med på”. Vilken öppen fråga kan skilja ett förnekande från en invändning mot beloppet?'
    }
  ];
  const key=i=>'guidat-pass-'+i;
  function current(){
    const last=read('guidat-val').index;
    if(passes[last] && !read(key(last)).done)return last;
    const next=passes.findIndex((_,i)=>!read(key(i)).done);
    return next<0?0:next;
  }
  function hero(){
    const i=current(), s=read(key(i));
    return tag('Guidat studiepass · cirka 10 minuter')+'<h1>'+esc(passes[i].title)+'</h1><p>Ett kort fall, en ny omständighet och ditt eget tentasvar.</p>'+link('guidat/'+i,s.done?'Repetera fallet':s.started?'Fortsätt plugga':'Starta studiepass','primary');
  }
  const btn=(id,label,style='secondary')=>'<button type="button" class="'+style+'" id="'+id+'">'+esc(label)+'</button>';
  function render(index){
    const i=Number(index), p=passes[i]; if(!p){location.hash='plan';return;}
    const id=key(i), s=read(id), step=s.step||0;
    write('guidat-val',{index:i});write(id,{started:true});
    const card=window.LASUNDERLAG.texts.find(x=>x.id===p.source);
    const caseText=step===0?p.scene:step===1?p.change:step===2?p.scene+' '+p.change:'';
    const q=[p.question,p.rethink,'Hur bedömer du fallet med den nya uppgiften? Motivera med fakta och lagrum.',p.retry][step];
    const evidence=card?'<details class="source"><summary>Jämför med '+esc(card.ref)+'</summary>'+card.parts.map(x=>'<p><strong>'+esc(x.title)+'</strong> '+esc(x.text)+'</p>').join('')+'<a href="'+esc(card.url)+'" target="_blank" rel="noopener">Öppna källan</a></details>':link('moment/'+p.unit,'Fördjupa dig i kursens genomgång');
    const draftLabel=step===2?'Mitt tentasvar':'Mina stödord (valfritt)';
    const field='<label for="pass-draft">'+draftLabel+'</label><textarea class="note" id="pass-draft" rows="3">'+esc(s['draft'+step]||'')+'</textarea>';
    const shown=step===0?Number.isInteger(s.choice):s['show'+step];
    let task='';
    if(step===0){
      task=p.options.map((o,n)=>'<button class="option" aria-pressed="'+(s.choice===n)+'" data-choice="'+n+'">'+esc(o)+'</button>').join('');
      if(shown)task+='<p role="status">'+esc(p.feedback[s.choice])+'</p>'+evidence;
    }else{
      task=field+'<p>Du kan också svara muntligt.</p>';
      if(!shown)task+=btn('pass-show','Visa resonemanget');
      else task+='<section class="practice"><h2>'+ (step===2?'Exempel på tentasvar':'Jämför ditt resonemang')+'</h2><p>'+esc(step===1?p.explain:step===2?p.model:p.retryModel)+'</p></section>';
    }
    const follow=step===2?'<p>Vad vill du öva på i nästa fall?</p>'+['Välja relevanta fakta','Koppla fakta till lagrum','Motivera slutsatsen'].map((v,n)=>'<button class="option" data-focus="'+n+'">'+v+'</button>').join(''):btn('pass-next',step===3?'Avsluta repetitionen':'Nästa steg','primary');
    const directory=passes.map((v,n)=>link('guidat/'+n,v.title+(read(key(n)).done?' · genomfört':''),'index-row')).join('');
    const focusQs=['Vilken uppgift i det nya fallet vill du kontrollera först?','Hur påverkar uppgiften din tillämpning av '+p.law+'?','Hur skulle du motivera din slutsats för en kurskamrat?'];
    const question=step===3?q+' '+focusQs[s.focus||0]:q;
    main.innerHTML=block(crumb('plan','Studieplan')+'<article class="paper compact">'+tag(s.done?'Genomfört studiepass':step===3?'Repetition':'Steg '+(step+1)+' av 3')+'<h1>'+esc(p.title)+'</h1>'+(s.done?'<p>Du har tränat på att välja fakta, tillämpa regeln och motivera din bedömning.</p>'+btn('pass-repeat','Öppna repetitionsfallet')+' '+btn('pass-restart','Gör grundfallet igen','quiet')+' '+link('lagrumsbank/'+encodeURIComponent('q='+encodeURIComponent(p.law)),'Slå upp '+p.law)+' · '+link('tentamensmotor/vecka/'+p.week,'Testa veckan i tentamensmotorn'): '<p class="lead">'+esc(caseText)+'</p><h2>'+esc(question)+'</h2>'+btn('pass-listen','Lyssna på frågan','quiet')+task+(shown?'<div class="actions">'+follow+'</div>':''))+'</article><details class="source compact"><summary>Välj studiepass</summary>'+directory+'</details>');
    function refresh(patch){reading.stop();write(id,patch);render(i);main.focus();}
    main.querySelectorAll('[data-choice]').forEach(b=>b.onclick=()=>refresh({choice:Number(b.dataset.choice)}));
    main.querySelectorAll('[data-focus]').forEach(b=>b.onclick=()=>refresh({focus:Number(b.dataset.focus),done:true,step:3}));
    const on=(id,fn)=>{const b=main.querySelector('#'+id);if(b)b.onclick=fn;};
    on('pass-listen',()=>reading.speak(caseText+' '+question));
    on('pass-show',()=>refresh({['show'+step]:true}));
    on('pass-next',()=>refresh(step===3?{done:true}:{step:step+1}));
    on('pass-restart',()=>refresh({step:0,done:false,choice:null,show1:false,show2:false}));
    on('pass-repeat',()=>refresh({done:false,step:3,show3:false}));
    const input=main.querySelector('#pass-draft');if(input)input.oninput=()=>write(id,{['draft'+step]:input.value});
  }
  return {hero, render};
};
