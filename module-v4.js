// V4: fördjupade moduler. Innehållet bygger på de uppladdade kursfilerna.
(() => {
  const D = window.STUDY_DATA;
  D.moduleLessons = {
  "intro": {
    "block": "Psykiatri",
    "learningGoals": [
      "1.1",
      "1.2",
      "2.3",
      "3.1"
    ],
    "quizTopics": [
      "Grunder"
    ],
    "policeLens": [
      "Beskriv vad du faktiskt observerar innan du sätter etiketter på personen.",
      "Tänk samsjuklighet tidigt: psykisk ohälsa, missbruk och social problematik kan finnas samtidigt.",
      "Håll isär huvudmännens ansvar och vilken rättslig grund som bär en eventuell tvångsåtgärd."
    ],
    "legalBridge": [
      {
        "label": "Lagrumsbanken",
        "route": "laws"
      },
      {
        "label": "Lärandemål 1.2",
        "route": "goals"
      }
    ],
    "praxisAreas": [],
    "caseId": null,
    "reflectionCase": {
      "title": "Samsjuklighet i samma möte",
      "scenario": "En person är påverkad, uttrycker stark ångest och har nyligen förlorat bostaden. Inga enskilda uppgifter förklarar hela situationen.",
      "prompt": "Vilka tre spår behöver du hålla öppna samtidigt?",
      "reveal": [
        "Medicinsk/psykiatrisk risk och behov av vård.",
        "Missbruks-/socialtjänstspåret och behov av samverkan.",
        "Polisiär uppgift/rättslig grund för varje konkret åtgärd."
      ]
    },
    "quickChecks": [
      {
        "after": 0,
        "goal": "1.1",
        "level": "Känna igen",
        "q": "Vilken formulering ligger närmast introduktionsmaterialets syn på psykiatri?",
        "a": [
          "All avvikelse är sjukdom",
          "Fokus ligger på funktionsförlust och lidande",
          "Diagnosen är viktigare än funktionen",
          "Polisen ska avgöra medicinsk diagnos"
        ],
        "c": 1,
        "e": "Introduktionsmaterialet betonar funktionsförlust och lidande snarare än avvikelse i sig."
      },
      {
        "after": 2,
        "goal": "2.3",
        "level": "Förklara",
        "q": "Vad betyder samsjuklighet i kursens sammanhang?",
        "a": [
          "Att två poliser arbetar ihop",
          "Att psykisk sjukdom och missbruk kan förekomma samtidigt",
          "Att alla med missbruk har psykos",
          "Att socialtjänst och sjukvård är samma huvudman"
        ],
        "c": 1,
        "e": "Kursen återkommer till samtidig psykisk sjukdom/ohälsa och missbruk och behovet av samverkan."
      },
      {
        "after": 3,
        "goal": "1.2",
        "level": "Känna igen",
        "q": "Vilken struktur är mest kursenlig?",
        "a": [
          "Tvång först, lagstöd senare",
          "Frivillighet/stöd → särskild tvångslag när rekvisiten finns → polisens roll enligt den lagen",
          "Polislagen ersätter alla vårdlagar",
          "Brottsmisstanke krävs för all vård"
        ],
        "c": 1,
        "e": "Frivillighet är utgångspunkt. Tvång kräver särskilt lagstöd och polisens befogenhet måste knytas till den konkreta situationen."
      }
    ],
    "sourceNote": null,
    "testSize": 6,
    "primaryGoal": "1.1"
  },
  "affektiva": {
    "block": "Psykiatri",
    "learningGoals": [
      "1.1",
      "2.4",
      "3.1",
      "3.2"
    ],
    "quizTopics": [
      "Affektiva"
    ],
    "policeLens": [
      "Vid depression: uppmärksamma dödstankar, suicidtankar, planering och tidigare försök när de framkommer.",
      "Vid mani: sänk eget tempo och mängden stimuli; personen kan snabbt växla från samarbetsvillig till irriterad/aggressiv.",
      "Symtomkunskap hjälper riskbedömningen men ersätter inte LPT:s juridiska rekvisit."
    ],
    "legalBridge": [
      {
        "label": "LPT – lagguide",
        "route": "lawguide/lpt-akut"
      },
      {
        "label": "Praxis om LPT",
        "route": "praxis"
      }
    ],
    "praxisAreas": [
      "LPT/LRV"
    ],
    "caseId": "v2-mani",
    "reflectionCase": null,
    "quickChecks": [
      {
        "after": 1,
        "goal": "1.1",
        "level": "Känna igen",
        "q": "Vilket symtom finns uttryckligen i materialet om egentlig depression?",
        "a": [
          "Minskat intresse eller glädje",
          "Alltid hallucinationer",
          "Alltid minskat sömnbehov utan trötthet",
          "Obligatorisk aggressivitet"
        ],
        "c": 0,
        "e": "Minskat intresse/glädje är ett centralt depressivt symtom i föreläsningen."
      },
      {
        "after": 3,
        "goal": "2.4",
        "level": "Känna igen",
        "q": "Vilket mönster passar bäst med mani enligt kursmaterialet?",
        "a": [
          "Högt tempo, rusande tankar och minskat sömnbehov",
          "Små pupiller och långsam andning",
          "Tillbakadragenhet och minskat tal",
          "Slapp muskulatur och sluddrigt tal"
        ],
        "c": 0,
        "e": "Föreläsningen lyfter högt tempo, snabba associationer, många projekt, pratsamhet och minskat sömnbehov."
      },
      {
        "after": 4,
        "goal": "3.2",
        "level": "Tillämpa",
        "q": "Vilken miljöanpassning ligger närmast bemötandet vid förhöjt stämningsläge?",
        "a": [
          "Fler personer pratar samtidigt",
          "Minska stimuli och var lugn och saklig",
          "Använd ironi för att bryta mönstret",
          "Höj rösten för att få kontroll"
        ],
        "c": 1,
        "e": "Materialet rekommenderar lugn, saklighet och begränsning av sinnesintryck/stimuli."
      }
    ],
    "sourceNote": null,
    "testSize": 6,
    "primaryGoal": "1.1"
  },
  "psykos": {
    "block": "Psykiatri",
    "learningGoals": [
      "1.1",
      "2.4",
      "3.1",
      "3.2"
    ],
    "quizTopics": [
      "Psykos"
    ],
    "policeLens": [
      "Skilj observation från tolkning: beskriv exakt vad personen säger och gör.",
      "Bekräfta rädsla och upplevelse utan att behöva bekräfta vanföreställningens sakpåstående.",
      "Psykotiska symtom kan tala för störd realitetsprövning, men LPT 47 kräver fler rekvisit än psykosigenkänning."
    ],
    "legalBridge": [
      {
        "label": "LPT – akut",
        "route": "lawguide/lpt-akut"
      },
      {
        "label": "Praxis & APS",
        "route": "praxis"
      }
    ],
    "praxisAreas": [
      "LPT/LRV"
    ],
    "caseId": "v2-psykos",
    "reflectionCase": null,
    "quickChecks": [
      {
        "after": 0,
        "goal": "1.1",
        "level": "Känna igen",
        "q": "Vilka tre symtomområden används i materialet för att beskriva psykos?",
        "a": [
          "Vanföreställningar, hallucinationer och tankestörningar",
          "Tolerans, abstinens och drogsug",
          "Ouppmärksamhet, hyperaktivitet och impulsivitet",
          "Nedstämdhet, skuld och aptitökning"
        ],
        "c": 0,
        "e": "Psykosföreläsningen beskriver psykos som samlingsbegrepp för vanföreställningar, hallucinationer och tankestörningar."
      },
      {
        "after": 2,
        "goal": "1.1",
        "level": "Känna igen",
        "q": "Vilket är ett negativt symtom?",
        "a": [
          "Hörselhallucination",
          "Förföljelseidé",
          "Tillbakadragenhet",
          "Neologism"
        ],
        "c": 2,
        "e": "Tillbakadragenhet, avtrubbade affekter och minskat tal hör till negativa symtom i materialet."
      },
      {
        "after": 4,
        "goal": "3.2",
        "level": "Tillämpa",
        "q": "Personen säger att polisen deltar i en konspiration. Vad ligger närmast kursens bemötande?",
        "a": [
          "Argumentera tills personen erkänner att den har fel",
          "Bekräfta rädslan, var lugn och tydlig utan sanningskamp",
          "Bekräfta att konspirationen är verklig",
          "Ge flera snabba instruktioner"
        ],
        "c": 1,
        "e": "Kursens bemötandeprinciper är lugn, saklighet, tydlighet och kontakt; undvik onödig argumentation om verklighetsbilden."
      }
    ],
    "sourceNote": null,
    "testSize": 6,
    "primaryGoal": "1.1"
  },
  "personlighet": {
    "block": "Psykiatri",
    "learningGoals": [
      "1.1",
      "2.4",
      "3.1",
      "3.2"
    ],
    "quizTopics": [
      "Personlighet"
    ],
    "policeLens": [
      "Se människan bakom diagnosen och undvik att använda diagnosetiketten som förklaring till allt beteende.",
      "Var medveten om affektsmitta: ditt eget känsloläge kan påverka mötet.",
      "Bygg tillit, delaktighet och autonomi så långt situation och rättsläge medger."
    ],
    "legalBridge": [],
    "praxisAreas": [],
    "caseId": null,
    "reflectionCase": {
      "title": "Självskada och stark affekt",
      "scenario": "En person med tidigare emotionellt instabil problematik har skadat sig ytligt, är arg på vården och säger att ingen lyssnar.",
      "prompt": "Vilka delar av ditt bemötande kan både minska konflikt och bevara säkerhet?",
      "reveal": [
        "Validera att personen känner sig övergiven/arg utan att behöva hålla med om alla sakpåståenden.",
        "Var tydlig och förutsägbar, håll eget affektläge nere.",
        "Bedöm aktuell risk och vårdbehov utifrån situationen – inte enbart diagnoshistoriken."
      ]
    },
    "quickChecks": [
      {
        "after": 0,
        "goal": "1.1",
        "level": "Känna igen",
        "q": "Vilken form ligger i kluster B enligt materialet?",
        "a": [
          "Antisocial form",
          "Schizoid form",
          "Ängslig form",
          "Tvångsmässig form"
        ],
        "c": 0,
        "e": "Antisocial, borderline/emotionellt instabil, narcissistisk och histrionisk form placeras i kluster B."
      },
      {
        "after": 2,
        "goal": "2.4",
        "level": "Känna igen",
        "q": "Vilket drag tas upp vid borderline/emotionellt instabil personlighetssyndrom?",
        "a": [
          "Instabil självbild och relationer",
          "Alltid hallucinationer",
          "Minskat sömnbehov som enda kriterium",
          "Små pupiller"
        ],
        "c": 0,
        "e": "Materialet tar upp instabil självbild/identitet, instabil sinnesstämning, instabila relationer och självskadebeteende."
      },
      {
        "after": 3,
        "goal": "3.1",
        "level": "Tillämpa",
        "q": "Vilket bemötande ligger närmast föreläsningen?",
        "a": [
          "Minska personens delaktighet",
          "Bygga tillit och hopp, validera och stödja autonomi",
          "Provocera för att testa impulskontroll",
          "Undvika att bekräfta personen"
        ],
        "c": 1,
        "e": "Avslutningen lyfter tillit/hopp, delaktighet, autonomi, validering, motivering och affektsmitta."
      }
    ],
    "sourceNote": null,
    "testSize": 6,
    "primaryGoal": "1.1"
  },
  "npf": {
    "block": "Psykiatri",
    "learningGoals": [
      "1.1",
      "2.4",
      "3.1",
      "3.2"
    ],
    "quizTopics": [
      "NPF"
    ],
    "policeLens": [
      "Gör situationen mer förutsägbar: en instruktion i taget och konkret språk.",
      "Minska sensorisk belastning där det går, särskilt vid autism och stark stress.",
      "Tolkningssvårigheter eller impulsivitet ska inte automatiskt läsas som ovilja eller trots."
    ],
    "legalBridge": [],
    "praxisAreas": [],
    "caseId": "v2-autism",
    "reflectionCase": null,
    "quickChecks": [
      {
        "after": 0,
        "goal": "1.1",
        "level": "Känna igen",
        "q": "Vilka områden lyfts vid autism i materialet?",
        "a": [
          "Social interaktion/mentalisering, kommunikation och begränsade intressen/aktiviteter",
          "Endast hallucinationer",
          "Endast aggressivitet",
          "Tolerans och abstinens"
        ],
        "c": 0,
        "e": "Autismföreläsningen lyfter social interaktion, kommunikation och begränsade intressen/aktiviteter."
      },
      {
        "after": 1,
        "goal": "2.4",
        "level": "Tillämpa",
        "q": "Vilken faktor kan enligt materialet utlösa stark reaktion vid autism?",
        "a": [
          "Ostrukturerade och oförutsägbara situationer och sensoriska stimuli",
          "Alltid låg ljudnivå",
          "Korta instruktioner",
          "Förutsägbarhet"
        ],
        "c": 0,
        "e": "Materialet nämner oförutsägbarhet och sensoriskt stimuli som belastande och möjliga utlösare av katastrofreaktion."
      },
      {
        "after": 3,
        "goal": "3.2",
        "level": "Tillämpa",
        "q": "Hur bör du fråga en person med ADHD enligt kursmaterialet?",
        "a": [
          "Många frågor samtidigt",
          "Kortfattat, en fråga i taget, långsamt och tydligt",
          "Snabbt med abstrakta metaforer",
          "Med ironi"
        ],
        "c": 1,
        "e": "Föreläsningen anger korta frågor, kortfattat språk samt långsamt och tydligt tal."
      }
    ],
    "sourceNote": null,
    "testSize": 6,
    "primaryGoal": "1.1"
  },
  "suicidrisk": {
    "block": "Psykiatri",
    "learningGoals": [
      "1.1",
      "1.2",
      "2.4",
      "2.5",
      "3.1",
      "3.2"
    ],
    "quizTopics": [
      "Affektiva",
      "LPT",
      "Kommunikation"
    ],
    "policeLens": [
      "Ta uttryck om död/livsleda på allvar och dokumentera konkreta uttalanden och omständigheter.",
      "Säkra akut liv/medicinsk/psykiatrisk risk samtidigt som andra polisiära spår hålls isär.",
      "Var lugn, närvarande och lyssnande; kursmaterialet om depression betonar att våga möta, lyssna och skydda."
    ],
    "legalBridge": [
      {
        "label": "LPT – akut",
        "route": "lawguide/lpt-akut"
      },
      {
        "label": "Lärandemål 2.5",
        "route": "goals"
      }
    ],
    "praxisAreas": [
      "LPT/LRV"
    ],
    "caseId": "v2-livsleda",
    "reflectionCase": null,
    "quickChecks": [
      {
        "after": 0,
        "goal": "1.1",
        "level": "Känna igen",
        "q": "Vilket finns uttryckligen bland depressiva symtom i kursmaterialet?",
        "a": [
          "Återkommande tankar på döden och suicidtankar",
          "Alltid hallucinationer",
          "Alltid våldsamt beteende",
          "Alltid minskat sömnbehov"
        ],
        "c": 0,
        "e": "Depressionsföreläsningen listar dödstankar, suicidtankar, planering och suicidförsök."
      },
      {
        "after": 1,
        "goal": "1.2",
        "level": "Förklara",
        "q": "Vilket påstående om APS ligger närmast LPT-materialet?",
        "a": [
          "All suiciditet är automatiskt APS",
          "APS är en juridisk term och hög suicidrisk kan vara relevant i bedömningen",
          "APS är en ICD-diagnos",
          "APS kräver att brott har begåtts"
        ],
        "c": 1,
        "e": "Materialet beskriver APS som en juridisk term och nämner tillstånd med störd realitetsprövning eller hög suicidrisk."
      },
      {
        "after": 3,
        "goal": "3.2",
        "level": "Tillämpa",
        "q": "Vad ligger närmast kursens bemötande vid stark psykisk kris?",
        "a": [
          "Undvik ämnet död helt",
          "Var närvarande, lyssna, stöd och skydda samtidigt som risk bedöms",
          "Gå direkt till ultimatum",
          "Ge många instruktioner på en gång"
        ],
        "c": 1,
        "e": "Affektiva materialet betonar samtal, lyssnande, stöd, närvaro, skydd, respekt och bekräftelse."
      }
    ],
    "sourceNote": "Den separata suicidologiföreläsningen/SPiSS-materialet finns inte bland projektfilerna. Modulen bygger därför bara på studiehandledningen, affektiva syndrom, LPT och kommunikationsmaterialet och gör inte anspråk på att ersätta kursens suicidologidel.",
    "testSize": 6,
    "primaryGoal": "1.1"
  },
  "beroende": {
    "block": "Missbruk & narkotika",
    "learningGoals": [
      "2.1",
      "2.3",
      "1.2",
      "3.1"
    ],
    "quizTopics": [
      "Beroende",
      "LVM"
    ],
    "policeLens": [
      "Tänk både akut medicinsk risk och långsiktigt beroendeproblem – de är olika frågor.",
      "Samsjuklighet kan göra att både hälso- och sjukvård och socialtjänst behöver aktiveras.",
      "Alkohol- och bensodiazepinabstinens markeras i kursmaterialet som potentiellt livsfarliga."
    ],
    "legalBridge": [
      {
        "label": "LVM – lagguide",
        "route": "lawguide/lvm"
      },
      {
        "label": "Lagrumsbanken",
        "route": "laws"
      }
    ],
    "praxisAreas": [
      "LVM"
    ],
    "caseId": "v2-lvm",
    "reflectionCase": null,
    "quickChecks": [
      {
        "after": 0,
        "goal": "2.1",
        "level": "Känna igen",
        "q": "Vilket ingår i beroendekriterierna som listas i materialet?",
        "a": [
          "Drogsug",
          "Hallucination som krav",
          "Brottslighet som krav",
          "Pupillförändring som krav"
        ],
        "c": 0,
        "e": "Tolerans, abstinens, kontrollförlust, drogsug och fortsatt konsumtion trots känd skadeverkan listas."
      },
      {
        "after": 1,
        "goal": "2.1",
        "level": "Känna igen",
        "q": "Vilket abstinenstillstånd beskrivs som potentiellt livsfarligt?",
        "a": [
          "Alkoholabstinens",
          "Cannabisabstinens i alla fall",
          "LSD-abstinens",
          "Koffeinabstinens"
        ],
        "c": 0,
        "e": "Beroendematerialet markerar alkoholabstinens som potentiellt livsfarlig och behandlingskrävande."
      },
      {
        "after": 4,
        "goal": "2.3",
        "level": "Förklara",
        "q": "Vad illustrerar samsjuklighet i LVM-materialet?",
        "a": [
          "Psykisk ohälsa och missbruk kan påverka varandra och kräva samverkan mellan huvudmän",
          "Att bara socialtjänsten har ansvar",
          "Att bara psykiatrin har ansvar",
          "Att missbruk aldrig påverkar psykisk hälsa"
        ],
        "c": 0,
        "e": "Materialet beskriver påverkan i båda riktningar och behov av samverkan mellan sjukvård och socialtjänst."
      }
    ],
    "sourceNote": null,
    "testSize": 6,
    "primaryGoal": "2.1"
  },
  "drogtecken": {
    "block": "Missbruk & narkotika",
    "learningGoals": [
      "2.1",
      "2.2",
      "2.3"
    ],
    "quizTopics": [
      "Beroende",
      "Narkotika"
    ],
    "policeLens": [
      "Utgå från ett mönster av tecken – inte ett enskilt fynd – och beakta blandbruk, dos, tolerans och miljö.",
      "Medicinsk risk går före en snygg preparatgissning: exempelvis långsam andning eller medvetandepåverkan kräver akut fokus.",
      "Observationer kan bidra till misstanke, men den rättsliga misstanken måste formuleras konkret."
    ],
    "legalBridge": [
      {
        "label": "Narkotika – lagguide",
        "route": "lawguide/nark"
      },
      {
        "label": "Symtomkompassen",
        "route": "symptom"
      }
    ],
    "praxisAreas": [],
    "caseId": "v2-opiat",
    "reflectionCase": null,
    "quickChecks": [
      {
        "after": 0,
        "goal": "2.1",
        "level": "Förklara",
        "q": "Vilken faktor kan påverka rusets effekt och varaktighet enligt drogteckenmaterialet?",
        "a": [
          "Dos, tolerans, intagningssätt och miljö",
          "Endast personens ålder",
          "Endast preparatets färg",
          "Inga individuella faktorer"
        ],
        "c": 0,
        "e": "Materialet listar bland annat ålder, kön, hälsa, tolerans, intagningssätt, förväntningar, miljö, blandbruk och dos."
      },
      {
        "after": 1,
        "goal": "2.1",
        "level": "Känna igen",
        "q": "Vilket mönster passar bäst med bensodiazepinpåverkan?",
        "a": [
          "Alkoholliknande berusning utan alkohollukt, sluddrigt tal och långsamma reflexer",
          "Små pupiller och tydligt opioidmönster som enda tecken",
          "Alltid stora pupiller och extrem energi",
          "Alltid hallucinationer"
        ],
        "c": 0,
        "e": "Drogteckenmaterialet listar långsamma reflexer, slapp muskulatur, sluddrigt tal och alkoholliknande berusning utan lukt."
      },
      {
        "after": 6,
        "goal": "2.1",
        "level": "Känna igen",
        "q": "Vilken akut risksignal är särskilt viktig vid opiat/opioidpåverkan?",
        "a": [
          "Långsam andning",
          "Ökad aptit",
          "Snabbt tal",
          "Muntorrhet"
        ],
        "c": 0,
        "e": "Opiater/opioider kan ge små pupiller, sömnighet och långsam andning; andningspåverkan är akut viktig."
      }
    ],
    "sourceNote": null,
    "testSize": 6,
    "primaryGoal": "2.1"
  },
  "lpt": {
    "block": "Tvång & juridik",
    "learningGoals": [
      "1.2",
      "2.4",
      "3.1"
    ],
    "quizTopics": [
      "LPT"
    ],
    "policeLens": [
      "Skilj alltid medicinsk bedömning från polisens juridiska beslut och befogenheter.",
      "LPT 47 § första stycket är inte samma sak som vårdintyg eller intagningsbeslut.",
      "Dokumentera vilka konkreta omständigheter som bär APS-misstanken och det omedelbara hjälp-/farerekvisitet."
    ],
    "legalBridge": [
      {
        "label": "Interaktiv LPT-guide",
        "route": "lawguide/lpt-akut"
      },
      {
        "label": "Handräckning LPT",
        "route": "lawguide/lpt-hand"
      },
      {
        "label": "Praxis LPT",
        "route": "praxis"
      }
    ],
    "praxisAreas": [
      "LPT/LRV"
    ],
    "caseId": "v2-livsleda",
    "reflectionCase": null,
    "quickChecks": [
      {
        "after": 1,
        "goal": "1.2",
        "level": "Förklara",
        "q": "Vilka delar måste finnas för tvångsvård enligt LPT 3 § på kursens nivå?",
        "a": [
          "APS, oundgängligt/nödvändigt psykiatriskt vårdbehov enligt lagens form och att vården inte kan ges med samtycke",
          "Endast psykiatrisk diagnos",
          "Endast att personen är farlig",
          "Endast anhörigas önskemål"
        ],
        "c": 0,
        "e": "LPT 3 § bygger på APS, kvalificerat vårdbehov och bristande samtycke/grundad anledning att vården inte kan ges med samtycke."
      },
      {
        "after": 3,
        "goal": "1.2",
        "level": "Känna igen",
        "q": "Vad kräver LPT 47 § 1 st. enligt materialet?",
        "a": [
          "Skälig anledning att anta APS samt fara för annans säkerhet/eget liv eller annat omedelbart hjälpbehov",
          "Vårdintyg i alla fall",
          "Brottsmisstanke",
          "Socialnämndens ansökan"
        ],
        "c": 0,
        "e": "Det är rekvisitstrukturen som återges i föreläsningen."
      },
      {
        "after": 5,
        "goal": "1.2",
        "level": "Förklara",
        "q": "Vad händer efter utfärdat vårdintyg enligt materialet?",
        "a": [
          "Personen får hållas kvar och nödvändigt tvång kan användas enligt LPT 6 §, följt av intagningsprövning",
          "Polisen beslutar om fyra månaders vård",
          "LRV börjar automatiskt gälla",
          "Inget förändras"
        ],
        "c": 0,
        "e": "Föreläsningen beskriver kvarhållning/nödvändigt tvång efter vårdintyg och intagningsprövning senast inom 24 timmar."
      }
    ],
    "sourceNote": null,
    "testSize": 6,
    "primaryGoal": "1.2"
  },
  "lrv": {
    "block": "Tvång & juridik",
    "learningGoals": [
      "1.2",
      "3.1"
    ],
    "quizTopics": [
      "LRV"
    ],
    "policeLens": [
      "LRV används i andra situationer än LPT och är kopplad till straffrättsliga frihetsberövanden/rättspsykiatrisk vård.",
      "Håll isär rättspsykiatrisk vård som påföljd från LPT:s vårdform.",
      "SUP påverkar vem som beslutar om övergång till öppen vård och vårdens upphörande."
    ],
    "legalBridge": [
      {
        "label": "Lagrumsbanken",
        "route": "laws"
      },
      {
        "label": "Praxis LPT/LRV",
        "route": "praxis"
      }
    ],
    "praxisAreas": [
      "LPT/LRV"
    ],
    "caseId": null,
    "reflectionCase": {
      "title": "LRV eller LPT?",
      "scenario": "En häktad person utvecklar ett allvarligt psykiatriskt tillstånd och bedöms behöva psykiatrisk tvångsvård.",
      "prompt": "Vilken första juridisk skiljelinje behöver du känna igen?",
      "reveal": [
        "LRV omfattar bland annat anhållna/häktade och andra straffrättsligt frihetsberövade i de situationer lagen anger.",
        "LRV är inte bara en \"svårare LPT\" utan ett eget regelverk för särskilda grupper/situationer.",
        "Den medicinska vårdbedömningen och beslut enligt LRV ligger inte hos patrullen."
      ]
    },
    "quickChecks": [
      {
        "after": 0,
        "goal": "1.2",
        "level": "Känna igen",
        "q": "Vilken grupp anges uttryckligen i LRV 1 §-materialet?",
        "a": [
          "Anhållen eller häktad",
          "Alla med depression",
          "Alla personer med missbruk",
          "Alla som vägrar vård"
        ],
        "c": 0,
        "e": "LRV 1 § omfattar bland annat den som är anhållen, häktad eller intagen för rättspsykiatrisk undersökning."
      },
      {
        "after": 2,
        "goal": "1.2",
        "level": "Förklara",
        "q": "Vad innebär särskild utskrivningsprövning på kursens nivå?",
        "a": [
          "Förvaltningsrätten beslutar bland annat om övergång till öppen vård och om vården ska upphöra",
          "Polisman beslutar utskrivning",
          "Socialnämnden beslutar intagning",
          "SUP är ett vårdintyg"
        ],
        "c": 0,
        "e": "Materialet skiljer vård med och utan SUP; med SUP ligger centrala utskrivningsbeslut hos förvaltningsrätten."
      },
      {
        "after": 3,
        "goal": "1.2",
        "level": "Känna igen",
        "q": "Vem genomför rättspsykiatrisk undersökning enligt föreläsningen?",
        "a": [
          "Rättsmedicinalverket",
          "Polismyndigheten",
          "Socialnämnden",
          "Kriminalvården ensam"
        ],
        "c": 0,
        "e": "Föreläsningen anger Rättsmedicinalverket och skiljer § 7-intyg från mer omfattande RPU."
      }
    ],
    "sourceNote": null,
    "testSize": 6,
    "primaryGoal": "1.2"
  },
  "lvm": {
    "block": "Tvång & juridik",
    "learningGoals": [
      "1.2",
      "2.3",
      "3.1"
    ],
    "quizTopics": [
      "LVM"
    ],
    "policeLens": [
      "Frivillighet är utgångspunkt; LVM är ett undantag med egna rekvisit.",
      "Skilj 4 § ordinarie vårdväg, 13 § omedelbart omhändertagande och PL 12 a § polisens akuta bro i särskild situation.",
      "Vid samsjuklighet: identifiera vilket akut spår som faktiskt har rekvisit och överlämna så sjukvård/socialtjänst kan hantera fortsatt lagval."
    ],
    "legalBridge": [
      {
        "label": "Interaktiv LVM-guide",
        "route": "lawguide/lvm"
      },
      {
        "label": "Praxis LVM",
        "route": "praxis"
      }
    ],
    "praxisAreas": [
      "LVM"
    ],
    "caseId": "v2-lvm",
    "reflectionCase": null,
    "quickChecks": [
      {
        "after": 1,
        "goal": "1.2",
        "level": "Förklara",
        "q": "Vilken förenklad struktur beskriver LVM 4 §?",
        "a": [
          "Fortgående missbruk + vårdbehov som inte kan lösas på annat sätt + minst en allvarlig riskindikation",
          "Enstaka berusning + störande beteende",
          "Psykos + brott",
          "Alla narkotikabruk"
        ],
        "c": 0,
        "e": "Det är den trestegsstruktur som föreläsningen använder."
      },
      {
        "after": 2,
        "goal": "1.2",
        "level": "Känna igen",
        "q": "Vad är LVM 13 §?",
        "a": [
          "Omedelbart omhändertagande i akut situation när rättens beslut inte kan avvaktas under lagens förutsättningar",
          "Frivillig vårdplan",
          "Sekretessregel",
          "Rättspsykiatrisk vård"
        ],
        "c": 0,
        "e": "LVM 13 § presenteras som den akuta vägen."
      },
      {
        "after": 5,
        "goal": "1.2",
        "level": "Tillämpa",
        "q": "Vad anger materialet om PL 12 a §?",
        "a": [
          "Polisman kan i den angivna akuta LVM-situationen omhänderta för skyndsamt överlämnande till sjukhus; inte förvara i arrest med stöd av bestämmelsen",
          "Det är stöd för husrannsakan",
          "Det är alltid samma som LOB",
          "Det ger sex månaders vård"
        ],
        "c": 0,
        "e": "Föreläsningen beskriver PL 12 a som ett akut polisiärt omhändertagande med överlämning till sjukhus."
      }
    ],
    "sourceNote": null,
    "testSize": 6,
    "primaryGoal": "1.2"
  },
  "handrackning": {
    "block": "Tvång & juridik",
    "learningGoals": [
      "1.2",
      "2.4"
    ],
    "quizTopics": [
      "Handräckning"
    ],
    "policeLens": [
      "Fråga alltid: vilket särskilt lagstöd, vem är behörig begärande aktör och vad behöver polisen faktiskt göra?",
      "Handräckningsbeslut och tillträde till bostad är separata juridiska frågor.",
      "Polis ska enligt materialet inte användas som rutinmässig transportresurs när särskilda befogenheter inte behövs."
    ],
    "legalBridge": [
      {
        "label": "LPT-handräckning",
        "route": "lawguide/lpt-hand"
      },
      {
        "label": "Lagrumsbanken",
        "route": "laws"
      },
      {
        "label": "Praxis",
        "route": "praxis"
      }
    ],
    "praxisAreas": [
      "Handräckning"
    ],
    "caseId": "v2-handrackning",
    "reflectionCase": null,
    "quickChecks": [
      {
        "after": 0,
        "goal": "1.2",
        "level": "Förklara",
        "q": "Vad krävs för polisiär handräckning enligt föreläsningen?",
        "a": [
          "Särskilt lagstöd och formell begäran från behörig aktör",
          "En anhörigs önskemål",
          "Alltid vårdintyg",
          "Alltid brottsmisstanke"
        ],
        "c": 0,
        "e": "Handräckningsmaterialet betonar särskilt lagstöd och formell begäran."
      },
      {
        "after": 1,
        "goal": "1.2",
        "level": "Känna igen",
        "q": "Vilken situation finns i LPT 47 § 2 st.?",
        "a": [
          "Hjälp till läkare för att kunna genomföra undersökning för vårdintyg",
          "Husrannsakan efter narkotika",
          "Dödsbud",
          "Beslut om SUP"
        ],
        "c": 0,
        "e": "En uttrycklig punkt är hjälp till behörig läkare för vårdintygsundersökning."
      },
      {
        "after": 5,
        "goal": "1.2",
        "level": "Tillämpa",
        "q": "Hur bör tillträdesfrågan hanteras vid handräckning i bostad?",
        "a": [
          "Analyseras separat; materialet behandlar PL 20 § för tillträde i relevanta omhändertagandesituationer",
          "Handräckningen ger alltid automatiskt tillträde",
          "Polis får aldrig tillträde",
          "Anhörig avgör"
        ],
        "c": 0,
        "e": "Föreläsningen håller handräckning och tillträde isär och behandlar PL 20 § separat."
      }
    ],
    "sourceNote": null,
    "testSize": 6,
    "primaryGoal": "1.2"
  },
  "polisbefogenheter": {
    "block": "Tvång & juridik",
    "learningGoals": [
      "1.2",
      "3.1"
    ],
    "quizTopics": [
      "Handräckning",
      "LPT"
    ],
    "policeLens": [
      "Börja med den laga tjänsteåtgärden; våldsbefogenheten är inte ett fristående mål i sig.",
      "Pröva behov och försvarlighet i våldsanvändningen enligt kursmaterialets PL 10-logik.",
      "Psykisk ohälsa kan också aktualisera sekretess och vapenomhändertagande – men varje åtgärd har egna rekvisit."
    ],
    "legalBridge": [
      {
        "label": "Lagrumsbanken",
        "route": "laws"
      },
      {
        "label": "Praxis",
        "route": "praxis"
      }
    ],
    "praxisAreas": [],
    "caseId": null,
    "reflectionCase": {
      "title": "Befogenhet är inte samma sak som ändamål",
      "scenario": "En person ska med laga stöd omhändertas men gör passivt motstånd. Samtidigt finns uppgifter om ett licensierat vapen i bostaden.",
      "prompt": "Vilka separata juridiska frågor måste du hålla isär?",
      "reveal": [
        "Lagstödet för själva frihetsberövandet/omhändertagandet.",
        "Om och i vilken omfattning PL 10 § kan användas för att genomföra tjänsteåtgärden.",
        "Om vapenlagens egna rekvisit för omhändertagande av vapen är uppfyllda.",
        "Sekretessfrågan vid hantering och vidare informationsdelning."
      ]
    },
    "quickChecks": [
      {
        "after": 0,
        "goal": "1.2",
        "level": "Känna igen",
        "q": "Vilken uppgift finns i PL 2 § enligt materialet?",
        "a": [
          "Lämna allmänheten skydd, upplysningar och annan hjälp när det lämpligen kan ges",
          "Besluta om LPT-vård",
          "Utfärda vårdintyg",
          "Besluta om LVM-vård"
        ],
        "c": 0,
        "e": "PL 2 § återges bland annat med polisens hjälp- och serviceskyldighet samt särskilda uppgifter enligt andra bestämmelser."
      },
      {
        "after": 1,
        "goal": "1.2",
        "level": "Förklara",
        "q": "Vad är centralt för PL 10 § i kursmaterialet?",
        "a": [
          "Våld får användas när andra medel är otillräckliga och det är försvarligt för att genomföra en laga tjänsteåtgärd i angivna situationer",
          "Våld får alltid användas vid psykisk ohälsa",
          "PL 10 skapar själv ett frihetsberövande",
          "PL 10 ersätter LPT/LVM"
        ],
        "c": 0,
        "e": "PL 10 är en befogenhet kopplad till en redan laga tjänsteåtgärd och begränsas av nödvändighet/försvarlighet."
      },
      {
        "after": 3,
        "goal": "1.2",
        "level": "Känna igen",
        "q": "När kan polisman enligt vapenmaterialet omhänderta vapen utan föregående beslut?",
        "a": [
          "När risken för missbruk är överhängande, med skyndsam anmälan/prövning",
          "Vid varje psykisk diagnos",
          "När en granne är orolig oavsett omständigheter",
          "Aldrig"
        ],
        "c": 0,
        "e": "Vapenlagen 6 kap. 4 § återges med möjlighet för polisman vid överhängande missbruksrisk, följt av skyndsam anmälan/prövning."
      }
    ],
    "sourceNote": null,
    "testSize": 6,
    "primaryGoal": "1.2"
  },
  "narkotikastraff": {
    "block": "Missbruk & narkotika",
    "learningGoals": [
      "2.2",
      "1.2"
    ],
    "quizTopics": [
      "Narkotika"
    ],
    "policeLens": [
      "Formulera bevistemat: eget bruk, innehav/förvaring eller annan befattning är inte samma sak.",
      "Skälig misstanke ska bygga på konkreta omständigheter; drogindikationer kan kombineras med andra uppgifter.",
      "Välj tvångsmedel efter vad du faktiskt behöver bevisa – provtagning och husrannsakan har olika syften."
    ],
    "legalBridge": [
      {
        "label": "Narkotika – lagguide",
        "route": "lawguide/nark"
      },
      {
        "label": "Praxis narkotika/RB",
        "route": "praxis"
      }
    ],
    "praxisAreas": [
      "Narkotika/RB"
    ],
    "caseId": "v2-narkotika",
    "reflectionCase": null,
    "quickChecks": [
      {
        "after": 0,
        "goal": "2.2",
        "level": "Förklara",
        "q": "Vad betyder \"olovligen\" på kursens nivå?",
        "a": [
          "Att narkotikahantering träffas av straffansvar när den saknar rättsligt stöd; viss hantering kan vara lovlig t.ex. recept/tjänstehantering enligt regler",
          "Att all läkemedelshantering är brott",
          "Att bara försäljning är olaglig",
          "Att poliser aldrig får hantera beslag"
        ],
        "c": 0,
        "e": "Svarsdokumentet ger exempel på lovlig hantering och betonar att olovlig hantering är utgångspunkten för straffansvar."
      },
      {
        "after": 3,
        "goal": "2.2",
        "level": "Förklara",
        "q": "Vad kan skälig misstanke om eget bruk bygga på enligt facitet?",
        "a": [
          "Tydliga påverkanstecken eller svagare tecken tillsammans med andra konkreta omständigheter",
          "Enbart bostadsområde",
          "Enbart tidigare dom",
          "Enbart klädstil"
        ],
        "c": 0,
        "e": "Facitet nämner tydliga tecken eller kombinationer med t.ex. medgivande, tips, umgänge och plats."
      },
      {
        "after": 4,
        "goal": "2.2",
        "level": "Tillämpa",
        "q": "Ger misstanke om eget bruk automatiskt grund för husrannsakan efter narkotika?",
        "a": [
          "Nej, kursmaterialet kräver en separat grundad misstanke om innehav för att leta efter narkotika",
          "Ja alltid",
          "Ja om personen är vuxen",
          "Ja om urinprov är beslutat"
        ],
        "c": 0,
        "e": "Kursfacitet och praxisfliken skiljer tydligt mellan provbevisning för eget bruk och sökande efter narkotika/innehav."
      }
    ],
    "sourceNote": null,
    "testSize": 6,
    "primaryGoal": "2.2"
  },
  "kommunikation": {
    "block": "Kommunikation & tillämpning",
    "learningGoals": [
      "1.3",
      "2.4",
      "3.1",
      "3.2"
    ],
    "quizTopics": [
      "Kommunikation"
    ],
    "policeLens": [
      "Kontrollera hur ditt budskap faktiskt uppfattats – kommunikation är dubbelriktad.",
      "Gå inte för snabbt till problemlösning; aktivt lyssnande och förtroende kommer före påverkan i förändringstrappan.",
      "Tänk på ansiktsförlust, eget kroppsspråk och affekt som faktorer som kan trappa upp eller ner konflikten."
    ],
    "legalBridge": [],
    "praxisAreas": [],
    "caseId": "v2-psykos",
    "reflectionCase": null,
    "quickChecks": [
      {
        "after": 0,
        "goal": "1.3",
        "level": "Förklara",
        "q": "Varför behövs återkoppling i kommunikation enligt materialet?",
        "a": [
          "För att kontrollera hur budskapet faktiskt har uppfattats",
          "För att alltid få sista ordet",
          "För att undvika all dialog",
          "För att ersätta kroppsspråk"
        ],
        "c": 0,
        "e": "Materialet betonar att det sändaren tror sig ha sagt inte nödvändigtvis är det mottagaren uppfattat."
      },
      {
        "after": 2,
        "goal": "1.3",
        "level": "Förklara",
        "q": "Vad är ett vanligt fel i förändringstrappan?",
        "a": [
          "Att hoppa över steg och gå till problemlösning/påverkan för tidigt",
          "Att lyssna aktivt",
          "Att använda öppet kroppsspråk",
          "Att parafrasera"
        ],
        "c": 0,
        "e": "Texten säger uttryckligen att man ofta går för tidigt mot problemlösning och påverkan."
      },
      {
        "after": 3,
        "goal": "3.2",
        "level": "Tillämpa",
        "q": "Vad är målet med aktivt lyssnande enligt materialet?",
        "a": [
          "Att personen känner sig sedd, hörd och bekräftad och lättare kan lämna starkt känsloläge",
          "Att få personen att hålla med om allt",
          "Att undvika tystnad",
          "Att ge fler ultimatum"
        ],
        "c": 0,
        "e": "Aktivt lyssnande syftar till att få personen ur starkt känsloläge mot rationellt tänkande och känna sig sedd/hörd/bekräftad."
      }
    ],
    "sourceNote": null,
    "testSize": 6,
    "primaryGoal": "1.3"
  },
  "krisstod": {
    "block": "Kommunikation & tillämpning",
    "learningGoals": [
      "2.5",
      "3.2",
      "3.3"
    ],
    "quizTopics": [
      "Krisstöd"
    ],
    "policeLens": [
      "Efter potentiellt traumatiska händelser: säkerhet och trygghet först, därefter lyssnande/lugnande, information och socialt stöd.",
      "Undvik antagandet att alla behöver samma stöd eller omedelbar känslomässig bearbetning.",
      "Följ upp över tid eftersom vissa reaktioner kan kvarstå eller förvärras trots att personen initialt verkar klara sig."
    ],
    "legalBridge": [],
    "praxisAreas": [],
    "caseId": "v2-krisstod",
    "reflectionCase": null,
    "quickChecks": [
      {
        "after": 0,
        "goal": "2.5",
        "level": "Känna igen",
        "q": "När kan krisstöd behöva initieras enligt riktlinjen?",
        "a": [
          "Till exempel vid hot/våld mot liv, svåra skador/dödsfall eller bruk av tjänstevapen",
          "Endast efter domstolsförhandling",
          "Endast efter sjukskrivning",
          "Aldrig på medarbetarens egen begäran"
        ],
        "c": 0,
        "e": "Riktlinjen räknar upp flera potentiellt allvarliga händelser och även medarbetarens egen begäran."
      },
      {
        "after": 1,
        "goal": "2.5",
        "level": "Förklara",
        "q": "Vad säger riktlinjen om individuella reaktioner?",
        "a": [
          "Samma händelse kan påverka människor olika och stödbehovet måste individualiseras",
          "Alla reagerar lika",
          "Tidigare erfarenheter saknar betydelse",
          "Alla behöver professionell behandling direkt"
        ],
        "c": 0,
        "e": "Riktlinjen betonar individuella skillnader och faktorer som socialt nätverk, erfarenhet och tidigare belastning."
      },
      {
        "after": 4,
        "goal": "2.5",
        "level": "Tillämpa",
        "q": "Vilken ordning ligger närmast psykologisk första hjälp?",
        "a": [
          "Säkerhet/trygghet → lyssna och lugna → nödvändig information/socialt stöd → identifiera fortsatt behov",
          "Detaljerad känslobearbetning först",
          "Prestationskrav först",
          "Isolering först"
        ],
        "c": 0,
        "e": "Riktlinjen beskriver denna ordning och betonar individens egen återhämtningsförmåga."
      }
    ],
    "sourceNote": "Riktlinjerna gäller Polismyndighetens interna krisstöd för medarbetare. Studiehandledningens separata moment om dödsbud har inte ett fullständigt rutinunderlag bland projektfilerna.",
    "testSize": 6,
    "primaryGoal": "2.5"
  }
};
  D.moduleBlocks = ["Psykiatri","Tvång & juridik","Missbruk & narkotika","Kommunikation & tillämpning"];
})();
(() => {
  const L = window.STUDY_DATA.moduleLessons;
  L.intro.testQuestions = [
    {goal:'2.3',q:'Vilken aktörskombination speglar kursens samverkansperspektiv vid samsjuklighet?',a:['Polis ensam','Hälso- och sjukvård, socialtjänst och polis utifrån respektive uppdrag','Endast socialtjänst','Endast psykiatri'],c:1,e:'Kursen betonar samverkan när psykisk ohälsa, missbruk och polisiär problematik överlappar.'},
    {goal:'3.1',q:'Vilket förhållningssätt ligger närmast kursens introduktion?',a:['Avvikande beteende ska alltid behandlas som sjukdom','Utgå från lidande, funktionsförlust och individens situation snarare än att moralisera över avvikelse','Polisen ska ställa diagnos på plats','Tvång är första val'],c:1,e:'Introduktionen problematiserar vad som är normalt/onormalt och betonar lidande och funktionsförlust.'}
  ];
  L.affektiva.testQuestions = [
    {goal:'3.1',q:'Vilket bemötande vid depression stöds av föreläsningen?',a:['Våga samtala, lyssna, stödja, visa respekt och bekräfta','Undvik kontakt för att inte förstärka känslor','Argumentera bort nedstämdheten','Öka stimuli'],c:0,e:'Bemötandedelen lyfter samtal, närvaro, skydd, äkta engagemang, respekt och bekräftelse.'},
    {goal:'2.4',q:'Vad ska särskilt uppmärksammas även vid förhöjt stämningsläge?',a:['Suicidrisken kan vara förhöjd','Suicidrisk är utesluten vid mani','Endast ekonomisk risk','Endast sömn'],c:0,e:'Föreläsningen markerar uttryckligen att suicidrisken kan vara förhöjd vid förhöjt stämningsläge.'}
  ];
  L.personlighet.testQuestions = [
    {goal:'3.2',q:'Vad innebär affektsmitta i bemötandesammanhang?',a:['Att egna känslor och uttryck kan påverka den andra personen och situationen','Att personlighetssyndrom smittar','Att alla affekter ska ignoreras','Att bara den andra personens beteende spelar roll'],c:0,e:'Materialet avslutar med att påminna om affektsmitta och vikten av det egna bemötandet.'},
    {goal:'1.1',q:'Vilket kluster beskrivs som rädda och ängsliga?',a:['Kluster A','Kluster B','Kluster C','Inget kluster'],c:2,e:'Kluster C omfattar enligt materialet ängslig, osjälvständig och tvångsmässig form.'}
  ];
  L.npf.testQuestions = [
    {goal:'2.4',q:'Varför bör ironi och otydliga instruktioner användas försiktigt vid autism enligt materialet?',a:['De kan misstolkas','De är alltid olagliga','De orsakar ADHD','De sänker puls'],c:0,e:'Autismföreläsningen lyfter svårigheter att förstå ironi och risk för att instruktioner misstolkas.'},
    {goal:'1.1',q:'Vilka är ADHD:s tre kärnsymtom i materialet?',a:['Ouppmärksamhet, hyperaktivitet och impulsivitet','Hallucinationer, vanföreställningar och katatoni','Tolerans, abstinens och drogsug','Nedstämdhet, skuld och suicidtankar'],c:0,e:'Dessa tre kärnsymtom anges direkt i föreläsningen.'}
  ];
  L.lrv.testQuestions = [
    {goal:'1.2',q:'Vilken förutsättning anges för rättspsykiatrisk vård som påföljd i BrB 31 kap. 3 §-materialet?',a:['Personen lider av allvarlig psykisk störning och övriga förutsättningar för rättspsykiatrisk vård är uppfyllda','Alla brott leder till LRV','Endast bötesbrott kan ge LRV','Missbruk ensamt räcker alltid'],c:0,e:'Föreläsningen lyfter APS, att påföljden inte stannar vid böter och behov av intagning för psykiatrisk vård med tvång.'},
    {goal:'1.2',q:'Hur skiljs vård utan SUP från vård med SUP i föreläsningen?',a:['Utan SUP fattar chefsöverläkaren centrala beslut om övergång/avslut; med SUP fattar förvaltningsrätten dessa beslut','Polisen beslutar alltid','Socialnämnden beslutar alltid','Det finns ingen skillnad'],c:0,e:'Föreläsningen anger chefsöverläkare utan SUP och förvaltningsrätt vid SUP.'}
  ];
})();
