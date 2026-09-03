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

/* V2: extra tentafrågor, flerstegscase och interaktiva lagguider.
   Allt innehåll nedan är pedagogiskt omarbetat från de uppladdade kursdokumenten. */
(() => {
  const D = window.STUDY_DATA;

  D.topicMeta = {
    "LPT": {label:"LPT & akut psykiatri", source:"LPT - distans.pdf"},
    "LVM": {label:"LVM & missbruksvård", source:"LVM - distans.pdf"},
    "LRV": {label:"LRV", source:"LRV - distans.pdf"},
    "Handräckning": {label:"Handräckning", source:"Handräckning - distans.pdf"},
    "Psykos": {label:"Psykos", source:"psykos distansutb-1.pdf"},
    "Affektiva": {label:"Affektiva syndrom", source:"Föreläsning Affektiva HT26.pdf"},
    "NPF": {label:"NPF", source:"np.pdf"},
    "Personlighet": {label:"Personlighetssyndrom", source:"distans personlighet.pdf"},
    "Beroende": {label:"Beroende & drogtecken", source:"Åhörarkopior Beroendeproblematik polisutbildning HT2025.pdf / Drogtecken  Symptom.pdf"},
    "Narkotika": {label:"Narkotikastrafflag & tvångsmedel", source:"SVAR TILL INSTUDERINGSFRÅGOR NARKOTIKASTRAFFLAGEN.docx"},
    "Kommunikation": {label:"Kommunikation", source:"5 Kommunikativa kunskapsområdet.pdf"},
    "Krisstöd": {label:"Krisstöd", source:"riktlinjer-for-krisstod.pdf"},
    "Grunder": {label:"Grunder & samverkan", source:"PPT Introföreläsning.pdf / Distans HT26 Studiehandledning.pdf"}
  };

  D.quiz.push(
    {topic:"LPT",source:"LPT - distans.pdf",q:"Vilka typer av tillstånd anges i LPT-materialet som exempel på sådant som kan omfattas av APS?",a:["Endast schizofreni","Tillstånd med störd realitetsprövning eller hög suicidrisk, t.ex. psykotiska tillstånd, maniska skov och svåra depressioner","Alla former av psykisk ohälsa","Endast tillstånd som lett till brott"],c:1,e:"APS beskrivs som en juridisk term. Materialet lyfter störd realitetsprövning eller hög suicidrisk och ger bland annat psykotiska tillstånd, maniska skov och svåra depressioner som exempel."},
    {topic:"LPT",source:"LPT - distans.pdf",q:"När får ett vårdintyg utfärdas enligt LPT-föreläsningen?",a:["När personen själv önskar ett intyg","När det finns sannolika skäl för att förutsättningarna för sluten psykiatrisk tvångsvård är uppfyllda","När polisen beslutat om vård","När anhöriga kräver intagning"],c:1,e:"Föreläsningen kopplar LPT 4 § till sannolika skäl för att förutsättningarna i LPT 3 § för sluten tvångsvård är uppfyllda."},
    {topic:"LPT",source:"LPT - distans.pdf",q:"Vad förändras rättsligt när vårdintyg har utfärdats enligt kursmaterialet?",a:["Personen blir automatiskt dömd till LRV","Personen får hållas kvar på vårdinrättningen och nödvändigt tvång kan användas enligt LPT 6 §","Polisen blir ansvarig för all fortsatt vård","Ingenting förrän efter fyra veckor"],c:1,e:"Materialet anger att personen efter utfärdat vårdintyg får hållas kvar och att nödvändigt tvång får användas enligt LPT 6 §."},
    {topic:"LPT",source:"LPT - distans.pdf",q:"Vad anges om intagningsprövningen efter ankomst till vårdinrättning?",a:["Den kan vänta i en vecka","Den ska avgöras senast inom 24 timmar genom ny undersökning och inte av samma läkare som utfärdade vårdintyget","Polisen fattar intagningsbeslutet","Socialnämnden fattar beslutet"],c:1,e:"LPT-materialet anger ny undersökning och intagningsprövning senast inom 24 timmar samt att två läkare ska ha bedömt förutsättningarna."},
    {topic:"LPT",source:"LPT - distans.pdf",q:"Vad krävs enligt materialet för tvångsvård utöver fyra veckor?",a:["Beslut av förvaltningsrätten","Beslut av patrullen","Beslut av socialnämnden","Inget nytt beslut"],c:0,e:"Föreläsningen anger att domstolsbeslut från förvaltningsrätten behövs för tvångsvård utöver fyra veckor."},
    {topic:"LPT",source:"LPT - distans.pdf",q:"Vad är syftet med ett tillfälligt omhändertagande enligt LPT 47 § 1 st. i kursmaterialet?",a:["Att genomföra förhör","Att föra personen till en sjukvårdsenhet så att hälso- och sjukvårdspersonal kan ge hjälp","Att påbörja LVM-utredning","Att ersätta ett gripande"],c:1,e:"Materialet betonar att omhändertagandet sker i väntan på hjälp från hälso- och sjukvård och att personen får föras till sjukvårdsenhet."},
    {topic:"LPT",source:"LPT - distans.pdf",q:"Vilken roll har PL 11 § i LPT-föreläsningen?",a:["Polisman kan vid fara i dröjsmål omhänderta i väntan på Polismyndighetens beslut om LPT 47, om förutsättningarna föreligger och dröjsmål innebär fara","Polisman kan alltid besluta om LPT-vård","Den reglerar vårdintyg","Den reglerar utskrivning från psykiatrin"],c:0,e:"Föreläsningen beskriver PL 11 § som en fara-i-dröjsmål-lösning i väntan på myndighetens beslut enligt LPT 47 §."},

    {topic:"Handräckning",source:"Handräckning - distans.pdf",q:"Vilken grundprincip betonas för polisens handräckningar?",a:["Alla myndigheters önskemål räcker","Det krävs särskilt lagstöd och en formell begäran från behörig aktör","Polisen får bara hjälpa sjukvården","Handräckning får aldrig innebära transport"],c:1,e:"Handräckningsföreläsningen betonar särskilt lagstöd och formell begäran. Bedömning ska göras i varje enskilt fall."},
    {topic:"Handräckning",source:"Handräckning - distans.pdf",q:"Vilken situation finns uttryckligen i LPT 47 § 2 st. enligt handräckningsmaterialet?",a:["Läkare behöver hjälp för att genomföra undersökning för vårdintyg","Polis behöver hjälp av vården för förhör","Socialtjänsten vill göra hembesök utan särskilt lagstöd","Anhörig vill att personen hämtas"],c:0,e:"En av de uppräknade situationerna är hjälp på begäran av behörig läkare för att kunna genomföra undersökning för vårdintyg."},
    {topic:"Handräckning",source:"Handräckning - distans.pdf",q:"Vad lär materialet ut om tillträde till bostad vid handräckning?",a:["Handräckningsbeslutet löser alltid tillträdesfrågan automatiskt","Tillträdet ska analyseras separat; PL 20 § behandlas för att söka efter person som med laga stöd ska omhändertas","Polisen får aldrig gå in i bostad","Tillträde regleras bara i LVM"],c:1,e:"Handräckningsföreläsningen behandlar PL 20 § separat och uppmanar att inhämta beslut när det behövs. Handräckning och tillträde hålls isär."},
    {topic:"Handräckning",source:"Handräckning - distans.pdf",q:"Vad säger kursmaterialet om rutinmässiga transporter vid handräckning?",a:["Polis ska alltid köra alla transporter","Polis ska inte rutinmässigt utföra transporter; behovet av polisens särskilda befogenheter ska bedömas i det enskilda fallet","Ambulans får aldrig transportera","Transport kräver alltid LPT"],c:1,e:"Föreläsningen betonar bedömning i varje enskilt fall och att polis inte ska användas rutinmässigt för transporter."},

    {topic:"LVM",source:"LVM - distans.pdf",q:"Vilka tre huvuddelar måste vara uppfyllda enligt LVM 4 § i föreläsningen?",a:["Fortgående missbruk + vårdbehov för att komma från missbruket + behovet kan inte lösas enligt SoL/annat sätt + minst en allvarlig riskindikation","Enstaka berusning + ordningsstörning + vägran","Psykos + brott + narkotika","Hemlöshet + alkohol + arbetslöshet"],c:0,e:"LVM 4 § kräver fortgående missbruk, vårdbehov som inte kan tillgodoses frivilligt/annat sätt och någon av de angivna allvarliga riskindikationerna."},
    {topic:"LVM",source:"LVM - distans.pdf",q:"Vilken är en av riskindikationerna i LVM 4 § enligt materialet?",a:["Att personen saknar körkort","Att personen utsätter sin fysiska eller psykiska hälsa för allvarlig fara","Att personen tidigare dömts för brott","Att personen inte vill prata med polisen"],c:1,e:"LVM 4 § räknar bland annat upp allvarlig fara för fysisk eller psykisk hälsa, uppenbar risk att förstöra sitt liv eller befarad allvarlig skada på sig själv/närstående."},
    {topic:"LVM",source:"LVM - distans.pdf",q:"Vad är kärnan i LVM 13 § enligt föreläsningen?",a:["Omedelbart omhändertagande när LVM-vård sannolikt kan bli aktuell och rättens beslut inte kan avvaktas på grund av allvarlig hälsorisk eller överhängande risk för allvarlig skada","Automatiskt omhändertagande vid all narkotikapåverkan","Polisens beslut om sex månaders vård","Ett frivilligt behandlingsavtal"],c:0,e:"Materialet beskriver LVM 13 § som den akuta vägen med sannolik LVM-vård och ett behov som inte kan vänta på rättens beslut."},
    {topic:"LVM",source:"LVM - distans.pdf",q:"Vilken situation avser PL 12 a § i LVM-materialet?",a:["Skälig anledning att anta att LVM 13 § blir aktuellt och socialnämndens beslut inte kan avvaktas på grund av överhängande och allvarlig skaderisk","Varje person som är berusad","Transport efter en dom till LRV","Husrannsakan vid eget bruk"],c:0,e:"PL 12 a § beskrivs som polisens akuta omhändertagande i väntan på socialnämndens LVM 13-beslut under den angivna överhängande och allvarliga risken."},
    {topic:"LVM",source:"LVM - distans.pdf",q:"Vart ska personen skyndsamt överlämnas efter omhändertagande enligt PL 12 a § enligt föreläsningen?",a:["Polisarrest","Sjukhus","Tingsrätt","Eget hem"],c:1,e:"LVM-föreläsningen anger skyndsamt överlämnande till sjukhus och markerar att personen inte får förvaras i polisarrest med stöd av denna bestämmelse."},
    {topic:"LVM",source:"LVM - distans.pdf",q:"Vad innebär LVM 6 § för polisen enligt kursmaterialet?",a:["En möjlighet att anmäla när man vill","En skyldighet att genast anmäla till socialnämnden när någon kan antas vara i behov av LVM-vård","En skyldighet att alltid gripa personen","En sekretessregel som förbjuder kontakt med socialtjänsten"],c:1,e:"Materialet anger anmälningsskyldighet för myndigheter som regelbundet möter missbrukare och uttrycker att polisen ska anmäla möjligt LVM-vårdbehov."},
    {topic:"LVM",source:"Handräckning - distans.pdf",q:"När får en begäran om polisiär hjälp enligt LVM 45 § göras enligt handräckningsmaterialet?",a:["Alltid när transport känns praktisk","När särskilda omständigheter gör att polisens särskilda befogenheter kan behövas eller det annars finns synnerliga skäl","Endast efter dom till fängelse","Endast om personen själv vill"],c:1,e:"Föreläsningen återger begränsningen att begäran får göras när särskilda befogenheter kan behöva användas eller det annars finns synnerliga skäl."},

    {topic:"Kommunikation",source:"5 Kommunikativa kunskapsområdet.pdf",q:"Vad är grunden i förändringstrappan enligt kommunikationsmaterialet?",a:["Ultimatum","Aktivt lyssnande","Fysisk kontroll","Juridisk argumentation"],c:1,e:"Materialet beskriver aktivt lyssnande som grunden och varnar för att gå för tidigt mot problemlösning och påverkan."},
    {topic:"Kommunikation",source:"5 Kommunikativa kunskapsområdet.pdf",q:"Vad är målet med aktivt lyssnande enligt materialet?",a:["Att få personen att känna sig sedd, hörd och bekräftad och kunna bli mer öppen för information","Att visa att polisen håller med","Att vinna diskussionen snabbt","Att undvika alla känslor"],c:0,e:"Syftet är att hjälpa personen ur ett starkt känsloläge mot mer rationellt tänkande och målet är att personen känner sig sedd, hörd och bekräftad."},
    {topic:"Kommunikation",source:"5 Kommunikativa kunskapsområdet.pdf",q:"Vad betonas om aktivt lyssnande och att hålla med?",a:["De är samma sak","Aktivt lyssnande betyder inte att du håller med motparten","Du måste alltid acceptera motpartens krav","Aktivt lyssnande ska bara användas efter problemlösning"],c:1,e:"Kommunikationsmaterialet uttrycker att aktivt lyssnande inte är samma sak som att hålla med."},
    {topic:"Kommunikation",source:"5 Kommunikativa kunskapsområdet.pdf",q:"Vad går samtalstekniken 'fakta – känslor' ut på?",a:["Att ignorera känslor","Att identifiera känslor och tolkningar och separera dem från fakta för att arbeta mot faktadelen","Att bara läsa upp lagtext","Att byta samtalsämne"],c:1,e:"Materialet beskriver att känslor och tolkningar ska identifieras och skiljas från fakta."},
    {topic:"Kommunikation",source:"5 Kommunikativa kunskapsområdet.pdf",q:"Vilket vanligt fel nämns i förändringstrappan?",a:["Att ge personen för mycket tid","Att hoppa över steg och gå för tidigt till problemlösning/påverkan","Att visa närvaro","Att parafrasera"],c:1,e:"Föreläsningsmaterialet lyfter just att man ofta försöker gå mot problemlösning innan relation och förtroende byggts."},

    {topic:"Beroende",source:"Drogtecken  Symptom.pdf",q:"Vilken är den huvudsakliga effekten av centraldepressiva medel enligt drogteckenmaterialet?",a:["Hjärnan arbetar snabbare","Hjärnan och centrala nervsystemet fungerar långsammare","Pupillerna blir alltid små","Hallucinationer är alltid huvudeffekten"],c:1,e:"Centraldepressiva medel beskrivs som hämmande för centrala nervsystemet; vid högre doser kan även andning och hjärtverksamhet påverkas."},
    {topic:"Beroende",source:"Drogtecken  Symptom.pdf",q:"Vilket mönster anges för bensodiazepinpåverkan?",a:["Alkoholliknande berusning utan alkohollukt, långsamma reflexer och sluddrigt tal","Kraftigt vidgade pupiller och stark rastlöshet","Små pupiller och endast klåda","Alltid normal motorik"],c:0,e:"Bensodiazepinmaterialet anger bland annat långsamma reflexer, slapp muskulatur, sluddrigt tal och alkoholliknande berusning utan lukt."},
    {topic:"Beroende",source:"Drogtecken  Symptom.pdf",q:"Vilket psykiskt tecken finns med vid cannabis i kursmaterialet?",a:["Försämrad tids- och rumsuppfattning","Alltid medvetslöshet","Oförmåga att tala","Alltid våldsamt beteende"],c:0,e:"Cannabisbilden innehåller bland annat problem att hålla samman tankar, försämrad tids-/rumsuppfattning, förvirring och minnesstörningar."},
    {topic:"Beroende",source:"Drogtecken  Symptom.pdf",q:"Vilket pupillmönster anges för hallucinogener i materialet?",a:["Stora pupiller med normal ljusreaktion","Små pupiller utan ljusreaktion","Alltid normala pupiller","Pupiller nämns inte"],c:0,e:"Hallucinogenavsnittet anger stora pupiller med normal ljusreaktion som ett av flera tecken."},
    {topic:"Beroende",source:"Drogtecken  Symptom.pdf",q:"Vilka intagningssätt listas i drogteckenmaterialet?",a:["Oralt, absorption, injicering och inandning/rökning","Endast tabletter och injektion","Endast rökning","Endast via munnen"],c:0,e:"Materialet grupperar intagningssätt som oralt, absorption via slemhinnor, injicering och inandning/rökning."},

    {topic:"Narkotika",source:"SVAR TILL INSTUDERINGSFRÅGOR NARKOTIKASTRAFFLAGEN.docx",q:"Vilket är ett exempel på lovlig hantering av narkotikaklassat preparat enligt kursens svarsdokument?",a:["Narkotikaklassat läkemedel utskrivet på recept","Att förvara en väns amfetamin","Att sälja receptbelagd narkotika vidare","Att odla cannabis hemma"],c:0,e:"Svarsdokumentet nämner bland annat receptförskrivna narkotikaklassade läkemedel, viss polisiär hantering, hundträning, undervisning och forskning som exempel på laglig hantering."},
    {topic:"Narkotika",source:"SVAR TILL INSTUDERINGSFRÅGOR NARKOTIKASTRAFFLAGEN.docx",q:"Zara förvarar medvetet 100 gram amfetamin åt sin pojkvän men äger inte narkotikan. Vad anger svarsdokumentet?",a:["Inget brott eftersom hon inte äger narkotikan","Narkotikabrott genom förvaring enligt NSL 1 § punkt 4","Endast medhjälp till eget bruk","Endast försök"],c:1,e:"Kursens facit anger att hon begår brott genom förvaring enligt NSL 1 § punkt 4."},
    {topic:"Narkotika",source:"SVAR TILL INSTUDERINGSFRÅGOR NARKOTIKASTRAFFLAGEN.docx",q:"Om pojkvännen i stället gömmer narkotikan på Zaras vind utan hennes vetskap, vad anger svarsdokumentet?",a:["Hon har automatiskt narkotikabrott","Hon har inte uppsåt och ska inte dömas bara för att narkotikan finns där","Hon döms alltid för grovt brott","Hon blir ansvarig som fastighetsägare"],c:1,e:"Svarsdokumentet betonar att narkotikabrott är ett uppsåtligt brott och att vetskap/uppsåt måste kunna styrkas."},
    {topic:"Narkotika",source:"SVAR TILL INSTUDERINGSFRÅGOR NARKOTIKASTRAFFLAGEN.docx",q:"Vilket lagstöd anger kursens svarsdokument för medtagande till polisstation eller sjukhus för kroppsbesiktning/provtagning?",a:["RB 28:13 a","LPT 47","LVM 13","PL 21"],c:0,e:"Svarsdokumentet anger RB 28 kap. 13 a § för medtagandet och anger polisman som beslutsfattare i den fråga som ställs."},
    {topic:"Narkotika",source:"SVAR TILL INSTUDERINGSFRÅGOR NARKOTIKASTRAFFLAGEN.docx",q:"Vilken bevismässig distinktion betonar facit mellan eget bruk och husrannsakan efter narkotika?",a:["Eget bruk ger automatiskt rätt att leta efter innehav","Provtagning kan avse eget bruk, medan husrannsakan efter narkotika kräver egen grund för misstanke om innehav","Husrannsakan kan aldrig göras i narkotikaärenden","Blodprov kräver alltid misstanke om försäljning"],c:1,e:"Kursens svar skiljer tydligt mellan bevisning för eget bruk genom urin/blod och sökande efter narkotika, där misstanke om innehav behövs."},

    {topic:"Krisstöd",source:"riktlinjer-for-krisstod.pdf",q:"Vilken händelse anges som exempel på när arbetsgivaren ska initiera krisstöd?",a:["Efter bruk av tjänstevapen mot person, varningsskott eller vådaskott","Efter varje vanligt administrationsmöte","Enbart efter sjukskrivning","Endast om medarbetaren varit chef"],c:0,e:"Riktlinjen listar bland annat hot/våld mot liv, allvarliga skador/dödsfall, allvarliga olyckor och bruk av tjänstevapen som exempel."},
    {topic:"Krisstöd",source:"riktlinjer-for-krisstod.pdf",q:"Hur beskriver riktlinjen individuella reaktioner efter en allvarlig händelse?",a:["Alla reagerar på samma sätt","Samma händelse kan påverka individer olika och stödbehovet varierar","Endast oerfarna medarbetare påverkas","Krisreaktioner ska alltid bearbetas direkt i detalj"],c:1,e:"Riktlinjen betonar individuella skillnader och tar upp bland annat socialt nätverk, erfarenhet, tidigare händelser och pågående belastning."},
    {topic:"Krisstöd",source:"riktlinjer-for-krisstod.pdf",q:"Vilken ordning ligger närmast psykologisk första hjälp i riktlinjen?",a:["Säkerhet/trygghet → lyssna och lugna → information/socialt stöd → identifiera fortsatt behov","Detaljerad känslobearbetning → media → hemgång","Ensamhet → disciplin → rapport","Test → förhör → prestation"],c:0,e:"Riktlinjen beskriver först säkerhet och trygghet, sedan lyssnande/lugnande, information, socialt stöd och fortsatt behovsbedömning."},

    {topic:"Grunder",source:"Distans HT26 Studiehandledning.pdf",q:"Vilket arbetssätt speglar kursens upplägg bäst enligt studiehandledningen?",a:["Enbart diagnoskunskap","Teori om psykisk ohälsa och juridik kombineras med konkreta exempel, narkotikablock, kommunikation och tillämpade övningar","Enbart straffrätt","Enbart självstudier utan tillämpning"],c:1,e:"Studiehandledningen beskriver både teoretiska föreläsningar, juridik, handledning med konkreta exempel, drogtecken/narkotika och praktisk slutövning."}
  );

  D.caseScenarios = [
    {
      id:"v2-livsleda", title:"Brott + narkotikapåverkan + livsleda", difficulty:"Svår", topic:"LPT",
      scenario:"Ni ingriper mot en person misstänkt för ett brott av normalgraden. Personen är uppenbart narkotikapåverkad, mår tydligt psykiskt dåligt och säger att livet inte längre är värt att leva.",
      facts:["Brottsmisstanke","Narkotikapåverkan","Uttalad livsleda","Flera möjliga rättsgrunder"],
      source:["LPT - distans.pdf","Föreläsning Affektiva HT26.pdf","Åhörarkopior Beroendeproblematik polisutbildning HT2025.pdf","5 Kommunikativa kunskapsområdet.pdf"],
      steps:[
        {phase:"1 · Prioritering",prompt:"Vad bör styra det första operativa tänket?",choices:[
          {t:"Brottsutredningen ensam, eftersom ett brott alltid måste färdigutredas först.",ok:false,why:"Kursen tränar samsjuklighet och samtidiga spår. Uttalad livsleda och påverkan innebär att akut liv/medicinsk/psykiatrisk risk måste hanteras omedelbart."},
          {t:"Säkra situationen och bedöm akut livs-/medicinsk/psykiatrisk risk samtidigt som brottsspåret hålls levande.",ok:true,why:"Det fångar kursens helhet: säkerhet och akut risk först, utan att förlora brottsmisstanken."},
          {t:"Bestäm direkt att LPT alltid gäller när någon uttrycker livsleda.",ok:false,why:"LPT kräver särskilda rekvisit. Livsleda är en viktig risksignal men är inte i sig automatiskt hela den rättsliga grunden."}
        ]},
        {phase:"2 · Iakttagelser",prompt:"Vilken information är särskilt värdefull i den fortsatta bedömningen?",choices:[
          {t:"Exakta uttalanden om livsleda/suicid, beteende, realitetsprövning, påverkan och medicinska tecken.",ok:true,why:"Materialet kopplar suicidrisk, APS-resonemang och påverkan till helhetsbedömningen. Konkreta iakttagelser är mer användbara än etiketter."},
          {t:"Enbart vilken narkotika personen säger sig ha tagit.",ok:false,why:"Preparatuppgift kan vara viktig men kursen betonar mönster och helhetsbild, inte en enda uppgift."},
          {t:"Endast personens tidigare diagnoser.",ok:false,why:"Tidigare diagnoser kan ge kontext men den aktuella riskbilden och de faktiska iakttagelserna är centrala."}
        ]},
        {phase:"3 · Rättsligt spår",prompt:"Hur bör de olika rättsgrunderna hanteras?",choices:[
          {t:"Använd samma frihetsberövandegrund för brottet, påverkan och psykisk ohälsa.",ok:false,why:"Kursen betonar att varje tvångsåtgärd behöver sin egen rättsliga grund."},
          {t:"Håll isär straffprocessuellt frihetsberövande, medicinsk/psykiatrisk akutbedömning och eventuell LPT-grund; välj grund för respektive åtgärd.",ok:true,why:"Detta motsvarar kursens juridiska metod: separata rekvisit för separata åtgärder, men praktiskt samordnad hantering."},
          {t:"LOB måste alltid väljas när personen är narkotikapåverkad.",ok:false,why:"Påverkan innebär inte att LOB automatiskt är den relevanta eller enda grunden. Materialet tränar val mellan flera möjliga spår."}
        ]},
        {phase:"4 · Kommunikation",prompt:"Vilket bemötande ligger närmast materialet?",choices:[
          {t:"Gå direkt till problemlösning och ge många instruktioner.",ok:false,why:"Förändringstrappan varnar för att hoppa över aktivt lyssnande och förtroendebyggande."},
          {t:"Var lugn och tydlig, lyssna aktivt, bekräfta att du hört personen och håll instruktionerna begripliga.",ok:true,why:"Det kombinerar aktivt lyssnande med kursens bemötandeprinciper vid psykisk kris."},
          {t:"Undvik att prata om det personen säger om döden.",ok:false,why:"Kursmaterialet lyfter suicidrisk som en central riskfråga och betonar att våga möta och lyssna."}
        ]},
        {phase:"5 · Överlämning",prompt:"Vilket mål är mest kursenligt?",choices:[
          {t:"En säker övergång till rätt vård/bedömning när grund finns, med fortsatt korrekt hantering av brottsspåret.",ok:true,why:"Kursens syntes är att skydda liv och hälsa, använda rätt juridisk grund och samordna överlämning utan att bortse från brottet."},
          {t:"Avsluta alltid brottsärendet när vård blir aktuell.",ok:false,why:"Vårdbehov och brottsprocess är olika spår. Materialet säger inte att det ena automatiskt undanröjer det andra."},
          {t:"Förhör alltid personen klart före vårdkontakt.",ok:false,why:"Akut risk kan kräva prioritering före fullständig brottshantering."}
        ]}
      ],
      takeaway:"Tänk parallellt men besluta separat: säkerhet och akut risk → konkreta iakttagelser → rätt grund för varje åtgärd → lugn kommunikation → trygg överlämning."
    },
    {
      id:"v2-handrackning", title:"Läkare behöver hjälp i bostad för vårdintyg", difficulty:"Svår", topic:"Handräckning",
      scenario:"En läkare ska genomföra en undersökning för vårdintyg i en bostad. En formell handräckningsbegäran har beviljats. Personen öppnar inte dörren och anhöriga beskriver självskadebeteende och tablettmissbruk.",
      facts:["Vårdintygsundersökning","Formell handräckning","Bostad","Tillträdesfråga"],
      source:["Handräckning - distans.pdf","LPT - distans.pdf"],
      steps:[
        {phase:"1 · Handräckningen",prompt:"Vad är den juridiska utgångspunkten?",choices:[
          {t:"Handräckning kräver särskilt lagstöd och formell begäran; LPT 47 § 2 st. innehåller hjälp för att läkare ska kunna genomföra vårdintygsundersökning.",ok:true,why:"Det är direkt den struktur som handräckningsföreläsningen beskriver."},
          {t:"Polisens allmänna serviceskyldighet räcker för tvångsåtgärder.",ok:false,why:"Materialet betonar att särskilt lagstöd krävs för handräckning."},
          {t:"Anhörigas önskemål är själva handräckningsbeslutet.",ok:false,why:"Begäran måste komma från behörig aktör enligt den särskilda bestämmelsen."}
        ]},
        {phase:"2 · Bostaden",prompt:"Vad händer med tillträdesfrågan?",choices:[
          {t:"Den är automatiskt löst av handräckningsbeslutet.",ok:false,why:"Kursmaterialet skiljer handräckning från tillträde."},
          {t:"Analysera tillträdet separat; PL 20 § behandlas i materialet för att söka efter person som med laga stöd ska omhändertas och beslut ska inhämtas när det behövs.",ok:true,why:"Detta är den uttryckliga undervisningspoängen i handräckningsföreläsningen."},
          {t:"Polis kan aldrig få tillträde till bostad vid handräckning.",ok:false,why:"Materialet beskriver i stället ett särskilt rättsligt stöd och en beslutsfråga."}
        ]},
        {phase:"3 · Roller",prompt:"Vem gör den medicinska bedömningen för vårdintyg?",choices:[
          {t:"Läkaren; polisens roll är att lämna den hjälp som lagstödet medger.",ok:true,why:"LPT-materialet beskriver vårdintyg som läkarens undersökning och handräckningen som polisens bistånd."},
          {t:"Patrullen utfärdar vårdintyg på plats.",ok:false,why:"Vårdintyg är en medicinsk/läkaruppgift enligt materialet."},
          {t:"Anhöriga beslutar om tvångsvård.",ok:false,why:"Anhöriguppgifter kan vara relevanta men de beslutar inte vårdintyg eller tvångsvård."}
        ]},
        {phase:"4 · Efter vårdintyg",prompt:"Vad säger materialet om transport när vårdintyg har utfärdats?",choices:[
          {t:"LPT 47 § 2 st. innehåller hjälp på begäran av behörig läkare/chefsöverläkare för att föra patienten till sjukvårdsinrättning efter vårdintyg.",ok:true,why:"Detta är en av de uppräknade handräckningssituationerna."},
          {t:"Polis saknar alltid roll efter vårdintyg.",ok:false,why:"Tvärtom finns en särskild handräckningspunkt för transport efter vårdintyg."},
          {t:"Vårdintyget är samma sak som domstolens beslut om fyra månaders vård.",ok:false,why:"Materialet skiljer vårdintyg, intagningsprövning och senare domstolsprövning."}
        ]}
      ],
      takeaway:"Handräckning, tillträde och medicinsk bedömning är tre olika frågor. Håll dem isär."
    },
    {
      id:"v2-psykos", title:"Paranoid psykos och stark rädsla", difficulty:"Medel", topic:"Psykos",
      scenario:"En person säger att grannarna har kameror i väggarna och att polisen är del av en plan. Personen är starkt rädd och vaksam men inte våldsam när ni kommer.",
      facts:["Vanföreställning","Rädsla","Misstro","Ingen omedelbar aggression"],
      source:["psykos distansutb-1.pdf","5 Kommunikativa kunskapsområdet.pdf","LPT - distans.pdf"],
      steps:[
        {phase:"1 · Symtom",prompt:"Vilket symtomområde ligger närmast beskrivningen?",choices:[
          {t:"Vanföreställning – ett positivt psykotiskt symtom.",ok:true,why:"Psykosföreläsningen listar bland annat paranoia/förföljelseidéer som vanföreställningar och positiva symtom."},
          {t:"Negativt symtom i form av tillbakadragenhet.",ok:false,why:"Scenariot beskriver främst en tillkommen föreställning, inte förlust av förmåga."},
          {t:"ADHD:s kärnsymtom.",ok:false,why:"Ouppmärksamhet, hyperaktivitet och impulsivitet är ADHD:s kärnsymtom i materialet."}
        ]},
        {phase:"2 · Bemötande",prompt:"Vilken replikstrategi är bäst för kontakten?",choices:[
          {t:"Säg att kamerorna absolut finns så att personen lugnar sig.",ok:false,why:"Det förstärker sakpåståendet. Kursens bemötande handlar om att bekräfta personen/känslan, inte vanföreställningen."},
          {t:"Lyssna och bekräfta rädslan, var lugn, saklig och tydlig utan att gå in i en sanningskamp om kamerorna.",ok:true,why:"Det kombinerar psykosbemötande med aktivt lyssnande."},
          {t:"Argumentera detaljerat tills personen medger att den har fel.",ok:false,why:"Det riskerar att öka misstro och konflikt och hoppar förbi relationsskapandet."}
        ]},
        {phase:"3 · LPT-frågan",prompt:"Vad måste finnas för att LPT 47 § 1 st. ska bli aktuellt enligt materialet?",choices:[
          {t:"Psykotiska symtom räcker alltid.",ok:false,why:"LPT 47 har flera rekvisit."},
          {t:"Skälig anledning att anta APS och dessutom fara för annans säkerhet/eget liv eller annat omedelbart hjälpbehov.",ok:true,why:"Det är rekvisitstrukturen som föreläsningen återger."},
          {t:"En tidigare psykiatrisk diagnos och en anhörig på plats.",ok:false,why:"Det är inte den rekvisitstruktur som anges."}
        ]}
      ],
      takeaway:"Psykosigenkänning är inte samma sak som automatiskt LPT. Bekräfta känslan, bedöm risk och pröva rekvisiten."
    },
    {
      id:"v2-mani", title:"Maniskt skov i en stökig lägenhet", difficulty:"Medel", topic:"Affektiva",
      scenario:"En person pratar oavbrutet, hoppar mellan projekt, uppger nästan ingen sömn senaste dagarna och blir snabbt irriterad när någon säger emot. Flera anhöriga pratar samtidigt och TV:n står högt.",
      facts:["Tempo ↑","Sömnbehov ↓","Irritabilitet","Hög stimuli"],
      source:["Föreläsning Affektiva HT26.pdf","LPT - distans.pdf"],
      steps:[
        {phase:"1 · Igenkänning",prompt:"Vad passar bäst med materialets manibild?",choices:[
          {t:"Högt tempo, rusande tankar, pratsamhet och minskat sömnbehov.",ok:true,why:"Det är centrala tecken som listas i föreläsningen."},
          {t:"Små pupiller och långsam andning.",ok:false,why:"Det ligger närmare opiatmönstret i drogteckenmaterialet."},
          {t:"Tillbakadragenhet och avtrubbade affekter.",ok:false,why:"Det är mer typiskt för negativa psykotiska symtom."}
        ]},
        {phase:"2 · Miljö",prompt:"Vilken enkel åtgärd ligger närmast bemötandet?",choices:[
          {t:"Öka antalet personer som pratar för att dela upp uppmärksamheten.",ok:false,why:"Materialet rekommenderar begränsning av sinnesintryck och minskad stimuli."},
          {t:"Skapa lugnare miljö, färre stimuli och håll kommunikationen saklig.",ok:true,why:"Det är direkt i linje med föreläsningens bemötande."},
          {t:"Använd ironi för att bryta tempot.",ok:false,why:"Det stöds inte av materialet och kan öka konflikt."}
        ]},
        {phase:"3 · Risk",prompt:"Vilken risk påminner föreläsningen särskilt om?",choices:[
          {t:"Suicidrisken kan vara förhöjd.",ok:true,why:"Det anges uttryckligen i materialet om förhöjt stämningsläge."},
          {t:"Suicidrisk förekommer aldrig vid mani.",ok:false,why:"Det motsäger föreläsningen."},
          {t:"Enda risken är ekonomiska beslut.",ok:false,why:"Materialet lyfter även snabb irritabilitet/aggressivitet och förhöjd suicidrisk."}
        ]}
      ],
      takeaway:"Vid mani är ditt tempo och miljön en del av bemötandet: lugn, saklighet, färre stimuli och aktiv riskbedömning."
    },
    {
      id:"v2-lvm", title:"Fortgående missbruk och akut skaderisk", difficulty:"Svår", topic:"LVM",
      scenario:"En vuxen person med långvarigt och fortgående alkohol-/narkotikamissbruk har upprepade gånger avbrutit frivilliga insatser. Nu bedöms det finnas en överhängande och allvarlig risk att personen kommer till skada. Socialnämndens beslut om omedelbart omhändertagande kan inte inväntas.",
      facts:["Fortgående missbruk","Frivilliga alternativ otillräckliga","Akut skaderisk","Beslut kan inte avvaktas"],
      source:["LVM - distans.pdf","Handräckning - distans.pdf"],
      steps:[
        {phase:"1 · LVM 4",prompt:"Vilken struktur ska du känna igen bakom LVM-vård?",choices:[
          {t:"Fortgående missbruk + vårdbehov som inte kan lösas enligt SoL/annat sätt + minst en allvarlig riskindikation.",ok:true,why:"Det är strukturen i LVM 4 § som återges i föreläsningen."},
          {t:"All berusning leder till LVM.",ok:false,why:"LVM kräver ett fortgående missbruk och ytterligare rekvisit."},
          {t:"Brottsmisstanke krävs alltid.",ok:false,why:"Brott är inte ett krav i LVM 4 §-strukturen."}
        ]},
        {phase:"2 · Akut väg",prompt:"Vilken bestämmelse beskriver polisens akuta omhändertagande i den här situationstypen enligt föreläsningen?",choices:[
          {t:"PL 12 a §, om det finns skälig anledning att anta att LVM 13 § blir aktuellt och beslutet inte kan avvaktas på grund av överhängande och allvarlig skaderisk.",ok:true,why:"Det är den exakta funktion som LVM-föreläsningen kopplar till PL 12 a §."},
          {t:"LPT 47 § automatiskt eftersom missbruk är psykisk ohälsa.",ok:false,why:"LPT och LVM har olika rekvisit och huvudmän."},
          {t:"RB 28:12 eftersom provtagning kan behövas.",ok:false,why:"Det är en annan rättslig fråga."}
        ]},
        {phase:"3 · Efter omhändertagandet",prompt:"Vart ska personen enligt materialet skyndsamt överlämnas med stöd av PL 12 a §?",choices:[
          {t:"Sjukhus.",ok:true,why:"Föreläsningen anger sjukhus och markerar att personen inte får förvaras i polisarrest enligt detta stöd."},
          {t:"Polisarrest tills nästa vardag.",ok:false,why:"Materialet markerar uttryckligen att PL 12 a-omhändertagen inte får förvaras i polisarrest."},
          {t:"Direkt till domstol.",ok:false,why:"PL 12 a syftar på skyndsamt överlämnande till sjukhus."}
        ]},
        {phase:"4 · Samverkan",prompt:"Vilken skyldighet ska du också komma ihåg vid möjligt LVM-vårdbehov?",choices:[
          {t:"LVM 6 § – genast anmäla till socialnämnden när någon kan antas behöva vård enligt lagen.",ok:true,why:"Det är den anmälningsskyldighet som föreläsningen betonar."},
          {t:"Ingen kontakt får tas med socialtjänsten på grund av sekretess.",ok:false,why:"Materialet beskriver uttryckligen anmälningsskyldigheten."},
          {t:"Endast sjukvården får kontakta socialtjänsten.",ok:false,why:"Polis omfattas enligt föreläsningens tillämpning."}
        ]}
      ],
      takeaway:"LVM har en ordinarie och en akut väg. PL 12 a är polisens mycket specifika akutstöd inför socialnämndens LVM 13-beslut."
    },
    {
      id:"v2-narkotika", title:"Eget bruk, provtagning och önskad husrannsakan", difficulty:"Svår", topic:"Narkotika",
      scenario:"En person visar tydliga tecken på narkotikapåverkan och det finns grund för skälig misstanke om eget bruk. En kollega vill direkt göra husrannsakan efter narkotika i personens bostad.",
      facts:["Skälig misstanke eget bruk","Kroppsbesiktning","Önskad husrannsakan","Separata tvångsmedel"],
      source:["SVAR TILL INSTUDERINGSFRÅGOR NARKOTIKASTRAFFLAGEN.docx"],
      steps:[
        {phase:"1 · Eget bruk",prompt:"Vilket bevismedel lyfter svarsdokumentet särskilt för eget bruk?",choices:[
          {t:"Urin- eller blodprov genom kroppsbesiktning.",ok:true,why:"Facit betonar att eget bruk bevisas genom urin eller blodprov och anger RB 28:12 för kroppsbesiktning."},
          {t:"Husrannsakan är alltid tillräcklig.",ok:false,why:"Husrannsakan kan söka efter innehav men bevisar inte automatiskt eget bruk."},
          {t:"Enbart anonyma tips.",ok:false,why:"Tips kan bidra till misstanke, men svarsdokumentet lyfter provtagning för själva bruket."}
        ]},
        {phase:"2 · Husrannsakan",prompt:"Ger misstanke om eget bruk automatiskt grund för husrannsakan efter narkotika?",choices:[
          {t:"Ja, alltid.",ok:false,why:"Svarsdokumentet säger uttryckligen nej."},
          {t:"Nej. För att leta efter narkotika krävs egen misstanke om innehav; eget bruk kan tillsammans med andra uppgifter bidra till den misstanken.",ok:true,why:"Detta är precis distinktionen i kursens facit."},
          {t:"Nej, husrannsakan får aldrig användas i narkotikaärenden.",ok:false,why:"Facit säger inte det; det krävs rätt grund för innehav."}
        ]},
        {phase:"3 · Medtagande",prompt:"Vilket stöd anger svarsdokumentet för att ta med personen till provtagningsplats?",choices:[
          {t:"RB 28:13 a.",ok:true,why:"Det är det lagrum som anges i kursens svar på frågan om medtagande."},
          {t:"LPT 47.",ok:false,why:"Det är psykiatrisk tvångsvård och har en annan funktion."},
          {t:"LVM 45.",ok:false,why:"Det gäller handräckning inom LVM och inte denna provtagningssituation."}
        ]}
      ],
      takeaway:"Eget bruk, kroppsbesiktning, medtagande och husrannsakan är separata rättsliga frågor. Bygg aldrig kedjan på automatik."
    },
    {
      id:"v2-opiat", title:"Små pupiller och långsam andning", difficulty:"Lätt", topic:"Beroende",
      scenario:"En person är mycket slö, har hängande ögonlock, talar lågt och släpigt, har mycket små pupiller och långsam andning.",
      facts:["Små pupiller","Sömnighet","Släpigt tal","Andning ↓"],
      source:["Drogtecken  Symptom.pdf"],
      steps:[
        {phase:"1 · Mönster",prompt:"Vilken kategori passar bäst enligt drogteckenmaterialet?",choices:[
          {t:"Opiater.",ok:true,why:"Materialet beskriver små/sammandragna pupiller, sömnighet och långsam andning vid opiater."},
          {t:"Centralstimulerande medel.",ok:false,why:"Där ses snarare ökad aktivitet och vidgade pupiller."},
          {t:"Cannabis.",ok:false,why:"Cannabisbilden har ofta utvidgade pupiller och blodsprängda/glansiga ögon."}
        ]},
        {phase:"2 · Prioritet",prompt:"Vad är viktigast i själva risksorteringen?",choices:[
          {t:"Att först bestämma exakt vilket opiatpreparat det är.",ok:false,why:"Kursens drogteckenmaterial lär ut mönster och pekar ut andningspåverkan som en viktig risk."},
          {t:"Att uppmärksamma andningspåverkan och prioritera medicinsk risk/bedömning.",ok:true,why:"Långsam andning är den allvarliga risksignal som bör väga tungt i helhetsbedömningen."},
          {t:"Att vänta på att pupillerna ändrar storlek.",ok:false,why:"Det är inte ett rimligt prioriteringsmål i materialets riskbild."}
        ]}
      ],
      takeaway:"Drogtecken används för mönsterigenkänning. När andningen är påverkad är den medicinska risken viktigare än etiketten på preparatet."
    },
    {
      id:"v2-autism", title:"Autism och sensorisk överbelastning", difficulty:"Medel", topic:"NPF",
      scenario:"Vid en kontroll blir en person mycket stressad när två poliser ställer frågor samtidigt. Personen fastnar i detaljer, tolkar ett skämt bokstavligt och reagerar starkt på blåljus och ljud runt omkring.",
      facts:["Många frågor samtidigt","Detaljfokus","Bokstavlig tolkning","Sensorisk belastning"],
      source:["np.pdf"],
      steps:[
        {phase:"1 · Anpassning",prompt:"Vilken förändring ligger närmast NPF-materialet?",choices:[
          {t:"En person pratar i taget, konkret språk och tydlig struktur.",ok:true,why:"Autismmaterialet lyfter konkret kommunikation, svårigheter med ironi och belastning av oförutsägbarhet."},
          {t:"Fler personer ställer frågor snabbare.",ok:false,why:"Det ökar informations- och sensorisk belastning."},
          {t:"Använd fler skämt för att lätta upp.",ok:false,why:"Materialet påminner om att ironi och skämt kan misstolkas."}
        ]},
        {phase:"2 · Miljö",prompt:"Vad kan vara hjälpsamt om situationen tillåter?",choices:[
          {t:"Minska onödigt sensoriskt stimuli och gör nästa steg förutsägbart.",ok:true,why:"Detta följer föreläsningens bemötande vid autism."},
          {t:"Öka oväntade moment för att testa flexibilitet.",ok:false,why:"Oförutsägbarhet kan enligt materialet bidra till starka reaktioner."},
          {t:"Undvik all information om vad som ska hända.",ok:false,why:"Förutsägbarhet och tydlighet är snarare hjälpsamt."}
        ]}
      ],
      takeaway:"Vid NPF kan polisens sätt att kommunicera och den sensoriska miljön avgöra om situationen lugnas eller eskalerar."
    },
    {
      id:"v2-krisstod", title:"Efter bruk av tjänstevapen", difficulty:"Medel", topic:"Krisstöd",
      scenario:"Efter en allvarlig händelse har en medarbetare brukat tjänstevapen mot person. Kollegor reagerar olika: en vill prata direkt, en annan vill mest ha praktisk information och lugn.",
      facts:["Allvarlig händelse","Tjänstevapen","Olika reaktioner","Arbetsgivaransvar"],
      source:["riktlinjer-for-krisstod.pdf"],
      steps:[
        {phase:"1 · Initiering",prompt:"Vad säger riktlinjen om denna händelsetyp?",choices:[
          {t:"Den är ett exempel på när arbetsgivaren ska initiera krisstöd.",ok:true,why:"Bruk av tjänstevapen mot person, varningsskott eller vådaskott listas uttryckligen."},
          {t:"Krisstöd får endast ges om medarbetaren sjukskriver sig.",ok:false,why:"Det är inte riktlinjens modell."},
          {t:"Endast företagshälsovården får reagera.",ok:false,why:"Riktlinjen beskriver en hel stödorganisation med chef, krisstödshandledare och andra resurser."}
        ]},
        {phase:"2 · Första stöd",prompt:"Vilket förhållningssätt ligger närmast modern krisstödsprincip i dokumentet?",choices:[
          {t:"Tvinga alla att omedelbart berätta känslorna i detalj.",ok:false,why:"Riktlinjen säger att fokus har flyttats från tidig emotionell bearbetning till stöd efter individuella behov."},
          {t:"Säkerhet och trygghet först, därefter lyssna/lugna, ge information och socialt stöd utifrån individuellt behov.",ok:true,why:"Det motsvarar psykologisk första hjälp i riktlinjen."},
          {t:"Alla ska få exakt samma stödinsats oavsett reaktion.",ok:false,why:"Dokumentet betonar att samma händelse påverkar individer olika."}
        ]}
      ],
      takeaway:"Krisstöd är individanpassat och återhämtningsinriktat: säkerhet, trygghet, information, socialt stöd och uppföljning."
    }
  ];

  D.lawGuides = [
    {
      id:"lpt-akut",title:"LPT – akut polisiärt omhändertagande",icon:"◆",source:["LPT - distans.pdf"],
      intro:"Träna rekvisitstrukturen för LPT 47 § 1 st. och PL 11 § så som den presenteras i kursmaterialet.",
      start:"q1",
      nodes:{
        q1:{q:"Finns skälig anledning att anta att personen lider av en allvarlig psykisk störning (APS)?",help:"APS är en juridisk term. Materialet kopplar den bland annat till störd realitetsprövning eller hög suicidrisk.",yes:"q2",no:"end-no-aps"},
        q2:{q:"Är personen farlig för annans personliga säkerhet eller eget liv, eller behöver personen i övrigt omedelbar hjälp?",help:"LPT 47 § 1 st. kräver APS-misstanken OCH minst ett av dessa akuta hjälp-/farorekvisit.",yes:"q3",no:"end-no-47"},
        q3:{q:"Kan Polismyndighetens beslut om LPT 47 § inväntas utan fara i dröjsmål?",help:"LPT-föreläsningen behandlar PL 11 § när förutsättningarna för LPT 47 föreligger men dröjsmål med myndighetens beslut innebär fara.",yes:"end-lpt47",no:"end-pl11"},
        "end-no-aps":{end:true,status:"Ingen LPT 47-grund i denna studiegren",text:"Om APS-rekvisitet inte kan antas vara uppfyllt ger den här beslutsgrenen inte stöd för LPT 47 §. Andra frivilliga, medicinska eller rättsliga vägar kan behöva övervägas beroende på situationen."},
        "end-no-47":{end:true,status:"APS-misstanke räcker inte ensam",text:"LPT 47 § 1 st. kräver enligt materialet även fara för annan/eget liv eller annat omedelbart hjälpbehov."},
        "end-lpt47":{end:true,status:"Studieutfall: LPT 47 § 1 st.",text:"Materialet anger att Polismyndigheten får tillfälligt omhänderta personen i väntan på att hälso- och sjukvårdspersonal kan ge hjälp. Syftet är att föra personen till en sjukvårdsenhet som kan ge stöd och behandling."},
        "end-pl11":{end:true,status:"Studieutfall: PL 11 § i väntan på LPT 47-beslut",text:"Föreläsningen beskriver att polisman vid fara i dröjsmål kan omhänderta i väntan på Polismyndighetens beslut, när LPT 47-förutsättningarna föreligger och dröjsmål innebär fara för liv/hälsa eller annan fara."}
      }
    },
    {
      id:"lpt-hand",title:"LPT – handräckning & tillträde",icon:"⌂",source:["Handräckning - distans.pdf","LPT - distans.pdf"],
      intro:"Skilj mellan formell handräckning, vårdintygsfas och eventuell tillträdesfråga.",start:"q1",
      nodes:{
        q1:{q:"Finns en formell begäran från behörig aktör med särskilt lagstöd?",help:"Handräckningsföreläsningen betonar särskilt lagstöd och formell begäran.",yes:"q2",no:"end-no-request"},
        q2:{q:"Gäller begäran att behörig läkare behöver hjälp för att kunna genomföra undersökning för vårdintyg?",help:"Detta är en uttrycklig situation i LPT 47 § 2 st.",yes:"q-access",no:"q3"},
        q3:{q:"Har vårdintyg utfärdats och gäller begäran transport till sjukvårdsinrättning?",help:"LPT 47 § 2 st. innehåller även hjälp för transport efter utfärdat vårdintyg på behörig begäran.",yes:"q-access",no:"end-other-hand"},
        "q-access":{q:"Behöver polisen bereda sig tillträde till bostad/utrymme för att finna personen?",help:"Kursmaterialet behandlar tillträdet separat och kopplar PL 20 § till sökande efter person som med laga stöd ska omhändertas.",yes:"end-pl20",no:"end-hand"},
        "end-no-request":{end:true,status:"Ingen handräckningsgrund etablerad i denna guide",text:"Allmän hjälp/service ersätter inte kravet på särskilt lagstöd för tvångsmässig handräckning."},
        "end-other-hand":{end:true,status:"Kontrollera vilken särskild handräckningspunkt som gäller",text:"LPT 47 § 2 st. innehåller flera andra situationer, t.ex. återförande och förflyttning. Guiden tränar främst vårdintygsundersökning och transport efter vårdintyg."},
        "end-pl20":{end:true,status:"Studieutfall: handräckning + separat PL 20-fråga",text:"Materialet säger att handräckning och tillträde ska hållas isär. PL 20 § behandlas för tillträde när en person med laga stöd ska omhändertas; beslut ska inhämtas enligt materialets ordning, med särskild regel för brådskande fall."},
        "end-hand":{end:true,status:"Studieutfall: LPT-handräckning",text:"Polisen lämnar den lagreglerade hjälpen inom ramen för begäran. Läkaren ansvarar för den medicinska vårdintygsbedömningen."}
      }
    },
    {
      id:"lvm",title:"LVM – ordinarie eller akut väg",icon:"↯",source:["LVM - distans.pdf","Handräckning - distans.pdf"],
      intro:"Träna LVM 4 §, LVM 13 §, PL 12 a § och anmälningsskyldigheten i LVM 6 §.",start:"q1",
      nodes:{
        q1:{q:"Finns ett fortgående missbruk av alkohol, narkotika eller flyktiga lösningsmedel och ett vårdbehov för att komma ifrån missbruket?",help:"Detta är första delen av LVM 4 § i föreläsningen.",yes:"q2",no:"end-no-lvm"},
        q2:{q:"Kan vårdbehovet tillgodoses enligt socialtjänstlagen eller på annat sätt?",help:"LVM 4 § kräver att vårdbehovet inte kan lösas frivilligt/annat sätt.",yes:"end-vol",no:"q3"},
        q3:{q:"Finns minst en specialindikation: allvarlig fara för fysisk/psykisk hälsa, uppenbar risk att förstöra sitt liv, eller befarad allvarlig skada på sig själv/närstående?",help:"Dessa tre alternativ återges i LVM 4 §-föreläsningen.",yes:"q4",no:"end-no-risk"},
        q4:{q:"Är situationen så akut att rättens beslut inte kan avvaktas på grund av allvarlig hälsoförsämring eller överhängande risk för allvarlig skada?",help:"Detta för in LVM 13 § – omedelbart omhändertagande.",yes:"q5",no:"end-ordinary"},
        q5:{q:"Kan socialnämndens beslut enligt LVM 13 § inväntas utan överhängande och allvarlig risk att personen kommer till skada?",help:"PL 12 a § behandlar polisens akuta omhändertagande när socialnämndens beslut inte kan avvaktas av just denna risk.",yes:"end-lvm13",no:"end-pl12a"},
        "end-no-lvm":{end:true,status:"LVM 4-strukturen är inte etablerad",text:"Enstaka berusning eller ett problematiskt bruk är inte i sig samma sak som den fulla LVM 4-strukturen i materialet."},
        "end-vol":{end:true,status:"Frivillig väg är utgångspunkten",text:"SoL och LVM-materialet betonar frivillighet. LVM 4 § kräver att vårdbehovet inte kan tillgodoses enligt SoL eller på annat sätt."},
        "end-no-risk":{end:true,status:"Ingen specialindikation i denna studiegren",text:"LVM 4 § kräver även någon av de allvarliga riskindikationerna."},
        "end-ordinary":{end:true,status:"Studieutfall: LVM 4 § – ordinarie vägen",text:"Socialtjänsten utreder och ansöker hos förvaltningsrätten. Kom ihåg LVM 6 §: myndigheter som regelbundet möter missbrukare ska genast anmäla möjligt LVM-vårdbehov."},
        "end-lvm13":{end:true,status:"Studieutfall: LVM 13 § – akut socialnämndsbeslut",text:"Materialet beskriver omedelbart omhändertagande som den akuta vägen. Efter beslut kan handräckning enligt LVM 45 § bli aktuell i de situationer och under de begränsningar som anges där."},
        "end-pl12a":{end:true,status:"Studieutfall: PL 12 a §",text:"Polisman får enligt materialet ta personen om hand för skyndsamt överlämnande till sjukhus när PL 12 a-rekvisiten är uppfyllda. Föreläsningen markerar att personen inte får förvaras i polisarrest med detta stöd. LVM 6-anmälan ska också kommas ihåg."}
      }
    },
    {
      id:"nark",title:"Narkotika – eget bruk, prov och sökande",icon:"⌕",source:["SVAR TILL INSTUDERINGSFRÅGOR NARKOTIKASTRAFFLAGEN.docx"],
      intro:"Träna kursfacitets distinktion mellan skälig misstanke om eget bruk, kroppsbesiktning och misstanke om innehav.",start:"q1",
      nodes:{
        q1:{q:"Finns omständigheter som enligt kursfacitet når skälig misstanke om eget bruk?",help:"Facit nämner tydliga tecken på påverkan eller svagare tecken tillsammans med t.ex. medgivande, tips, umgänge och plats.",yes:"q2",no:"end-no-susp"},
        q2:{q:"Är åtgärden att säkra urin- eller blodprov för att utreda eget bruk?",help:"Svarsdokumentet anger RB 28:12 för kroppsbesiktning och RB 28:13 a för medtagande till provtagningsplats.",yes:"end-sample",no:"q3"},
        q3:{q:"Vill du söka efter narkotika genom husrannsakan?",help:"Kursfacitet betonar att eget bruk inte automatiskt ger grund att leta efter narkotika.",yes:"q4",no:"end-other"},
        q4:{q:"Finns en separat skälig misstanke om innehav, byggd på relevanta omständigheter?",help:"Eget bruk kan tillsammans med andra uppgifter bidra, men facitet kräver en innehavsmisstanke för att leta efter narkotika.",yes:"end-search",no:"end-no-search"},
        "end-no-susp":{end:true,status:"Skälig misstanke är inte etablerad i denna studiegren",text:"Kursfacitet kräver en konkret misstankenivå för kroppsbesiktning och ger exempel på hur olika omständigheter kan samverka."},
        "end-sample":{end:true,status:"Studieutfall: kroppsbesiktning/provtagning",text:"Svarsdokumentet anger RB 28:12 för kroppsbesiktning och RB 28:13 a för medtagande. Beslutsfrågorna återges i kursfacitet och ska kontrolleras mot aktuell rutin vid skarp användning."},
        "end-other":{end:true,status:"Välj tvångsmedel efter den faktiska utredningsåtgärden",text:"Kursens huvudpoäng är att olika tvångsmedel inte följer automatiskt av samma misstanke."},
        "end-search":{end:true,status:"Studieutfall: separat innehavsmisstanke finns",text:"Facitet öppnar för att eget bruk tillsammans med andra relevanta omständigheter kan bidra till skälig misstanke om innehav. Den konkreta husrannsakansgrunden måste bedömas separat."},
        "end-no-search":{end:true,status:"Ingen automatisk husrannsakan",text:"Kursfacitet säger uttryckligen att misstanke om eget bruk inte automatiskt innebär rätt att husrannsaka efter narkotika."}
      }
    }
  ];
})();
