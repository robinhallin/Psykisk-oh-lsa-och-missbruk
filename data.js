/* Kursinnehållet är sammanfattat och pedagogiskt omarbetat från de uppladdade kursdokumenten.
   Lagrumsuppgifter återges i den form de behandlas i kursmaterialet. */
window.STUDY_DATA = {
  course: {
    title: "Polisiärt arbete vid psykisk ohälsa och sjukdom samt missbruk",
    code: "D2PM1U · 9 hp · HT26 distans",
    disclaimer: "Studiehjälp – inte operativt beslutsstöd. Kontrollera alltid aktuell lagtext, föreskrifter och lokala rutiner vid skarp tillämpning."
  },
  modules: [
    {
      id:"intro", order:1, icon:"◎", accent:"#62ad9a", title:"Psykisk ohälsa – grunden", time:"18 min", level:"Bas",
      tags:["psykiatri","samsjuklighet","HSL","SoL"],
      source:["PPT Introföreläsning.pdf","Distans HT26 Studiehandledning.pdf"],
      intro:"Börja med kursens karta: vad räknas som psykisk ohälsa, när blir ett tillstånd ett problem och vilka samhällsaktörer möter personen?",
      goals:["Skilja psykisk ohälsa från psykiatrisk diagnos i kursens framing","Förstå specialistpsykiatrins roll","Känna igen HSL, SoL och tvångslagarna i systemet"],
      sections:[
        {h:"Kursens polisiära fokus",p:"Kursen kopplar psykisk ohälsa, psykiatriska sjukdomar och missbruk till professionella och säkra polisiära möten. Centrala områden är psykos, personlighetssyndrom, neuropsykiatriska tillstånd, affektiva syndrom, beroende, suicidologi, dialog, narkotikaingripanden, vardagsförhandling och dödsfall."},
        {h:"När blir något 'sjukt'?",p:"Introduktionsmaterialet betonar funktionsförlust och lidande. Upplevelser och beteenden måste förstås i sitt sammanhang; avvikelse i sig är inte samma sak som sjukdom."},
        {h:"Samsjuklighet",p:"Psykisk sjukdom och missbruk kan förekomma samtidigt. Det påverkar både bedömning, riskbild och vilken aktör som behöver ta vid. Kursen återkommer därför till samverkan mellan sjukvård, socialtjänst och polis."},
        {h:"Lagarnas grundstruktur",bullets:["HSL reglerar hur hälso- och sjukvård organiseras och bedrivs.","SoL reglerar socialtjänstens uppdrag och utgår från självbestämmande och integritet.","LPT, LRV och LVM är centrala tvångslagar i kursen.","LVU nämns som tvångslag för barn och unga men behandlas huvudsakligen i nästa kurs."]}
      ],
      memory:"Tänk tre nivåer: frivillig vård/stöd → särskild tvångslag → polisens roll och befogenhet i just den situationen."
    },
    {
      id:"affektiva", order:2, icon:"↕", accent:"#b6765a", title:"Depression & bipolär sjukdom", time:"28 min", level:"Kärna",
      tags:["depression","mani","bipolär","suicidrisk","bemötande"], source:["Föreläsning Affektiva HT26.pdf"],
      intro:"Affektiva syndrom handlar om förändringar i stämningsläget. För polis är både symtombild, suicidrisk och anpassat bemötande centralt.",
      goals:["Känna igen depressiva symtom","Känna igen mani/förhöjt stämningsläge","Koppla symtom till bemötande och suicidrisk"],
      sections:[
        {h:"Egentlig depression",p:"Materialet skiljer lindrig, måttlig och svår depression och nämner även bland annat melankoli, dystymi, årstidsbunden, substansutlöst och postpartumdepression."},
        {h:"Vanliga depressiva symtom",bullets:["Nedstämdhet och minskat intresse/glädje","Sömn- och aptitförändringar","Brist på energi","Hämning eller agitation","Värdelöshets- eller skuldkänslor","Koncentrationssvårigheter/obeslutsamhet","Återkommande tankar på döden, suicidtankar, planering eller försök"]},
        {h:"Bemötande vid depression",bullets:["Se individens behov – bemöt hela människan","Våga samtala, lyssna, stödja och uppmuntra","Var nära och tillgänglig","Skydda","Visa respekt, bekräftelse och äkta engagemang"]},
        {h:"Mani – typiska tecken",bullets:["Högt tempo och rusande tankar","Snabba associationer och många projekt","Stegrad självkänsla","Pratsamhet och minskat sömnbehov","Ökad libido","Kan vara vänlig och samarbetsvillig tills någon invänder – kan då snabbt svänga till ilska/aggressivitet"]},
        {h:"Bemötande vid förhöjt stämningsläge",bullets:["Skapa trygghet och stå kvar","Var lugn och saklig","Minska stimuli och sinnesintryck","Skydda personen från att lämna ut sig","Var uppmärksam på att suicidrisken kan vara förhöjd och att anhöriga kan vara viktiga"]}
      ],
      memory:"Depression: sänkt energi/stämningsläge + suicidrisk. Mani: tempo ↑, sömnbehov ↓, självkänsla ↑, stimuli bör ↓."
    },
    {
      id:"psykos", order:3, icon:"◌", accent:"#8a6f52", title:"Psykos & schizofreni", time:"30 min", level:"Kärna",
      tags:["psykos","schizofreni","hallucinationer","vanföreställningar","bemötande"], source:["psykos distansutb-1.pdf"],
      intro:"Psykos är i materialet ett samlingsbegrepp för vanföreställningar, hallucinationer och tankestörningar. Lär dig skilja positiva och negativa symtom.",
      goals:["Förklara vad psykos innebär i kursmaterialet","Skilja positiva och negativa symtom","Anpassa kommunikationen till en person med psykotiska symtom"],
      sections:[
        {h:"Psykotiska symtom",p:"Psykos beskrivs som ett samlingsbegrepp för vanföreställningar, hallucinationer och tankestörningar. Vid schizofreni kan första insjuknandet ske smygande och de psykotiska symtomen komma gradvis."},
        {h:"Positiva symtom",bullets:["Vanföreställningar – t.ex. förföljelseidéer, religiösa/storhetsidéer, erotomana eller depressiva vanföreställningar","Hallucinationer – hörsel, syn, lukt, smak eller känsel/taktila","Desorganisation – störningar i tankeförlopp, osammanhängande tal/rörelsemönster, neologismer"]},
        {h:"Negativa symtom",bullets:["Tillbakadragenhet och isolering","Avtrubbade affekter","Torftiga känslomässiga relationer","Minskat tal","Förlust av intresse/förmågor","Kognitiva nedsättningar"]},
        {h:"Stress–sårbarhet",p:"Materialets modell kopplar genetiska/biokemiska faktorer och tidigare erfarenheter till stressande livshändelser, hanteringsstrategier och socialt stöd. Utfallet beskrivs som grad av lidande/ohälsa och sociala konsekvenser."},
        {h:"Bemötande",bullets:["Lyssna och bekräfta personen","Uppträd lugnt och stå kvar","Var saklig och tydlig","Var medveten om kroppsspråk","Undvik att göra mötet till en diskussion om huruvida upplevelsen är 'sann' – fokus är kontakt, trygghet och situation"]}
      ],
      memory:"Positiva symtom = något har tillkommit. Negativa symtom = förmågor/funktioner har minskat eller försvunnit."
    },
    {
      id:"personlighet", order:4, icon:"◇", accent:"#c98f7f", title:"Personlighetssyndrom", time:"23 min", level:"Kärna",
      tags:["kluster A","kluster B","kluster C","borderline","antisocial","bemötande"], source:["distans personlighet.pdf"],
      intro:"Fokus ligger på människan bakom diagnosen, klusterindelningen och ett bemötande som minskar konflikt och ökar delaktighet.",
      goals:["Känna till kluster A, B och C","Känna igen centrala drag i antisocial och emotionellt instabil form","Förklara kursens bemötandeprinciper"],
      sections:[
        {h:"Tre kluster",bullets:["Kluster A – udda och excentriska: paranoid, schizoid, schizotypal form","Kluster B – dramatiska och impulsiva: antisocial, borderline/emotionellt instabil, narcissistisk, histrionisk form","Kluster C – rädda och ängsliga: ängslig, osjälvständig, tvångsmässig form"]},
        {h:"Antisocial form",bullets:["Ansvarslöshet och hänsynslöshet","Impulsivitet och aggressivitet","Dras till riskfyllda aktiviteter","Materialet nämner låg grad av skuld, skam och ånger samt kopplar till begreppet psykopati"]},
        {h:"Borderline / emotionellt instabil",bullets:["Instabil självbild och identitet","Instabil sinnesstämning","Instabila relationer","Självskadebeteende kan förekomma","Vårdbehov måste bedömas i situationen"]},
        {h:"Bemötande",bullets:["Bygg tillit och hopp","Få personen att känna sig sedd och delaktig","Respektera och stöd autonomi","Validera","Motivera","Kom ihåg affektsmitta – det egna känsloläget påverkar mötet"]}
      ],
      memory:"Människan först. I mötet: tillit + delaktighet + autonomi + validering + eget lugn."
    },
    {
      id:"npf", order:5, icon:"⌁", accent:"#5d8091", title:"Autism & ADHD", time:"22 min", level:"Kärna",
      tags:["autism","ADHD","NPF","affektsmitta","tydlighet"], source:["np.pdf"],
      intro:"Vid NPF kan en polissituation i sig skapa extra kognitiv och sensorisk belastning. Anpassa mängden information, tempo och förutsägbarhet.",
      goals:["Känna igen kursens kärnområden vid autism","Känna igen ADHD:s kärnsymtom","Anpassa frågor och instruktioner"],
      sections:[
        {h:"Autismspektrum",bullets:["Utvecklingsavvikelser inom social interaktion/mentalisering","Kommunikation","Begränsade intressen och aktiviteter","Sensorisk belastning och oförutsägbarhet kan vara särskilt svårt"]},
        {h:"Bemötande vid autism",bullets:["Var konkret – ironi och skämt kan misstolkas","Ge tydliga instruktioner","Undvik onödig oförutsägbarhet","Var uppmärksam på detaljfokus","Minska sensoriskt stimuli när det går"]},
        {h:"ADHD",bullets:["Ouppmärksamhet","Hyperaktivitet","Impulsivitet","Materialet tar upp kopplingar till beroendeproblematik och kriminalitet samt medicinsk behandling"]},
        {h:"Bemötande vid ADHD",bullets:["Ställ korta frågor – undvik många frågor samtidigt","Håll dig kortfattad","Tala långsamt och tydligt","Var medveten om affektsmitta"]}
      ],
      memory:"NPF-bemötande: mindre brus, färre ord, en sak i taget, tydlig struktur."
    },
    {
      id:"suicidrisk", order:6, icon:"✦", accent:"#9d6c70", title:"Suicidrisk & akut psykisk kris", time:"20 min", level:"Syntes",
      tags:["suicidrisk","livsleda","LPT 47","aktivt lyssnande","skydd"], source:["Föreläsning Affektiva HT26.pdf","LPT - distans.pdf","5 Kommunikativa kunskapsområdet.pdf","Distans HT26 Studiehandledning.pdf"],
      intro:"Detta avsnitt är en syntes av flera uppladdade dokument: suicidrisk som symtom/risk, juridisk akutväg och kommunikativt bemötande.",
      goals:["Identifiera uttryck som kräver skärpt riskmedvetenhet","Koppla hög suicidrisk till APS-resonemang och LPT 47","Använda aktivt lyssnande utan att hoppa för snabbt till problemlösning"],
      sections:[
        {h:"Signaler i materialet",bullets:["Depressionsmaterialet tar upp återkommande dödstankar, suicidtankar, planering och genomförda försök","Vid mani anges att suicidrisken kan vara förhöjd","I LPT-materialet beskrivs hög suicidrisk som en situation som kan ingå i begreppet allvarlig psykisk störning"]},
        {h:"Akut polisiär juridik",p:"LPT 47 § 1 st. behandlar tillfälligt omhändertagande när det finns skälig anledning att anta allvarlig psykisk störning och personen är farlig för annans säkerhet eller eget liv, eller annars behöver omedelbar hjälp. Vid fara i dröjsmål behandlar materialet PL 11 § som en möjlighet i väntan på myndighetens beslut."},
        {h:"Kommunikativ princip",p:"Förändringstrappan i konflikthanteringsmaterialet betonar att man inte bör hoppa direkt till problemlösning. Aktivt lyssnande och upplevelsen av att bli förstådd bygger förtroende och mottaglighet för instruktion."},
        {h:"Praktiskt fokus i mötet",bullets:["Skapa säkerhet och minska akut risk","Lyssna, bekräfta och var närvarande","Var tydlig och saklig","Skydda och säkra övergång till vård när rättsliga förutsättningar finns","Dokumentera iakttagelser och uttalanden enligt gällande rutin"]}
      ],
      memory:"Säkerhet först – kontakt därefter – rätt juridisk väg – trygg överlämning."
    },
    {
      id:"beroende", order:7, icon:"⟲", accent:"#6b8798", title:"Beroende & samsjuklighet", time:"28 min", level:"Kärna",
      tags:["beroende","abstinens","alkohol","cannabis","benso","samsjuklighet"], source:["Åhörarkopior Beroendeproblematik polisutbildning HT2025.pdf","LVM - distans.pdf"],
      intro:"Beroendeproblematik kräver att du kan se både akut medicinsk risk, psykisk ohälsa och social problematik – samtidigt.",
      goals:["Känna igen beroendekriterier i materialet","Förstå att abstinensrisk varierar mellan preparat","Resonera om samsjuklighet och samverkan"],
      sections:[
        {h:"Beroendekriterier",bullets:["Tolerans","Abstinens","Kontrollförlust","Drogsug","Fortsatt konsumtion trots känd skadeverkan"]},
        {h:"Alkohol",p:"Materialet beskriver alkohol som en folksjukdom med både ärftliga och miljömässiga faktorer. Abstinens kan vara potentiellt livsfarlig och behöva behandling."},
        {h:"Cannabis",p:"Materialet tar upp påverkan på kognitiva funktioner samt möjliga reaktioner som ångest, förvirring, paranoia och depression. Cannabispsykos nämns."},
        {h:"Bensodiazepiner",p:"Bensodiazepiner beskrivs som sedativa och beroendeframkallande. Abstinens efter långvarigt bruk kan bli kraftig och i beroendeföreläsningen beskrivs den som potentiellt livsfarlig."},
        {h:"Samsjuklighet",p:"Psykisk ohälsa kan bidra till missbruk och missbruk kan bidra till psykisk ohälsa. Materialet betonar samverkan och att den akuta juridiska grunden måste väljas utifrån situationen – därefter får vård och socialtjänst hantera fortsatt vårdform."}
      ],
      memory:"Se tre spår samtidigt: intox/abstinens · psykisk risk · socialt vårdbehov."
    },
    {
      id:"drogtecken", order:8, icon:"◉", accent:"#4d98a1", title:"Drogtecken & symtom", time:"38 min", level:"Praktik",
      tags:["pupiller","centraldepressiva","centralstimulerande","cannabis","hallucinogener","opiater"], source:["Drogtecken  Symptom.pdf"],
      intro:"Lär dig mönster, inte enstaka tecken. Rusets uttryck påverkas av dos, tillförselsätt, tolerans, hälsa, miljö, blandbruk med mera.",
      goals:["Känna igen huvudkategorierna","Jämföra typiska kroppsliga och psykiska tecken","Komma ihåg att en helhetsbedömning behövs"],
      sections:[
        {h:"Vad påverkar ruset?",bullets:["Ålder och fysisk hälsa","Arvsanlag och tolerans","Tillförselsätt","Rusförväntningar och miljö","Blandmissbruk","Dos och preparatets omsättning"]},
        {h:"Centraldepressiva – benso som exempel",bullets:["Hjärnan och CNS arbetar långsammare","Normala pupiller med långsam ljusreaktion","Långsamma reflexer, slapp muskulatur, sluddrigt tal","Dåsighet, hämningslöshet och stämningssvängningar","Vid stora doser: medvetslöshet, ytlig andning och risk för andningsförlamning"]},
        {h:"Cannabis",bullets:["Stora/utvidgade pupiller med normal ljusreaktion","Blodsprängda/glansiga ögon och hängande ögonlock","Muntorrhet och hastig puls","Tanketråden kan tappas, tids-/rumsuppfattning försämras","Förvirring, minnesstörningar, fnittrighet och förstärkt känsloläge"]},
        {h:"Centralstimulerande – amfetamin/metamfetamin",bullets:["Kraftigt vidgade pupiller","Hastig/oregelbunden puls, ökad temperatur och svettningar","Rastlöshet, spänningar, darrningar/muskelryckningar","Pratsamhet, ökat självförtroende","Retlighet/aggressivitet och tankeflykt/osammanhängande tal"]},
        {h:"Kokain",bullets:["Eufori, pratsamhet, energi och minskat sömnbehov","Minskad aptit","Nästäppa/rinnande näsa kan förekomma","Vidgade pupiller, rastlöshet, starkt självförtroende","Aggressivitet, förvirring och osammanhängande tal kan förekomma"]},
        {h:"Hallucinogener",p:"LSD-materialet tar upp förvanskad verklighetsbild, stora pupiller med normal ljusreaktion, humörsvängningar, förvirring och koordinationspåverkan. MDMA kan ge lyckorus, ökad energi, vidgade pupiller/fixerad blick, käkspänningar, svettning, ångest/panik och hallucinationer."},
        {h:"Opiater",bullets:["Välbefinnande/drömlikt tillstånd","Små eller sammandragna pupiller","Hängande ögonlock","Sluddrigt och lågmält tal","Likgiltighet/sömnighet","Långsam andning – viktig risksignal"]}
      ],
      memory:"Pupiller + motorik + tal + puls/andning + beteende + fynd + kontext = starkare helhetsbild än ett enskilt tecken."
    },
    {
      id:"lpt", order:9, icon:"§", accent:"#b45f62", title:"LPT – psykiatrisk tvångsvård", time:"35 min", level:"Juridik",
      tags:["LPT 3","APS","LPT 47","PL 11","vårdintyg"], source:["LPT - distans.pdf","PPT Introföreläsning.pdf"],
      intro:"LPT-modulen är kursens viktigaste juridiska kedja: förutsättningar för tvångsvård, polisens tillfälliga omhändertagande och vad som händer vid sjukvården.",
      goals:["Kunna kriterierna i LPT 3 § på principnivå","Förstå APS som juridisk term","Kunna flödet LPT 47 → vårdintyg → intagningsprövning"],
      sections:[
        {h:"Utgångspunkten – frivillighet",p:"Hälso- och sjukvård ska som huvudregel bygga på samtycke. LPT är en särskild lag som möjliggör psykiatrisk tvångsvård när lagens förutsättningar är uppfyllda."},
        {h:"LPT 3 § – kärnan",bullets:["Allvarlig psykisk störning","Ett oundgängligt behov av kvalificerad psykiatrisk dygnetruntvård som inte kan tillgodoses på annat sätt, eller behov av särskilda villkor för öppen tvångsvård","Patienten motsätter sig vården eller det finns grundad anledning att anta att vården inte kan ges med samtycke","Vid vårdbehovsbedömningen beaktas även fara för annans personliga säkerhet eller fysiska/psykiska hälsa"]},
        {h:"Allvarlig psykisk störning (APS)",p:"APS är en juridisk term, inte en diagnos. Materialet knyter den till tillstånd med störd realitetsprövning eller hög suicidrisk och nämner exempel som psykotiska tillstånd, svåra personlighetsstörningar, maniska skov och svåra depressioner."},
        {h:"LPT 47 § 1 st. – polisens tillfälliga omhändertagande",p:"Materialet beskriver tre delar: skälig anledning att anta APS + personen är farlig för annans personliga säkerhet, farlig för eget liv eller i övrigt behöver omedelbar hjälp. Syftet är att personen ska kunna få hjälp av hälso- och sjukvårdspersonal."},
        {h:"Fara i dröjsmål – PL 11 §",p:"När förutsättningarna för ett myndighetsbeslut om omhändertagande föreligger och dröjsmål innebär fara för liv/hälsa eller annan fara beskriver materialet att polisman kan omhänderta i avvaktan på myndighetens beslut."},
        {h:"På sjukvården",bullets:["LPT 4 §: läkare undersöker för vårdintyg; vårdintyg utfärdas om sannolika skäl finns för att förutsättningarna för sluten tvångsvård är uppfyllda","LPT 6 §: efter utfärdat vårdintyg kan personen hållas kvar och nödvändigt tvång användas","LPT 6 b §: senast 24 timmar efter ankomst ska intagningsfrågan avgöras efter ny undersökning av annan behörig läkare/chefsöverläkare enligt materialet","LPT 7 §: vård utöver fyra veckor kräver domstolsbeslut enligt materialet"]},
        {h:"Bostad och unga",bullets:["LPT saknar enligt materialet åldersgräns och kan tillämpas på unga; under 18 ska till särskild vårdinrättning/BUP","PL 21 § behandlas som tillträdesstöd när någon kan antas ha avlidit, vara medvetslös eller annars oförmögen att tillkalla hjälp"]}
      ],
      memory:"LPT 47: APS? + akut fara/hjälpbehov? → tillfälligt omhändertagande → vården gör vårdintygs- och intagningsbedömning."
    },
    {
      id:"lrv", order:10, icon:"⚖", accent:"#8e5d5d", title:"LRV – rättspsykiatrisk vård", time:"20 min", level:"Juridik",
      tags:["LRV","rättspsykiatri","SUP","RPU","anhållen","häktad"], source:["LRV - distans.pdf"],
      intro:"LRV gäller psykiatrisk tvångsvård i särskilda straffrättsliga situationer och efter domstolsbeslut om rättspsykiatrisk vård.",
      goals:["Känna till vilka grupper LRV omfattar","Förstå skillnaden mellan vård med och utan SUP","Känna till rättspsykiatrisk undersökning"],
      sections:[
        {h:"LRV 1 § – vilka omfattas?",bullets:["Den som efter domstolsbeslut ska ges rättspsykiatrisk vård","Den som är anhållen, häktad eller intagen för rättspsykiatrisk undersökning","Den som är intagen i eller ska förpassas till kriminalvårdsanstalt"]},
        {h:"Rättspsykiatrisk vård som påföljd",p:"Kursmaterialet kopplar till BrB 31 kap. 3 § och betonar allvarlig psykisk störning, att påföljden inte kan stanna vid böter och att det är påkallat med psykiatrisk vård förenad med frihetsberövande/tvång."},
        {h:"Särskild utskrivningsprövning (SUP)",p:"Utan SUP fattar chefsöverläkaren enligt materialet beslut om övergång till öppen vård och avslut när vårdbehovet upphört. Med SUP fattar förvaltningsrätten beslut och återfallsrisk får särskild betydelse."},
        {h:"Rättspsykiatrisk undersökning",bullets:["Genomförs av Rättsmedicinalverket","§ 7-intyg – läkarintyg","RPU – mer omfattande rättspsykiatrisk undersökning"]},
        {h:"Anhållen/häktad",p:"Materialet tar upp stationsbefälets ansvar för arresten, Häkteslagen 5 kap. 1 § om läkarundersökning vid möjligt vårdbehov samt att vårdintyg kan aktualiseras och personen flyttas till rättspsykiatrisk vård."}
      ],
      memory:"LPT = psykiatrisk tvångsvård i allmänhet. LRV = tvångsvård kopplad till domstol/straffrättsligt frihetsberövande."
    },
    {
      id:"lvm", order:11, icon:"§", accent:"#5f748d", title:"LVM – vård av missbrukare", time:"35 min", level:"Juridik",
      tags:["LVM 4","LVM 13","PL 12 a","LOB","anmälan"], source:["LVM - distans.pdf","Åhörarkopior Beroendeproblematik polisutbildning HT2025.pdf"],
      intro:"LVM kombinerar socialtjänstens vårdansvar med tvångsvård när ett fortgående missbruk och särskilda risker gör frivilliga lösningar otillräckliga.",
      goals:["Kunna huvuddragen i LVM 4 §","Skilja ordinarie väg från akut omhändertagande enligt 13 §","Förstå PL 12 a §, LOB och anmälningsskyldighet i kursmaterialet"],
      sections:[
        {h:"Frivillighet först",p:"SoL bygger på självbestämmande och integritet. LVM blir aktuell när lagens särskilda förutsättningar för vård utan samtycke är uppfyllda."},
        {h:"LVM 4 § – ordinarie vägen",bullets:["Fortgående missbruk av alkohol, narkotika eller flyktiga lösningsmedel och behov av vård för att komma ifrån missbruket","Vårdbehovet kan inte tillgodoses enligt SoL eller på annat sätt","Till följd av missbruket: allvarlig fara för fysisk/psykisk hälsa, uppenbar risk att förstöra sitt liv eller risk att allvarligt skada sig själv/närstående"]},
        {h:"LVM 13 § – akuta vägen",p:"Socialnämnden kan besluta om omedelbart omhändertagande när det är sannolikt att LVM-vård kan bli aktuell och rättens beslut inte kan avvaktas på grund av allvarlig försämring eller överhängande risk för allvarlig skada på personen själv eller närstående."},
        {h:"Syfte och vårdtid",p:"LVM 3 § beskrivs som att tvångsvården ska motivera till frivillig fortsatt behandling och stöd. Materialet anger att vården ska upphöra när syftet nåtts och senast efter sex månader enligt LVM 20 §."},
        {h:"Anmälningsskyldighet – LVM 6 §",p:"Myndigheter som regelbundet möter missbrukare ska enligt kursmaterialet genast anmäla till socialnämnden om de får kännedom om någon som kan antas behöva vård enligt LVM."},
        {h:"PL 12 a §",p:"Materialet beskriver att polisman vid skälig anledning att anta att någon ska omhändertas enligt LVM 13 §, och när socialnämndens beslut inte kan avvaktas på grund av överhängande och allvarlig skaderisk, får ta personen om hand för skyndsamt överlämnande till sjukhus. Materialet betonar att personen inte ska förvaras i polisarrest."},
        {h:"LOB eller PL 12 a?",p:"PL 12 a § används för att möjliggöra socialtjänstens akuta LVM-process och kan enligt materialet tillämpas även i bostad. LOB gäller berusning med oförmåga att ta hand om sig själv/fara men får enligt materialet inte användas i någons bostad."}
      ],
      memory:"LVM: långvarigt missbruk + frivilligt räcker inte + allvarlig risk. 4 § = vårdvägen, 13 § = akutvägen, PL 12 a = polisens akuta bro."
    },
    {
      id:"handrackning", order:12, icon:"⇄", accent:"#ce8c73", title:"Handräckning", time:"25 min", level:"Juridik",
      tags:["LPT 47","LRV 27","LVM 45","LVU 43","PL 20"], source:["Handräckning - distans.pdf"],
      intro:"Handräckning är inte 'allmän transportservice'. Det krävs särskilt lagstöd och en formell begäran från behörig aktör enligt det aktuella regelverket.",
      goals:["Förstå varför särskilt lagstöd krävs","Känna igen centrala handräckningsbestämmelser","Koppla handräckning till PL 20 § vid tillträde"],
      sections:[
        {h:"Grundprincip",bullets:["Myndigheter har en allmän skyldighet att hjälpa varandra inom den egna verksamheten enligt förvaltningslagens ram","För polisiär handräckning krävs särskilt lagstöd","Finns lagstöd och kriterierna är uppfyllda är polisen skyldig att bistå","Begäran ska vara formell","Materialet betonar att polis inte rutinmässigt ska utföra transporter – behovet ska bedömas i det enskilda fallet"]},
        {h:"LPT 47 § 2 st.",p:"Exempel i materialet: hjälp till läkare för undersökning för vårdintyg, transport efter utfärdat vårdintyg, återförande av patienter som lämnat vårdinrättning eller inte återvänt samt vissa andra förflyttningar."},
        {h:"LRV 27 §",p:"LRV hänvisar i tillämpliga delar till LPT:s regler om hjälp och omfattar även situationen att patient inte inställer sig när rättspsykiatrisk vård ska påbörjas."},
        {h:"LVM 45 §",p:"Materialet tar upp hjälp till läkarundersökning, transport till LVM-hem eller sjukhus och efterforskning/hämtning/förflyttning på begäran av behöriga aktörer. Särskilda omständigheter eller synnerliga skäl krävs enligt den återgivna bestämmelsen."},
        {h:"LVU 43 §",p:"Behandlas som exempel på särskilt lagstöd för hjälp vid läkarundersökning, genomförande av vård/omhändertagande samt efterforskning och hämtning från särskilt ungdomshem."},
        {h:"Tillträde – PL 20 §",p:"Kursmaterialet beskriver PL 20 § som stöd för att bereda sig tillträde för att söka efter en person som med laga stöd ska omhändertas. Utgångspunkten anges vara myndighetsbeslut, med möjlighet för polisman i brådskande fall."}
      ],
      memory:"Handräckning = särskilt lagstöd + behörig begäran + konkret behov av polisens särskilda befogenheter."
    },
    {
      id:"polisbefogenheter", order:13, icon:"◈", accent:"#445f72", title:"Polisiära befogenheter & sekretess", time:"25 min", level:"Juridik",
      tags:["PL 2","PL 10","OSL","vapen","hjälp","våld"], source:["Allmänt - distans.pdf"],
      intro:"Här samlas kursens generella juridiska verktyg: hjälp/service, våldsanvändning, sekretess och omhändertagande av vapen.",
      goals:["Känna till PL 2 § som uppgiftsram","Förstå PL 10 § som befogenhet kopplad till en laga tjänsteåtgärd","Känna igen sekretess- och vapenfrågorna"],
      sections:[
        {h:"PL 2 §",p:"Kursmaterialet lyfter bland annat polisens uppgift att lämna allmänheten skydd, upplysningar och annan hjälp när biståndet lämpligen kan ges, samt att fullgöra verksamhet som ankommer på Polismyndigheten enligt särskilda bestämmelser."},
        {h:"PL 10 § – våldsanvändning",p:"Materialet återger att våld får användas när andra medel är otillräckliga och åtgärden är försvarlig, bland annat när polis möts av våld/hot eller när någon som med laga stöd ska berövas friheten försöker undkomma eller gör motstånd. Den bakomliggande tjänsteåtgärden måste ha lagstöd."},
        {h:"OSL 35 kap. 20 §",p:"Materialet tar upp sekretess hos Polismyndigheten för vissa uppgifter om enskilds personliga förhållanden, bland annat i ärenden om omhändertagande/handräckning enligt psykiatrisk tvångsvård, rättspsykiatrisk vård och LVM."},
        {h:"Vapenlagen 6 kap. 4 §",p:"Materialet beskriver att vapen med tillhörande egendom ska tas om hand om det finns risk att vapnet missbrukas eller det är sannolikt att tillståndet kommer återkallas och särskilda omständigheter inte talar emot. Vid överhängande missbruksrisk får polisman enligt materialet omhänderta utan föregående beslut, med skyndsam anmälan/prövning."}
      ],
      memory:"Befogenhet är inte ett fristående mål: först laga tjänsteåtgärd, sedan nödvändig och försvarlig metod."
    },
    {
      id:"narkotikastraff", order:14, icon:"¶", accent:"#3f8088", title:"Narkotikastrafflagen & provtagning", time:"32 min", level:"Juridik",
      tags:["NSL 1","NSL 4","NSL 5","RB 28:12","RB 28:13a","skälig misstanke"], source:["INSTUDERINGSFRÅGOR NARKOTIKASTRAFFLAGEN.docx","SVAR TILL INSTUDERINGSFRÅGOR NARKOTIKASTRAFFLAGEN.docx","Instuderingsuppgifter avseende Narkotikastrafflagen och andra likartade lagar-1 (1).docx"],
      intro:"Modulen bygger på instuderingsfrågorna och svarsdokumentet: olovlig befattning, försök/medhjälp, skälig misstanke, kroppsbesiktning och medtagande.",
      goals:["Förklara 'olovligen' på kursens nivå","Känna igen försök och medhjälp enligt kursmaterialet","Koppla skälig misstanke till provtagning och beslut"],
      sections:[
        {h:"Olovlig befattning",p:"Kursens svarsdokument betonar att narkotikahantering som utgångspunkt är olaglig men att laglig hantering kan finnas, t.ex. receptförskrivna läkemedel och vissa tjänste-/forskningssituationer med stöd i reglering."},
        {h:"NSL 1 § – exempel på befattning",p:"Instuderingsmaterialet arbetar med innehav/förvaring, framställning/odling och befattning med narkotika avsedd att säljas. I exemplen krävs uppsåt; att narkotika finns i någons utrymme utan personens vetskap är inte i sig tillräckligt."},
        {h:"Försök och medhjälp",bullets:["Svarsdokumentet anger att narkotikabrott är straffbart på försöksstadiet enligt NSL 4 §, men inte försök till eget bruk","Svarsdokumentet anger att medhjälp till eget bruk inte är straffbart enligt NSL 5 §"]},
        {h:"Skälig misstanke om eget bruk",p:"Exemplen i kursmaterialet är tydliga tecken på narkotikapåverkan eller en kombination av svagare tecken och andra omständigheter, exempelvis medgivande om intag i närtid, tips, umgänge eller plats."},
        {h:"Kroppsbesiktning och medtagande",bullets:["Svarsdokumentet anger RB 28 kap. 12 § som stöd för kroppsbesiktning och förundersökningsledare som beslutsfattare i det aktuella upplägget","RB 28 kap. 13 a § anges som stöd för medtagande till plats för kroppsbesiktning/provtagning och polisman som beslutsfattare enligt svarsdokumentet","Materialet betonar att misstanke om eget bruk inte automatiskt ger grund för husrannsakan efter narkotika; då behövs misstanke om innehav"]}
      ],
      memory:"Eget bruk → bevisas med prov. Husrannsakan efter narkotika → kräver en egen grund kopplad till innehav, inte automatik."
    },
    {
      id:"kommunikation", order:15, icon:"↔", accent:"#d4a230", title:"Kommunikation & konfliktreducering", time:"35 min", level:"Praktik",
      tags:["aktivt lyssnande","förändringstrappan","parafrasera","jag-budskap","konflikt"], source:["5 Kommunikativa kunskapsområdet.pdf"],
      intro:"Polisens tal, kroppsspråk och signalvärden påverkar motparten – och motparten påverkar polisen. Kommunikation är en del av den taktiska helhetslösningen.",
      goals:["Förstå återkoppling och brus i kommunikation","Använda aktivt lyssnande","Förklara förändringstrappans logik"],
      sections:[
        {h:"Kommunikation är dubbelriktad",p:"Materialet betonar skillnaden mellan vad sändaren tror sig ha sagt och vad mottagaren faktiskt uppfattar. Återkoppling behövs för att kontrollera tolkningen. Erfarenhet, kultur, värderingar, kroppsspråk och andra störningar påverkar."},
        {h:"Konflikttrappan",p:"Ju fler trösklar som passeras, desto svårare blir konflikten att reparera och risken för destruktivt/våldsamt beteende ökar. Materialet lyfter särskilt handling i stället för ord, stereotypa bilder, ansiktsförlust samt hot och ultimatum som kraftigt eskalerande steg."},
        {h:"Förändringstrappan",p:"Grundidén är att skapa relation och förtjäna förtroende innan påverkan och problemlösning. Modellen rör sig från aktivt lyssnande och empati mot förtroende, påverkan och ändrat beteende. Ett vanligt fel är att hoppa över steg och gå till problemlösning för tidigt."},
        {h:"Aktivt lyssnande",bullets:["Identifiera känslor","Parafrasera","Reflektera","Använd effektiva pauser/tystnad","Använd jag-budskap utan värdering","Visa närvaro med öppet kroppsspråk och balanserad ögonkontakt"]},
        {h:"Parafras & närvaro",p:"Parafrasering återger det du uppfattat och bjuder in till korrigering/fördjupning. Visa närvaro genom att vända dig mot personen, ha öppen hållning, balanserad ögonkontakt, slappna av och uppmuntra personen att fortsätta."}
      ],
      memory:"Lyssna → förstå → förtroende → påverkan. Hoppa inte direkt till 'lösningen'."
    },
    {
      id:"krisstod", order:16, icon:"✚", accent:"#738e78", title:"Krisstöd inom Polismyndigheten", time:"22 min", level:"Arbetsmiljö",
      tags:["krisstöd","psykologisk första hjälp","uppföljning","chef","återhämtning"], source:["riktlinjer-for-krisstod.pdf"],
      intro:"Krisstödet ska stärka medarbetarens egen återhämtning. Modernt stöd fokuserar på säkerhet, trygghet, information, socialt stöd och uppföljning – anpassat efter individen.",
      goals:["Känna igen när krisstöd ska initieras","Förstå krisstödskedjan","Känna till ansvar och stödformer"],
      sections:[
        {h:"När kan krisstöd behövas?",bullets:["Konkret eller upplevt hot/våld mot eget eller annans liv","Svåra skador eller dödsfall","Allvarliga/dödliga olyckor","Efter bruk av tjänstevapen, varningsskott eller vådaskott","Särskilt psykiskt påfrestande situationer, t.ex. barn/ungdomar","Massmedial exponering","På medarbetarens egen begäran efter upplevd allvarlig händelse"]},
        {h:"Individuella behov",p:"Samma händelse påverkar människor olika. Riktlinjen lyfter bland annat socialt nätverk, yrkeserfarenhet, upprepade allvarliga händelser, tidigare trauman och pågående belastning som faktorer att ta hänsyn till."},
        {h:"Ansvar",p:"Arbetsgivaren ansvarar för arbetsmiljöarbetet. Chefer med tilldelade arbetsmiljöuppgifter ska identifiera stödbehov och säkra relevanta åtgärder. Vakthavande befäl och polischef i beredskap anges ha ansvar för att vid behov initiera krisstöd."},
        {h:"Krisstödskedjan",bullets:["Psykologisk första hjälp","Stöd till närstående","Samling efter händelse","Hemkomstsamtal","Uppföljning och bedömning","Fortsatt stöd","Professionellt stöd","Självhjälp"]},
        {h:"Psykologisk första hjälp i praktiken",p:"Först säkerhet och en känsla av trygghet. Därefter lyssna och lugna personer som reagerar kraftigt, ge nödvändig information, förmedla socialt stöd, identifiera individuella behov och klargör hur fortsatt stöd kan ges."}
      ],
      memory:"Säkerhet → trygghet → lyssna/lugna → information → socialt stöd → uppföljning."
    }
  ],

  laws:[
    {ref:"RF 2:6",title:"Skydd mot påtvingat kroppsligt ingrepp",cat:"Grundrättigheter",text:"Kursmaterialet använder bestämmelsen som en grund för varför tvång kräver lagstöd."},
    {ref:"RF 2:8",title:"Skydd mot frihetsberövande",cat:"Grundrättigheter",text:"Utgångspunkten är frihet; begränsningar kräver lagstöd."},
    {ref:"EKMR art. 5",title:"Frihet och personlig säkerhet",cat:"Grundrättigheter",text:"Lyfts tillsammans med RF som rättslig utgångspunkt."},
    {ref:"HSL 3:1",title:"God vård på lika villkor",cat:"Vård",text:"Målet är god hälsa och vård på lika villkor, med respekt för lika värde och värdighet."},
    {ref:"PatientL 4:1–2",title:"Självbestämmande, integritet och samtycke",cat:"Vård",text:"Vård bygger på samtycke om inte annat följer av lag."},
    {ref:"LPT 3 §",title:"Förutsättningar för psykiatrisk tvångsvård",cat:"LPT",text:"APS + nödvändigt vårdbehov/särskilda villkor + motstånd eller bristande möjlighet till samtycke enligt kursmaterialet."},
    {ref:"LPT 4 §",title:"Vårdintyg",cat:"LPT",text:"Läkarundersökning och vårdintyg när sannolika skäl finns för sluten tvångsvård enligt materialet."},
    {ref:"LPT 6 §",title:"Kvarhållning efter vårdintyg",cat:"LPT",text:"Efter utfärdat vårdintyg behandlar materialet kvarhållning och nödvändigt tvång."},
    {ref:"LPT 6 b §",title:"Intagningsbeslut",cat:"LPT",text:"Ny undersökning/intagningsprövning inom 24 timmar enligt kursmaterialet."},
    {ref:"LPT 7 §",title:"Fortsatt tvångsvård",cat:"LPT",text:"Materialet anger domstolsprövning för vård utöver fyra veckor."},
    {ref:"LPT 47 § 1 st.",title:"Tillfälligt polisiärt omhändertagande",cat:"LPT",text:"Skälig anledning att anta APS + fara för annan/eget liv eller annars omedelbart hjälpbehov."},
    {ref:"LPT 47 § 2 st.",title:"Handräckning",cat:"Handräckning",text:"Hjälp på begäran av behörig vårdaktör i de situationer som räknas upp i bestämmelsen."},
    {ref:"PL 11 §",title:"Omhändertagande i väntan på myndighetsbeslut",cat:"Polislagen",text:"Fara i dröjsmål-koppling när myndigheten har befogenhet att besluta om omhändertagande."},
    {ref:"PL 20 §",title:"Tillträde för att söka efter person",cat:"Polislagen",text:"Kursmaterialet kopplar bestämmelsen till handräckning och person som med laga stöd ska omhändertas."},
    {ref:"PL 21 §",title:"Tillträde för hjälp",cat:"Polislagen",text:"När någon kan antas ha avlidit, vara medvetslös eller annars oförmögen att tillkalla hjälp enligt materialet."},
    {ref:"LRV 1 §",title:"LRV:s tillämpningsområde",cat:"LRV",text:"Domstolsöverlämnad rättspsykiatrisk vård samt vissa anhållna, häktade, undersöknings- och kriminalvårdssituationer."},
    {ref:"LRV 27 §",title:"Handräckning enligt LRV",cat:"Handräckning",text:"Hänvisar i tillämpliga delar till LPT:s handräckningsbestämmelser enligt kursmaterialet."},
    {ref:"LVM 4 §",title:"Förutsättningar för LVM-vård",cat:"LVM",text:"Fortgående missbruk + frivilliga alternativ otillräckliga + någon av de allvarliga riskindikationerna."},
    {ref:"LVM 6 §",title:"Anmälningsskyldighet",cat:"LVM",text:"Myndigheter som regelbundet möter missbrukare ska enligt materialet genast anmäla möjligt LVM-vårdbehov."},
    {ref:"LVM 13 §",title:"Omedelbart omhändertagande",cat:"LVM",text:"Akutvägen när LVM-vård sannolikt kan bli aktuell och rättens beslut inte kan avvaktas."},
    {ref:"PL 12 a §",title:"Polisens akuta omhändertagande inför LVM",cat:"LVM",text:"Polisman kan under kursmaterialets angivna förutsättningar ta personen om hand för skyndsamt överlämnande till sjukhus."},
    {ref:"LVM 45 §",title:"Handräckning enligt LVM",cat:"Handräckning",text:"Transport, hämtning och förflyttning på behörig begäran enligt bestämmelsens situationer."},
    {ref:"LVU 43 §",title:"Handräckning enligt LVU",cat:"Handräckning",text:"Exempel på särskilt lagstöd för hjälp till socialtjänst/rätt/SiS."},
    {ref:"PL 2 §",title:"Polismyndighetens uppgifter",cat:"Polislagen",text:"Bland annat skydd, upplysningar, annan hjälp och särskilt reglerade uppgifter."},
    {ref:"PL 10 §",title:"Våldsanvändning",cat:"Polislagen",text:"När andra medel är otillräckliga och våld är försvarligt för en laga tjänsteåtgärd i angivna situationer."},
    {ref:"OSL 35:20",title:"Sekretess i vissa omhändertagande-/handräckningsärenden",cat:"Sekretess",text:"Kursmaterialet lyfter sekretess för personliga förhållanden i vissa LPT/LRV/LVM-ärenden."},
    {ref:"VapenL 6:4",title:"Omhändertagande av vapen",cat:"Vapen",text:"Risk för missbruk eller sannolik återkallelse; vid överhängande missbruksrisk behandlas möjlighet för polisman att agera direkt."},
    {ref:"NSL 1 §",title:"Narkotikabrott – olovlig befattning",cat:"Narkotika",text:"Instuderingsmaterialet arbetar med bl.a. innehav/förvaring, framställning och befattning för försäljning."},
    {ref:"NSL 4 §",title:"Försök",cat:"Narkotika",text:"Svarsdokumentet anger försök som straffbart men inte försök till eget bruk."},
    {ref:"NSL 5 §",title:"Medverkan",cat:"Narkotika",text:"Svarsdokumentet anger att medhjälp till eget bruk inte är straffbart."},
    {ref:"RB 28:12",title:"Kroppsbesiktning",cat:"Narkotika",text:"I kursens svarsdokument anges bestämmelsen som stöd för kroppsbesiktning vid skälig misstanke."},
    {ref:"RB 28:13 a",title:"Medtagande till kroppsbesiktning",cat:"Narkotika",text:"I kursens svarsdokument anges bestämmelsen för medtagande till provtagningsplats."}
  ],

  symptomGroups:[
    {name:"Depression",tone:"Affektivt",clues:["Nedstämdhet","Minskat intresse/glädje","Energi ↓","Sömn/appetit kan ändras","Skuld/värdelöshet","Suicidtankar kan förekomma"],meet:"Lyssna, stöd, skydda, bekräfta och se individens behov."},
    {name:"Mani",tone:"Affektivt",clues:["Tempo ↑","Tankar rusar","Pratsam","Sömnbehov ↓","Självkänsla ↑","Kan snabbt bli irriterad/aggressiv"],meet:"Lugnt och sakligt, stå kvar, minska stimuli, skydda integritet."},
    {name:"Psykos",tone:"Psykiatri",clues:["Vanföreställningar","Hallucinationer","Tankestörning/desorganisation","Förvirrad verklighetsprövning"],meet:"Lyssna, bekräfta personen, var lugn, saklig och tydlig."},
    {name:"Schizofreni – negativa symtom",tone:"Psykiatri",clues:["Tillbakadragenhet","Avtrubbade affekter","Minskat tal","Intresse/förmågor ↓","Kognitiv påverkan"],meet:"Undvik att tolka låg respons som ovilja; håll kommunikationen tydlig och lugn."},
    {name:"Autism",tone:"NPF",clues:["Social/kommunikativ svårighet","Detaljfokus","Svårt med ironi","Oförutsägbarhet kan belasta","Sensorisk känslighet"],meet:"Konkret, tydligt, förutsägbart; minska stimuli."},
    {name:"ADHD",tone:"NPF",clues:["Ouppmärksamhet","Hyperaktivitet","Impulsivitet"],meet:"Korta frågor, en sak i taget, långsamt och tydligt."},
    {name:"Bensodiazepiner",tone:"Drogtecken",clues:["Normala pupiller, långsam ljusreaktion","Sluddrigt tal","Långsamma reflexer","Dåsig/hämningslös","Vid hög dos: ytlig andning"],meet:"Bedöm medicinsk risk och blandintox; var uppmärksam på andning/medvetande."},
    {name:"Cannabis",tone:"Drogtecken",clues:["Utvidgade pupiller","Blodsprängda/glansiga ögon","Muntorrhet","Tanketråd tappas","Tids-/rumsuppfattning påverkas"],meet:"Se helheten; påverkan varierar och psykiska reaktioner kan inkludera förvirring/paranoia."},
    {name:"Amfetamin/metamfetamin",tone:"Drogtecken",clues:["Kraftigt vidgade pupiller","Rastlös","Pratsam","Puls/temperatur ↑","Tankeflykt","Retlighet/aggressivitet"],meet:"Minska stimuli, håll avstånd/säkerhet och var tydlig; bedöm somatisk risk."},
    {name:"Opiater",tone:"Drogtecken",clues:["Små pupiller","Sömnighet","Släpig röst","Hängande ögonlock","Andning ↓"],meet:"Långsam andning är en akut risksignal; prioritera medicinsk bedömning."}
  ],

  flashcards:[
    ["Vad är APS?","Allvarlig psykisk störning – en juridisk term, inte en medicinsk diagnos."],["Vad är kärnan i LPT 3 §?","APS + nödvändigt psykiatriskt vårdbehov/särskilda villkor + motstånd eller grundad anledning att anta att samtycke inte kan ges."],["Vad krävs i princip för LPT 47 § 1 st.?","Skälig anledning att anta APS och fara för annans säkerhet/eget liv eller annat omedelbart hjälpbehov."],["Vad är PL 11 §:s roll i LPT-materialet?","Fara i dröjsmål: polisman kan omhänderta i väntan på myndighetens beslut när förutsättningarna är uppfyllda."],["Vad händer först på sjukvården i LPT-kedjan?","Läkare undersöker för vårdintyg enligt LPT 4 §."],["Vad anger materialet om LPT 6 b §?","Intagningsfrågan ska avgöras senast 24 timmar efter ankomst efter ny undersökning."],
    ["Psykos – tre huvudtyper av symtom?","Vanföreställningar, hallucinationer och tankestörningar."],["Positiva psykotiska symtom?","Vanföreställningar, hallucinationer och desorganisation/osammanhängande tal eller rörelsemönster."],["Negativa psykotiska symtom?","Tillbakadragenhet, avtrubbade affekter, torftiga relationer, minskat tal/förmågor och kognitiv påverkan."],["Bemötande vid psykos?","Lyssna och bekräfta, lugnt, stå kvar, sakligt och tydligt, medvetet kroppsspråk."],
    ["Depression – två kärnsignaler?","Nedstämdhet och minskat intresse/glädje."],["Depression – viktig risksignal?","Återkommande tankar på döden, suicidtankar, planering eller försök."],["Mani – sömn?","Minskat sömnbehov."],["Mani – tempo och tanke?","Högt tempo, rusande tankar och snabba associationer."],["Bemötande vid mani?","Trygghet, lugnt/sakligt, stå kvar, minska stimuli och skydda personens integritet."],
    ["Autism – polisiär kommunikationsprincip?","Var konkret och förutsägbar; ironi/skämt kan misstolkas och stimuli kan överbelasta."],["ADHD – tre kärnsymtom?","Ouppmärksamhet, hyperaktivitet och impulsivitet."],["ADHD – frågeteknik?","Korta frågor, inte flera samtidigt; kortfattat, långsamt och tydligt."],
    ["Personlighetssyndrom – kluster B?","Dramatiska/impulsiva: antisocial, emotionellt instabil/borderline, narcissistisk, histrionisk."],["Borderline – tre instabiliteter?","Självbild/identitet, sinnesstämning och relationer."],["Bemötande vid personlighetssyndrom?","Bygg tillit/hopp, skapa delaktighet, stöd autonomi, validera och motivera."],
    ["Fem beroendekriterier i materialet?","Tolerans, abstinens, kontrollförlust, drogsug och fortsatt konsumtion trots känd skadeverkan."],["Vilka abstinenser markeras som potentiellt livsfarliga?","Alkohol och bensodiazepiner i kursmaterialet."],["Samsjuklighet?","Samtidig psykisk ohälsa/sjukdom och missbruk/beroende."],
    ["Benso – pupiller?","Ofta normala pupiller med långsam ljusreaktion enligt drogteckenmaterialet."],["Cannabis – ögon/pupiller?","Utvidgade pupiller, blodsprängda/glansiga ögon och ofta hängande ögonlock."],["Amfetamin – typiskt mönster?","Kraftigt vidgade pupiller, rastlöshet, pratsamhet, puls/temperatur upp, tankeflykt."],["Opiater – pupill och andning?","Små/sammandragna pupiller och långsam andning."],["LSD – pupiller?","Stora pupiller med normal ljusreaktion enligt materialet."],
    ["LVM 4 § – tre delar?","Fortgående missbruk + vårdbehov som inte kan lösas frivilligt/annat sätt + allvarlig riskindikation."],["LVM 13 §?","Omedelbart omhändertagande – akutvägen."],["PL 12 a §?","Polisens akuta omhändertagande för skyndsamt överlämnande till sjukhus inför LVM-process under angivna förutsättningar."],["LVM 6 §?","Anmälningsskyldighet till socialnämnden vid möjligt LVM-vårdbehov för myndigheter som regelbundet möter missbrukare."],
    ["LRV 1 § – tre grupper?","Domstolsöverlämnad rättspsykiatrisk vård; vissa anhållna/häktade/RPU-intagna; vissa kriminalvårdsintagna/förpassningar."],["SUP – vem beslutar om utskrivning?","Förvaltningsrätten enligt kursmaterialet."],
    ["Handräckning – huvudregel?","Särskilt lagstöd + formell begäran från behörig aktör; polisens särskilda befogenheter ska behövas i det konkreta fallet."],["PL 20 § i handräckning?","Tillträde för att söka efter person som med laga stöd ska omhändertas enligt kursmaterialets tillämpning."],
    ["Aktivt lyssnande – sex delar?","Identifiera känslor, parafrasera, reflektera, pauser, jag-budskap och visa närvaro."],["Förändringstrappans vanligaste misstag?","Att hoppa över steg och gå till problemlösning/påverkan för tidigt."],["Parafrasera?","Återge det du uppfattat och följ med öppen fråga så personen kan bekräfta/korrigera."],
    ["NSL – försök?","Svarsdokumentet: ja, försök är straffbart enligt NSL 4 §, men inte försök till eget bruk."],["Medhjälp till eget bruk?","Svarsdokumentet: nej, enligt NSL 5 §."],["Eget bruk → husrannsakan automatiskt?","Nej. Kursmaterialet betonar att husrannsakan efter narkotika kräver misstanke om innehav."],["Kroppsbesiktning vid eget bruk – stöd i svarsdokumentet?","RB 28 kap. 12 §."],
    ["Krisstödets övergripande uppgift?","Stärka individens egen förmåga till återhämtning."],["Psykologisk första hjälp – första steg?","Säkerhet och känsla av trygghet, därefter lyssna/lugna, information och socialt stöd."]
  ],

  quiz:[
    {q:"Vilket påstående beskriver bäst APS?",a:["En psykiatrisk ICD-diagnos","En juridisk term","En synonym till depression","Ett krav på våldsamt beteende"],c:1,e:"I LPT-materialet är allvarlig psykisk störning en juridisk term, inte en medicinsk diagnos."},
    {q:"Vilken kombination ligger närmast LPT 47 § 1 st. i kursmaterialet?",a:["Psykisk ohälsa + brott","Skälig anledning att anta APS + akut fara/hjälpbehov","Missbruk + bostadslöshet","Vårdintyg + bötesbrott"],c:1,e:"Bestämmelsen knyter APS-misstanke till fara för annan/eget liv eller annat omedelbart hjälpbehov."},
    {q:"Vad behandlar PL 11 § i LPT-föreläsningen?",a:["Sekretess","Fara i dröjsmål i väntan på myndighetsbeslut","Husrannsakan efter narkotika","Vapenomhändertagande"],c:1,e:"PL 11 används i materialet som en väntelösning när myndigheten ska besluta och dröjsmål innebär fara."},
    {q:"Vilket är ett positivt psykotiskt symtom?",a:["Tillbakadragenhet","Avtrubbad affekt","Vanföreställning","Minskat tal"],c:2,e:"Vanföreställningar är ett positivt symtom – något har tillkommit."},
    {q:"Vilket är ett negativt psykotiskt symtom?",a:["Hallucination","Neologism","Storhetsidé","Tillbakadragenhet"],c:3,e:"Tillbakadragenhet ingår bland negativa symtom i föreläsningen."},
    {q:"Vad rekommenderas i bemötandet vid psykos?",a:["Argumentera bort vanföreställningen","Var lugn, saklig och tydlig","Ge många instruktioner snabbt","Öka stimuli"],c:1,e:"Materialet: lyssna/bekräfta, lugnt, stå kvar, sakligt och tydligt."},
    {q:"Vilket symtom finns med vid depression?",a:["Minskat sömnbehov utan trötthet som typiskt tecken","Återkommande tankar på döden","Alltid hallucinationer","Alltid aggressivitet"],c:1,e:"Dödstankar/suicidtankar är uttryckligen med i depressionsmaterialet."},
    {q:"Vilket passar bäst med mani?",a:["Högt tempo och minskat sömnbehov","Långsamma reflexer och små pupiller","Tillbakadragenhet och minskat tal","Låg energi och skuld"],c:0,e:"Högt tempo, rusande tankar och minskat sömnbehov är typiskt i kursmaterialet."},
    {q:"Vad rekommenderas vid förhöjt stämningsläge?",a:["Öka sinnesintryck","Var lugn och minska stimuli","Använd ironi","Lämna personen ensam"],c:1,e:"Föreläsningen lyfter lugnt/sakligt bemötande och begränsning av stimuli."},
    {q:"Vilka är ADHD:s kärnsymtom i materialet?",a:["Vanföreställning, hallucination, katatoni","Ouppmärksamhet, hyperaktivitet, impulsivitet","Nedstämdhet, skuld, suicidtankar","Tolerans, abstinens, drogsug"],c:1,e:"De tre anges uttryckligen i NPF-föreläsningen."},
    {q:"Vilken kommunikationsanpassning passar bäst vid ADHD?",a:["Många frågor i samma mening","Korta frågor och tydligt tempo","Abstrakta metaforer","Snabbt tal"],c:1,e:"Materialet: korta frågor, kortfattat, långsamt och tydligt."},
    {q:"Vilket hör till kluster B?",a:["Antisocial form","Ängslig form","Schizoid form","Tvångsmässig form"],c:0,e:"Antisocial form placeras i kluster B."},
    {q:"Vilket är centralt i bemötandet vid personlighetssyndrom?",a:["Minska delaktigheten","Validering och stöd för autonomi","Provocera fram affekt","Undvik hopp"],c:1,e:"Materialet lyfter tillit/hopp, delaktighet, autonomi, validering och motivering."},
    {q:"Vilket ingår i beroendekriterierna i kursmaterialet?",a:["Drogsug","Hallucination krävs","Brottslighet krävs","Pupillförändring krävs"],c:0,e:"Drogsug är ett av kriterierna som listas."},
    {q:"Vilken abstinens markeras som potentiellt livsfarlig i beroendematerialet?",a:["Endast cannabis","Alkohol och bensodiazepiner","Endast koffein","LSD"],c:1,e:"Alkohol- och bensodiazepinabstinens markeras som potentiellt livsfarlig."},
    {q:"Vilket mönster passar bäst för opiater?",a:["Stora pupiller och hyperaktivitet","Små pupiller och långsam andning","Normala pupiller och hämningslöshet","Blodsprängda ögon och fnittrighet"],c:1,e:"Opiater: sammandragna/små pupiller, sömnighet och långsam andning."},
    {q:"Vilket mönster passar bäst för amfetamin?",a:["Kraftigt vidgade pupiller, rastlöshet, pratsamhet","Små pupiller och långsam andning","Slapp muskulatur och sluddrande tal","Blodsprängda ögon och hängande ögonlock"],c:0,e:"Det är ett typiskt centralstimulerande mönster i materialet."},
    {q:"Cannabis kan enligt drogteckenmaterialet ge…",a:["Försämrad tids- och rumsuppfattning","Alltid små pupiller","Andningsförlamning som typiskt första tecken","Alltid normal kognition"],c:0,e:"Försämrad tids-/rumsuppfattning och tankestörning finns med."},
    {q:"LVM 4 § förutsätter i princip…",a:["Endast att personen använder narkotika","Fortgående missbruk + otillräckliga frivilliga alternativ + allvarlig risk","Att personen har begått brott","Vårdintyg enligt LPT"],c:1,e:"Det är den pedagogiska trestegsstrukturen i materialet."},
    {q:"Vad är LVM 13 §?",a:["Ordinarie ansökningsväg","Akut omedelbart omhändertagande","Sekretessbestämmelse","Vapenbestämmelse"],c:1,e:"13 § är den akuta vägen i föreläsningen."},
    {q:"Vad kopplas PL 12 a § till?",a:["Omedelbar LVM-situation och överlämnande till sjukhus","Rättspsykiatrisk utskrivning","Kroppsbesiktning","Krisstöd"],c:0,e:"Materialet behandlar PL 12 a som polisens akuta bro till LVM-processen."},
    {q:"Vad krävs för polisiär handräckning enligt föreläsningen?",a:["Endast muntlig önskan från vem som helst","Särskilt lagstöd och formell begäran från behörig aktör","Alltid vårdintyg","Alltid brottsmisstanke"],c:1,e:"Handräckning kräver särskilt lagstöd och formell begäran."},
    {q:"Vad används PL 20 § till i handräckningsmaterialet?",a:["Att besluta om LPT-vård","Tillträde för att söka efter person som med laga stöd ska omhändertas","Att ta urinprov","Att besluta om SUP"],c:1,e:"Det är den tillträdesfråga som behandlas i föreläsningen."},
    {q:"Vilket är förändringstrappans vanligaste misstag enligt materialet?",a:["Att lyssna för länge","Att gå till problemlösning för tidigt","Att vara saklig","Att använda återkoppling"],c:1,e:"Materialet varnar uttryckligen för att hoppa över steg."},
    {q:"Vad är parafrasering?",a:["Att upprepa ett krav högre","Att återge det man uppfattat och bjuda in till fördjupning","Att undvika ögonkontakt","Att ge juridisk information ordagrant"],c:1,e:"Parafrasering hjälper personen att bekräfta/korrigera din förståelse."},
    {q:"Vad anger svarsdokumentet om medhjälp till eget bruk?",a:["Alltid grovt brott","Inte straffbart enligt NSL 5 §","Straffbart endast kvällstid","Kräver LVM"],c:1,e:"Det är svaret i kursens instuderingsmaterial."},
    {q:"Ger misstanke om eget bruk automatiskt rätt att husrannsaka efter narkotika?",a:["Ja","Nej – kursmaterialet kräver en grundad misstanke om innehav för att leta efter narkotika","Ja, om personen är vuxen","Ja, vid ADHD"],c:1,e:"Svarsdokumentet skiljer provbevisning för eget bruk från sökande efter innehav."},
    {q:"Vad anges som stöd för kroppsbesiktning i svarsdokumentet?",a:["RB 28:12","LPT 47","PL 21","LVM 6"],c:0,e:"RB 28 kap. 12 § anges i svarsdokumentet."},
    {q:"Vad är krisstödets övergripande uppgift?",a:["Tvinga fram emotionell bearbetning","Stärka individens egen återhämtning","Ersätta företagshälsovården","Utreda tjänstefel"],c:1,e:"Riktlinjen uttrycker återhämtningsförmåga som övergripande uppgift."},
    {q:"Vad kommer först i psykologisk första hjälp enligt riktlinjen?",a:["Detaljerad genomgång av alla känslor","Säkerhet och trygghet","Mediahantering","Prestationstest"],c:1,e:"Först förs den drabbade i säkerhet och en känsla av trygghet skapas."},
    {q:"Vem fattar enligt LRV-materialet beslut om utskrivning när SUP finns?",a:["Polisman","Förvaltningsrätten","Socialnämnden","Åklagaren"],c:1,e:"Med SUP ligger beslutet hos förvaltningsrätten enligt föreläsningen."},
    {q:"Vilket är rätt ordning i förändringstrappans idé?",a:["Påverkan → lyssnande → förtroende","Lyssnande → förståelse/empati → förtroende → påverkan","Ultimatum → relation → lyssnande","Problemlösning → empati"],c:1,e:"Relation och förtroende byggs innan påverkan."},
    {q:"Vilken rättslig princip ligger bakom att LPT/LVM kräver tydligt lagstöd?",a:["Frihetsberövande och kroppsliga ingrepp är grundlagsskyddade","Alla psykiatriska patienter är gripna","Socialtjänsten är en domstol","Polisen får alltid använda tvång"],c:0,e:"RF/EKMR används i materialet som rättslig utgångspunkt för tvång."},
    {q:"Vad säger kursmaterialet om LPT och ålder?",a:["LPT gäller bara 18+","LPT saknar åldersgräns; unga kan omfattas, men ska till särskild vårdinrättning/BUP","LPT gäller bara under 18","LPT kräver vårdnadshavares beslut"],c:1,e:"Detta anges uttryckligen i LPT-föreläsningen."},
    {q:"Vilken risk kräver särskild uppmärksamhet vid opiatpåverkan?",a:["Ökad aptit","Långsam andning","Fnittrighet","Muntorrhet"],c:1,e:"Långsam andning är en viktig akut risksignal."}
  ],

  cases:[
    {id:"c1",title:"Livsleda + narkotikapåverkan + brott av normalgraden",difficulty:"Svår",scenario:"Ni ingriper mot en person misstänkt för ett brott av normalgraden. Personen är uppenbart narkotikapåverkad, mår tydligt psykiskt dåligt och uttalar livsleda.",facts:["Brottsmisstanke","Påverkan","Uttalad livsleda"],question:"Vilken arbetsordning är mest rimlig utifrån kursens teman?",options:[
      {t:"Fokusera enbart på brottsutredningen eftersom brottet går först.",ok:false,why:"Kursmaterialet betonar samtidig riskbedömning, akut vårdbehov och samsjuklighet. Liv/hälsa kan kräva omedelbara åtgärder parallellt med brottsprocessen."},
      {t:"Säkra situation och medicinsk/psykiatrisk risk, klarlägg rättsliga grunder för frihetsberövande och samordna brotts- och vårdspåren.",ok:true,why:"Detta fångar kursens kärna: säkerhet och akut risk först, korrekt juridisk grund för varje åtgärd, därefter ordnad överlämning och fortsatt brottshantering."},
      {t:"Använd alltid LOB eftersom personen är påverkad.",ok:false,why:"LOB är inte en universalgrund. LPT, LVM/PL 12 a eller straffprocessuellt frihetsberövande kan vara mer relevanta beroende på förutsättningarna."}
    ],takeaway:"Håll isär rättsgrunderna men hantera riskerna samtidigt. En person kan vara både misstänkt, påverkad och i akut psykisk kris."},
    {id:"c2",title:"Läkare behöver komma in för vårdintygsundersökning",difficulty:"Medel",scenario:"En läkare ska bedöma en person i bostad. En beviljad handräckningsbegäran finns. Personen vill inte öppna och anhöriga beskriver långvarig psykisk ohälsa och självskadebeteende.",facts:["Formell handräckning","Bostad","Vårdintygsundersökning"],question:"Vilket juridiskt fokus ska patrullen ha?",options:[
      {t:"Handräckningen innebär automatiskt fri rätt att gå in var som helst.",ok:false,why:"Kursmaterialet skiljer handräckningsstödet från tillträdesfrågan. PL 20 § behandlas särskilt när polis behöver söka efter en person som med laga stöd ska omhändertas."},
      {t:"Kontrollera handräckningens lagstöd/begäran och säkerställ separat stöd/beslut för tillträde om det behövs.",ok:true,why:"Det motsvarar kursens uppdelning: särskilt lagstöd för handräckning och separat analys av tillträde enligt PL 20 §."},
      {t:"Avstå alltid eftersom det är en bostad.",ok:false,why:"Bostad utesluter inte åtgärd när lagstöd finns; frågan är vilket stöd och beslut som gäller."}
    ],takeaway:"Handräckning och tillträde är två juridiska frågor som måste hållas isär."},
    {id:"c3",title:"Maniskt skov i stökig miljö",difficulty:"Medel",scenario:"En person pratar oavbrutet, hoppar mellan projekt, har sovit mycket lite, är påträngande och blir irriterad när patrullen invänder. Flera anhöriga och grannar pratar samtidigt.",facts:["Högt tempo","Minskat sömnbehov","Stimuli"],question:"Vilket bemötande ligger närmast kursmaterialet?",options:[
      {t:"Matcha personens energi för att skapa kontakt.",ok:false,why:"Det riskerar att öka affektsmitta och stimuli."},
      {t:"Lugnt och sakligt, stå kvar, minska stimuli och skapa trygghet.",ok:true,why:"Det är direkt i linje med bemötandet vid förhöjt stämningsläge."},
      {t:"Ge många detaljerade instruktioner samtidigt.",ok:false,why:"Högt tempo och mycket stimuli talar för tydlighet och begränsning, inte mer informationsbelastning."}
    ],takeaway:"Vid mani: ditt lugn och miljön är en del av interventionen."},
    {id:"c4",title:"Paranoid vanföreställning",difficulty:"Medel",scenario:"En person säger att grannarna har installerat kameror i väggarna och att polisen är med i planen. Personen är rädd men inte våldsam.",facts:["Vanföreställning","Rädsla","Misstro"],question:"Vad är mest kursenligt?",options:[
      {t:"Förklara direkt att allt är inbillning.",ok:false,why:"Det riskerar att låsa kommunikationen i en sanningskonflikt."},
      {t:"Lyssna och bekräfta personens upplevelse/känsla utan att bekräfta själva vanföreställningen; var lugn, saklig och tydlig.",ok:true,why:"Det följer psykos- och kommunikationsmaterialets principer."},
      {t:"Spela med och säga att kamerorna finns.",ok:false,why:"Bemötandet handlar om att bekräfta personen och känslan, inte att förstärka vanföreställningen."}
    ],takeaway:"Bekräfta känslan, inte vanföreställningens sakpåstående."},
    {id:"c5",title:"Påverkan: små pupiller och långsam andning",difficulty:"Lätt",scenario:"En person är slö, talar lågt och släpigt, har mycket små pupiller och långsam andning.",facts:["Små pupiller","Sömnighet","Andning ↓"],question:"Vilken drogkategori passar bäst enligt materialet?",options:[
      {t:"Opiater",ok:true,why:"Små/sammandragna pupiller, sömnighet och långsam andning är ett typiskt mönster."},
      {t:"Centralstimulerande",ok:false,why:"Där ses snarare vidgade pupiller, rastlöshet och ökad aktivitet."},
      {t:"Cannabis",ok:false,why:"Cannabisbilden i materialet har oftare utvidgade pupiller och blodsprängda/glansiga ögon."}
    ],takeaway:"Andningspåverkan är viktigare än att 'namnge drogen' – medicinsk risk måste prioriteras."},
    {id:"c6",title:"Misstänkt eget bruk och önskemål om husrannsakan",difficulty:"Svår",scenario:"En person uppvisar tydliga tecken på narkotikapåverkan och det finns grund för skälig misstanke om eget bruk. En kollega vill automatiskt göra husrannsakan efter narkotika.",facts:["Skälig misstanke eget bruk","Provtagning","Husrannsakan"],question:"Hur resonerar kursens svarsdokument?",options:[
      {t:"Eget bruk ger automatiskt husrannsakan.",ok:false,why:"Svarsdokumentet säger uttryckligen nej."},
      {t:"Eget bruk kan motivera kroppsbesiktning/provtagning, men husrannsakan efter narkotika kräver egen misstanke om innehav.",ok:true,why:"Det är just den distinktion som instuderingssvaret framhåller."},
      {t:"Provtagning kan aldrig användas vid eget bruk.",ok:false,why:"Tvärtom är provtagning central i kursmaterialets resonemang om bevisning för eget bruk."}
    ],takeaway:"Varje tvångsmedel behöver sin egen rättsliga grund."}
  ],

  sources:[
    "Distans HT26 Studiehandledning.pdf","PPT Introföreläsning.pdf","Föreläsning Affektiva HT26.pdf","psykos distansutb-1.pdf","distans personlighet.pdf","np.pdf","LPT - distans.pdf","LRV - distans.pdf","LVM - distans.pdf","Handräckning - distans.pdf","Allmänt - distans.pdf","Åhörarkopior Beroendeproblematik polisutbildning HT2025.pdf","Drogtecken  Symptom.pdf","5 Kommunikativa kunskapsområdet.pdf","riktlinjer-for-krisstod.pdf","INSTUDERINGSFRÅGOR NARKOTIKASTRAFFLAGEN.docx","SVAR TILL INSTUDERINGSFRÅGOR NARKOTIKASTRAFFLAGEN.docx","Instuderingsuppgifter avseende Narkotikastrafflagen och andra likartade lagar-1 (1).docx"
  ]
};
