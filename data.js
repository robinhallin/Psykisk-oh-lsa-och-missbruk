/* Kursinnehåll för D1PT2U. Övningsfrågorna är skrivna för självstudier. */
const trafficCourse = (() => {
  const moduleRows = [
    {
      id:'uppdrag', title:'Trafiksäkerhetsuppdraget', block:'Förebyggande arbete', goals:['1.1','1.2','2.4','3.1'], icon:'◎',
      intro:'Föräldrar beskriver höga hastigheter vid en skola. Hur tar du reda på vad som händer och om en insats hjälper?',
      sections:[
        ['Från samtal till problembild','Avgränsa plats, tider och vilka som utsätts. Jämför upplevd otrygghet med observationer och mätningar. Om barn främst passerar före klockan åtta kan ett medelvärde över hela dagen dölja problemet.'],
        ['Välj åtgärd och följ upp','Koppla insatsen till den troliga orsaken. Hastighetskontroller kan kombineras med att väghållaren ser över utformningen. Jämför hastigheter och konflikter före och efter vid liknande tider. Antal böter berättar främst hur mycket som upptäcktes.'],
        ['Bemötande och källor','Förklara kontrollens syfte för föraren och låt personen beskriva situationen. I en skriftlig analys kan en boendes upplevelse, en mätning och polisens uppdrag ge tre olika perspektiv. Ange källa för varje uppgift och motivera din slutsats.']
      ], source:['Kursplan D1PT2U','Studiehandledning Trafik Distans','Polismyndigheten · Trafik'],
      questionGoals:["1.1", "1.2", "1.2", "2.4"],
      prompts:[
        ['Vad är Nollvisionens långsiktiga mål?','Ingen ska omkomma eller skadas allvarligt i trafiken.','Antalet utfärdade ordningsböter ska minska varje år.','Alla trafikförseelser ska upptäckas.','Målet gäller följderna för människors liv och hälsa.'],
        ['Vilken jämförelse visar bäst om hastigheterna vid skolan har förändrats?','Mätningar före och efter vid jämförbara tider.','Antal stoppade förare under insatsen.','Antal poliser som deltagit.','Jämför det utfall som insatsen var tänkt att påverka.'],
        ['En boende säger att alla kör för fort. Vilket underlag bör du samla in först?','Var och när det sker samt observationer av hastighet.','Uppgifter om den senast bötfällda föraren i kommunen.','Hur många elever skolan har totalt.','Tid, plats och observationer gör problemet möjligt att undersöka.'],
        ['Vad hjälper en läsare att värdera en slutsats om trafiksäkerhet?','Att mätdata, intervjusvar och egen tolkning går att skilja åt.','Att varje stycke slutar med samma hänvisning.','Att osäkerheter i underlaget utelämnas.','Visa vad varje källa faktiskt bidrar med och hur slutsatsen följer.']
      ]},
    {id:'kontroll',title:'Förar- och fordonskontroll',block:'Kontroll och rapport',goals:['1.4','2.2','3.1'],icon:'▤',
      intro:'Ett fordonsstopp kan ha flera syften. Börja med vilken kontroll du ska göra och vilket stöd just den har.',
      sections:[
        ['Vad gäller kontrollen?','För en personbil kan stopp för kontroll av förare eller fordon ha stöd i 22 § 4 polislagen. Skilj beslutet att stoppa bilen från rättsgrunden för fortsatta åtgärder.'],
        ['Identifiera förare och fordon','Knyt personen till körningen. Jämför behörigheten med det faktiska fordonet. Beskriv en synlig brist, vem som observerade den och hur den kunde konstateras. Kontrollens omfattning och din behörighet har betydelse för rapporteringen.'],
        ['Förklara nästa steg','Säg vad kontrollen avser och ge föraren utrymme att svara. Ett utländskt körkort väcker en fråga om behörighetens giltighet i Sverige. En inre utlänningskontroll kräver en egen prövning enligt utlänningslagen.']
      ],source:['Trafikjuridik 1','Föreläsning om ordningsbot','FAP 261-1','Polislagen 22 §'],
      questionGoals:["1.4", "2.2", "1.4", "2.1"],
      prompts:[
        ['Vilken punkt i PL 22 § gäller ett stopp för föreskriven förar- eller fordonskontroll?','Punkt 4.','Punkt 1 om anledning att anta brott.','Punkt 3 om husrannsakan i fordonet.','Kontrollsyftet omfattas av punkt 4.'],
        ['Föraren visar ett giltigt körkort. Vad återstår att kontrollera när behörigheten är tveksam?','Om behörigheten omfattar just detta fordon och eventuella villkor.','Om föraren äger fordonet.','Om en passagerare har rätt behörighet.','Fordonets kategori och villkoren bestämmer vad föraren får köra.'],
        ['En bil är registrerad utomlands. Hur bedömer du frågan om inre utlänningskontroll?','Pröva om omständigheterna ger självständigt lagstöd för personkontrollen.','Registreringslandet visar i sig att föraren saknar rätt att vistas här.','En rutinmässig fordonskontroll omfattar alltid passagerarnas uppehållsrätt.','Syftet med fordonskontrollen avgör inte om en separat personkontroll får göras.'],
        ['Vilken formulering ger bäst stöd för en senare bedömning av ett fordonsfel?','Vilken lykta som var släckt, när och hur funktionen kontrollerades.','Att bilen såg dåligt underhållen ut.','Att föraren verkade känna till felet.','En konkret iakttagelse går att värdera och återkontrollera.']
      ]},
    {id:'vardsloshet',title:'Trafikregler och vårdslöshet',block:'Trafikjuridik',goals:['1.3','1.4','2.1'],icon:'§',
      intro:'Två bilar kolliderar i en cirkulationsplats. Utred både väjningsplikten och frågan om körningen når upp till ett trafikbrott.',
      sections:[
        ['Hitta handlingsregeln','Den som kör in i en cirkulationsplats ska lämna företräde åt fordonen i cirkulationen. Identifiera först vilken regel som styrde situationen. Sök sedan ansvarsbestämmelsen i trafikförordningens 14 kapitel.'],
        ['Pröva graden av oaktsamhet','För vårdslöshet i trafik krävs en väsentlig brist i omsorg och varsamhet. Beskriv vad föraren kunde se, hastighet, avstånd och tid att reagera. Även en farlig manöver utan kollision kan omfattas.'],
        ['Skada och risk','Pröva eventuell personskada och orsakssamband separat. För grov vårdslöshet krävs förande av motordrivet fordon eller spårvagn och grov oaktsamhet eller uppenbar likgiltighet för andra människors liv eller egendom.']
      ],source:['Trafikjuridik 1','RäV 2023:18','TrF 3 kap. 22 §','TBL 1–2 §§'],
      questionGoals:["1.4", "1.3", "1.3", "1.3"],
      prompts:[
        ['Vem har väjningsplikt när en bil kör in i en cirkulationsplats?','Föraren som kör in, mot fordon som redan befinner sig i cirkulationen.','Föraren som redan befinner sig i cirkulationen.','Den förare som senast såg det andra fordonet.','Handlingsregeln finns i 3 kap. 22 § trafikförordningen.'],
        ['En sammanstötning har inträffat. Vad behöver utredas för TBL 1 § första stycket?','Om trafikanten i väsentlig mån brast i omsorg och varsamhet.','Om båda fordonen fick plåtskador.','Om försäkringsbolaget redan har utsett en vållande.','Utred körsättet och omständigheterna före kollisionen.'],
        ['En förare gör en riskfylld omkörning men ingen krockar. Vad betyder det för TBL 1 §?','Körningen kan ändå uppfylla rekvisiten.','Ansvar kräver minst en sakskada.','Det går enbart att pröva försök till vårdslöshet.','Bedöm risktagandet och aktsamhetsbristen i situationen.'],
        ['Vilket förhållande hör till prövningen av hinder i trafik enligt TBL 2 §?','Om trafiken på väg onödigtvis hindrades eller stördes i väsentlig mån.','Om någon fick en personskada.','Om den hindrande alltid var fordonsägaren.','Bestämmelsen är subsidiär till 1 §. Utred vad störningen faktiskt innebar.']
      ]},
    {id:'behorighet',title:'Olovlig körning och förverkande',block:'Trafikjuridik',goals:['1.3','2.1'],icon:'▣',
      intro:'En förare säger att körkortet gäller och bilen tillhör en vän. Vad behöver du styrka om körningen, behörigheten och bilen?',
      sections:[
        ['Körning och uppsåt','Klargör vem som körde och vilken behörighet fordonet kräver. För olovlig körning enligt 3 § första stycket ska bristen på behörighet täckas av uppsåt. Följ upp förarens uppgift om ett tidigare beslut och när personen fick del av det.'],
        ['Olika ansvar','Åsidosättande av en föreskrift om rätten att köra och tillåtande av olovlig körning regleras särskilt. Tillåtandet kan vara oaktsamt. Ta reda på vem som gav lov, vad personen kände till och vilka kontroller som gjordes.'],
        ['Förverkande','Utred återfall, fortsatt tillgång till fordonet, ägare och värde. Förverkande enligt 7 § TBL har ett förebyggande syfte. Bedöm behov och om förverkande skulle vara uppenbart oskäligt. Ett beslag är en separat tvångsmedelsfråga.']
      ],source:['Trafikjuridik 1 och 2','RäV 2024:3','RäV 2023:4','TBL 3 och 7 §§'],
      questionGoals:["1.3", "1.3", "1.3", "1.3"],
      prompts:[
        ['En förare har glömt sitt körkort hemma men är behörig. Vad innebär det för TBL 3 § första stycket?','Bristande behörighet är inte visad genom det glömda kortet.','Det är automatiskt olovlig körning.','Brottet blir grovt om körkortet är utfärdat utomlands.','Skilj mellan att ha rätt att köra och att kunna visa en handling.'],
        ['Vad behöver täckas av uppsåt vid olovlig körning enligt 3 § första stycket?','Att föraren kör det körkortspliktiga fordonet utan rätt behörighet.','Endast att bilens motor är igång.','Att en olycka sannolikt kommer att inträffa.','Utred vad föraren förstått om sin rätt att köra.'],
        ['Vad gäller för den som lånar ut en bil till en obehörig förare?','Även ett oaktsamt tillåtande kan medföra ansvar.','Endast den registrerade ägaren kan bli ansvarig.','Ansvar kräver att utlånaren också följde med i bilen.','3 § tredje stycket omfattar den som tillåter körningen.'],
        ['Vad vill du särskilt belysa inför en prövning enligt 7 § TBL?','Risken för fortsatt trafikbrottslighet och om förverkandet vore uppenbart oskäligt.','Om bilen kan användas av polisen efter ett beslag.','Om föraren vägrar att godkänna ordningsbot.','Dokumentera bland annat tidigare gärningar, vem som äger bilen och dess värde.']
      ]},
    {id:'nykterhet',title:'Rattfylleri och bevisning',block:'Trafikjuridik',goals:['1.3','1.4','2.1'],icon:'◉',
      intro:'Ett sållningsprov ger utslag efter ett stopp. Knyt provresultatet till rätt förare, färd och tidpunkt.',
      sections:[
        ['Sållning och bevisning','Ett sållningsprov kan tas på en personbilsförare vid rutinkontroll enligt 2 § lagen om alkoholutandningsprov. Ett positivt utslag ger anledning till vidare utredning. Skilj utslaget från ett kvantitativt bevisprov.'],
        ['Halt, påverkan och ordination','För en personbilsförare är straffbarhetsgränsen 0,2 promille i blod eller 0,10 mg/l i utandningsluft. Narkotika i blodet regleras särskilt. Följd medicinsk ordination undantar från just nollgränsregeln. Faktisk påverkan som äventyrar säker körning kan ändå medföra ansvar.'],
        ['Bedöm hela färden','Vid gradindelningen väger bland annat hög halt, avsevärd påverkan och påtaglig trafikfara. Vid påstående om alkohol efter färden behöver tidslinjen prövas. Vem såg körningen, när slutade den och när intogs alkoholen?']
      ],source:['Trafikjuridik 2','TBL 4 och 4 a §§','Lag om alkoholutandningsprov'],
      questionGoals:["1.3", "1.4", "1.3", "2.1"],
      prompts:[
        ['Vilka två värden är de nedre alkoholgränserna för rattfylleri vid personbilskörning?','0,2 promille i blod eller 0,10 mg/l i utandningsluft.','0,10 promille i blod eller 0,2 mg/l i utandningsluft.','1,0 promille i blod eller 0,50 mg/l i utandningsluft.','Håll isär enheterna. De högre värdena är en omständighet vid bedömningen av grovt brott.'],
        ['Vad visar ett positivt sållningsprov?','Ett utslag som behöver följas upp för att säkra bevisning.','Den exakta alkoholhalten under hela färden.','Att brottet är grovt.','Dokumentera vem som provtogs och när. Skilj sållning från bevisprov.'],
        ['Föraren har följt ordinationen av ett narkotikaklassat läkemedel. Vilken fråga kan fortfarande bli aktuell?','Om faktisk påverkan gjorde att bilen inte kunde framföras betryggande.','Om varje narkotikafynd automatiskt räcker för nollgränsansvar.','Om läkemedlets pris påverkar rubriceringen.','Undantaget vid följd ordination gäller nollgränsregeln i 4 § andra stycket.'],
        ['En förare uppger alkoholintag först efter färden. Vilken uppgift är mest användbar?','Vittnesuppgifter om tider för körning och intag i förhållande till provtagningen.','Att bilen är registrerad på den provtagne.','Enbart vilken dryck föraren föredrar.','Tidslinjen behövs för att bedöma om intaget kan kopplas till körningen.']
      ]},
    {id:'ordningsbot',title:'Ordningsbot och rapportering',block:'Kontroll och rapport',goals:['1.4','2.1'],icon:'≡',
      intro:'Du har sett en överträdelse. Kontrollera ansvarig person och välj rätt sätt att rapportera den.',
      sections:[
        ['Från regel till ansvar','Identifiera gärningen och vem ansvarsbestämmelsen riktar sig till. Förarbeteende och fordonsbrist kan kräva olika utredning. Slå upp gärningen i de aktuella föreskrifterna om ordningsbot.'],
        ['Innan föreläggandet','Identiteten ska vara styrkt. Kontrollera förutsättningarna i RB 48 kap., bland annat om den misstänkte förnekar gärningen och vilka andra brott som föreligger till bedömning. Dokumentera konkreta omständigheter.'],
        ['Bemötande och verkan','Gå igenom gärning och belopp, förklara vad godkännandet innebär och ge utrymme för frågor. Ett godkänt föreläggande gäller som en lagakraftvunnen dom. Vid förnekande får ordningsbot inte utfärdas.']
      ],source:['Föreläsning om ordningsbot','PMFS 2020:9 · FAP 261-1','RB 48 kap.'],
      questionGoals:["2.1", "1.4", "1.4", "2.1"],
      prompts:[
        ['Föraren förnekar den påstådda överträdelsen. Hur påverkar det ordningsboten?','Ordningsbot får inte utfärdas. Dokumentera och rapportera gärningen när den ska rapporteras.','Ordningsbot får utfärdas om en kollega har sett samma sak.','Förnekandet saknar betydelse om identiteten är styrkt.','RB 48 kap. 15 § reglerar hinder mot att utfärda ordningsbot.'],
        ['Vad ska framgå om identiteten när ordningsbot utfärdas?','Hur den misstänktes identitet styrkts.','Endast vilket namn föraren själv angett.','Vem som äger bilen även om föraren är okänd.','FAP 261-1, 3 §, anger både kravet på styrkt identitet och dokumentationen.'],
        ['Vad får ett godkänt föreläggande för verkan?','Det gäller som en lagakraftvunnen dom.','Det är en kallelse till ett kommande förhör.','Det behöver i varje fall fastställas av domstol.','Förklara rättsverkan innan personen tar ställning.'],
        ['Vilken uppgift är särskilt viktig när en fordonsbrist rapporteras?','Vilken bestämmelse som pekar ut den ansvarige och vilka iakttagelser som stöder ansvaret.','Att automatiskt välja den registrerade ägaren.','Att ange vanligaste bötesbeloppet utan att identifiera gärningen.','Bedöm förar- och ägaransvar mot den aktuella bestämmelsen.']
      ]},
    {id:'olycka',title:'Trafikolycka och avrapportering',block:'Olycksplatsen',goals:['2.3','2.1'],icon:'◇',
      intro:'Två fordon står kvar efter en kollision. Personer rör sig nära trafiken och vittnen är på väg därifrån.',
      sections:[
        ['Bilda en lägesbild','Identifiera plats, trafikflöde, möjliga skadade och behov av hjälp. Kommunicera vad du faktiskt ser. Prioritera säkerhet och hjälpbehov när fortsatt trafik innebär omedelbar fara.'],
        ['Återskapa händelseförloppet','Ta kontaktuppgifter till vittnen. Skilj deras egna iakttagelser från sådant de hört efteråt. Dokumentera fordonens lägen, skador, skyltning, sikt och väglag. Knyt bilder och skiss till riktningar och fasta punkter.'],
        ['Om någon lämnar platsen','Utred vem som haft del i olyckan, vad personen uppfattat och vilka skyldigheter personen kan ha undandragit sig. Även en trafikant som var utan skuld till kollisionen kan omfattas. Håll isär orsaken till olyckan och beteendet efteråt.']
      ],source:['Hantera trafikolycka','Trafikjuridik 2','TrF 2 kap. 8 §','TBL 5 §'],
      questionGoals:["2.3", "2.3", "1.3", "2.3"],
      prompts:[
        ['Två bilar har krockat och människor står utsatta för förbipasserande trafik. Vad behöver prioriteras?','Säkerhet, hjälpbehov och en tidig lägesbild.','Detaljförhör om vållande innan någon flyttar sig.','En färdig olycksskiss innan hjälp begärs.','Hantera den omedelbara faran och kommunicera behov av resurser.'],
        ['En förare säger att den andre hade rött. Vad behöver du klargöra?','Vad föraren själv kunde se av signal, plats och körriktning.','Vilken förare som först lämnade en skriftlig version.','Vilken bil som fick dyrast skador.','Observationens förutsättningar påverkar hur utsagan kan värderas.'],
        ['Kan någon omfattas av TBL 5 § även om den andra föraren orsakade olyckan?','Ja, även en trafikant utan skuld kan ha haft del i olyckans uppkomst.','Nej, bara den som vållade olyckan omfattas.','Ja, men bara om personen äger bilen.','Pröva delaktighet och vilken skyldighet personen undandrog sig.'],
        ['Vilket underlag gör olycksskissen lättast att tolka i efterhand?','Fasta referenspunkter, färdriktningar och tydliga fordonspositioner.','Enbart förarnas namn.','Enbart foton av registreringsskyltarna.','Läsaren ska kunna förstå platsen och jämföra skissen med foton och förhör.']
      ]}
  ];
  const sources = [
    'Kursplan D1PT2U, revision 9.0 · Högskolan i Borås',
    'Studiehandledning Trafik Distans · Högskolan i Borås',
    'Trafikjuridik 1 och 2 · föreläsningsbilder',
    'Föreläsning om ordningsbot · föreläsningsbilder',
    'Hantera trafikolycka · föreläsningsbilder',
    'Åklagarmyndigheten · RäV 2023:18, vårdslöshet i trafik och trafikrelaterade vållandebrott',
    'Åklagarmyndigheten · RäV 2024:3, olovlig körning',
    'Åklagarmyndigheten · RäV 2023:4, förverkande enligt 7 § trafikbrottslagen'
  ];
  const links = [
    ['Trafikbrottslagen','https://data.riksdagen.se/dokument/sfs-1951-649.html'],
    ['Trafikförordningen','https://data.riksdagen.se/dokument/sfs-1998-1276.html'],
    ['Polislagen','https://data.riksdagen.se/dokument/sfs-1984-387.html'],
    ['Rättegångsbalken','https://data.riksdagen.se/dokument/sfs-1942-740.html'],
    ['Lag om alkoholutandningsprov','https://data.riksdagen.se/dokument/sfs-1976-1090.html'],
    ['Utlänningslagen','https://data.riksdagen.se/dokument/sfs-2005-716.html'],
    ['FAP 261-1 · ordningsbot','https://polisen.se/siteassets/forfattningssamling/fap-nummer/fap261-01-pmfs2020-09/'],
    ['Polisens arbete i trafiken','https://polisen.se/om-polisen/polisens-arbete/trafikbrott/'],
    ['Riksåklagarens ordningsbotsföreskrifter','https://data.riksdagen.se/dokument/sfs-2024-1084.html']
  ];
  const goalRows = [
    ['1.1','Polisens uppdrag i den nationella trafiksäkerhetsstrategin','Förklara Nollvisionen och ge ett exempel på hur kontroller kan förebygga allvarliga skador.'],
    ['1.2','Problemorienterat polisarbete i trafikmiljö','Beskriv ett lokalt trafikproblem, välj en åtgärd och förklara hur effekten kan följas upp.'],
    ['1.3','Trafikbrottslagen','Tillämpa rekvisiten på ett fall och beskriv vilken bevisning som saknas.'],
    ['1.4','Trafikförfattningar som styr polisens arbete','Hitta handlingsregel, ansvarsbestämmelse och rättsligt stöd för en kontroll.'],
    ['2.1','Identifiera och rapportera trafikbrott rättssäkert','Motivera när en överträdelse kan hanteras med ordningsbot och när en annan rapportering krävs.'],
    ['2.2','Säkra och korrekta förar- och fordonskontroller','Motivera syftet med kontrollen och vad du behöver klarlägga om person och fordon.'],
    ['2.3','Korrekta åtgärder vid en trafikolycka','Prioritera insatsen och beskriv hur du dokumenterar händelseförloppet.'],
    ['2.4','Skriva och bearbeta en text med vetenskapliga källhänvisningar','Belys en trafikfråga ur flera perspektiv och visa vad varje källa stöder.'],
    ['3.1','Bemötande och polisens roll i trafiken','Beskriv hur patrullens ordval och agerande kan påverka mötet vid en kontroll.']
  ];
  const learningGoals = goalRows.map(([id,goal,point])=>({
    id,goal, concrete:[point], sources:[sources[0]], routes:moduleRows.filter(m=>m.goals.includes(id)).map(m=>({route:'module/'+m.id,label:m.title})),
    group:({'1':'Kunskap & förståelse','2':'Färdighet & förmåga','3':'Värderingsförmåga & förhållningssätt'})[id[0]],
    examined:[...(['1.3','1.4','2.1','2.3'].includes(id)?['Salstentamen']:[]),...(['1.1','1.2','2.1','2.2','2.4','3.1'].includes(id)?['Basgruppsuppgift']:[])]
  }));
  const lawRows = [
    ['TBL 1 §','Vårdslöshet i trafik','Bedöm körsätt, trafikmiljö och risk. Graden av oaktsamhet har betydelse.',0],
    ['TBL 2 §','Hinder i trafik','Utred hur trafik på väg onödigtvis störts eller hindrats i väsentlig mån.',0],
    ['TBL 3 §','Olovlig körning','Skilj obehörig körning, åsidosatta villkor och tillåtande åt.',0],
    ['TBL 4 och 4 a §§','Rattfylleri och grovt rattfylleri','Identifiera vilken grund misstanken vilar på och vilka omständigheter som påverkar graden.',0],
    ['TBL 5 §','Obehörigt avvikande från trafikolycksplats','Utred delaktighet i olyckan och skyldigheterna efteråt.',0],
    ['TBL 7 §','Förverkande','Belys behovet att förebygga fortsatt trafikbrottslighet samt skäligheten.',0],
    ['TrF 2 kap. 8 §','Skyldigheter vid trafikolycka','Stanna kvar, hjälp skadade efter förmåga och medverka till rimliga åtgärder.',1],
    ['TrF 3 kap. 22 §','Cirkulationsplats','Infart innebär väjningsplikt mot fordon i cirkulationen.',1],
    ['PL 22 § 4','Stoppa fordon för kontroll','Bestämmelsen omfattar bland annat föreskriven kontroll av förare eller fordon.',2],
    ['RB 48 kap. 3, 13 och 15 §§','Ordningsbot','Pröva brottstypen och eventuella hinder. Ett godkänt föreläggande har samma verkan som en lagakraftvunnen dom.',3],
    ['LAU 1–2 §§','Alkoholutandningsprov','Skilj prov vid misstanke från rutinmässigt sållningsprov på en personbilsförare.',4],
    ['FAP 261-1, 3 och 5 §§','Identitet och fordonsbrister','Styrk identiteten och bedöm vilka brister som får ligga till grund för föreläggandet.',6]
  ];
  const laws=lawRows.map(([ref,title,text,source])=>({ref,title,text,cat:links[source][0],url:links[source][1]}));
  const modules=[], quiz=[], flashcards=[], moduleLessons={}, topicMeta={};
  moduleRows.forEach((m,i)=>{
    const qs=m.prompts.map(([q,right,b,c,e],j)=>{
      const pos=(i+2*j)%3, a=[b,c]; a.splice(pos,0,right);
      return {q,a,c:pos,e,topic:m.title,source:m.source.join(' · '),goal:m.questionGoals[j],origin:j===2?'situation':'course'};
    });
    quiz.push(...qs);
    qs.forEach(q=>flashcards.push([q.q,q.a[q.c]+' '+q.e,m.title]));
    topicMeta[m.title]={label:m.title,source:m.source.join(' · ')};
    const points=m.goals.map(id=>learningGoals.find(g=>g.id===id).concrete[0]);
    modules.push({...m,goals:points,order:i+1,level:'Självstudier',accent:'#36766a',tags:m.source.slice(0,2),sections:m.sections.map(([h,p])=>({h,p})),memory:qs[1].e});
    moduleLessons[m.id]={block:m.block,learningGoals:m.goals,primaryGoal:m.goals[0],quizTopics:[m.title],testSize:qs.length,quickChecks:[{...qs[0],after:0}],policeLens:[qs[2].e],caseId:({olycka:'kollision',vardsloshet:'kollision',ordningsbot:'balte',nykterhet:'kvall',behorighet:'lanebil',kontroll:'lanebil'})[m.id]};
  });
  const multipleChoice = [
    {id:'nykterhet',q:'Vilka två omständigheter ska särskilt beaktas vid bedömningen av grovt rattfylleri?',a:['Avsevärd påverkan.','Att föraren kör en lånad bil.','En körning som inneburit påtaglig fara för trafiksäkerheten.','Att fordonet varit registrerat kortare tid än ett år.'],c:[0,2],e:'TBL 4 a § tar upp hög alkoholkoncentration, avsevärd påverkan och påtaglig trafikfara.'},
    {id:'olycka',q:'Vilka två uppgifter hjälper mest när du ska värdera vad ett vittne faktiskt kunnat iaktta?',a:['Vittnets försäkringsbolag.','Var vittnet stod i förhållande till olyckan.','Vilken firma som bärgade bilen.','Om något skymde sikten.'],c:[1,3],e:'Position och fri sikt hjälper läsaren att bedöma observationsmöjligheten.'}
  ];
  for (const item of multipleChoice) {
    const m=modules.find(m=>m.id===item.id);
    quiz.push({...item,topic:m.title,source:m.source.join(' · '),goal:moduleLessons[m.id].primaryGoal,origin:'situation'});
    moduleLessons[m.id].testSize++;
  }
  function makeCase(id,title,topic,scenario,facts,steps,takeaway){
    const m=moduleRows.find(x=>x.id===topic);
    return {id,title,topic:m.title,scenario,facts,difficulty:m.block,source:m.source,takeaway,
      steps:steps.map(([phase,prompt,right,wrong,why],index)=>{
        const choices=[{t:right,ok:true,why},{t:wrong,ok:false,why}];
        if(index%2===0)choices.reverse();
        return {phase,prompt,choices};
      })};
  }
  const caseScenarios=[
    makeCase('kollision','Kollision i cirkulationsplatsen','olycka','En skåpbil och en personbil har kolliderat. En av förarna står i körbanan. Ett vittne har stannat vid en busshållplats.',['Rusningstrafik','Okänt skadeläge'],[
      ['Ankomst','Vad behöver patrullen bedöma först?','Omedelbar fara, skadeläge och resursbehov.','Vilken förare som ska rapporteras.','Den fortsatta trafiken och det okända skadeläget styr prioriteringen.'],
      ['Utredning','Platsen är nu säkrad. Vad frågar du vittnet?','Var stod du och vad såg du av infarten och fordonens rörelser?','Visst var det skåpbilen som körde vårdslöst?','En öppen fråga kan ge både händelseförlopp och förutsättningarna för iakttagelsen.'],
      ['Bedömning','Vittnet beskriver ett väjningsfel. Räcker det för vårdslöshet?','Utred sikt, fart och reaktionstid innan du bedömer graden av oaktsamhet.','Ja, eftersom båda bilarna skadades.','Väjningsplikten och väsentlig aktsamhetsbrist är två olika frågor.']
    ],'Dokumentera varför en trafikregel är tillämplig och vad som talar för respektive emot en allvarligare brist.'),
    makeCase('kvall','Föraren vid den parkerade bilen','nykterhet','Ett vittne berättar att en bil körts in på en parkering. En person står utanför bilen och säger att hen druckit först efter parkeringen.',['Omstridd tidpunkt','Vittne på plats'],[
      ['Förarfrågan','Vilken uppgift vill du först få från vittnet?','Vem vittnet såg köra, när och från vilken position.','Vem som brukar äga bilnycklarna.','Vittnets egna iakttagelser kan knyta en person till färden.'],
      ['Tidslinje','Vilken följdfråga testar förarens uppgift?','När avslutades färden och när, vad och hur mycket drack du?','Varför erkänner du inte rattfylleri?','Konkreta tidpunkter och mängder gör berättelsen möjlig att kontrollera.'],
      ['Avrapportering','Vad behöver framgå i rapporten?','Källan till varje tidsuppgift samt vad som är osäkert.','En sammanfogad berättelse där motstridiga tider tagits bort.','En läsare måste kunna skilja observation, utsaga och slutsats.']
    ],'Knyt varje uppgift om förare, körning och intag till en tid och en källa.'),
    makeCase('balte','Bältet vid trafikljuset','ordningsbot','Du står vid ett trafikljus och ser vad du uppfattar som en bilförare utan bälte. Föraren säger att bältet togs av först efter stoppet.',['Personbil','Föraren förnekar'],[
      ['Iakttagelse','Vilken del av din iakttagelse behöver förtydligas?','Vad som syntes under färden och när bältet observerades.','Om föraren var irriterad när bilen stod still.','Tidpunkten för iakttagelsen har betydelse för gärningen.'],
      ['Rapport','Kan du utfärda ordningsbot om föraren förnekar gärningen?','Nej. Dokumentera invändningen och rapportera på annat sätt om gärningen ska rapporteras.','Ja, under förutsättning att identiteten är styrkt.','Förnekande är ett hinder enligt RB 48 kap. 15 §.'],
      ['Bemötande','Hur förklarar du fortsatt handläggning?','Beskriv vad du observerat, hur invändningen dokumenteras och vad nästa steg innebär.','Säg att förnekandet i sig visar att föraren är skyldig.','Ett sakligt besked hjälper föraren att förstå förfarandet och gör invändningen tydlig.']
    ],'Förarens invändning ska kunna följas från samtalet till rapporteringen.'),
    makeCase('lanebil','Lånebilen på riksvägen','behorighet','Föraren uppger att ett återkallat körkort blivit giltigt igen. Bilen lånades av en vän samma morgon.',['Lånat fordon','Omstridd behörighet'],[
      ['Behörighet','Vad behöver klarläggas först?','Vilken behörighet som gällde vid färden och vad föraren kände till.','Om föraren verkade van vid bilen.','Utred både den faktiska rätten att köra och uppsåtet.'],
      ['Utlåning','Vilken uppgift är relevant för tillåtande?','Vad vännen visste eller hade anledning att kontrollera när bilen lånades ut.','Enbart vilken adress bilen är registrerad på.','Utred vem som tillät körningen och om detta skedde uppsåtligen eller oaktsamt.'],
      ['Fordonet','Vad behöver belysas innan förverkande kan bedömas?','Återfallsrisk, ägarförhållanden, fordonets värde och övriga skälighetsomständigheter.','Endast att bilen var på plats när föraren stoppades.','Behov och skälighet bedöms separat från om föraren begått brott.']
    ],'Håll isär förarens ansvar, utlånarens ansvar och frågan om fordonet.')
  ];
  const tracks = [
    {
      id:'salstenta', title:'Inför salstentan', meta:'Individuell skriftlig tentamen · 3,5 hp',
      intro:'Två personbilar har kolliderat i en cirkulationsplats. Följ ärendet från patrullens första lägesbild till bedömningen av vad som går att rapportera.',
      lessons:[
        {id:'ankomst',title:'Prioritera på olycksplatsen',goal:'2.3',module:'olycka',
         scene:'Vid ankomst står en förare i körbanan. Den andra sitter kvar i bilen. En förbipasserande vill berätta vem som körde först.',
         example:'Jag ser att trafiken fortfarande passerar föraren i körbanan. Patrullen behöver först bedöma faran, hjälpbehovet och vilka resurser som behövs. En tidig lägesrapport ska skilja det vi kan se från det som ännu är okänt. När läget medger det tar vi vittnets kontaktuppgifter.',
         change:'Båda förarna är nu på en skyddad plats och ambulansen tar hand om den ena. Vittnet ska gå till bussen om en minut.',
         ask:'Vad prioriterar du nu, vad frågar du vittnet och vad kan vänta?',
         hint:'Vilken information riskerar att försvinna när bussen kommer?',
         compare:['Ta kontaktuppgifter medan vittnet finns kvar och klarlägg kort vad personen själv såg.','Fråga var vittnet stod och om något skymde sikten. Det påverkar hur uppgifterna kan värderas.','Planera för ett utförligare förhör. Dokumentera fordonslägen, skador och platsförhållanden när situationen medger det.'],
         source:'Hantera trafikolycka, bild 3, 6–9 och 16–22.'},
        {id:'regel',title:'Hitta rätt trafikregel',goal:'1.4',module:'vardsloshet',
         scene:'Föraren av den grå bilen uppger att den blå bilen körde in framför henne. Du har sett slutpositionerna men inte själva kollisionen.',
         example:'Jag behöver veta om den grå bilen redan befann sig i cirkulationen när den blå körde in. Då kan jag koppla en bestämd rörelse till väjningsplikten i 3 kap. 22 § trafikförordningen. Därefter söker jag stöd för straffansvaret i 14 kap.',
         change:'Det visar sig att båda bilarna redan var inne i cirkulationen. Sammanstötningen kan ha skett när den blå bilen bytte körfält.',
         ask:'Vad ändras i din bedömning? Ange vilken rörelse och vilka iakttagelser du behöver utreda.',
         hint:'Gäller bestämmelsen du nyss läste en infart eller ett körfältsbyte?',
         compare:['Båda fordonen var redan inne. Infartsregeln besvarar därför inte frågan om körfältsbytet.','Utred fordonens placering, avstånd och rörelser före kontakten. Fråga vad vittnet såg av själva förflyttningen i sidled.','Pröva regeln om ändrad placering i sidled i 3 kap. 43 § TrF och sök därefter tillämplig ansvarsbestämmelse.'],
         source:'Trafikjuridik 1, bild 5–6. Trafikförordningen, 3 kap. 22 och 43 §§ samt 14 kap.',link:1},
        {id:'rekvisit',title:'Pröva vårdslöshet i trafik',goal:'1.3',module:'vardsloshet',
         scene:'Den blå bilen har en skadad framskärm. Föraren säger att hon såg den andra bilen först vid kollisionen.',
         example:'Skadan visar att fordonen kommit i kontakt. För att pröva 1 § TBL behöver jag däremot veta hur körningen gick till. Sikt, fart och tid att reagera hjälper mig att bedöma om bristen i omsorg och varsamhet var väsentlig.',
         change:'Tänk dig samma körfältsbyte utan kollision. Ett vittne såg den andra föraren bromsa kraftigt. Vittnet är osäkert på avståndet.',
         ask:'Kan 1 § TBL fortfarande aktualiseras? Vad talar för en risk och vad är fortfarande oklart?',
         hint:'Pröva tre frågor. Hur körde föraren? Vilken risk uppstod? Vad stöder uppgifterna?',
         compare:['En fysisk skada krävs inte för vårdslöshet i trafik. Det är körsättet som ska bedömas.','Inbromsningen är en konkret uppgift om risk. Utred när den skedde och om körfältsbytet orsakade den.','Osäkert avstånd och okänd hastighet begränsar slutsatsen. Förklara vad som behöver klarläggas innan du bedömer graden av oaktsamhet.'],
         source:'Trafikjuridik 1, bild 23–29. RäV 2023:18. Trafikbrottslagen, 1 §.',link:0},
        {id:'rapport',title:'Välj rapporteringsväg',goal:'2.1',module:'ordningsbot',
         scene:'En kollega vill utfärda ordningsbot för en överträdelse av trafikförordningen. Föraren invänder att hon hela tiden låg kvar i sitt körfält.',
         example:'Jag klarlägger om föraren faktiskt förnekar gärningen. Vid förnekande får ordningsbot inte utfärdas enligt 48 kap. 15 § RB. När gärningen ska rapporteras måste både grunden för misstanken och förarens invändning kunna följas i rapporteringen.',
         change:'I en annan kontroll säger föraren att bältet togs av först när bilen stod still. Kollegan såg bältet hänga löst efter stoppet.',
         ask:'Skilj kollegans observation från förarens uppgift. Vad saknas för att styrka gärningen under färd?',
         hint:'Pröva först vad som är styrkt. Ta därefter ställning till hur gärningen kan handläggas.',
         compare:['Kollegans observation gäller den stillastående bilen. Den visar inte i sig hur bältet användes under färd.','Förarens förklaring ska framgå som en utsaga. Fråga om någon faktiskt såg bältet under körningen och från vilken plats.','Om gärningen förnekas finns hinder mot ordningsbot. Bedöm den samlade utredningen innan du tar ställning till fortsatt rapportering.'],
         source:'Föreläsning om ordningsbot, bild 5, 16, 18 och 20–22. RB 48 kap. 15 §.',link:3}
      ]
    },
    {
      id:'basgrupp',title:'Inför basgruppsuppgiften',meta:'Skriftlig inlämningsuppgift · 3 hp',
      intro:'Vid en skola beskriver föräldrar att barn har svårt att korsa vägen. Använd det fiktiva fallet för att öva analys, bemötande och källvärdering tillsammans.',
      lessons:[
        {id:'problem',title:'Från oro till undersökningsfråga',goal:'1.1',also:['1.2'],module:'uppdrag',
         scene:'Skolan uppger att bilar kör för fort när eleverna kommer på morgonen. Kommunens senaste mätning gäller hela dygnet.',
         example:'Polisens trafiksäkerhetsarbete syftar till att färre människor dödas eller skadas allvarligt. För att välja insats behöver jag veta när och var barn möter trafiken. Ett dygnsmedel kan dölja vad som händer under de tjugo minuter då flest barn passerar.',
         change:'Observationer visar att de flesta håller hastighetsgränsen. Däremot skymmer parkerade bilar sikten nära övergångsstället vid lämning.',
         ask:'Hur förändras din problembild? Föreslå en åtgärd och ett sätt att följa upp om situationen blir säkrare.',
         hint:'Försök koppla ihop en möjlig orsak, en aktör som kan påverka den och något som går att observera.',
         compare:['Avgränsa problemet till skymd sikt på den aktuella platsen och tiden. Beskriv hur det påverkar barnen.','Diskutera exempelvis lämningsplatsens placering med skola och väghållare. Motivera varför det kan förbättra sikten.','Följ upp sikt och konflikter mellan gående och fordon vid jämförbara tider före och efter.'],
         source:'Kursplan D1PT2U, mål 1.1 och 1.2. Polismyndigheten, Trafik.',link:7},
        {id:'mote',title:'Planera kontrollen och samtalet',goal:'2.2',also:['3.1'],module:'kontroll',
         scene:'Patrullen planerar en förarkontroll nära skolan. Där den först tänkt stanna fordon rör sig barn mellan parkerade bilar.',
         example:'Jag väljer en plats där det finns förutsättningar att genomföra kontrollen säkert. Jag behöver kunna förklara både kontrollens syfte och stödet för stoppet. När jag möter föraren säger jag vad kontrollen gäller och vad jag ber personen göra.',
         change:'Föraren uppfattar stoppet som en anklagelse och säger att barnen blir sena. Trafiken köar bakom bilen.',
         ask:'Vad behöver patrullen ompröva på platsen? Skriv sedan de två första meningarna du själv skulle säga till föraren.',
         hint:'Ta med både den förändrade trafikmiljön och förarens möjlighet att förstå vad som händer.',
         compare:['Ompröva platsens säkerhet för barnen, föraren och patrullen när kön förändrar trafikmiljön.','Ett möjligt bemötande är ”Jag hör att ni har bråttom. Vi gör en förarkontroll här och jag vill börja med att kontrollera ditt körkort.”','Reflektera över tonläge och tydlighet. Föraren ska kunna förstå skälet till kontrollen och komma till tals.'],
         source:'Studiehandledning Trafik Distans. Kursplan D1PT2U, mål 2.2 och 3.1. Polislagen, 22 §.',link:2},
        {id:'underlag',title:'Skilj iakttagelse från slutsats',goal:'2.1',module:'ordningsbot',
         scene:'En förälder säger att en förare tittade på mobilen. När patrullen kom fram höll föraren mobilen i en parkerad bil.',
         example:'I underlaget anger jag vem som har sett vad och när. Förälderns utsaga om körningen och patrullens senare observation gäller olika tidpunkter. Innan jag kan bedöma gärningen behöver jag fler uppgifter om själva färden.',
         change:'Föräldern förtydligar att hon bara sett skärmen lysa genom rutan. Föraren säger att bilen stod still när telefonen togs upp.',
         ask:'Vilka två följdfrågor skulle göra störst skillnad för utredningen? Förklara varför.',
         hint:'Både rörelsen och hanteringen av föremålet är oklara.',
         compare:['Fråga hur vittnet kunde se om bilen rörde sig och när skärmen syntes i förhållande till detta.','Fråga vad vittnet faktiskt såg av förarens händer och telefonen samt var vittnet stod.','Håll isär osäkra och säkra uppgifter när du bedömer om det finns stöd för en gärning och för aktuell rapporteringsväg.'],
         source:'Trafikjuridik 1. Föreläsning om ordningsbot, bild 16–22.'},
        {id:'kallor',title:'Värdera källorna och effekten',goal:'2.4',also:['1.2','3.1'],module:'uppdrag',
         scene:'I övningsfallet registrerades 8 konflikter under 200 passager före en åtgärd. Efteråt registrerades 6 konflikter under 100 passager. En förälder säger att det känns lugnare.',
         example:'Antalet konflikter har minskat från åtta till sex, men antalet passager har också ändrats. Före åtgärden registrerades fyra konflikter per hundra passager. Efteråt var det sex. Förälderns utsaga beskriver upplevd trygghet och tillför ett annat perspektiv.',
         change:'Du får veta att förmätningen gjordes en vanlig måndag och eftermätningen under en friluftsdag.',
         ask:'Vilken slutsats håller nu? Ange vad som bygger på observation, vad som är upplevelse och vad som behöver undersökas igen.',
         hint:'Skilj mellan vad materialet visar och vilken förklaring materialet bär.',
         compare:['Redovisa antal och nämnare. Mätningarna avser olika förhållanden och räcker inte för att tillskriva åtgärden en effekt.','Tillskriv föräldern upplevelsen och mätningen observationerna. Håll din egen tolkning tydligt urskiljbar.','Föreslå jämförbara tider och samma observationsmetod. Hänvisa till varje underlag där uppgiften används.'],
         source:'Kursplan D1PT2U, mål 1.2, 2.4 och 3.1. Siffrorna är konstruerade för övningen.'}
      ]
    }
  ];
  return {tracks,course:{code:'D1PT2U'},modules,moduleLessons,quiz,flashcards,topicMeta,learningGoals,laws,caseScenarios,sources,links};
})();
window.STUDY_DATA=trafficCourse;
