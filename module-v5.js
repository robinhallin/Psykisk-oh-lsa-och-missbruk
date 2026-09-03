// V5: samtliga moduler omarbetade på djupet. Innehållet bygger på de uppladdade kursfilerna.
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

// V5-fördjupning: rikare lektionstext, aktiv återkallning och fler frågor i samtliga moduler.
(() => {
  const D = window.STUDY_DATA;
  const M = id => D.modules.find(x => x.id === id);
  const mergeLesson = (id, patch) => D.moduleLessons[id] = {...D.moduleLessons[id], ...patch};

  Object.assign(M('intro'), {
    intro:'Bygg kursens karta innan du går in i diagnoser och lagrum: vad kursen menar med psykisk ohälsa, när funktionsförlust och lidande blir centralt, hur samsjuklighet komplicerar mötet och vilken samhällsaktör som ansvarar för vad.',
    goals:['Förklara kursens sätt att skilja avvikelse från psykisk sjukdom','Beskriva HSL, SoL och tvångslagarnas plats i systemet','Resonera om samsjuklighet och varför samverkan behövs i polisiärt arbete'],
    source:['PPT Introföreläsning.pdf','Distans HT26 Studiehandledning.pdf'],
    sections:[
      {h:'1. Kursens karta – varför detta är polisiärt relevant',p:'Kursen behandlar polisiärt arbete vid psykisk ohälsa, psykiatrisk sjukdom och missbruk. Studiehandledningen lyfter psykos, personlighetssyndrom, neuropsykiatriska tillstånd, affektiva syndrom, beroende, suicidologi, dialog och kommunikation, narkotikaingripanden, vardagsförhandling och dödsfall. Poängen är inte att polisen ska ställa diagnos, utan att kunna möta människor professionellt och säkert och förstå när andra samhällsaktörer behöver ta vid.',key:'Tänk hela tiden i tre spår: vad observerar jag, vilket behov/risk kan finnas och vilket rättsligt/organisatoriskt spår hör frågan till?',recall:{q:'Nämn fyra olika kunskapsområden som kursen kopplar till polisiärt arbete.',a:'Exempel är psykiatriska tillstånd, suicidologi, beroende/missbruk, lagstiftning, kommunikation, narkotikaingripanden, vardagsförhandling och dödsfall.'}},
      {h:'2. När blir ett beteende eller en upplevelse ett problem?',p:'Introduktionsföreläsningen ställer frågan när upplevelser och beteenden blir "onormala och sjuka" och betonar att psykiatrin är intresserad av funktionsförlust och lidande. Sorg används som exempel på att en stark reaktion inte automatiskt är sjuklig. Kontext, funktionsnivå och lidande är därför viktigare än att något bara avviker från det vanliga.',warning:'Avvikande beteende är inte i sig samma sak som psykiatrisk sjukdom eller allvarlig psykisk störning.',recall:{q:'Vilka två ord används i introduktionsmaterialet för att beskriva psykiatrins kärnintresse?',a:'Funktionsförlust och lidande.'}},
      {h:'3. Psykisk ohälsa, diagnos och specialistpsykiatri',p:'Materialet beskriver psykisk ohälsa som ett folkhälsoproblem och skiljer den från att faktiskt ha en psykiatrisk diagnos. Specialistpsykiatrin aktualiseras bland annat vid komplex sjukdomsbild, samsjuklighet, avvikande symtom, svåra återfall eller när insatser på vårdcentral inte gett resultat.',compare:[{title:'Psykisk ohälsa',items:['Bredare begrepp än psykiatrisk diagnos','Kan innebära lidande och funktionsproblem utan att en specifik diagnos är fastställd']},{title:'Specialistpsykiatri',items:['Komplex sjukdomsbild och samsjuklighet','Svåra återfall eller avvikande symtom','Uteblivna resultat i primärvård']}],recall:{q:'Vilka typer av situationer nämns som skäl för specialistpsykiatri?',a:'Komplex sjukdomsbild, samsjuklighet, avvikande symtom, svåra återfall och uteblivna resultat på vårdcentral.'}},
      {h:'4. HSL och SoL – två huvudspår',p:'Hälso- och sjukvårdslagen reglerar hur hälso- och sjukvård organiseras och bedrivs, inklusive att medicinskt förebygga, utreda och behandla sjukdom och skada. Socialtjänstlagen syftar till ekonomisk och social trygghet, jämlika levnadsvillkor och aktivt deltagande i samhällslivet.',table:{headers:['Spår','Huvudidé i kursmaterialet','Exempel på frågor'],rows:[['HSL / sjukvård','Medicinsk vård, utredning och behandling','Psykiatrisk bedömning, behandling, sjuktransport'],['SoL / socialtjänst','Social trygghet, stöd och delaktighet','Stöd vid missbruk, social utsatthet och planerade insatser']]},recall:{q:'Vilken huvudman förknippas med LPT respektive LVM i introduktionsmaterialet?',a:'LPT hör till sjukvårdens tvångsvård; LVM hör till socialnämndens/socialtjänstens område.'}},
      {h:'5. Tvångslagarna i kursen',p:'Introduktionsmaterialet placerar LPT, LRV, LVU och LVM som särskilda tvångslagar. LPT gäller psykiatrisk tvångsvård, LRV rättspsykiatrisk vård, LVM tvångsvård vid missbruk och LVU vård av barn och unga. Kursen anger att LVU huvudsakligen behandlas i nästa kurs.',table:{headers:['Lag','Kursens huvudområde'],rows:[['LPT','Psykiatrisk tvångsvård'],['LRV','Rättspsykiatrisk vård och vissa straffrättsligt frihetsberövade'],['LVM','Vård av missbrukare i vissa fall'],['LVU','Barn och unga – främst nästa kurs']]},key:'Tvång kräver särskilt lagstöd. Börja inte med "vad kan polisen göra?" utan med "vilken rättslig situation är detta?"'},
      {h:'6. Samsjuklighet – flera problem samtidigt',p:'Kursen återkommer till samtidig psykisk sjukdom/ohälsa och missbruk. Missbruk kan förekomma tillsammans med depression, ångest, psykos, neuropsykiatriska tillstånd och social utsatthet. Ett polisiärt möte kan därför innehålla flera parallella behov som inte bör reduceras till en enda förklaring.',steps:[{title:'Observera',text:'Beskriv påverkan, psykiska symtom, kroppsliga risktecken och beteende utan att låsa dig vid en diagnos.'},{title:'Prioritera risk',text:'Akut fara för liv/hälsa och behov av sjukvård måste hållas isär från långsiktiga sociala behov.'},{title:'Identifiera aktör och lagstöd',text:'Sjukvård, socialtjänst och polis kan ha olika uppgifter samtidigt.'}],recall:{q:'Varför är samsjuklighet en central polisiär fråga?',a:'För att psykisk ohälsa, missbruk och social problematik kan förekomma samtidigt och påverka både riskbedömning, bemötande och vilken aktör eller lagstiftning som blir relevant.'}},
      {h:'7. Ett arbetssätt för resten av kursen',p:'Använd samma analysmodell genom alla moduler: börja i konkreta observationer, koppla dem till möjliga behov och risker, välj ett bemötande som inte i onödan eskalerar och identifiera därefter rätt rättslig grund för den åtgärd du faktiskt vill genomföra.',compare:[{title:'Bra studietänk',items:['Observation före etikett','Risk före bekvämlighet','Rättslig grund per åtgärd','Samverkan när behoven korsar huvudmän']},{title:'Vanliga tankefällor',items:['"Psykisk ohälsa = LPT"','"Påverkad = bara missbruk"','"Handräckning = fritt tillträde"','"Brott gör vårdfrågan oviktig"']}],warning:'Den här portalen är studiehjälp. Operativ tillämpning kräver alltid aktuell lagtext, föreskrifter och lokala rutiner.'}
    ],
    memory:'Observation → risk/behov → bemötande → rätt aktör → rätt lagstöd.'
  });
  mergeLesson('intro',{
    quickChecks:[
      {after:0,goal:'1.1',level:'Känna igen',q:'Vad är kursens huvudsakliga syfte med psykiatrikunskapen för polis?',a:['Att ställa medicinska diagnoser','Att kunna möta människor professionellt och säkert samt förstå relevanta behov och ingripanden','Att ersätta sjukvårdens bedömning','Att bara avgöra om brott begåtts'],c:1,e:'Studiehandledningen betonar professionellt och säkert bemötande, inte diagnostik.'},
      {after:1,goal:'1.1',level:'Förklara',q:'Vad lyfter introduktionsmaterialet fram som avgörande för psykiatrins intresse?',a:['Avvikelse i sig','Funktionsförlust och lidande','Enbart juridisk status','Enbart våldsrisk'],c:1,e:'Fokus ligger på funktionsförlust och lidande.'},
      {after:3,goal:'1.2',level:'Känna igen',q:'Vilket påstående om HSL och SoL ligger närmast kursmaterialet?',a:['Båda är tvångslagar','HSL rör sjukvårdens verksamhet och SoL socialtjänstens sociala stöd/trygghet','SoL gäller bara barn','HSL ger polisen allmän rätt att använda tvång'],c:1,e:'Materialet skiljer tydligt sjukvårdens och socialtjänstens uppdrag.'},
      {after:4,goal:'1.2',level:'Känna igen',q:'Vilken lag hör enligt kurskartan främst till psykiatrisk tvångsvård?',a:['LVM','LPT','SoL','RB'],c:1,e:'LPT är lagen om psykiatrisk tvångsvård.'},
      {after:5,goal:'2.3',level:'Tillämpa',q:'En person är både påverkad, starkt ångestfylld och socialt utsatt. Vilket är bäst första tankesätt?',a:['Välj en enda förklaring direkt','Håll flera spår öppna och prioritera akut risk innan långsiktiga behov','Utgå från att socialtjänsten ansvarar för allt','Utgå från att påverkan gör psykiska symtom irrelevanta'],c:1,e:'Samsjuklighet kräver att flera möjliga behov hålls öppna samtidigt.'},
      {after:6,goal:'3.1',level:'Tillämpa',q:'Vilket arbetssätt ligger närmast portalens kursförankrade analysmodell?',a:['Diagnos → tvång → dokumentation','Observation → risk/behov → bemötande → aktör/lagstöd','Lagrum → diagnos → brott','Tvång → observation → samverkan'],c:1,e:'Modulen bygger ett återkommande arbetssätt som börjar i det du faktiskt ser och hör.'}
    ],testSize:10,
    testQuestions:[
      {goal:'2.3',q:'Varför kan samsjuklighet göra ett polisiärt ingripande mer komplext?',a:['För att samma person kan ha samtidiga medicinska, psykiatriska och sociala behov','För att polisen alltid måste välja LPT framför LVM','För att missbruk utesluter psykiatrisk sjukdom','För att socialtjänst och sjukvård har identiska uppdrag'],c:0,e:'Samtidiga behov kan kräva olika aktörer och rättsliga spår.'},
      {goal:'1.2',q:'Vilket är ett exempel på särskild tvångslag som kursen tar upp?',a:['LPT','HSL','Förvaltningslagen 8 §','Patientlagen som huvudregel'],c:0,e:'LPT är en av kursens centrala tvångslagar.'},
      {goal:'3.1',q:'Vilken formulering är mest etiskt och metodiskt hållbar?',a:['"Han är psykotisk" innan någon konkret observation är beskriven','"Han säger att röster talar med honom och tittar upprepade gånger mot ett tomt hörn"','"Hon är manipulativ"','"Han är bara missbrukare"'],c:1,e:'Konkreta observationer minskar risken att etiketter ersätter analys.'}
    ]
  });

  Object.assign(M('affektiva'), {
    intro:'Fördjupa dig i förändringar av stämningsläget: depressionens symtom och funktionspåverkan, bipolär sjukdom och maniskt skov, suicidrisk samt hur bemötandet behöver skifta när energi, tempo och självuppfattning förändras.',
    goals:['Känna igen depressionens symtom och centrala risktecken','Känna igen ett förhöjt/maniskt stämningsläge och förstå hur det kan påverka beteendet','Anpassa bemötandet och hålla isär symtomigenkänning från den juridiska LPT-bedömningen'],
    sections:[
      {h:'1. Affektiva syndrom = förändringar i stämningsläget',p:'Föreläsningen använder affektiva syndrom som samlingsrubrik för förändringar i stämningsläget och behandlar framför allt egentlig depression och bipolär sjukdom. Ett polisiärt möte kan se helt olika ut beroende på om stämningsläget är kraftigt sänkt eller förhöjt.',compare:[{title:'Sänkt stämningsläge',items:['Nedstämdhet','Minskat intresse/glädje','Brist på energi','Dödstankar kan förekomma']},{title:'Förhöjt stämningsläge',items:['Högt tempo','Rusande tankar','Minskat sömnbehov','Stegrad självkänsla och pratsamhet']}],recall:{q:'Vad är den övergripande gemensamma nämnaren för affektiva syndrom?',a:'Förändringar i stämningsläget.'}},
      {h:'2. Egentlig depression – svårighetsgrad och former',p:'Materialet skiljer lindrig, måttlig och svår depression. Därutöver nämns bland annat melankoli, dystymi, årstidsbundna depressioner, substansutlösta depressioner, premenstruella problem och postpartumdepression. Föreläsningen anger också att återinsjuknande är vanligt.',key:'För polis är svårighetsgrad, funktion och suicidrisk viktigare i stunden än att kunna namnge alla undertyper.',recall:{q:'Vilka tre svårighetsgrader av egentlig depression anges?',a:'Lindrig, måttlig och svår depression.'}},
      {h:'3. Varför drabbas vi?',p:'Föreläsningen beskriver flera typer av förklaringsfaktorer: organiska förändringar/sjukdom, ärftliga faktorer och psykosociala faktorer. Den pedagogiska poängen är att inte söka en enda orsak till ett komplext tillstånd.',compare:[{title:'Biologiska/organiska spår',items:['Ärftliga faktorer','Organiska förändringar eller sjukdom']},{title:'Psykosocialt spår',items:['Livssituation och psykosociala faktorer','Stress/sårbarhet ingår i utredningsperspektivet']}],recall:{q:'Vilka tre breda orsaksområden nämns i föreläsningen?',a:'Organiska förändringar/sjukdom, ärftliga faktorer och psykosociala faktorer.'}},
      {h:'4. Depression – symtombilden',p:'Symtomen i föreläsningen omfattar både känsloläge, kropp, tanke och funktion. Ångest är vanligt men anges inte som ett diagnostiskt kriterium i just denna lista.',table:{headers:['Område','Exempel från föreläsningen'],rows:[['Stämningsläge','Nedstämdhet, minskat intresse/glädje'],['Kropp/energi','Sömn- och aptitförändringar, brist på energi, kroppslig hämning eller agitation'],['Tanke/kognition','Värdelöshet/skuld, koncentrationssvårigheter, obeslutsamhet'],['Suicid','Återkommande tankar på döden, suicidtankar, planering eller försök']]},recall:{q:'Nämn ett affektivt, ett kroppsligt och ett kognitivt depressionssymtom.',a:'Exempel: nedstämdhet; sömnstörning eller energibrist; koncentrationssvårigheter eller obeslutsamhet.'}},
      {h:'5. Bedömning och behandling – vad kursen lyfter',p:'Utredningen beskrivs utifrån svårighetsgrad, klinisk bild, etiologi och förlopp, funktionsnedsättning, stress/sårbarhet, återinsjuknande och suicidrisk. Behandling som nämns är antidepressiva läkemedel, eventuella kombinationer, ECT, rTMS och psykoterapi.',warning:'Som polis ska du inte göra behandlingsval. Kunskapen hjälper dig att förstå varför sjukvårdens bedömning behöver väga in mer än enstaka symtom.',recall:{q:'Vilken riskfråga anges uttryckligen som del av utredningen?',a:'Suicidrisk.'}},
      {h:'6. Bemötande vid depression',p:'Föreläsningen betonar att se individens behov och bemöta hela människan. Samtalet ska våga närma sig det svåra: lyssna, stödja, uppmuntra, vara nära, skydda, visa äkta engagemang, respekt och bekräftelse.',steps:[{title:'Sänk tempot',text:'Ge utrymme och lyssna snarare än att fylla tystnaden med många instruktioner.'},{title:'Bekräfta personen',text:'Visa respekt och att du uppfattat vad personen säger utan att trivialisera.'},{title:'Skydda när risk framkommer',text:'Dödstankar och suicidplanering kräver skärpt riskmedvetenhet och vårdspår.'}],recall:{q:'Nämn fyra bemötandeprinciper från föreläsningen.',a:'Exempel: lyssna, stödja, uppmuntra, vara nära, skydda, visa respekt, bekräfta och visa äkta engagemang.'}},
      {h:'7. Bipolär sjukdom – typ 1, typ 2, hypomani och mani',p:'Föreläsningen visar bipolär sjukdom uppdelad i typ 1, typ 2 och övriga, och illustrerar hypomani respektive mani som förhöjda stämningslägen. Materialet går inte närmare in på fullständiga diagnoskriterier för typ 1 kontra typ 2, så modulen stannar vid den nivå som faktiskt finns i kursfilen.',warning:'Lär dig inte in fler diagnostiska detaljer från denna modul än kursfilen stödjer. Fokus här är att känna igen förhöjt stämningsläge och dess polisiära konsekvenser.'},
      {h:'8. Mani – typiska tecken',p:'Det maniska mönstret i föreläsningen präglas av ökad hastighet, aktivitet och självtillit. Personen kan upplevas intensiv, påträngande och mycket engagerad.',bullets:['Högt tempo och rusande tankar','Snabba associationer och mängder av projekt','Stegrad självkänsla','Ökad libido','Pratsamhet','Minskat sömnbehov','Kan vara vänlig och samarbetsvillig tills någon invänder och då snabbt växla till ilska/aggressivitet'],recall:{q:'Vilka tre tecken är särskilt bra minneskrokar för mani?',a:'Högt tempo/rusande tankar, minskat sömnbehov och stegrad självkänsla är tydliga exempel.'}},
      {h:'9. Bemötande vid förhöjt stämningsläge',p:'Föreläsningen betonar närvaro, trygghet, lugn och saklighet. Minska sinnesintryck och stimuli, stå kvar och skydda personen från att lämna ut sig. Anhöriga kan vara viktiga, och föreläsningen markerar uttryckligen att suicidrisken kan vara förhöjd.',compare:[{title:'Gör mer av',items:['Lugnt och sakligt språk','Trygg närvaro','Minskad stimuli','Skydda integritet och värdighet']},{title:'Undvik att förstärka',items:['Onödigt många intryck','Högt eget tempo','Prestige i invändningar','Att tolka samarbetsvilja som stabilitet över tid']}],key:'Vid mani kan tempo och affekt växla snabbt. Ditt eget lugn blir en del av riskhanteringen.',recall:{q:'Varför kan en till synes samarbetsvillig person ändå kräva fortsatt uppmärksamhet vid mani?',a:'Föreläsningen beskriver att personen snabbt kan svänga till ilska och aggressivitet när någon invänder, och suicidrisken kan vara förhöjd.'}}
    ],
    memory:'Depression: stämningsläge/energi ↓ och suicidrisk. Mani: tempo/självkänsla ↑, sömnbehov ↓ och stimuli bör ↓.'
  });
  mergeLesson('affektiva',{
    quickChecks:[
      {after:1,goal:'1.1',level:'Känna igen',q:'Vilka tre svårighetsgrader av egentlig depression används i föreläsningen?',a:['Akut, kronisk, latent','Lindrig, måttlig, svår','Typ 1, typ 2, typ 3','Mild, psykotisk, kataton'],c:1,e:'Föreläsningen skiljer lindrig, måttlig och svår depression.'},
      {after:3,goal:'2.4',level:'Känna igen',q:'Vilket hör till depressionens kognitiva symtom i materialet?',a:['Koncentrationssvårigheter och obeslutsamhet','Stegrad självkänsla','Minskat sömnbehov','Snabba associationer'],c:0,e:'Koncentrationssvårigheter och obeslutsamhet finns i depressionslistan.'},
      {after:5,goal:'3.2',level:'Tillämpa',q:'Vilket bemötande ligger närmast föreläsningen vid depression?',a:['Våga samtala, lyssna, stödja och bekräfta','Pressa fram snabba beslut','Byt ämne när döden nämns','Använd ironi för att avdramatisera'],c:0,e:'Bemötandet betonar samtal, lyssnande, stöd, respekt och bekräftelse.'},
      {after:7,goal:'2.4',level:'Känna igen',q:'Vilket mönster passar bäst med mani?',a:['Högt tempo, pratsamhet och minskat sömnbehov','Långsam andning och små pupiller','Tillbakadragenhet och avtrubbade affekter','Slapp muskulatur och alkoholliknande berusning'],c:0,e:'Det maniska mönstret präglas av tempo, rusande tankar, pratsamhet och minskat sömnbehov.'},
      {after:8,goal:'3.2',level:'Tillämpa',q:'Vilken miljöanpassning ligger närmast kursmaterialet vid mani?',a:['Öka sinnesintrycken','Minska stimuli och var lugn och saklig','Låt flera poliser tala samtidigt','Argumentera om varje påstående'],c:1,e:'Föreläsningen anger begränsning av sinnesintryck/minskad stimuli samt lugnt och sakligt bemötande.'},
      {after:8,goal:'1.2',level:'Förklara',q:'Varför räcker inte maniska symtom i sig för att säga att LPT ska användas?',a:['För att LPT aldrig gäller mani','För att LPT har egna juridiska rekvisit som måste bedömas','För att endast socialtjänsten får bedöma mani','För att suicidrisk aldrig är relevant'],c:1,e:'Symtomigenkänning och juridisk tvångsvårdsbedömning är olika saker. LPT kräver de lagstadgade förutsättningarna.'}
    ],testSize:10,
    testQuestions:[
      {goal:'1.1',q:'Vilket av följande nämns inte som depressionssymtom i föreläsningen?',a:['Minskat intresse/glädje','Värdelöshets- eller skuldkänslor','Återkommande dödstankar','Obligatorisk storhetsidé'],c:3,e:'Storhetsidé är inte ett obligatoriskt depressionssymtom i materialet.'},
      {goal:'2.4',q:'Vilken förändring skiljer tydligt det maniska mönstret från den depressiva symtombilden?',a:['Minskat sömnbehov tillsammans med högt tempo','Koncentrationssvårigheter','Sömnstörning','Suicidrisk kan förekomma'],c:0,e:'Minskat sömnbehov i kombination med högt tempo är typiskt i manidelen.'},
      {goal:'3.1',q:'Vad betyder "skydda personen från att lämna ut sig" i bemötandedelen om mani?',a:['Att respektera integritet när omdöme och hämningar kan vara förändrade','Att hindra alla samtal med anhöriga','Att alltid gripa personen','Att dölja brottslighet'],c:0,e:'Föreläsningen lyfter skydd av personens integritet/värdighet under förhöjt stämningsläge.'}
    ]
  });

  Object.assign(M('psykos'), {
    intro:'Lär dig psykos på symtomnivå, inte som etikett: vanföreställningar, hallucinationer, desorganisation och negativa/kognitiva symtom. Koppla därefter kunskapen till samsjuklighet, återinsjuknande, suicidrisk, våldsrisk och ett lugnt, tydligt polisiärt bemötande.',
    goals:['Förklara psykosens centrala symtom och skilja positiva från negativa symtom','Beskriva stress–sårbarhetsmodellen, samsjuklighet och återinsjuknande på kursens nivå','Tillämpa ett lugnt och respektfullt bemötande och skilja psykosigenkänning från LPT-rekvisit'],
    source:['psykos distansutb-1.pdf','Stödmaterial Polkon - psykisk ohälsa Till kursen'],
    sections:[
      {h:'1. Vad är egentligen en psykos?',p:'Psykosföreläsningen använder psykos som ett samlingsbegrepp för vanföreställningar, hallucinationer och tankestörningar. Det är alltså mer användbart att identifiera vilket symtom som faktiskt syns än att bara säga "psykos".',table:{headers:['Symtomområde','Kursnära exempel'],rows:[['Vanföreställning','Förföljelseidé, storhetsidé, religiös, erotoman eller depressiv vanföreställning'],['Hallucination','Hörsel, syn, lukt, smak eller känsel/taktil'],['Tankestörning/desorganisation','Osammanhängande tal eller rörelsemönster, neologismer']]},recall:{q:'Vilka tre symtomområden använder föreläsningen för att definiera psykos?',a:'Vanföreställningar, hallucinationer och tankestörningar.'}},
      {h:'2. Schizofreni – riskfaktorer och orsaksbild',p:'Föreläsningen nämner genetisk förekomst, manligt kön, infektioner under graviditet/förlossningskomplikationer, skalltrauma och cannabis. Dessa punkter ska förstås som risk-/bakgrundsfaktorer i kursmaterialet, inte som att en enskild faktor ensam förklarar sjukdomen.',warning:'Undvik enkla kausala slutsatser: att någon använder cannabis betyder inte att du därmed kan förklara eller diagnostisera schizofreni.'},
      {h:'3. Stress–sårbarhetsmodellen',p:'Modellen kopplar genetiska/biokemiska faktorer och tidigare erfarenheter till stressande livshändelser. Hanteringsstrategier och socialt stöd påverkar hur belastningen slår igenom, och utfallet beskrivs som grad av lidande/ohälsa och sociala konsekvenser.',steps:[{title:'Sårbarhet',text:'Genetiska/biokemiska faktorer och tidigare erfarenheter.'},{title:'Belastning och skydd',text:'Stressande livshändelser möter hanteringsstrategier och socialt stöd.'},{title:'Utfall',text:'Olika grad av lidande/ohälsa och sociala konsekvenser.'}],recall:{q:'Vilka två faktorer i modellen kan fungera som motvikt till stressande livshändelser?',a:'Hanteringsstrategier och socialt stöd.'}},
      {h:'4. Dopaminmodellen i föreläsningen',p:'Föreläsningen kopplar dopaminerg överaktivitet till positiva symtom och dopaminerg underaktivitet till negativa symtom. Detta är en förenklad undervisningsmodell som hjälper till att minnas symtomgrupperna.',compare:[{title:'Överaktivitet',items:['Kopplas i föreläsningen till positiva symtom']},{title:'Underaktivitet',items:['Kopplas i föreläsningen till negativa symtom']}],key:'Använd modellen som minnesstöd för kursen, inte som en polisiär diagnostisk metod.'},
      {h:'5. Smygande insjuknande och prognos',p:'Vid schizofreni kan första insjuknandet enligt föreläsningen ske smygande med ospecifika symtom, och psykotiska symtom kan komma gradvis. Prognosdelen lyfter psykos, kroppslig sjukdom, beroende och självmord som viktiga områden.',recall:{q:'Hur beskrivs det första insjuknandet ofta?',a:'Smygande med ospecifika symtom och gradvis tillkomst av psykotiska symtom.'}},
      {h:'6. Positiva symtom – något har tillkommit',p:'Positiva symtom innebär i kursens pedagogik att upplevelser eller uttryck har tillkommit. Vanföreställningar kan handla om paranoia/förföljelse, religion/storhet, erotomani eller depression. Hallucinationer kan förekomma i flera sinnesmodaliteter. Desorganisation kan märkas i tankeförlopp och språk, exempelvis neologismer.',compare:[{title:'Vanföreställning',items:['Fast övertygelse/idé inom symtombilden','Exempel: förföljelse eller storhet']},{title:'Hallucination',items:['Sinnesupplevelse inom symtombilden','Hörsel, syn, lukt, smak eller känsel']},{title:'Desorganisation',items:['Stört tankeförlopp','Osammanhängande tal/rörelse','Neologismer']}],recall:{q:'Vad är en neologism enligt föreläsningen?',a:'Att personen hittar på nya ord eller bygger om ord.'}},
      {h:'7. Negativa, kognitiva och motoriska symtom',p:'Negativa symtom beskrivs som förlust eller minskning av förmågor: tillbakadragenhet, avtrubbade affekter, torftiga känslomässiga relationer, minskat tal, isolering och förlorat intresse. Kognitiva symtom nämns separat. Katatoni beskrivs som motoriska störningar i olika grad.',table:{headers:['Grupp','Exempel'],rows:[['Negativa','Tillbakadragenhet, avtrubbad affekt, minskat tal, isolering'],['Kognitiva','Kognitiv nedsättning nämns i föreläsningen'],['Motoriska','Katatoni – motoriska störningar i olika grad']]},recall:{q:'Varför är "tillbakadragenhet" ett negativt och inte positivt symtom?',a:'Det beskriver en minskning/förlust av normal social funktion snarare än något som har tillkommit.'}},
      {h:'8. Återinsjuknande och samsjuklighet',p:'Föreläsningen anger att återinsjuknande är vanligt och nämner bristande sjukdomsinsikt, bristande följsamhet till medicinering och beroende/missbruk som orsaker. Samsjuklighet med depression och ångest lyfts också.',bullets:['Återinsjuknande: ungefär 50 % inom ett år enligt föreläsningen','Bristande sjukdomsinsikt','Bristande följsamhet i medicinering','Beroende/missbruk','Depression och ångest som samsjuklighet'],recall:{q:'Vilken faktor i återinsjuknandedelen är särskilt relevant för polisiärt möte med påverkad person?',a:'Beroende/missbruk, eftersom det både kan bidra till återinsjuknande och komplicera riskbilden.'}},
      {h:'9. Suicid- och våldsrisk – undvik schabloner',p:'POLKON-stödmaterialet anger en tydligt förhöjd suicidrisk vid psykossjukdom, särskilt när personen blir djupt deprimerad. Samma material betonar att akut psykos i sig inte betyder att personen är våldsam mot andra. Våldsrisken ökar enligt stödmaterialet bland annat vid samtidigt missbruk och vid tidigare våldshistoria.',warning:'Psykos = inte automatiskt våld. Gör en individuell riskbedömning och undvik stigmatiserande genvägar.',recall:{q:'Vilket missförstånd motverkar stödmaterialet om psykos och våld?',a:'Att akut psykos i sig automatiskt skulle innebära hög våldsrisk mot andra.'},source:'Stödmaterial Polkon - psykisk ohälsa Till kursen'},
      {h:'10. Bemötande – kontakt före sanningskamp',p:'Psykosföreläsningen säger: lyssna och bekräfta, uppträd lugnt och stå kvar, var saklig och tydlig och tänk på kroppsspråket. Frågan "ska jag spela med?" markerar ett viktigt dilemma: du behöver inte bekräfta vanföreställningens sakpåstående för att bekräfta att personens rädsla eller upplevelse är verklig för personen.',steps:[{title:'Lyssna',text:'Låt personen beskriva sin upplevelse och notera konkreta riskuppgifter.'},{title:'Bekräfta känslan',text:'Du kan bekräfta rädsla, stress eller utsatthet utan att säga att vanföreställningen är sann.'},{title:'Var tydlig',text:'Använd lugnt, sakligt språk och medvetet kroppsspråk.'}],key:'Bekräfta personen – inte nödvändigtvis verklighetsbilden.',recall:{q:'Vilka fyra bemötandepunkter står uttryckligen i psykosföreläsningen?',a:'Lyssna och bekräfta; uppträda lugnt och stå kvar; vara saklig och tydlig; vara medveten om kroppsspråk.'}}
    ],
    memory:'Psykos: vanföreställning + hallucination + tankestörning. Positivt = tillkommit. Negativt = förlorats/minskat. Bemöt: lugnt, tydligt, bekräfta personen.'
  });
  mergeLesson('psykos',{
    quickChecks:[
      {after:0,goal:'1.1',level:'Känna igen',q:'Vilka tre symtomområden definierar psykos i föreläsningen?',a:['Vanföreställningar, hallucinationer och tankestörningar','Nedstämdhet, skuld och sömn','Ouppmärksamhet, hyperaktivitet och impulsivitet','Tolerans, abstinens och drogsug'],c:0,e:'Psykos används som samlingsbegrepp för vanföreställningar, hallucinationer och tankestörningar.'},
      {after:2,goal:'1.1',level:'Förklara',q:'Vad visar stress–sårbarhetsmodellen?',a:['Att en enda gen orsakar psykos','Ett samspel mellan sårbarhet, tidigare erfarenheter, stress, coping och socialt stöd','Att stress saknar betydelse','Att socialt stöd alltid botar psykos'],c:1,e:'Modellen beskriver ett samspel mellan sårbarhet och belastning, med hanteringsstrategier/socialt stöd som viktiga faktorer.'},
      {after:5,goal:'1.1',level:'Känna igen',q:'Vilket är ett positivt psykotiskt symtom?',a:['Avtrubbad affekt','Tillbakadragenhet','Hörselhallucination','Minskat tal'],c:2,e:'Hallucinationer hör till positiva symtom.'},
      {after:6,goal:'1.1',level:'Känna igen',q:'Vilket är ett negativt symtom?',a:['Förföljelseidé','Neologism','Tillbakadragenhet','Synhallucination'],c:2,e:'Tillbakadragenhet är ett negativt symtom i föreläsningen.'},
      {after:8,goal:'2.4',level:'Tillämpa',q:'Vilket påstående om psykos och våld ligger närmast POLKON-stödmaterialet?',a:['Akut psykos innebär alltid hög våldsrisk','Akut psykos innebär inte i sig hög våldsrisk; samsjukligt missbruk och andra riskfaktorer kan öka risken','Personer med psykos är aldrig våldsamma','Våldsrisk går inte att bedöma alls'],c:1,e:'Stödmaterialet betonar låg generell risk och att andra riskfaktorer måste bedömas.'},
      {after:9,goal:'3.2',level:'Tillämpa',q:'Personen säger att grannen sänder tankar genom väggen. Vilket svar ligger närmast kursens bemötande?',a:['"Ja, det gör grannen säkert"','"Det där är omöjligt, sluta"','"Jag hör att det här gör dig väldigt rädd. Berätta vad som händer just nu"','"Vi diskuterar inte sånt"'],c:2,e:'Du kan bekräfta känslan och lyssna utan att bekräfta vanföreställningens sakpåstående.'},
      {after:9,goal:'1.2',level:'Förklara',q:'Varför är psykosigenkänning inte samma sak som beslut om LPT?',a:['LPT kräver särskilda juridiska rekvisit utöver symtomigenkänning','Psykos kan aldrig vara APS','Polisen får inte observera psykotiska symtom','LPT gäller endast missbruk'],c:0,e:'LPT-bedömningen måste göras mot lagens egna förutsättningar.'}
    ],testSize:11,
    testQuestions:[
      {goal:'1.1',q:'Vad betyder "positiva" symtom i modulens minnesmodell?',a:['Att symtomen är bra','Att upplevelser eller uttryck har tillkommit','Att personen är positiv till vård','Att symtomen alltid går över'],c:1,e:'Positivt syftar här på tillkomna fenomen, inte värderingen bra/dåligt.'},
      {goal:'1.1',q:'Vilken symtomgrupp hör neologismer till i föreläsningen?',a:['Desorganisation/tankestörning','Negativt symtom','Affektivt symtom','Abstinens'],c:0,e:'Neologismer används som exempel på störningar i tankeförloppet/desorganisation.'},
      {goal:'2.4',q:'Vilket mönster kan tala för ett smygande schizofreniinsjuknande enligt föreläsningen?',a:['Ospecifika symtom först och psykotiska symtom som kommer gradvis','Alltid plötslig medvetslöshet','Enbart kortvarig eufori','Endast motorisk hyperaktivitet'],c:0,e:'Föreläsningen beskriver ofta smygande debut med gradvis psykotiska symtom.'},
      {goal:'3.1',q:'Vilken beskrivning är bäst dokumentationsmässigt?',a:['"Aggressiv psykotiker"','"Säger att någon följer honom, tittar återkommande bakom sig och höjer rösten när patrullen närmar sig"','"Konstig"','"Schizofren"'],c:1,e:'Konkreta observationer är mer precisa och mindre stigmatiserande än etiketter.'}
    ]
  });

  Object.assign(M('personlighet'), {
    intro:'Fördjupa klusterindelningen utan att tappa människan bakom diagnosen. Kursfilen ger mest konkret innehåll om antisocial form och borderline/emotionellt instabil form, samt ett tydligt bemötandefokus: tillit, delaktighet, autonomi, validering och medvetenhet om affektsmitta.',
    goals:['Känna till kluster A, B och C och vad som faktiskt behandlas i kursfilen','Känna igen de drag som föreläsningen lyfter vid antisocial respektive emotionellt instabil form','Använda ett bemötande som stärker tillit, delaktighet och autonomi utan att förstärka konflikt'],
    sections:[
      {h:'1. Människan bakom diagnosen',p:'Föreläsningen markerar tidigt "människan bakom diagnosen". Det är en viktig etisk och polisiär utgångspunkt: personlighetssyndrom beskriver långvariga mönster, men en polis möter alltid en individ i en specifik situation med egna behov, risker och resurser.',key:'Diagnosen är bakgrundskunskap – situationen och individen styr bemötandet.'},
      {h:'2. Förekomst och kontext',p:'Föreläsningen anger en förekomst på 5–10 procent i befolkningen och 30–50 procent inom psykiatrisk vård, med ännu högre förekomst inom rättspsykiatri eller kriminalvård. Siffrorna används i kursen för att visa att poliser sannolikt möter personer med personlighetssyndrom.',warning:'Högre förekomst i vissa verksamheter får inte användas som genväg för att förklara en enskild persons beteende.'},
      {h:'3. Etiologi – stress och sårbarhet',p:'Precis som i psykosmaterialet används en stress–sårbarhetsmodell. Föreläsningen lyfter ett komplext samspel mellan gener och miljö samt negativa livshändelser, däribland fysiska, psykiska och sexuella övergrepp. Samsjuklighet nämns också.',recall:{q:'Vilken grundidé används för att förklara uppkomst?',a:'Ett komplext samspel mellan genetiska/biokemiska och miljömässiga faktorer, tidigare erfarenheter och stressande livshändelser.'}},
      {h:'4. Tre kluster – en orienteringskarta',p:'Kursfilen delar in personlighetssyndrom i tre kluster. För flera former ges endast namn, vilket betyder att du framför allt ska kunna orientera dig i indelningen och sedan fördjupa de former som föreläsningen faktiskt beskriver.',table:{headers:['Kluster','Kursens etikett','Former som nämns'],rows:[['A','Udda och excentriska','Paranoid, schizoid, schizotypal'],['B','Dramatiska och impulsiva','Antisocial, borderline/emotionellt instabil, narcissistisk, histrionisk'],['C','Rädda och ängsliga','Ängslig, osjälvständig, tvångsmässig']]},recall:{q:'Vilket kluster innehåller antisocial och borderline/emotionellt instabil form?',a:'Kluster B – dramatiska och impulsiva.'}},
      {h:'5. Antisocial form – det kursfilen betonar',p:'Föreläsningen lyfter ansvarslöshet och hänsynslöshet, impulsivitet och aggressivitet, dragning till äventyr och riskfyllda aktiviteter samt låg grad av skuld, skam och ånger. Begreppet psykopati nämns, men kursfilen utvecklar inte en separat fullständig psykopatibeskrivning.',bullets:['Ansvarslöshet och hänsynslöshet','Impulsivitet och aggressivitet','Riskfyllda aktiviteter','Låg grad av skuld, skam och ånger enligt föreläsningen'],warning:'Undvik att använda "psykopat" som vardagsetikett. Kursfilen nämner begreppet men det ersätter inte en professionell bedömning.'},
      {h:'6. Borderline / emotionellt instabil form',p:'Föreläsningen beskriver instabil självbild och identitet, instabil sinnesstämning och instabila relationer. Självskadebeteende lyfts särskilt och leder vidare till frågan om vårdbehov.',bullets:['Instabil självbild och identitet','Instabil sinnesstämning','Instabila relationer','Självskadebeteende kan förekomma'],recall:{q:'Vilka tre typer av instabilitet lyfts?',a:'Självbild/identitet, sinnesstämning och relationer.'}},
      {h:'7. Kluster A, C och övriga former i B – håll dig till källan',p:'Kursfilen namnger paranoid, schizoid och schizotypal form i kluster A; narcissistisk och histrionisk form i kluster B; samt ängslig, osjälvständig och tvångsmässig form i kluster C. Den ger däremot inte detaljerade symtomlistor för dessa former.',warning:'I den här portalen läggs därför inte externa diagnoskriterier till. För tentaplugg ska du kunna klusterindelningen och det djup som faktiskt finns i kursmaterialet.'},
      {h:'8. Bemötande – tillit, delaktighet och validering',p:'Föreläsningen avslutas med ett tydligt bemötandepaket: bygg tillit och hopp, få personen att känna sig sedd och delaktig, respektera och stöd autonomi, validera, motivera och var medveten om att känslor smittar.',steps:[{title:'Reglera dig själv',text:'Ditt eget känsloläge påverkar mötet – affektsmitta.'},{title:'Skapa relation',text:'Tillit, hopp och att personen känner sig sedd minskar risken att mötet blir en maktkamp.'},{title:'Stöd autonomi',text:'Delaktighet och respekt för självbestämmande är centralt även när du behöver sätta tydliga ramar.'}],key:'Validering betyder att bekräfta personens känsla/upplevelse – inte att acceptera varje handling.'},
      {h:'9. Polisiär tillämpning – beteende, risk och etik',p:'Personlighetssyndrom kan bli relevant när stark affekt, impulsivitet, självskada eller konfliktmönster syns i ett ingripande. Kursens bemötandefokus talar för att undvika onödiga prestige- och värderingskonflikter, samtidigt som gränser och säkerhet måste vara tydliga.',compare:[{title:'Behåll',items:['Tydliga ramar','Lugn affekt','Delaktighet när det är möjligt','Konkreta observationer']},{title:'Undvik',items:['Etiketter som "manipulativ" som ersätter analys','Prestigekamp','Att själv dras med i affekten','Att anta att diagnosen förklarar allt']}],recall:{q:'Vilken bemötandeprincip hjälper särskilt mot affektsmitta?',a:'Att vara medveten om och reglera sitt eget känsloläge.'}}
    ],
    memory:'Kluster B får mest djup i kursfilen. I mötet: människa först → tillit → delaktighet → autonomi → validering → eget lugn.'
  });
  mergeLesson('personlighet',{
    quickChecks:[
      {after:0,goal:'3.1',level:'Förklara',q:'Vad signalerar rubriken "Människan bakom diagnosen"?',a:['Att diagnosen ska styra hela ingripandet','Att individen och situationen måste stå i centrum','Att personlighetssyndrom saknar betydelse','Att polisen ska ställa diagnos'],c:1,e:'Föreläsningen betonar människan bakom diagnosen.'},
      {after:3,goal:'1.1',level:'Känna igen',q:'Vilket kluster beskrivs som dramatiskt och impulsivt?',a:['A','B','C','Inget'],c:1,e:'Kluster B är dramatiska och impulsiva.'},
      {after:4,goal:'1.1',level:'Känna igen',q:'Vilket drag lyfts vid antisocial form?',a:['Ansvarslöshet och hänsynslöshet','Minskat sömnbehov','Hallucinationer','Sensorisk överkänslighet'],c:0,e:'Ansvarslöshet/hänsynslöshet och impulsivitet/aggressivitet hör till föreläsningens antisociala form.'},
      {after:5,goal:'2.4',level:'Känna igen',q:'Vad lyfter föreläsningen särskilt vid borderline/emotionellt instabil form?',a:['Instabil självbild, sinnesstämning och relationer samt självskadebeteende','Enbart storhetsidéer','Kognitiv nedsättning','Små pupiller'],c:0,e:'Det är kärninnehållet i föreläsningens slide.'},
      {after:7,goal:'3.2',level:'Tillämpa',q:'Vilket ligger närmast kursens bemötande?',a:['Bygg tillit och delaktighet, stöd autonomi och validera','Använd prestige för att tydliggöra makt','Undvik all bekräftelse','Tolka stark affekt som bevis på brott'],c:0,e:'Bemötandepunkterna är tillit/hopp, delaktighet, autonomi, validering, motivering och affektsmitta.'},
      {after:8,goal:'3.1',level:'Tillämpa',q:'Vad är bäst att dokumentera i ett konfliktfyllt möte?',a:['Konkreta beteenden och uttalanden','"Borderlineperson"','"Manipulativ" utan beskrivning','En antagen diagnos'],c:0,e:'Konkreta observationer stödjer både etik och analys.'}
    ],testSize:10,
    testQuestions:[
      {goal:'1.1',q:'Vilket av följande tillhör kluster C enligt föreläsningen?',a:['Ängslig form','Antisocial form','Paranoid form','Borderline'],c:0,e:'Ängslig, osjälvständig och tvångsmässig form ligger i kluster C.'},
      {goal:'1.1',q:'Vilken kluster-A-form nämns?',a:['Schizotypal','Histrionisk','Antisocial','Osjälvständig'],c:0,e:'Paranoid, schizoid och schizotypal nämns i kluster A.'},
      {goal:'3.2',q:'Vad menas med affektsmitta i modulens praktiska användning?',a:['Att eget känsloläge kan påverka och påverkas av mötet','Att känslor är smittsamma sjukdomar','Att man måste undvika all empati','Att diagnosen överförs'],c:0,e:'Föreläsningen markerar att känslor smittar – därför är självreglering viktig.'}
    ]
  });

  Object.assign(M('npf'), {
    intro:'Fördjupa autism och ADHD som neuropsykiatriska tillstånd med fokus på informationsbearbetning, social kommunikation, sensorisk belastning, uppmärksamhet, impulsivitet och hur polisens språk, tempo och miljö kan avgöra om ett möte blir begripligt eller överbelastande.',
    goals:['Känna igen kärnområdena vid autism och ADHD som de presenteras i kursmaterialet','Förstå varför oförutsägbarhet, ironi, många frågor och sensoriskt brus kan försvåra ett polisiärt möte','Anpassa kommunikation och miljö utan att göra generella antaganden om individen'],
    source:['np.pdf','Stödmaterial Polkon - psykisk ohälsa Till kursen'],
    sections:[
      {h:'1. Neuropsykiatriska tillstånd i kursen',p:'NPF-föreläsningen fokuserar på autism och ADHD. Syftet är inte att göra en diagnostisk utredning i fält, utan att känna igen mönster som kan påverka kommunikation, stress, impulskontroll och förmågan att ta emot instruktioner.',key:'Anpassning handlar ofta om hur du kommunicerar – inte om att "sänka kraven" på säkerhet eller laglydnad.'},
      {h:'2. Autism – tre centrala områden',p:'Föreläsningen beskriver störd utveckling inom social interaktion/mentalisering, kommunikation samt begränsade intressen och aktiviteter. Den väcker också frågan om intellektuell funktionsnedsättning men ger inget enkelt likhetstecken mellan autism och intellektuell funktionsnedsättning.',table:{headers:['Område','Kursens formulering'],rows:[['Social interaktion','Mentalisering/socialt samspel'],['Kommunikation','Svårigheter i hur information förstås/förmedlas'],['Intressen/aktiviteter','Begränsade intressen och aktiviteter']]},recall:{q:'Vilka tre områden står i autism-sliden?',a:'Social interaktion/mentalisering, kommunikation och begränsade intressen/aktiviteter.'}},
      {h:'3. Autism – variation och tidig utveckling',p:'Föreläsningen anger att symtomen vanligen märks innan tre års ålder. POLKON-stödmaterialet beskriver autismspektrum som varierande och betonar att personer kan ha olika språk- och begåvningsnivåer. Därför är individuella anpassningar viktigare än schabloner.',warning:'Autism säger inte i sig hur en viss person kommunicerar, vilken begåvningsnivå hen har eller hur hen reagerar i ett specifikt ingripande.',source:'Stödmaterial Polkon - psykisk ohälsa Till kursen'},
      {h:'4. Kommunikation vid autism',p:'NPF-föreläsningen lyfter att ironi, skämt och instruktioner kan misstolkas och att personen kan fastna i detaljer. POLKON-materialet utvecklar att bildligt tal och icke-verbal kommunikation kan vara svåra att tolka.',compare:[{title:'Gör tydligare',items:['Konkret språk','En instruktion i taget','Säg vad som ska hända härnäst','Ge rimlig tid för bearbetning']},{title:'Minska',items:['Ironi och dubbeltydighet','Flera instruktioner samtidigt','Otydlig turordning','Onödiga överraskningar']}],recall:{q:'Varför kan "skynda dig nu, du vet väl hur det här funkar" bli svårt?',a:'Det är både tidspress och en implicit/otydlig förväntan. Kursens bemötande förespråkar konkret och tydlig kommunikation.'}},
      {h:'5. Struktur, detaljer och sensoriskt stimuli',p:'Ostrukturerade och oförutsägbara situationer kan enligt föreläsningen leda till katastrofreaktioner. Sensoriskt stimuli lyfts uttryckligen. POLKON-stödmaterialet nämner känslighet för ljus och stökig/rörig miljö samt att små förändringar i rutiner kan vara mycket belastande.',steps:[{title:'Skapa förutsägbarhet',text:'Berätta kort vad som händer nu och vad nästa steg är.'},{title:'Minska brus',text:'Färre personer som pratar, mindre onödigt ljud/ljus när det är praktiskt möjligt.'},{title:'Var konsekvent',text:'Ändra inte instruktioner i onödan och förklara om förutsättningarna ändras.'}],recall:{q:'Vad kan göra en polissituation extra belastande vid autism?',a:'Oförutsägbarhet, ostruktur, sensoriskt stimuli, ironi/dubbeltydighet och många samtidiga krav.'}},
      {h:'6. Polisiär relevans – konflikt utan onda avsikter',p:'POLKON-stödmaterialet beskriver att störningar av en inrutad vardag kan leda till frustration och aggressiva utspel. Den praktiska lärdomen är att ett utagerande beteende inte automatiskt berättar varför personen agerar så. Stress, kommunikationssvårigheter och överbelastning behöver finnas med i analysen.',warning:'Förklara inte beteende med diagnosen ensam. Riskbedömning och rättslig bedömning är fortfarande individuell.',source:'Stödmaterial Polkon - psykisk ohälsa Till kursen'},
      {h:'7. ADHD – tre kärnsymtom',p:'ADHD-föreläsningen anger tre kärnsymtom: ouppmärksamhet, hyperaktivitet och impulsivitet. Föreläsningen tar också upp kriminalitet, beroendeproblematik och medicinsk behandling i prognosdelen.',table:{headers:['Kärnsymtom','Praktisk betydelse i ett samtal'],rows:[['Ouppmärksamhet','Långa instruktioner kan tappas bort'],['Hyperaktivitet','Rörelsebehov kan misstolkas som ovilja eller trots'],['Impulsivitet','Svar och handlingar kan komma snabbt innan konsekvenser hinner vägas in']]},warning:'Kolumnen "praktisk betydelse" är en pedagogisk tillämpning av kärnsymtomen, inte en diagnosregel.'},
      {h:'8. ADHD – prognos och samsjuklighet',p:'Föreläsningen uttrycker att ADHD inte går att bota men kan förbättras och nämner kriminalitet, beroendeproblematik och medicinsk behandling. POLKON-stödmaterialet beskriver också att andra diagnoser eller problem kan förekomma samtidigt.',recall:{q:'Vilka fyra teman står på prognos-sliden?',a:'Går inte att bota men förbättra, kriminalitet, beroendeproblematik och medicinsk behandling.'}},
      {h:'9. Bemötande vid ADHD',p:'Bemötandesliden är mycket konkret: ställ korta frågor, undvik många frågor i samma, håll dig kortfattad, tala långsamt och tydligt och var medveten om affektsmitta.',steps:[{title:'En fråga i taget',text:'Gör det lätt att veta vad personen förväntas svara på.'},{title:'Kort och tydligt',text:'Undvik långa instruktioner med flera delmoment.'},{title:'Reglera eget tempo',text:'Tala långsamt och tydligt även om personen själv har högt tempo.'}],recall:{q:'Vilka tre kommunikationsanpassningar är uttryckliga i ADHD-sliden?',a:'Korta frågor/en fråga i taget, kortfattat språk och långsamt/tydligt tal.'}},
      {h:'10. Autism och ADHD – jämför utan att blanda ihop',p:'Båda tillstånden kan göra ett intensivt polismöte svårt, men av olika skäl. Kursens praktiska gemensamma nämnare är tydlighet, minskat brus och medvetenhet om det egna bemötandet.',table:{headers:['Fokus','Autism i kursmaterialet','ADHD i kursmaterialet'],rows:[['Kommunikation','Ironi/skämt kan misstolkas, detaljfokus','Korta frågor och kortfattat språk'],['Miljö','Oförutsägbarhet/sensoriskt stimuli kan belasta','Högt eget tempo kan förstärka svårigheter'],['Kärnområde','Social interaktion, kommunikation, begränsade intressen','Ouppmärksamhet, hyperaktivitet, impulsivitet']]},key:'Liknande bemötandeverktyg kan hjälpa – men orsaken bakom svårigheten är inte densamma.'}
    ],
    memory:'Autism: konkret + förutsägbart + mindre stimuli. ADHD: kort + en sak i taget + långsamt/tydligt + håll eget lugn.'
  });
  mergeLesson('npf',{
    quickChecks:[
      {after:1,goal:'1.1',level:'Känna igen',q:'Vilka tre områden lyfts vid autism?',a:['Social interaktion/mentalisering, kommunikation, begränsade intressen/aktiviteter','Hallucinationer, vanföreställningar, tankestörningar','Nedstämdhet, energi, suicid','Tolerans, abstinens, drogsug'],c:0,e:'Det är de tre områden som står i NPF-föreläsningen.'},
      {after:4,goal:'3.2',level:'Tillämpa',q:'Vilken miljöförändring ligger närmast autism-bemötandet?',a:['Öka antalet personer som pratar','Minska onödigt sensoriskt stimuli och skapa förutsägbarhet','Använd mer ironi','Byt instruktion ofta'],c:1,e:'Föreläsningen lyfter oförutsägbarhet och sensoriskt stimuli som problem.'},
      {after:5,goal:'2.4',level:'Tillämpa',q:'En person blir starkt frustrerad när patrullen plötsligt ändrar plan. Vad är ett rimligt NPF-perspektiv?',a:['Det bevisar antisocialitet','Förändringen kan ha ökat stress/överbelastning; förklara den konkret och behåll riskbedömningen individuell','Det betyder att personen saknar ansvar','Det är alltid psykos'],c:1,e:'Kursmaterialet lyfter svårigheter med oförutsägbarhet och förändringar.'},
      {after:6,goal:'1.1',level:'Känna igen',q:'Vilka är ADHD:s kärnsymtom?',a:['Ouppmärksamhet, hyperaktivitet, impulsivitet','Paranoia, hallucinationer, katatoni','Skuld, värdelöshet, anhedoni','Tolerans, abstinens, craving'],c:0,e:'Det är kärnsymtomen i föreläsningen.'},
      {after:8,goal:'3.2',level:'Tillämpa',q:'Vilken frågestil rekommenderas vid ADHD?',a:['Flera frågor i samma mening','Korta frågor, en i taget','Snabbt tal för att matcha personen','Bara ja/nej-frågor oavsett situation'],c:1,e:'Föreläsningen säger korta frågor och inte många frågor i samma.'},
      {after:9,goal:'1.1',level:'Förklara',q:'Vilken skillnad är viktig mellan autism och ADHD i kursens kärninnehåll?',a:['Autism fokuserar social kommunikation/struktur/sensorik, ADHD ouppmärksamhet/hyperaktivitet/impulsivitet','De är samma diagnos','ADHD är alltid psykos','Autism innebär alltid intellektuell funktionsnedsättning'],c:0,e:'Kursen presenterar olika kärnområden även om vissa bemötandeverktyg överlappar.'}
    ],testSize:10,
    testQuestions:[
      {goal:'3.2',q:'Vilken instruktion är mest NPF-anpassad?',a:['"Skärp dig och gör det där som vanligt"','"Ställ dig här. Vänta tills jag säger till. Sedan går vi till bilen."','"Du vet vad du ska göra, eller hur?"','Tre instruktioner snabbt utan paus'],c:1,e:'Kort, konkret och sekventiell information ligger nära kursens bemötande.'},
      {goal:'1.1',q:'Vad anger föreläsningen om autism och ironi?',a:['Ironi kan vara svår att förstå','Ironi rekommenderas som metod','Alla med autism förstår ironi bättre än andra','Ironi har ingen koppling till kommunikation'],c:0,e:'Svårt att förstå ironi anges uttryckligen.'},
      {goal:'3.2',q:'Varför är affektsmitta relevant vid ADHD-bemötande?',a:['Det egna känsloläget kan påverka mötets tempo och konfliktgrad','ADHD smittar','Polisen ska spegla all impulsivitet','Det ersätter tydlig kommunikation'],c:0,e:'Föreläsningen lyfter affektsmitta som del av bemötandet.'}
    ]
  });

  Object.assign(M('suicidrisk'), {
    intro:'Den här modulen är nu en betydligt djupare syntes av kursens tillgängliga material: suicidnära tillstånd från POLKON-stödmaterialet, depressions- och psykosrisk från psykiatriföreläsningarna, aktivt lyssnande från kommunikationsmaterialet och den akuta juridiska vägen i LPT.',
    goals:['Identifiera uttryck och mönster som kräver skärpt suicidriskmedvetenhet','Förstå att suicid inte är en egen diagnos och kan förekomma vid flera tillstånd eller livskriser','Kombinera lugn kommunikation, skydd och rätt juridiskt spår utan att göra förenklade antaganden'],
    source:['Stödmaterial Polkon - psykisk ohälsa Till kursen','Föreläsning Affektiva HT26.pdf','psykos distansutb-1.pdf','LPT - distans.pdf','5 Kommunikativa kunskapsområdet.pdf','Distans HT26 Studiehandledning.pdf'],
    sections:[
      {h:'1. Suicid är inte en psykiatrisk diagnos',p:'POLKON-stödmaterialet beskriver suicid som en handling som kan ske till följd av depression, PTSD, psykos, allvarliga livshändelser eller missbruk. Det betyder att polisen inte kan använda en enda diagnos som förklaring till suicidrisk – riskspåret måste hållas öppet även när den bakomliggande situationen ser olika ut.',key:'Frågan är inte bara "vilken diagnos?" utan "vilka tankar, planer, riskfaktorer och skyddsbehov finns nu?"',recall:{q:'Varför är det fel att tänka att suicid alltid beror på depression?',a:'Kursmaterialet beskriver suicid som något som kan förekomma vid flera psykiska tillstånd, missbruk och allvarliga livshändelser utan utvecklad psykiatrisk diagnos.'},source:'Stödmaterial Polkon - psykisk ohälsa Till kursen'},
      {h:'2. Ta hot, tankar och tidigare försök på allvar',p:'Stödmaterialet betonar att självmordsnära tankar föregår suicid/suicidförsök och att tidigare suicidförsök tydligt ökar risken för fullbordat suicid. Därför ska hot, tankar och andra suicidtecken tas på allvar.',warning:'Avfärda inte uttryck om livsleda som "bara prat" utifrån att personen är påverkad, arg eller tidigare har uttryckt liknande saker.',recall:{q:'Vilken tidigare händelse lyfts som en tydlig riskmarkör?',a:'Tidigare suicidförsök.'},source:'Stödmaterial Polkon - psykisk ohälsa Till kursen'},
      {h:'3. Typiska kännetecken i POLKON-stödmaterialet',p:'Kännetecknen överlappar depression och andra tillstånd. De är inte en checklista som ensam avgör risk, men de hjälper dig att känna igen en person som kan vara suicidnära.',bullets:['Ihållande sorg, tomhet och hopplöshet','Värdelöshet och skuld','Förlust av intresse','Ät- och sömnsvårigheter','Irritation, gråt, ångest eller panik','Oförklarliga vredesutbrott','Ständig oro eller överdriven rädsla','Koncentrations- och beslutsproblem','Överdrivet intresse för dödsteman','Suicidtankar, planering eller försök'],recall:{q:'Nämn minst fem kännetecken från stödmaterialets lista.',a:'Exempel: hopplöshet, skuld/värdelöshet, förlust av intresse, sömnproblem, ångest, vredesutbrott, koncentrationssvårigheter, dödsteman och suicidplanering.'},source:'Stödmaterial Polkon - psykisk ohälsa Till kursen'},
      {h:'4. Depression, psykos och förhöjd risk',p:'Affektiva föreläsningen tar upp återkommande dödstankar, suicidtankar, planering och försök som depressionssymtom. Psykosmaterialet och POLKON-stödet lyfter också en tydligt förhöjd suicidrisk vid psykossjukdom, särskilt när personen blir djupt deprimerad.',compare:[{title:'Depressionsspår',items:['Dödstankar','Suicidtankar','Planering','Tidigare försök','Hopplöshet och värdelöshet']},{title:'Psykosspår',items:['Störd realitetsprövning kan samexistera med depression','Depressiva vanföreställningar kan innebära kraftigt förhöjd risk','Lyssna på innehållet i personens föreställningar']}],recall:{q:'Vilken kombination lyfts som särskilt riskfylld i POLKON-stödmaterialet?',a:'Psykossjukdom tillsammans med djup depression/depressiva vanföreställningar.'}},
      {h:'5. Missbruk och påverkan förändrar inte allvaret',p:'POLKON-stödmaterialet säger att missbruk spelar en viktig roll i suicidnära situationer. Beroendematerialet visar dessutom hur abstinens, depression, ångest och psykiatrisk samsjuklighet kan förekomma samtidigt. Ett polisiärt möte kan därför innehålla både toxikologisk/medicinsk risk och suicidrisk.',steps:[{title:'Se den kroppsliga risken',text:'Påverkan, abstinens och blandintag kan kräva akut sjukvårdsbedömning.'},{title:'Se den psykiska risken',text:'Livsleda, planering, hopplöshet och psykotiska symtom behöver hanteras parallellt.'},{title:'Se den rättsliga situationen',text:'Brott, LOB, LPT eller annan rättsgrund måste analyseras var för sig.'}],recall:{q:'Varför är "påverkad" inte en tillräcklig förklaring när någon uttalar suicidavsikt?',a:'Missbruk och suicidrisk kan förekomma samtidigt. Påverkan kan dessutom skapa medicinska risker som måste prioriteras parallellt.'}},
      {h:'6. Kommunikation – aktivt lyssnande är inte att hålla med',p:'Kommunikationsmaterialet beskriver aktivt lyssnande som ett sätt att hjälpa personen ur ett starkt känsloläge och bli mer mottaglig för information. Målet är att personen ska känna sig sedd, hörd och bekräftad. Att lyssna aktivt är uttryckligen inte samma sak som att hålla med.',bullets:['Identifiera känslor','Parafrasera','Reflektera','Använd effektiva pauser','Jag-budskap','Visa närvaro genom kroppsspråk och balanserad ögonkontakt'],recall:{q:'Vad är målet med aktivt lyssnande enligt kommunikationsmaterialet?',a:'Att personen känner sig sedd, hörd och bekräftad och kan bli mer öppen för information.'}},
      {h:'7. Fakta och känslor – förstå innan du problemlöser',p:'Samtalstekniken fakta–känslor går ut på att identifiera känslor och tolkningar och separera dem från faktadelen. Förändringstrappan varnar samtidigt för att gå mot problemlösning för tidigt innan relation och förtroende finns.',compare:[{title:'Känslor/tolkningar',items:['"Ingen bryr sig"','"Allt är hopplöst"','Rädsla, skuld, skam, vrede']},{title:'Fakta att klarlägga',items:['Vad har hänt?','Finns plan, medel eller tidsram?','Vad finns i miljön?','Finns vård/anhörig/stöd att koppla in?']}],warning:'Frågorna i faktakolumnen är pedagogiska exempel för att strukturera samtalet, inte en fullständig suicidriskbedömningsmanual.'},
      {h:'8. LPT 47 § – en möjlig akut juridisk väg',p:'LPT-föreläsningen anger att Polismyndigheten får tillfälligt omhänderta någon om det finns skälig anledning att anta allvarlig psykisk störning och personen är farlig för annans personliga säkerhet eller eget liv eller i övrigt behöver omedelbar hjälp. Det är alltså inte suiciduttalandet ensamt som automatiskt ger LPT – rekvisiten måste analyseras.',key:'Suicidrisk kan vara relevant för APS och LPT, men den juridiska prövningen måste göras mot hela bestämmelsen.'},
      {h:'9. Praktisk prioritering i ett sammansatt läge',p:'När brott, narkotikapåverkan och livsleda sammanfaller behöver flera spår hanteras i ordning utan att det ena osynliggör det andra.',steps:[{title:'Omedelbar säkerhet och medicinsk risk',text:'Säkra platsen och uppmärksamma medvetande, andning, överdos/abstinens och akut självskaderisk.'},{title:'Rättslig status',text:'Brottsmisstanke, eventuellt frihetsberövande och vårdrelaterat omhändertagande har olika rättsgrunder.'},{title:'Kommunikation och överlämning',text:'Behåll kontakt, minska onödig konflikt och lämna relevanta riskuppgifter till vården.'}],recall:{q:'Varför är ordningen viktig?',a:'För att akut fara för liv/hälsa kan kräva omedelbar hantering samtidigt som brott och andra rättsliga frågor fortfarande måste tas om hand korrekt.'}},
      {h:'10. Källgräns – vad denna modul inte ersätter',p:'Studiehandledningen anger en separat suicidologiföreläsning och webbutbildningen SPiSS del I–II. De materialen finns inte bland projektfilerna. V5-modulen är därför en fördjupad syntes av de tillgängliga kurskällorna, men ska inte betraktas som ersättning för hela kursens suicidologidel.',warning:'Komplettera denna modul med SPiSS och den separata suicidologiföreläsningen i Canvas när du har tillgång till dem.'}
    ],
    memory:'Suicid = inte en diagnos. Ta tankar/planer/försök på allvar. Lyssna aktivt, prioritera säkerhet och pröva juridiken mot faktiska rekvisit.'
  });
  mergeLesson('suicidrisk',{
    sourceNote:'Den separata suicidologiföreläsningen och SPiSS finns inte bland projektfilerna. V5 använder därför POLKON-stödmaterialet, affektiva syndrom, psykos, LPT, kommunikationsmaterialet och studiehandledningen.',
    quickChecks:[
      {after:0,goal:'1.1',level:'Förklara',q:'Vilket påstående om suicid ligger närmast POLKON-stödmaterialet?',a:['Suicid är en egen psykiatrisk diagnos','Suicid kan förekomma vid flera psykiska tillstånd, missbruk eller svåra livshändelser','Suicid förekommer bara vid depression','Suicid uttalat under påverkan är inte relevant'],c:1,e:'Stödmaterialet beskriver suicid som en handling, inte en diagnos, och flera möjliga bakomliggande situationer.'},
      {after:1,goal:'2.4',level:'Känna igen',q:'Vilken tidigare händelse lyfts som tydlig riskmarkör?',a:['Tidigare parkeringsanmärkning','Tidigare suicidförsök','Tidigare vårdcentralbesök','Tidigare ordningsbot'],c:1,e:'Tidigare suicidförsök ökar enligt stödmaterialet risken för fullbordat suicid.'},
      {after:2,goal:'2.4',level:'Känna igen',q:'Vilket finns i stödmaterialets lista över suicidnära kännetecken?',a:['Hopplöshet och suicidplanering','Alltid eufori','Alltid små pupiller','Alltid minskat sömnbehov utan trötthet'],c:0,e:'Hopplöshet och suicidplanering finns uttryckligen med.'},
      {after:5,goal:'3.2',level:'Förklara',q:'Vad betyder aktivt lyssnande i detta sammanhang?',a:['Att hålla med om allt','Att hjälpa personen känna sig sedd, hörd och bekräftad och bli mer mottaglig för information','Att undvika frågor','Att omedelbart ge ultimatum'],c:1,e:'Det är målet enligt kommunikationsmaterialet.'},
      {after:7,goal:'1.2',level:'Tillämpa',q:'En person säger att han vill dö. Vad är juridiskt mest korrekt?',a:['LPT gäller automatiskt','Uttalandet är en viktig riskuppgift men LPT måste prövas mot bestämmelsens samtliga relevanta rekvisit','Polisen får aldrig ingripa','Endast LVM kan användas'],c:1,e:'LPT 47 § kräver mer än ett suiciduttalande: skälig anledning att anta APS och fara för eget/annans liv eller omedelbart hjälpbehov.'},
      {after:8,goal:'2.4',level:'Tillämpa',q:'Brott + narkotikapåverkan + livsleda: vilket synsätt är bäst?',a:['Välj bara brottsspåret','Prioritera omedelbar säkerhet/medicinsk risk, håll vård- och brottsspår parallella och använd rätt rättsgrund för varje åtgärd','Avvakta tills personen är nykter oavsett risk','Utgå från att allt beror på narkotika'],c:1,e:'Sammansatta situationer kräver parallella risk- och rättsliga spår.'}
    ],testSize:11,
    testQuestions:[
      {goal:'2.4',q:'Vilket av följande är ett varningstecken i POLKON-stödmaterialet?',a:['Överdrivet intresse för dödsteman','Att äta lunch','Normal ögonkontakt','Att be om vatten'],c:0,e:'Överdrivet intresse för dödsteman finns med bland typiska kännetecken.'},
      {goal:'3.2',q:'Varför kan en effektiv paus vara användbar i ett suicidsamtal?',a:['Den ger utrymme och är en del av aktivt lyssnande','Den visar att polisen inte bryr sig','Den ersätter riskbedömning','Den får bara användas vid förhör'],c:0,e:'Effektiva pauser/tystnad nämns i sammanfattningen om aktivt lyssnande.'},
      {goal:'1.2',q:'Vilken bestämmelse behandlar polisens tillfälliga omhändertagande vid misstänkt APS och akut fara/hjälpbehov?',a:['LPT 47 § första stycket','LVM 6 §','RB 28:12','OSL 35:20'],c:0,e:'LPT 47 § första stycket är den akuta polisbestämmelsen i kursmaterialet.'},
      {goal:'3.1',q:'Vilket bemötande är mest etiskt hållbart när någon uttrycker livsleda?',a:['Ta uttrycket på allvar, lyssna och undvik att trivialisera','Säg att personen överdriver','Lova sådant du inte kan hålla','Ignorera uttalandet om personen är berusad'],c:0,e:'Kursmaterialet betonar att suicidtecken ska tas på allvar och att personen ska mötas med lyssnande och bekräftelse.'}
    ]
  });

  Object.assign(M('beroende'), {
    intro:'Beroendemodulen binder ihop vårdorganisation, belöningssystem, beroendekriterier, riskfaktorer, samhällskonsekvenser och de stora substansgrupperna. Tyngdpunkten ligger på att förstå beroende som ett komplext tillstånd och att kunna se samsjuklighet i stället för att behandla missbruk som ett isolerat problem.',
    goals:['Förklara kursens beroendekriterier och riskfaktorer','Beskriva alkohol, cannabis, centralstimulantia, bensodiazepiner, psykedelika och opioider på kursens nivå','Resonera om samhällskonsekvenser, samsjuklighet och ansvarsfördelning mellan sjukvård och socialtjänst'],
    sections:[
      {h:'1. Vem gör vad?',p:'Beroendeföreläsningen placerar socialtjänst, primärvård och regionens slutenvård/psykiatriska öppenvård runt personen. Anders-fallet visar hur abstinensbehandling och suicidprevention kan ligga hos sjukvården samtidigt som socialtjänsten planerar frivilliga insatser eller LVM-utredning.',table:{headers:['Aktör','Exempel i kursfallet'],rows:[['Sjukvård/region','Abstinensbehandling, suicidprevention, vårdplanering'],['Socialtjänst','Frivilliga insatser, behandlingshem/hemaplanslösning, eventuell LVM-utredning'],['SiS','LVM-hem efter beslut/placering']]},recall:{q:'Vad visar Anders-fallet om ansvar?',a:'Att sjukvård och socialtjänst kan behöva arbeta parallellt med olika delar av samma persons problem.'}},
      {h:'2. Belöningssystemet – kursens förklaringsmodell',p:'Föreläsningen lyfter dopamin och opiatreceptorer och beskriver bildligt att belöningssystemet "kidnappas och byggs om" när den konstgjorda belöningen blir starkare än naturlig belöning. Modellen används för att förstå varför beroende inte bara är en fråga om vilja.',warning:'Formuleringen är pedagogisk och förenklad. Använd den som kursmodell, inte som full neurobiologisk förklaring.'},
      {h:'3. Arv eller miljö? Ett samspel',p:'Föreläsningen räknar upp sensation seeking/personlighetsdrag, benägenhet för ångest/depression, neuropsykiatri, exponering/tillgång, normer på grupp- och samhällsnivå, genetik och tillgänglighet.',compare:[{title:'Individnära faktorer',items:['Personlighetsdrag/sensation seeking','Ångest och depression','Neuropsykiatri','Genetik']},{title:'Miljö/samhälle',items:['Exponering och tillgång','Normer','Tillgänglighet']}],key:'Kursens svar på "arv eller miljö?" är: ett samspel.'},
      {h:'4. Beroendekriterier',p:'Föreläsningen använder fem tydliga minnespunkter: tolerans, abstinens, kontrollförlust, drogsug och fortsatt konsumtion trots känd skadeverkan.',table:{headers:['Kriterium','Pedagogisk innebörd'],rows:[['Tolerans','Det krävs mer för samma effekt'],['Abstinens','Symtom när substansen minskar/upphör'],['Kontrollförlust','Svårt att styra mängd eller användning'],['Drogsug','Starkt begär'],['Fortsatt konsumtion','Användning fortsätter trots kända skador']]},recall:{q:'Räkna upp de fem kriterierna utan att titta.',a:'Tolerans, abstinens, kontrollförlust, drogsug och fortsatt konsumtion trots känd skadeverkan.'}},
      {h:'5. Samhällskonsekvenser',p:'Föreläsningen kopplar beroende till utsatta grupper, kriminalitet, olyckor, skador, misshandel och problematiska familjerelationer. Lärandemålet 2.3 kräver att du kan identifiera samhällskonsekvenser och komplexiteten vid samsjuklighet.',bullets:['Kriminalitet','Olyckor och skador','Misshandel','Problematiska familjerelationer','Utsatthet och behov av flera samhällsinsatser'],recall:{q:'Nämn tre samhällskonsekvenser som föreläsningen tar upp.',a:'Exempel: kriminalitet, olyckor/skador, misshandel och problematiska familjerelationer.'}},
      {h:'6. Alkohol – stor skaderisk och potentiellt farlig abstinens',p:'Alkohol beskrivs som en folksjukdom där arv och miljö samspelar. Föreläsningen anger ökad fysisk och psykisk ohälsa och skaderisk. Den markerar särskilt att alkoholabstinens kan vara potentiellt livsfarlig och kräva behandling.',key:'I ett polisiärt möte är "slutat dricka" inte automatiskt lugnande information vid tungt långvarigt bruk – abstinens kan vara medicinskt allvarlig.'},
      {h:'7. Cannabis',p:'Föreläsningen beskriver hasch och marijuana, kognitiv påverkan och möjliga psykiska effekter som ångest, förvirring, paranoia och depression. Cannabispsykoser nämns, liksom somatiska skador. Föreläsningen anger att specifik medicinsk behandling saknas.',recall:{q:'Vilka psykiska effekter av cannabis nämns?',a:'Ångest, förvirring, paranoia, depression och cannabispsykoser.'}},
      {h:'8. Centralstimulerande preparat',p:'Centralstimulantia beskrivs som direktverkande på dopaminsystemet och även på serotonin/noradrenalin. Låga doser kan skärpa koncentration och minska hunger, medan höga doser kan ge eufori. Kokain, amfetamin, metamfetamin, metylfenidat och kat nämns. Psykos kan förekomma.',warning:'Föreläsningen påminner om att vissa centralstimulerande läkemedel används lagligt vid ADHD/narkolepsi. Preparatgrupp är inte samma sak som olovligt bruk.'},
      {h:'9. Bensodiazepiner och psykedeliska droger',p:'Bensodiazepiner beskrivs som sedativa läkemedel som kan vara förskrivna men också förekomma på illegal marknad. Föreläsningen varnar för potentiellt livsfarlig abstinens. Psykedeliska droger anges som samlingsnamn för substanser som kan förändra sinnestillstånd, exempelvis LSD, psilocybin och meskalin.',compare:[{title:'Bensodiazepiner',items:['Sedativa/lugnande läkemedel','Kan förekomma legalt via recept och illegalt','Potentiellt livsfarlig abstinens']},{title:'Psykedeliska droger',items:['Förändrar sinnestillstånd','LSD','Psilocybin/svampar','Meskalin']}],recall:{q:'Vilken abstinensvarning ges för bensodiazepiner?',a:'Att abstinensen kan vara potentiellt livsfarlig och att sjukvård kan krävas.'}},
      {h:'10. Opiater och opioider',p:'Föreläsningen tar upp heroin och morfin som opiater och smärtstillande opioider som tramadol, OxyNorm/Oxycontin och fentanyl. Heroinberoende kopplas till svår social problematik, injektionsrelaterade infektioner och kraftigt förhöjd dödlighet. Opioidabstinens beskrivs som svår men inte livshotande i denna föreläsning.',warning:'Överdosrisk och abstinensrisk är olika frågor. Kursfilen skiljer uttryckligen den svåra opioidabstinensen från den potentiellt livsfarliga alkohol-/bensoabstinensen.'},
      {h:'11. Behandling och återfall',p:'Beroendeföreläsningen nämner KBT, återfallsprevention, 12-stegsprogram och anonyma intresseföreningar som AA och NA. Anders-fallet visar att återfall kan följas av ny abstinensbehandling, nya frivilliga insatser eller fördjupad LVM-process.',recall:{q:'Nämn två behandlings-/stödformer som föreläsningen tar upp.',a:'Exempel: KBT, återfallsprevention, 12-stegsprogram, AA och NA.'}},
      {h:'12. Samsjuklighet – när psykisk ohälsa och beroende korsas',p:'LVM-föreläsningen formulerar samsjuklighet tydligt: missbruk kan leda till psykisk ohälsa och psykisk ohälsa kan leda till missbruk. Vid mötet ska polisen inte försöka lösa hela vårdorganisationen utan identifiera vilket akut omhändertagandespår som är aktuellt och därefter lämna över till sjukvård/socialtjänst för fortsatt bedömning.',steps:[{title:'Akut medicinsk risk',text:'Abstinens, överdos eller somatiska tecken kan kräva omedelbar sjukvård.'},{title:'Psykiatrisk risk',text:'Suicid, psykos eller annan allvarlig psykisk problematik kan kräva psykiatrisk bedömning.'},{title:'Missbruksvård/socialtjänst',text:'Långsiktiga missbruksinsatser och LVM hör till socialtjänstens spår.'}],key:'Samsjuklighet = flera samtidiga behov, inte ett val mellan "psyke" och "missbruk".'}
    ],
    memory:'Beroende: tolerans + abstinens + kontrollförlust + drogsug + fortsatt bruk trots skada. Tänk alltid samsjuklighet och medicinsk risk.'
  });
  mergeLesson('beroende',{
    quickChecks:[
      {after:2,goal:'2.3',level:'Förklara',q:'Hur besvarar föreläsningen frågan "arv eller miljö"?',a:['Bara arv','Bara miljö','Ett samspel mellan flera individ- och miljöfaktorer','Ingen av dem har betydelse'],c:2,e:'Föreläsningen avslutar faktorsliden med "Ett samspel!".'},
      {after:3,goal:'2.1',level:'Känna igen',q:'Vilket är ett av beroendekriterierna?',a:['Kontrollförlust','Hallucination som krav','Alltid aggressivitet','Alltid arbetslöshet'],c:0,e:'Kontrollförlust är ett av fem kriterier i föreläsningen.'},
      {after:5,goal:'2.1',level:'Tillämpa',q:'Varför är alkoholabstinens polisiärt viktig att känna till?',a:['Den kan vara potentiellt livsfarlig och behöva behandling','Den är alltid mild','Den påverkar bara humöret','Den utesluter suicidrisk'],c:0,e:'Föreläsningen markerar alkoholabstinens som potentiellt livsfarlig.'},
      {after:8,goal:'2.1',level:'Känna igen',q:'Vilken abstinens beskrivs som potentiellt livsfarlig i beroendeföreläsningen?',a:['Bensodiazepiner','Cannabis alltid','Opioider alltid','Koffein'],c:0,e:'Bensodiazepinabstinens anges kunna vara potentiellt livsfarlig.'},
      {after:9,goal:'2.1',level:'Förklara',q:'Vilket påstående om opioidabstinens ligger närmast föreläsningen?',a:['Svår men anges som ej livshotande','Alltid utan symtom','Alltid livshotande','Botas genom alkohol'],c:0,e:'Föreläsningen beskriver svåra abstinenssymtom vid utsättning men "ej livshotande".'},
      {after:11,goal:'2.3',level:'Tillämpa',q:'Vad är bäst synsätt vid samsjuklighet?',a:['Välj antingen psykiatri eller missbruk och ignorera det andra','Håll medicinsk, psykiatrisk och social risk parallellt och identifiera rätt akut spår','Utgå från att socialtjänsten löser all akut sjukvård','Utgå från att psykiatrin ansvarar för all missbruksvård'],c:1,e:'Kursmaterialet betonar samverkan och att missbruk och psykisk ohälsa kan påverka varandra.'}
    ],testSize:11,
    testQuestions:[
      {goal:'2.1',q:'Vilket ingår inte i föreläsningens fem beroendekriterier?',a:['Tolerans','Drogsug','Kontrollförlust','Hallucination som obligatoriskt kriterium'],c:3,e:'Hallucination är inte ett av de fem kriterier som listas.'},
      {goal:'2.3',q:'Vilken samhällskonsekvens tas upp?',a:['Problematiska familjerelationer','Automatiskt LPT-beslut','Alltid hemlöshet','Alltid psykos'],c:0,e:'Problematiska familjerelationer nämns uttryckligen.'},
      {goal:'2.1',q:'Vilket preparat nämns som centralstimulerande?',a:['Amfetamin','Heroin','GHB','Diazepam'],c:0,e:'Amfetamin hör till centralstimulerande preparat.'},
      {goal:'3.1',q:'Vilken beskrivning bäst speglar kursens beroendeperspektiv?',a:['Beroende är en komplex problematik med biologiska, psykologiska och sociala faktorer','Beroende är bara brist på vilja','Allt missbruk kräver tvångsvård','Missbruk och psykisk ohälsa kan inte förekomma samtidigt'],c:0,e:'Föreläsningarna beskriver flera samverkande faktorer och samsjuklighet.'}
    ]
  });

  Object.assign(M('drogtecken'), {
    intro:'Drogteckenmodulen är nu en systematisk observationskurs: först vad som påverkar rusets uttryck, sedan intagningssätt, därefter varje drogkategori med kroppsliga och psykiska tecken. Målet är mönsterigenkänning – inte att tro att ett enskilt tecken bevisar en viss substans.',
    goals:['Identifiera kursens stora drogkategorier och vanliga preparat','Känna igen typiska kroppsliga och psykiska tecken vid centraldepressiva, cannabis, centralstimulerande, hallucinogener och opiater','Använda observationerna som grund för misstanke, säkerhet och provtagnings-/vårdresonemang utan att övertolka enstaka tecken'],
    sections:[
      {h:'1. Rus ser olika ut – börja med variationen',p:'Föreläsningen säger uttryckligen att rusets effekter och varaktighet varierar från person till person. Ålder, kön, fysisk hälsa, arvsanlag, tolerans, tillförselsätt, rusförväntningar, miljö, blandmissbruk, dos och hur snabbt preparatet bryts ned påverkar bilden.',key:'Ett tecken är aldrig hela bevisningen. Leta efter ett sammanhängande mönster och alternativa förklaringar.',recall:{q:'Nämn minst fem faktorer som kan påverka rusets uttryck.',a:'Exempel: ålder, kön, fysisk hälsa, arvsanlag, tolerans, tillförselsätt, rusförväntning, miljö, blandmissbruk och dos.'}},
      {h:'2. Intagningssätt och varför de spelar roll',p:'Kursmaterialet skiljer oralt intag, absorption via slemhinnor, injicering och inandning/rökning. Tillförselsättet påverkar hur snabbt och intensivt effekten kommer.',table:{headers:['Sätt','Kursens huvudpoäng'],rows:[['Oralt','Upptag via mage/tarm; långsammare, cirka 20–30 min'],['Absorption','Slemhinnor; snabbare och mer intensiv påverkan'],['Injektion','Intravenöst direkt i blodbanan; intensiv påverkan'],['Inandning/rökning','Via lungor till blod/hjärna; mycket snabb och intensiv effekt']]},recall:{q:'Vilket intagningssätt beskrivs som snabbast?',a:'Inandning/rökning beskrivs som snabbaste sättet att bli påverkad.'}},
      {h:'3. Drogkategorierna – bygg kartan först',p:'Föreläsningen delar in preparaten i centraldepressiva, inhalerande medel, cannabis, centralstimulerande medel, hallucinogener och opiater.',table:{headers:['Kategori','Exempel'],rows:[['Centraldepressiva','Alkohol, bensodiazepiner, GHB, GBL'],['Inhalerande','Lösningsmedel, aerosoler, anestetiska gaser'],['Cannabis','Marijuana, hasch, cannabisextrakt/oljor'],['Centralstimulerande','Amfetamin, metamfetamin, kokain, kat'],['Hallucinogener','LSD, MDMA, psilocybin, meskalin'],['Opiater/opioider','Heroin, morfin, metadon, tramadol, fentanyl']]},recall:{q:'Vilka sex kategorier används i föreläsningen?',a:'Centraldepressiva, inhalerande, cannabis, centralstimulerande, hallucinogener och opiater.'}},
      {h:'4. Centraldepressiva – hjärnan går långsammare',p:'Gemensamt för centraldepressiva är enligt föreläsningen att de hämmar centrala nervsystemets funktioner. Först påverkas medvetna rörelser, och vid högre doser kan även omedvetna funktioner som andning och hjärtverksamhet påverkas.',compare:[{title:'Lägre/måttlig påverkan',items:['Långsammare reaktioner','Motorisk påverkan','Dåsighet eller hämningslöshet kan förekomma']},{title:'Högre doser',items:['Medvetandepåverkan','Ytlig/långsam andning','Risk för allvarlig central dämpning']}],key:'Andning och medvetande går före narkotikautredning när personen är medicinskt instabil.'},
      {h:'5. Bensodiazepiner – alkoholliknande utan alkohollukt',p:'Kroppsliga tecken i föreläsningen är normala pupiller med långsam ljusreaktion, långsamma reflexer, slapp muskulatur, darrningar, muntorrhet, yrsel, sluddrande tal/stamning och alkoholliknande berusning utan lukt. Psykiskt nämns eufori, dåsighet, stämningssvängningar, hämningslöshet och känsla av oövervinnerlighet; högre doser kan ge aggressivitet/våldsamhet.',warning:'Vid stora doser anges medvetslöshet, ytlig andning och andningsförlamning – det är ett akut vårdspår.',recall:{q:'Vilket fynd är en bra minneskrok för bensodiazepiner?',a:'Alkoholliknande berusning utan alkohollukt tillsammans med långsamma reflexer/sluddrigt tal och ofta normala pupiller med långsam ljusreaktion.'}},
      {h:'6. Inhalerande medel',p:'Föreläsningen beskriver lösningsmedel, aerosoler och anestetiska gaser. Effekten kan likna alkoholpåverkan med yrsel, sluddrigt tal, blodsprängda ögon, förvrängd tids-/rumsuppfattning, slapp muskulatur och ibland fientligt beteende eller hallucinationer.',warning:'Föreläsningen anger att ämnena i denna kategori inte är narkotikaklassade. Påverkan och farlighet måste ändå hanteras.'},
      {h:'7. Cannabis – ögon, tanke och tidsuppfattning',p:'Cannabisdelen beskriver stora pupiller, blodsprängda/glansiga ögon, hängande ögonlock, snabb puls, muntorrhet och normal ljusreaktion. Psykiskt nämns svårighet att hålla samman tankar, försämrad tids- och rumsuppfattning, förvirring, minnesstörningar, upprymdhet/fnittrighet och förstärkt känsloläge.',table:{headers:['Kroppsligt','Psykiskt'],rows:[['Stora pupiller, blodsprängda/glansiga ögon','Tappar tråden, förvirring'],['Hängande ögonlock, snabb puls, muntorrhet','Försämrad tids- och rumsuppfattning'],['Normal pupillreaktion på ljus','Minnesstörning och förstärkt känsloläge']]},recall:{q:'Vilka två ögonfynd lyfts starkt vid cannabis?',a:'Stora/utvidgade pupiller och blodsprängda eller glansiga ögon.'}},
      {h:'8. Centralstimulerande – "fort och fel"',p:'Centralstimulerande medel ökar aktiviteten i centrala nervsystemet. Föreläsningen betonar att hjärnan inte fungerar "bättre" utan pressas att arbeta snabbare, med risk för misstag. Amfetamin/metamfetamin kan ge kraftigt vidgade pupiller, snabb/oregelbunden puls, svettning, muntorrhet, rastlöshet, muskelryckningar, pratsamhet, ökat självförtroende, retlighet/aggressivitet och tankeflykt.',key:'Minneskrok: stora pupiller + rastlös/energisk + pratsam/tankeflykt + kroppslig aktivering.',recall:{q:'Vad menar föreläsningen med "fort och fel"?',a:'Centralstimulerande pressar CNS att arbeta snabbare, vilket kan ge hög aktivitet men också ökad risk för misstag.'}},
      {h:'9. Kokain och syntetiska katinoner',p:'Kokain kan enligt föreläsningen ge eufori, pratsamhet, ökad energi, minskat sömnbehov/aptit, aggressivitet, stärkt självförtroende, vidgade pupiller, rastlöshet och osammanhängande tal. Syntetiska katinoner kan likna amfetamin/kokain men också ge hallucinogena effekter och i materialet varnas för svårdoserade och oförutsägbara förlopp.',warning:'Föreläsningen nämner våldsamt beteende i samband med vissa syntetiska katinoner. Bedöm alltid faktisk person och situation – använd inte preparatnamnet som automatisk våldsprediktion.'},
      {h:'10. Hallucinogener – förvanskad verklighetsbild',p:'LSD och MDMA behandlas särskilt. LSD kan ge fixerad blick, stora pupiller med normal ljusreaktion, förvanskning av tid/rum/sinnen, snabb humörväxling, förvirring och koordinationsproblem. MDMA kan ge lyckorus, ökad energi, vidgade pupiller, käkrörelser/tandgnissling, förhöjd kroppstemperatur, svettning, ångest/panik och hallucinationer.',compare:[{title:'LSD',items:['Förvanskad verklighetsbild','Fixerad blick','Stora pupiller med normal ljusreaktion','Humörväxling och förvirring']},{title:'MDMA',items:['Lyckorus/energi','Vidgade pupiller','Käkspänning/tandgnissling','Ökad temperatur/svettning','Ångest/panik kan förekomma']}],recall:{q:'Vilket kroppsligt tecken är särskilt typiskt i MDMA-listan?',a:'Käkspänning/okontrollerade käkrörelser och tandgnissling är tydliga exempel.'}},
      {h:'11. Opiater/opioider – små pupiller och långsam andning',p:'Opiatdelen anger välbefinnande/drömlikt tillstånd, små/sammandragna pupiller, hängande ögonlock, sluddrande eller låg/släpig röst, likgiltighet/sömnighet, långsam andning, illamående/kräkning och ibland knäande kroppsställning.',table:{headers:['Observationsområde','Typiskt mönster enligt föreläsningen'],rows:[['Pupiller','Små/sammandragna'],['Medvetande','Sömnighet/likgiltighet, hängande ögonlock'],['Tal','Sluddrande, låg/släpig röst'],['Andning','Långsam – central säkerhetsfråga']]},key:'Små pupiller + sjunkande medvetande + långsam andning = tänk akut opioidpåverkan och prioritera livräddande vård.'},
      {h:'12. Mönsterigenkänning – jämför kategorier',p:'Föreläsningen bygger på samlad observation av pupiller, ögon, tal, motorik, puls/andning och beteende. Nedanstående tabell sammanfattar just de tecken som finns i kursmaterialet.',table:{headers:['Kategori','Pupiller/ögon','Motorik/tal','Psykiskt/övrigt'],rows:[['Bensodiazepiner','Ofta normala, långsam ljusreaktion','Långsamma reflexer, slapp, sluddrig','Dåsig/hämningslös; alkohollik utan lukt'],['Cannabis','Stora; blodsprängda/glansiga ögon','Kan verka långsam eller tappar tråden','Tids-/rumsstörning, fnittrighet, minnesproblem'],['Centralstimulerande','Kraftigt vidgade','Rastlös, muskelryckningar, pratsam','Ökat självförtroende, retlighet, tankeflykt'],['Hallucinogener','Ofta stora','Koordination kan påverkas','Förvanskad verklighetsbild/hallucinationer'],['Opiater','Små','Sluddrig/låg röst, sömnig','Långsam andning, drömlikt tillstånd']]},warning:'Tabellen är en studiematris – inte ett ensamt beslutsunderlag för brottsmisstanke eller medicinsk diagnos.'},
      {h:'13. Från tecken till polisiär åtgärd',p:'Drogtecken används i kursen som underlag för att känna igen påverkan och bygga en konkret misstanke tillsammans med andra omständigheter. Samtidigt måste den medicinska säkerheten alltid gå först vid medvetande- eller andningspåverkan.',steps:[{title:'Observera',text:'Pupiller, ögon, tal, motorik, beteende, andning/puls och omgivningsfynd.'},{title:'Formulera',text:'Beskriv tecknen konkret – inte bara "ser narkotikapåverkad ut".'},{title:'Pröva rättsgrund',text:'Misstanke om eget bruk, innehav och husrannsakan har olika bevis- och lagstödsfrågor.'},{title:'Prioritera vård',text:'Medvetandesänkning, långsam andning eller andra akuta tecken ska inte vänta på utredningsåtgärder.'}]}
    ],
    memory:'Pupiller + ögon + tal + motorik + beteende + andning. Leta mönster, inte ett ensamt tecken.'
  });
  mergeLesson('drogtecken',{
    quickChecks:[
      {after:0,goal:'2.1',level:'Förklara',q:'Varför kan samma drog ge olika tydlig påverkan hos olika personer?',a:['Rus påverkas av bland annat dos, tolerans, tillförselsätt, miljö och fysisk hälsa','Alla reagerar exakt lika','Endast ålder spelar roll','Det går inte att observera drogpåverkan alls'],c:0,e:'Föreläsningen listar många faktorer som påverkar rusets effekter och varaktighet.'},
      {after:4,goal:'2.1',level:'Känna igen',q:'Vilket mönster passar bensodiazepiner?',a:['Alkoholliknande berusning utan lukt, långsamma reflexer och sluddrigt tal','Kraftigt vidgade pupiller och extrem rastlöshet','Små pupiller och långsam andning som huvudmönster','Endast hallucinationer'],c:0,e:'Det är centrala tecken i bensodiazepindelen.'},
      {after:6,goal:'2.1',level:'Känna igen',q:'Vilket passar cannabis?',a:['Blodsprängda ögon och försämrad tids-/rumsuppfattning','Små pupiller och låg andning','Alkohollukt som krav','Alltid fixerad blick utan andra symtom'],c:0,e:'Cannabislistan innehåller blodsprängda/glansiga ögon och störd tids-/rumsuppfattning.'},
      {after:7,goal:'2.1',level:'Känna igen',q:'Vilket mönster passar centralstimulerande?',a:['Stora pupiller, rastlöshet, snabb puls och pratsamhet','Normala pupiller, slapp muskulatur och långsamma reflexer','Små pupiller och sömnighet','Enbart blodsprängda ögon'],c:0,e:'Centralstimulerande medel ger ett aktiverat mönster i kursmaterialet.'},
      {after:9,goal:'2.1',level:'Känna igen',q:'Vilket fynd lyfts särskilt vid MDMA?',a:['Tandgnissling/käkspänning och förhöjd temperatur','Små pupiller och långsam andning','Alkohollukt','Slapp muskulatur utan energi'],c:0,e:'MDMA-listan tar upp käkrörelser/tandgnissling och kroppstemperatur/svettning.'},
      {after:10,goal:'2.1',level:'Tillämpa',q:'Små pupiller, sömnighet och långsam andning. Vad är den viktigaste första slutsatsen?',a:['Mönstret stämmer med opiat/opioidpåverkan och andningen är en akut säkerhetsfråga','Det är säkert cannabis','Personen behöver bara förhöras','Det finns ingen medicinsk risk'],c:0,e:'Opiatdelen lyfter små pupiller, sömnighet och långsam andning.'},
      {after:12,goal:'2.2',level:'Tillämpa',q:'Vad är bäst sätt att formulera drogtecken?',a:['"Narkotikapåverkad" utan detaljer','"Kraftigt vidgade pupiller, rastlös, svettig, pratar snabbt och tappar tråden"','"Ser skum ut"','"Missbrukare"'],c:1,e:'Konkreta observationer gör misstankegrunden tydligare och mer prövbar.'}
    ],testSize:12,
    testQuestions:[
      {goal:'2.1',q:'Vilken kategori hämmar centrala nervsystemet?',a:['Centraldepressiva','Centralstimulerande','Hallucinogener som gruppdefinition','Cannabis enligt kategorinamnet'],c:0,e:'Centraldepressiva medel hämmar CNS.'},
      {goal:'2.1',q:'Vilket intagningssätt beskrivs som mycket snabbt och intensivt?',a:['Inandning/rökning','Oralt','Enbart intramuskulärt','Inget påverkar hastigheten'],c:0,e:'Inandning/rökning beskrivs som snabbaste sättet.'},
      {goal:'2.1',q:'Vilken kategori hör heroin till?',a:['Opiater/opioider','Centralstimulerande','Cannabis','Inhalerande'],c:0,e:'Heroin är halvsyntetisk opiat i föreläsningen.'},
      {goal:'2.1',q:'Vilken kategori kan ge "förvanskad verklighetsbild" som tydligt kursmönster?',a:['Hallucinogener','Bensodiazepiner enbart','Alkohol enbart','Ingen'],c:0,e:'LSD/MDMA-delen lyfter förändrade sinnesintryck och verklighetsbild.'}
    ]
  });

  // 9. LPT – från frivillighet till tvångsvård
  Object.assign(M('lpt'), {
    intro:'LPT-modulen tränar hela kedjan från grundprincipen om frivillig vård till rekvisiten för psykiatrisk tvångsvård, polisens akuta omhändertagande och vad som händer när personen kommer till sjukvården. Målet är att du ska kunna hålla isär vårdens beslut, polisens tillfälliga omhändertagande och handräckning.',
    goals:['Förklara frivillighet som utgångspunkt och när LPT kan bryta den','Redogöra för LPT 3 § och begreppet allvarlig psykisk störning (APS)','Skilja LPT 47 § första stycket från vårdintyg, intagning och handräckning','Resonera om polisiär prioritering, befogenhet och överlämning till vården'],
    sections:[
      {h:'1. Utgångspunkten: självbestämmande och frivillighet',p:'Kursmaterialet börjar i de grundläggande fri- och rättigheterna: skydd mot påtvingat kroppsligt ingrepp och frihetsberövande samt rätten till frihet och personlig säkerhet. Hälso- och sjukvård ska som huvudregel ges med respekt för självbestämmande och integritet och får inte ges utan samtycke om inte annat följer av lag.',table:{headers:['Utgångspunkt','Kursens juridiska ankare'],rows:[['Kroppslig integritet','RF 2 kap. 6 §'],['Frihet','RF 2 kap. 8 § och EKMR art. 5'],['Värdig och jämlik vård','HSL 3 kap. 1 §'],['Självbestämmande/integritet','Patientlagen 4 kap. 1 §'],['Samtycke','Patientlagen 4 kap. 2 §']]},key:'Tvång är undantaget. Börja alltid analysen med frågan: finns frivillighet och samtycke, eller finns särskilt lagstöd för att frångå dem?',source:'LPT – distans, s. 2–4.'},
      {h:'2. LPT 3 § – kärnan i tvångsvården',p:'För sluten psykiatrisk tvångsvård krävs enligt kursmaterialet att patienten lider av en allvarlig psykisk störning, har ett oundgängligt behov av kvalificerad psykiatrisk dygnetruntvård som inte kan tillgodoses på annat sätt och motsätter sig vården – eller att det på grund av tillståndet finns grundad anledning att anta att vården inte kan ges med samtycke. Farlighet för annans personliga säkerhet eller fysiska/psykiska hälsa ska beaktas vid vårdbehovet.',steps:[{title:'1. APS',text:'Finns en allvarlig psykisk störning i juridisk mening?'},{title:'2. Oundgängligt vårdbehov',text:'Behovet kan inte tillgodoses på annat sätt än kvalificerad psykiatrisk dygnetruntvård.'},{title:'3. Samtycke',text:'Patienten motsätter sig vården eller tillståndet ger grundad anledning att anta att vården inte kan ges med samtycke.'}],warning:'En diagnos räcker inte ensam. Rekvisiten måste bedömas tillsammans.',recall:{q:'Vilka tre kärnfrågor ska du kunna återge för sluten LPT?',a:'APS, ett oundgängligt behov av psykiatrisk dygnetruntvård som inte kan lösas på annat sätt och motstånd/bristande möjlighet till samtycke.'},source:'LPT – distans, LPT 3 §.'},
      {h:'3. APS – juridiskt begrepp, inte diagnos',p:'Allvarlig psykisk störning är enligt föreläsningen en juridisk term. Innebörden söks i praxis och förarbeten. Kursmaterialet beskriver tillstånd präglade av störd realitetsprövning eller hög suicidrisk och nämner exempel som psykotiska tillstånd, svåra personlighetstillstånd, maniska skov och svåra depressioner.',compare:[{title:'Kan tala för APS',items:['Psykotiskt tillstånd med störd realitetsprövning','Maniskt skov av tillräcklig svårighetsgrad','Svår depression, särskilt vid hög suicidrisk','Svåra personlighetstillstånd i vissa situationer']},{title:'Inte samma sak som APS',items:['Att ha en psykiatrisk diagnos','Att må psykiskt dåligt','Att vara upprörd eller berusad i sig','Att bete sig avvikande utan övrig juridisk grund']}],key:'Polisen behöver kunna känna igen omständigheter som gör APS möjlig – men den slutliga vårdbedömningen är vårdens uppgift.',source:'LPT – distans, avsnittet Allvarlig psykisk störning.'},
      {h:'4. LPT 47 § första stycket – polisens akuta omhändertagande',p:'Polismyndigheten får tillfälligt omhänderta en person när det finns skälig anledning att anta APS och personen är farlig för annans personliga säkerhet eller eget liv, eller i övrigt behöver omedelbar hjälp. Syftet är att överbrygga tiden tills hälso- och sjukvårdspersonal kan ge hjälp; den omhändertagne får föras till en vårdenhet som kan ge stöd och behandling.',steps:[{title:'Skälig anledning att anta APS',text:'Det ska finnas konkreta omständigheter som gör APS antaglig.'},{title:'Akut rekvisit',text:'Fara för annan, fara för eget liv eller annat omedelbart hjälpbehov.'},{title:'Tillfälligt',text:'Polisens åtgärd gäller i väntan på sjukvårdens hjälp – det är inte ett beslut om LPT-vård.'}],warning:'47 § första stycket är inte ett generellt lagstöd för att omhänderta alla som mår psykiskt dåligt.',recall:{q:'Vad är den vanligaste sammanblandningen kring 47 §?',a:'Att polisens tillfälliga omhändertagande förväxlas med vårdens beslut om psykiatrisk tvångsvård eller med en handräckning.'},source:'LPT – distans, LPT 47 § första stycket.'},
      {h:'5. Polisbeslut och brådskande lägen',p:'Föreläsningen kopplar LPT-omhändertagandet till polisens beslutsordning och Polislagen 11 § i brådskande situationer. Studiepoängen är att du ska kunna identifiera vilket frihetsberövande som genomförs och vem som faktiskt fattar beslutet enligt aktuell delegationsordning.',warning:'Exakta interna beslutsnivåer och delegationsordningar kan ändras. Portalen återger kursens rättsliga struktur men ska inte användas som operativt beslutsstöd.',source:'LPT – distans, avsnittet om beslutsfattare.'},
      {h:'6. Vårdintyg – LPT 4 §',p:'En läkare undersöker personen för vårdintyg. Vårdintyg utfärdas om det finns sannolika skäl för att förutsättningarna för sluten psykiatrisk tvångsvård är uppfyllda. Kursmaterialet betonar att vårdintyg och intagningsbeslut är två olika steg.',table:{headers:['Steg','Vem/vad'],rows:[['Undersökning för vårdintyg','Läkare enligt LPT 4 §'],['Vårdintyg','Sannolika skäl för att LPT 3 § är uppfylld'],['Kvarhållning efter vårdintyg','LPT 6 § med möjlighet till nödvändigt tvång'],['Intagningsfråga','Ny undersökning och beslut senast inom 24 timmar enligt LPT 6 b §']]},key:'Vårdintyg ≠ intagningsbeslut. Två läkare ska i kedjan bedöma förutsättningarna.',source:'LPT – distans, avsnittet Vad händer när vi kommer till sjukvården?'},
      {h:'7. Före vårdintyg – varför handräckning kan behövas',p:'Kursmaterialet anger att sjukvården före utfärdat vårdintyg inte har LPT-stöd att tvinga personen att stanna eller använda våld för att genomföra undersökningen. I dessa situationer kan behörig läkare begära polisens hjälp enligt handräckningsreglerna.',warning:'Det här är en central gräns: ett vårdbehov i sig skapar inte automatiskt rätt att använda tvång innan rätt lagstöd finns.',source:'LPT – distans och Handräckning – distans.'},
      {h:'8. Efter vårdintyg och intagning',p:'När vårdintyg har utfärdats får personen enligt kursmaterialet hållas kvar på vårdinrättningen och nödvändigt tvång får användas enligt LPT 6 §. Senast 24 timmar efter ankomst ska frågan om intagning avgöras genom ny undersökning av chefsöverläkare vid psykiatrisk enhet; det får inte vara samma läkare som utfärdade vårdintyget. För fortsatt tvångsvård utöver fyra veckor behövs domstolsbeslut enligt LPT 7 §.',steps:[{title:'Vårdintyg',text:'Ger grund för kvarhållning enligt LPT 6 §.'},{title:'Ny läkarbedömning',text:'Intagningsfrågan ska avgöras inom 24 timmar.'},{title:'Längre vård',text:'Förvaltningsrätten kopplas in för vård utöver den första tiden enligt kursmaterialet.'}]},
      {h:'9. LPT och barn',p:'Föreläsningen anger att LPT även gäller barn och att den som är under 18 år ska vårdas på särskild enhet för barn och unga. Kursen markerar också att det finns särskilda regler för tvångsåtgärder mot barn.',warning:'Den här portalen går inte längre än kursmaterialet i detaljerna om barnreglerna; LVU behandlas huvudsakligen i nästa kurs.'},
      {h:'10. Polisiär analys – håll isär tre frågor',p:'Vid psykisk kris blir resonemanget tydligare om du skiljer på symtom, juridik och akut säkerhet.',table:{headers:['Fråga','Exempel på korrekt fokus'],rows:[['Vad ser jag?','Vanföreställningar, suiciduttalanden, desorganisation, mani, påverkan'],['Vilket lagstöd kan aktualiseras?','Frivillig vård, LPT 47 §, handräckning, brottsprocessuellt frihetsberövande'],['Vad måste ske nu?','Skydda liv, minska risk, få till medicinsk/psykiatrisk bedömning och dokumentera konkreta omständigheter']]},key:'Symtom leder inte mekaniskt till ett lagrum. Rekvisiten måste prövas i den konkreta situationen.'}
    ],
    memory:'LPT: frivillighet först. Sluten tvångsvård = APS + oundgängligt dygnetruntvårdbehov + motstånd/bristande samtycke. 47 § 1 st = polisens tillfälliga akutomhändertagande – inte själva vårdbeslutet.'
  });
  mergeLesson('lpt',{
    quickChecks:[
      {after:0,goal:'1.2',level:'Förklara',q:'Vad är huvudregeln för hälso- och sjukvård?',a:['Vård med samtycke och respekt för självbestämmande','Tvång vid all psykisk ohälsa','Polisen avgör vårdformen','Anhöriga avgör alltid'],c:0,e:'Frivillighet och samtycke är utgångspunkten; tvång kräver särskilt lagstöd.'},
      {after:1,goal:'1.2',level:'Känna igen',q:'Vilket är INTE ett kärnrekvisit för sluten LPT enligt kursmaterialet?',a:['APS','Oundgängligt behov av psykiatrisk dygnetruntvård','Motstånd/bristande möjlighet till samtycke','Att personen har begått ett brott'],c:3,e:'Brott är inte ett LPT 3 §-rekvisit.'},
      {after:2,goal:'1.2',level:'Förklara',q:'Vad är APS?',a:['En juridisk term','En specifik ICD-diagnos','Synonymt med all psykisk ohälsa','En polisiär brottsrubricering'],c:0,e:'Kursmaterialet betonar att APS är ett juridiskt, inte medicinskt, begrepp.'},
      {after:3,goal:'1.2',level:'Tillämpa',q:'Vad gör LPT 47 § första stycket?',a:['Ger polisen möjlighet till tillfälligt akut omhändertagande vid angivna rekvisit','Beslutar om sex månaders tvångsvård','Ersätter vårdintyg','Är samma sak som handräckning'],c:0,e:'Bestämmelsen överbryggar tiden till sjukvårdens hjälp.'},
      {after:5,goal:'1.2',level:'Förklara',q:'Vad är rätt skillnad mellan vårdintyg och intagningsbeslut?',a:['Vårdintyg är ett första läkarsteg; intagning avgörs senare genom ny bedömning','De är exakt samma beslut','Polisen utfärdar vårdintyget','Vårdintyg kräver alltid domstolsbeslut först'],c:0,e:'Kursmaterialet beskriver en tvåstegsprocess med två läkarbedömningar.'},
      {after:6,goal:'1.2',level:'Tillämpa',q:'Varför kan läkare behöva polisens handräckning före vårdintyg?',a:['Vården saknar då LPT-stöd att med våld hålla kvar personen för undersökningen','Läkaren får aldrig prata med patienten utan polis','Vårdintyg utfärdas av polis','Handräckning ersätter läkarundersökning'],c:0,e:'Handräckningen kan göra undersökningen praktiskt möjlig när tvång annars saknar stöd.'}
    ],testSize:12,
    testQuestions:[
      {goal:'1.2',q:'Vilken bestämmelse i kursen innehåller grundrekvisiten för psykiatrisk tvångsvård?',a:['LPT 3 §','LPT 47 §','LVM 13 §','PL 20 §'],c:0,e:'LPT 3 § är kärnbestämmelsen om förutsättningarna.'},
      {goal:'1.2',q:'Vilket exempel nämns i kursmaterialet som tillstånd som KAN utgöra APS beroende på svårighetsgrad?',a:['Maniskt skov','Vanlig sorg i sig','Mild tillfällig oro','Att vara arg'],c:0,e:'Maniska skov nämns som exempel på tillstånd som kan omfattas.'},
      {goal:'1.2',q:'Efter utfärdat vårdintyg får personen enligt kursmaterialet hållas kvar med stöd av vilken bestämmelse?',a:['LPT 6 §','LPT 47 § första stycket','LVM 6 §','RB 28:12'],c:0,e:'LPT 6 § behandlas som kvarhållningssteget efter vårdintyg.'},
      {goal:'2.4',q:'En person är psykotisk men lugn, tar frivilligt emot vård och inget akut hjälpbehov/fara framkommer. Vad är bästa juridiska slutsats?',a:['Psykos betyder inte automatiskt att polisens 47 §-rekvisit är uppfyllda','47 § ska alltid användas vid psykos','Polisen ska alltid gripa personen','LVM gäller automatiskt'],c:0,e:'Symtom/diagnos måste skiljas från de konkreta juridiska rekvisiten.'}
    ]
  });

  // 10. LRV
  Object.assign(M('lrv'), {
    intro:'LRV-modulen visar när psykiatrisk vård med frihetsberövande och tvång sker i rättspsykiatriska sammanhang. Den viktigaste förståelsen är skillnaden mot LPT: LRV knyts bland annat till domstolsbeslut, straffrättsliga frihetsberövanden och kriminalvård.',
    goals:['Förklara vilka personkategorier LRV omfattar','Redogöra för rättspsykiatrisk vård som påföljd enligt kursens BrB 31 kap. 3 §-modell','Skilja vård med och utan särskild utskrivningsprövning (SUP)','Förklara polisens relevanta roll kring frihetsberövade personer och handräckning'],
    sections:[
      {h:'1. Vad är LRV?',p:'LRV gäller enligt kursmaterialet psykiatrisk vård förenad med frihetsberövande och annat tvång i andra fall än dem som avses i LPT.',table:{headers:['LRV 1 § – kursens tre huvudgrupper','Exempel'],rows:[['Efter domstolsbeslut','Person som dömts till rättspsykiatrisk vård'],['Straffrättsligt frihetsberövad','Anhållen, häktad eller intagen för rättspsykiatrisk undersökning'],['Kriminalvård','Person intagen i eller som ska förpassas till kriminalvårdsanstalt']]},recall:{q:'Vilka tre huvudgrupper omfattas av LRV 1 § enligt föreläsningen?',a:'Domstolsöverlämnade till rättspsykiatrisk vård, anhållna/häktade/RPU-intagna och personer i eller på väg till kriminalvårdsanstalt.'},source:'LRV – distans, LRV 1 §.'},
      {h:'2. Rättspsykiatrisk vård som påföljd',p:'Föreläsningen kopplar domstolsöverlämnande till Brottsbalken 31 kap. 3 §. Kärnan är att den som begått ett brott där påföljden inte bedöms kunna stanna vid böter kan överlämnas till rättspsykiatrisk vård om personen lider av APS och det är påkallat med psykiatrisk slutenvård förenad med frihetsberövande och tvång.',steps:[{title:'Brottet',text:'Påföljden kan inte stanna vid böter.'},{title:'Tillståndet',text:'Personen lider av allvarlig psykisk störning.'},{title:'Vårdbehovet',text:'Det är påkallat med psykiatrisk vård på inrättning med frihetsberövande och tvång.'}],key:'LRV som påföljd beslutas av domstol – inte av polisen på plats.'},
      {h:'3. Sinnestillståndet och APS',p:'Föreläsningen betonar att APS är centralt även i rättspsykiatrin. Vid påföljdsfrågan spelar gärningspersonens psykiska tillstånd och personliga förhållanden roll. Vid särskild utskrivningsprövning blir även frågan om brottet begicks under påverkan av APS och framtida risk för allvarlig brottslighet central.',warning:'APS är samma juridiska begrepp som i LPT-sammanhang men rättsfrågan och beslutsprocessen är en annan.'},
      {h:'4. Särskild utskrivningsprövning (SUP)',p:'Om brottet begicks under påverkan av APS kan domstolen besluta om SUP om det till följd av störningen finns risk för återfall i brottslighet av allvarligt slag. Föreläsningen beskriver SUP som en samhällsskyddsåtgärd.',compare:[{title:'Utan SUP',items:['Chefsöverläkaren beslutar om sluten vård ska övergå till öppen','Chefsöverläkaren beslutar om vården ska avslutas när vårdbehovet upphört']},{title:'Med SUP',items:['Förvaltningsrätten beslutar om övergång till öppen vård','Förvaltningsrätten beslutar om vårdens upphörande','Återfallsrisk ingår i bedömningen']}],recall:{q:'Vem fattar centrala utskrivnings-/öppenvårdsbeslut vid SUP?',a:'Förvaltningsrätten enligt kursmaterialet.'}},
      {h:'5. Sluten vård först vid SUP',p:'Kursmaterialet anger att rättspsykiatrisk vård med särskild utskrivningsprövning alltid inleds i sluten form. Föreläsningen använder vårdtidsstatistik för att illustrera att rättspsykiatrisk vård ofta blir långvarig.',warning:'Statistik kan förändras över tid. För tentaplugg är den juridiska skillnaden mellan SUP och icke-SUP viktigare än en enskild siffra.'},
      {h:'6. Rättspsykiatrisk undersökning',p:'För att någon ska kunna dömas till rättspsykiatrisk vård krävs enligt föreläsningen rättspsykiatrisk utredning genom Rättsmedicinalverket. Två former presenteras: § 7-intyg som läkarintyg och en mer omfattande rättspsykiatrisk undersökning (RPU).',table:{headers:['Form','Kursens beskrivning'],rows:[['§ 7-intyg','Undersökning i form av läkarintyg'],['RPU','Mer omfattande rättspsykiatrisk undersökning']]},source:'LRV – distans, avsnittet Rättspsykiatrisk undersökning.'},
      {h:'7. Anhållen eller häktad som behöver psykiatrisk vård',p:'Föreläsningen tar upp den praktiska situationen där en straffrättsligt frihetsberövad person visar vårdbehov. Stationsbefäl ansvarar för arresten och Häkteslagen 5 kap. 1 § nämns som grund för läkarundersökning om den intagne kan vara i behov av vård. Vårdintyg kan aktualiseras och personen kan därefter flyttas till rättspsykiatrisk vård.',steps:[{title:'Upptäck vårdbehov',text:'Observera psykiskt och somatiskt tillstånd trots att personen är frihetsberövad för brott.'},{title:'Medicinsk bedömning',text:'Läkarundersökning aktualiseras enligt kursens hänvisning till Häkteslagen.'},{title:'Rätt vårdform',text:'LRV blir relevant för den som redan omfattas av de straffrättsliga kategorierna.'}],key:'Brottsmisstanke upphäver inte vårdbehov. Frihetsberövade personer ska också få adekvat medicinsk och psykiatrisk bedömning.'},
      {h:'8. LRV-handräckning',p:'Handräckningsföreläsningen anger att LRV 27 § hänvisar till reglerna i LPT 47 § andra och tredje styckena samt 47 a–b §§ i tillämpliga delar. Hjälp ska också kunna lämnas när en patient som avses i LRV 7 § första stycket inte inställer sig när vården ska påbörjas.',warning:'LRV-handräckning är en specialreglerad uppgift. Identifiera alltid vem som begär hjälp och vilken rättslig situation begäran gäller.'},
      {h:'9. LPT eller LRV?',p:'En pedagogisk tumregel är att fråga vilken rättslig kontext personen befinner sig i.',table:{headers:['Situation','Primärt regelverk i kursen'],rows:[['Person i samhället med akut psykiatriskt tvångsvårdsbehov','LPT'],['Domstol har överlämnat till rättspsykiatrisk vård','LRV'],['Anhållen/häktad som behöver psykiatrisk tvångsvård','LRV-kontext'],['Kriminalvårdsintagen med psykiatriskt tvångsvårdsbehov','LRV-kontext']]},key:'Skillnaden avgörs inte av hur “allvarlig” sjukdomen ser ut utan av den rättsliga situationen och lagens tillämpningsområde.'}
    ],
    memory:'LRV = rättspsykiatrisk vård i särskilda straffrättsliga situationer. Domstolspåföljd, anhållen/häktad/RPU eller kriminalvård. SUP flyttar centrala utskrivningsbeslut till förvaltningsrätten.'
  });
  mergeLesson('lrv',{
    quickChecks:[
      {after:0,goal:'1.2',level:'Känna igen',q:'Vilken person omfattas typiskt av LRV 1 §?',a:['En häktad person som behöver psykiatrisk tvångsvård','Alla som är deprimerade','Alla med ADHD','En frivillig patient på vårdcentral'],c:0,e:'Häktade är en av de uttryckliga grupperna i LRV 1 §.'},
      {after:1,goal:'1.2',level:'Förklara',q:'Vem beslutar att rättspsykiatrisk vård ska vara påföljd?',a:['Domstol','Patrullerande polis','Socialtjänsten','Vårdcentralens receptionist'],c:0,e:'Rättspsykiatrisk vård som påföljd är ett domstolsbeslut.'},
      {after:3,goal:'1.2',level:'Förklara',q:'Vad innebär SUP i föreläsningens modell?',a:['Förvaltningsrätten får centrala beslut om öppen vård/avslut och återfallsrisk beaktas','Patienten skrivs alltid ut efter en vecka','Polisen bestämmer utskrivning','SUP är samma sak som LPT 47 §'],c:0,e:'SUP är kopplat till samhällsskydd och domstolsprövning av vårdens fortsättning/övergång.'},
      {after:5,goal:'1.2',level:'Känna igen',q:'Vilka två rättspsykiatriska undersökningsformer nämns?',a:['§ 7-intyg och RPU','LPT 47 och LVM 13','LOB och PL 12 a','HSL och SoL'],c:0,e:'Föreläsningen skiljer mellan § 7-intyg och den mer omfattande RPU.'},
      {after:6,goal:'2.4',level:'Tillämpa',q:'En häktad person blir tydligt psykotisk och suicidal. Vad är en viktig princip?',a:['Frihetsberövandet för brott utesluter inte behov av läkarundersökning och psykiatrisk vård','Personen får inte få vård förrän rättegången är klar','LVM gäller alltid','Polisen ska själv ställa diagnos'],c:0,e:'Kursmaterialet tar uttryckligen upp vårdbehov hos anhållna/häktade.'}
    ],testSize:10,
    testQuestions:[
      {goal:'1.2',q:'Vilken lag reglerar rättspsykiatrisk vård?',a:['LRV','LPT enbart','SoL','LOB'],c:0,e:'LRV = lagen om rättspsykiatrisk vård.'},
      {goal:'1.2',q:'Vilket villkor nämns i BrB 31:3-modellen utöver APS och vårdbehov?',a:['Påföljden för brottet kan inte stanna vid böter','Personen måste vara över 65','Brottet måste vara narkotikabrott','Polisen måste begära SUP'],c:0,e:'Föreläsningen anger att påföljden inte kan stanna vid böter.'},
      {goal:'1.2',q:'Vem beslutar normalt om vårdens avslut utan SUP enligt föreläsningen?',a:['Chefsöverläkaren','Förvaltningsrätten i alla fall','Polismyndigheten','Socialnämnden'],c:0,e:'Utan SUP ligger dessa beslut hos chefsöverläkaren enligt kursmaterialet.'},
      {goal:'1.2',q:'Vilken princip skiljer bäst LPT från LRV?',a:['LRV används i särskilda rätts-/frihetsberövandekontexter, LPT i övrig psykiatrisk tvångsvård','LRV gäller bara depression','LPT gäller bara barn','Lagarna är identiska'],c:0,e:'Tillämpningsområdet är den centrala skillnaden.'}
    ]
  });

  // 11. LVM
  Object.assign(M('lvm'), {
    intro:'LVM-modulen bygger från frivillig socialtjänst till tvångsvård vid fortgående missbruk. Du tränar LVM 4 §, det akuta omhändertagandet i 13 §, polisens anmälnings- och samverkansroll, PL 12 a §, LOB-gränser och handräckning.',
    goals:['Förklara varför frivillighet enligt SoL är utgångspunkt och när LVM kan aktualiseras','Redogöra för LVM 4 § och 13 §','Skilja LVM-spåret från LPT, LOB och PL 12 a §','Förklara polisens anmälningsskyldighet/samverkan och handräckning enligt kursmaterialet'],
    sections:[
      {h:'1. SoL först – frivillighet är huvudspåret',p:'LVM-föreläsningen utgår från Socialtjänstlagen. Socialtjänsten ska främja trygghet, jämlika levnadsvillkor och delaktighet och verksamheten ska bygga på respekt för självbestämmande och integritet. Socialtjänsten ska aktivt verka för att personer med missbruk får hjälp, men insatser enligt SoL bygger på frivillighet.',key:'LVM är undantaget när frivilliga lösningar inte räcker och lagens särskilda förutsättningar är uppfyllda.',source:'LVM – distans, avsnitten om SoL och LVM 1–2 §§.'},
      {h:'2. LVM:s syfte',p:'LVM 1–3 §§ presenteras som en tvångslag som ändå så långt möjligt ska utformas i samverkan med den enskilde. Syftet med vården enligt 3 § är att genom behövliga insatser motivera personen så att han eller hon kan anta fortsatt behandling och stöd på frivillig grund.',recall:{q:'Vad är LVM-vårdens långsiktiga mål enligt föreläsningen?',a:'Att motivera till fortsatt behandling och stöd under frivilliga former.'}},
      {h:'3. LVM 4 § – ordinarie vägen',p:'Tvångsvård ska enligt kursmaterialet beslutas när tre huvuddelar är uppfyllda: fortgående missbruk av alkohol, narkotika eller flyktiga lösningsmedel; behov av vård för att komma ifrån missbruket som inte kan tillgodoses enligt SoL eller på annat sätt; samt minst en av tre specialindikationer.',steps:[{title:'1. Fortgående missbruk',text:'Alkohol, narkotika eller flyktiga lösningsmedel.'},{title:'2. Vårdbehov utan tillräckligt frivilligt alternativ',text:'Behovet kan inte tillgodoses enligt SoL eller på annat sätt.'},{title:'3. Minst en specialindikation',text:'Allvarlig hälsorisk, uppenbar risk att förstöra sitt liv eller befarad allvarlig skada på sig själv/närstående.'}],source:'LVM – distans, LVM 4 §.'},
      {h:'4. De tre specialindikationerna',p:'Kursmaterialet arbetar med hälsoindikationen, den sociala indikationen och våldsindikationen.',table:{headers:['Indikation','Kursens formulering i sak'],rows:[['Hälsa','Utsätter sin fysiska eller psykiska hälsa för allvarlig fara'],['Social','Löper en uppenbar risk att förstöra sitt liv'],['Våld/skada','Kan befaras komma att allvarligt skada sig själv eller någon närstående']]},warning:'Missbruk + problem räcker inte automatiskt. LVM 4 § bygger på en kedja av rekvisit.'},
      {h:'5. Vem beslutar på ordinarie vägen?',p:'Socialtjänsten utreder och lämnar ansökan till förvaltningsrätten, som beslutar om tvångsvård. SiS ansvarar för LVM-hem. Polisen fattar alltså inte beslut om LVM-vård på den ordinarie vägen.',steps:[{title:'Utredning',text:'Socialtjänsten utreder den enskildes situation.'},{title:'Ansökan',text:'Socialnämnden ansöker hos förvaltningsrätten.'},{title:'Domstolsbeslut',text:'Förvaltningsrätten beslutar om tvångsvård.'},{title:'Verkställighet',text:'Placering och vård sker inom LVM-systemet/SiS.'}]},
      {h:'6. LVM 13 § – den akuta vägen',p:'Omedelbart omhändertagande kan beslutas om det är sannolikt att personen kan beredas LVM-vård och rättens beslut inte kan avvaktas på grund av att hälsotillståndet kan antas försämras allvarligt utan omedelbar vård eller att det finns en överhängande risk att personen till följd av sitt tillstånd kommer att allvarligt skada sig själv eller någon närstående.',compare:[{title:'LVM 4 §',items:['Ordinarie tvångsvårdsprövning','Socialtjänstens utredning och ansökan','Förvaltningsrätten beslutar']},{title:'LVM 13 §',items:['Omedelbart omhändertagande','Sannolikt LVM-behov','Domstolsbeslut kan inte avvaktas på grund av akut risk']}],recall:{q:'Vilka två extra idéer skiljer 13 § från den ordinarie 4 §-vägen?',a:'Det ska vara sannolikt att LVM-vård behövs och situationen är så akut att rättens beslut inte kan avvaktas.'}},
      {h:'7. LVM 6 § – anmälan och polisens roll',p:'Föreläsningen anger att myndigheter som i sin verksamhet regelbundet kommer i kontakt med personer med missbruk ska anmäla till socialnämnden om de får kännedom om att någon kan antas vara i behov av LVM-vård. För polisen blir detta en viktig samverkans- och informationsfråga.',key:'Polisen beslutar inte om LVM-vård men kan vara den myndighet som ser den fortgående utsattheten och initierar socialtjänstens kännedom.',source:'LVM – distans, LVM 6 §.'},
      {h:'8. PL 12 a § – akut polisiärt omhändertagande i väntan på socialnämnden',p:'Kursmaterialet beskriver PL 12 a § som ett tillfälligt polisomhändertagande när det finns skälig anledning att anta att någon ska omhändertas omedelbart enligt LVM 13 § och socialnämndens beslut inte kan avvaktas på grund av överhängande och allvarlig risk för att personen skadas. Personen ska skyndsamt överlämnas till sjukhus.',warning:'Föreläsningen anger uttryckligen att personen inte ska förvaras i polisarrest med stöd av PL 12 a §.',recall:{q:'Vad är PL 12 a § i kursens modell?',a:'Ett mycket tillfälligt polisomhändertagande i väntan på socialnämndens LVM 13-beslut, med skyndsamt överlämnande till sjukhus.'}},
      {h:'9. PL 12 a § eller LOB?',p:'Föreläsningen jämför PL 12 a § och LOB. LOB kan användas när någon är så berusad att personen inte kan ta hand om sig själv eller annars utgör fara för sig själv eller annan, men LOB gäller inte i egen eller annans bostad enligt kursmaterialet. PL 12 a § kan däremot vara tillämplig oavsett var personen anträffas, exempelvis i bostad.',table:{headers:['Fråga','LOB','PL 12 a §'],rows:[['Huvudfokus','Akut berusning/ordning/säkerhet','Akut bro till LVM 13 §'],['Bostad','Inte enligt kursens LOB-regel','Kan vara tillämplig'],['Polisarrest','Kan aktualiseras enligt LOB-reglerna','Inte som förvaring enligt kursmaterialet'],['Nästa system','Tillnyktring/överlämning','Socialtjänstens omedelbara LVM-beslut/sjukhus']]},key:'Samma person kan över tid röra sig mellan olika rättsliga spår – identifiera vad som är den aktuella åtgärden just nu.'},
      {h:'10. LPT eller LVM vid samsjuklighet?',p:'Föreläsningen lyfter att missbruk kan leda till psykisk ohälsa och psykisk ohälsa kan leda till missbruk. I det akuta polisingripandet behöver du identifiera vilket omedelbart frihetsberövandespår som bäst motsvarar den faktiska risken och rekvisiten. Därefter är det sjukvården respektive socialtjänsten som bedömer fortsatt vårdform.',steps:[{title:'Psykiatriskt akutläge',text:'APS + fara/omedelbart hjälpbehov kan föra analysen mot LPT 47 §.'},{title:'Akut LVM-läge',text:'Fortgående missbruk och sannolik LVM 13-situation kan föra analysen mot PL 12 a §/socialnämnd.'},{title:'Medicinsk akut fara',text:'Överdos, abstinens eller somatisk instabilitet kräver sjukvård oavsett vilket juridiskt spår som också finns.'}],warning:'Välj inte lag bara utifrån etiketten “missbrukare” eller “psykiatrisk patient”. Pröva de faktiska rekvisiten.'},
      {h:'11. LVM-handräckning – 45 §',p:'Polismyndigheten ska enligt handräckningsföreläsningen lämna hjälp i de situationer som räknas upp i LVM 45 §, exempelvis för att föra någon till beslutad läkarundersökning eller transportera en person som ska beredas vård/är omedelbart omhändertagen till LVM-hem eller sjukhus. Begäran får göras när särskilda befogenheter kan behövas eller när synnerliga skäl finns.',key:'Handräckning förutsätter en formell begäran från behörig aktör och särskilt lagstöd.'},
      {h:'12. Förvar enligt LVM 45 c §',p:'Kursmaterialet anger att en person får tas i förvar om det är nödvändigt för att en transport enligt LVM 45 § ska kunna genomföras. Föreläsningen kontrasterar detta mot LPT och noterar att motsvarande förvarsbestämmelse inte finns där.',recall:{q:'Vilken särskild skillnad mellan LVM- och LPT-handräckning lyfts?',a:'LVM har en uttrycklig möjlighet till förvar inför transport enligt 45 c §; föreläsningen anger att motsvarande bestämmelse saknas i LPT.'}},
      {h:'13. Minderåriga',p:'LVM-föreläsningen anger att LVM inte tillämpas på personer under 18 år; för barn och unga aktualiseras i stället LVU-spåret. Kursen behandlar LVU huvudsakligen i efterföljande kurs.',warning:'Portalen går därför inte in på full LVU-process här.'}
    ],
    memory:'LVM: frivillighet först. 4 § = fortgående missbruk + vårdbehov som inte kan lösas frivilligt + minst en specialindikation. 13 § = akut omhändertagande. PL 12 a § kan vara polisens korta bro till socialnämndens beslut.'
  });
  mergeLesson('lvm',{
    quickChecks:[
      {after:0,goal:'1.2',level:'Förklara',q:'Vad är utgångspunkten för socialtjänstens missbruksinsatser?',a:['Frivillighet och respekt för självbestämmande','Tvång i alla fall','Polisbeslut','Domstolsbeslut före varje samtal'],c:0,e:'SoL-insatser bygger som huvudregel på frivillighet.'},
      {after:2,goal:'1.2',level:'Känna igen',q:'Vilket ingår i LVM 4 §?',a:['Fortgående missbruk + otillräckliga frivilliga alternativ + specialindikation','En enda fylla','Enbart psykiatrisk diagnos','Brott av normalgraden'],c:0,e:'Det är rekvisitkedjan i kursmaterialet.'},
      {after:3,goal:'1.2',level:'Känna igen',q:'Vilken är en specialindikation?',a:['Allvarlig fara för fysisk eller psykisk hälsa','Att personen är arbetslös','Att polisen ogillar beteendet','Att personen har skuld hos Kronofogden'],c:0,e:'Hälsoindikationen är en av de tre.'},
      {after:5,goal:'1.2',level:'Förklara',q:'Vad kännetecknar LVM 13 §?',a:['Omedelbart omhändertagande när domstolsbeslut inte kan avvaktas på grund av akut risk','Vanlig frivillig öppenvård','Polisens beslut om sex månaders vård','Endast narkotikabrott'],c:0,e:'13 § är den akuta LVM-vägen.'},
      {after:7,goal:'1.2',level:'Tillämpa',q:'Vad är korrekt om PL 12 a § enligt kursmaterialet?',a:['Tillfälligt polisomhändertagande med skyndsamt överlämnande till sjukhus','Rätt att hålla personen i arrest flera dygn','Ett slutligt LVM-beslut','Samma sak som LOB'],c:0,e:'PL 12 a § är en kort bro till socialnämndens omedelbara beslut.'},
      {after:8,goal:'1.2',level:'Förklara',q:'Vilken platsgräns nämns för LOB?',a:['LOB gäller inte i egen eller annans bostad','LOB gäller bara i bostad','LOB gäller bara sjukhus','Ingen platsfråga finns'],c:0,e:'Det är en central jämförelse mot PL 12 a § i föreläsningen.'},
      {after:11,goal:'1.2',level:'Känna igen',q:'Vad är särskilt med LVM 45 c §?',a:['Möjlighet till förvar om nödvändigt för transport','Den ersätter LVM 4 §','Den gäller frivillig öppenvård','Den är narkotikastraffrätt'],c:0,e:'45 c § är förvarsbestämmelsen inför transport.'}
    ],testSize:12,
    testQuestions:[
      {goal:'1.2',q:'Vem beslutar om ordinarie LVM-vård efter ansökan?',a:['Förvaltningsrätten','Polisen','Ambulanssjuksköterska','Stationsbefäl'],c:0,e:'Socialtjänsten utreder/ansöker och förvaltningsrätten beslutar.'},
      {goal:'1.2',q:'Vilket missbruk anges uttryckligen i LVM 4 §-materialet?',a:['Alkohol, narkotika eller flyktiga lösningsmedel','Enbart nikotin','Enbart spel','Koffein'],c:0,e:'Det är de substansområden kursmaterialet räknar upp.'},
      {goal:'2.3',q:'Vad betyder samsjuklighet i kursens beroende/LVM-resonemang?',a:['Psykisk ohälsa och missbruk kan förekomma samtidigt och påverka varandra','Två olika narkotikabrott','Två poliser på plats','Enbart somatisk sjukdom'],c:0,e:'Samsjuklighet är ett centralt tema i kursen.'},
      {goal:'1.2',q:'Vad är polisens roll enligt LVM 6 §-temat?',a:['Anmäla till socialnämnden när någon kan antas behöva LVM-vård enligt bestämmelsens förutsättningar','Själv besluta om sex månaders LVM','Döma personen','Utfärda läkarintyg'],c:0,e:'Polisen kan vara en viktig anmälande/samverkande myndighet.'}
    ]
  });

  // 12. Handräckning
  Object.assign(M('handrackning'), {
    intro:'Handräckning handlar om att polisen med särskilt lagstöd hjälper en annan myndighet eller behörig aktör att verkställa ett beslut eller fullgöra en uppgift. Modulen tränar framför allt LPT, LRV och LVM samt gränsen mellan själva handräckningsbeslutet, tillträde till bostad och våldsanvändning.',
    goals:['Förklara vad handräckning är och varför särskilt lagstöd krävs','Redogöra för centrala handräckningssituationer i LPT, LRV och LVM','Skilja handräckning från beslut om tillträde enligt PL 20 §','Koppla lagligt frihetsberövande till proportionalitet och eventuell våldsanvändning'],
    sections:[
      {h:'1. Myndigheter hjälper varandra – men polisen behöver särskilt stöd',p:'Förvaltningslagen 8 § uttrycker en allmän skyldighet för myndigheter att hjälpa varandra inom ramen för den egna verksamheten. För polisens handräckning räcker dock inte den allmänna hjälpskyldigheten: föreläsningen knyter polisens uppgift till PL 2 § 5 och betonar att särskilt lagstöd krävs.',key:'Handräckning = specialreglerad hjälp. Fråga alltid: vilken lag ger polisen skyldighet och befogenhet just här?',source:'Handräckning – distans, s. 2–4.'},
      {h:'2. Två typer av hjälp',p:'Föreläsningen beskriver handräckning som hjälp för att verkställa en annan myndighets beslut eller som biträde för att den andra myndigheten ska kunna fullgöra sina åligganden.',compare:[{title:'Verkställighet',items:['Exempel: föra en person som redan omfattas av ett beslut till rätt plats']},{title:'Biträde',items:['Exempel: ge en läkare möjlighet att genomföra en vårdintygsundersökning']}],recall:{q:'Vilka två övergripande funktioner har handräckning?',a:'Att verkställa en annan myndighets beslut eller att biträda så att myndigheten kan fullgöra sin uppgift.'}},
      {h:'3. Varför just polis?',p:'Kursmaterialet lyfter att polis har särskilda befogenheter att använda våld när lagens förutsättningar är uppfyllda. Samtidigt ska polis inte rutinmässigt användas som transportresurs; en bedömning ska göras i varje enskilt fall och begäran ska vara formell.',warning:'Polisens särskilda tvångsbefogenheter är skälet till handräckningen – inte att polisen generellt är transporttjänst.'},
      {h:'4. Formell begäran och behörig begärare',p:'Föreläsningen betonar att handräckning ska bygga på en formell begäran från den aktör som enligt respektive speciallag får begära hjälpen. Polisen ska identifiera vilken bestämmelse begäran stöds på och vad den faktiskt omfattar.',steps:[{title:'Vem begär?',text:'Läkare, chefsöverläkare, socialnämnd, domstol, SiS eller annan uttryckligen behörig aktör beroende på lag.'},{title:'Vilken lag?',text:'Exempelvis LPT 47 § andra stycket, LRV 27 § eller LVM 45 §.'},{title:'Vad ska göras?',text:'Undersökning, transport, återförande, efterforskning eller annan angiven åtgärd.'}]},
      {h:'5. LPT 47 § andra stycket – sju situationer',p:'Kursmaterialet räknar upp när polisen ska lämna hjälp på begäran inom LPT.',table:{headers:['Situation','Behörig begärare enligt kursmaterialet'],rows:[['Genomföra undersökning för vårdintyg','Behörig läkare'],['Föra patient till vårdinrättning efter vårdintyg','Behörig läkare eller chefsöverläkare'],['Återföra patient som lämnat utan tillstånd','Chefsöverläkare'],['Återföra efter utebliven återkomst från tillstånd','Chefsöverläkare'],['Återföra efter beslut om sluten LPT','Chefsöverläkare'],['Annan förflyttning av intagen patient','Chefsöverläkare'],['Sända hem utländsk patient','Socialstyrelsen']]},recall:{q:'Vilken LPT-handräckning är särskilt relevant innan vårdintyg finns?',a:'Läkarens begäran om hjälp för att kunna genomföra undersökning för vårdintyg.'},source:'Handräckning – distans, LPT 47 § andra stycket.'},
      {h:'6. LRV 27 §',p:'LRV 27 § hänvisar i tillämpliga delar till LPT:s handräckningsbestämmelser. Kursmaterialet nämner också att hjälp ska lämnas när en patient i vissa LRV-fall inte inställer sig när vården ska påbörjas.',key:'LRV har egen rättslig kontext men bygger i handräckningsdelen delvis på LPT:s mekanik.'},
      {h:'7. LVM 45 §',p:'LVM-handräckning kan enligt kursmaterialet avse bland annat transport till beslutad läkarundersökning, transport av någon som ska beredas vård/är omedelbart omhändertagen till LVM-hem eller sjukhus samt SiS-begäran om efterforskning, hämtning eller förflyttning.',warning:'Begäran enligt LVM 45 § är dessutom begränsad till situationer där särskilda polisiära befogenheter kan behövas eller där synnerliga skäl finns.'},
      {h:'8. LVM 45 c § – förvar',p:'LVM innehåller enligt föreläsningen en särskild möjlighet att ta personen i förvar om det är nödvändigt för att en transport enligt LVM 45 § ska kunna genomföras. Föreläsningen markerar att LPT saknar motsvarande uttryckliga förvarsbestämmelse.',recall:{q:'Vilken lag har enligt kursmaterialet uttrycklig förvarsregel inför handräckningstransport?',a:'LVM genom 45 c §.'}},
      {h:'9. Handräckning är inte automatiskt rätt att gå in i bostad',p:'Föreläsningen ställer uttryckligen frågan om polisen får gå in hos någon bara för att ett handräckningsbeslut finns. Svaret bygger på att tillträdet måste ha eget lagstöd. PL 20 § kan användas för att söka efter en person som med laga stöd ska omhändertas; föreläsningen anger att handräckning kan omfattas av detta begrepp.',steps:[{title:'Handräckningsstödet',text:'Ger stöd för själva hjälpen/frihetsberövandet enligt speciallagen.'},{title:'Tillträdet',text:'Prövas separat, exempelvis enligt PL 20 §.'},{title:'Beslutet',text:'Utgångspunkten i föreläsningen är myndighetsbeslut; polisman kan fatta beslut i brådskande fall enligt bestämmelsen.'}],key:'Ett bra tentasvar namnger både handräckningsstödet och det separata lagstödet för inträde när bostad måste beträdas.'},
      {h:'10. PL 20 § – kursens praktiska råd',p:'För att söka efter någon som med laga stöd ska omhändertas får polisen under bestämmelsens förutsättningar bereda sig tillträde till personens bostad eller annat ställe som disponeras av personen. Föreläsningens konkreta råd är: om ni åker på en handräckning och inträde kan behövas – inhämta beslut om PL 20 §.',warning:'Tillträde till bostad är ett betydande integritetsingrepp. Lagstödet ska vara tydligt och åtgärden proportionerlig.'},
      {h:'11. Våld under handräckning',p:'När en person med laga stöd ska berövas friheten och gör motstånd eller försöker undkomma kan PL 10 § bli relevant, under förutsättning att andra medel är otillräckliga och våldet är försvarligt. Själva speciallagen/handräckningen ger alltså frihetsberövandestödet; PL 10 § reglerar i vissa lägen genomförandet.',key:'Tänk i lager: 1) varför får personen frihetsberövas? 2) varför får ni gå in? 3) om motstånd uppstår – vilket stöd finns för våld och hur begränsas det?'},
      {h:'12. Polisiär kontrollfråga före verkställighet',p:'Ett robust handräckningsresonemang kan byggas med fyra kontrollfrågor.',steps:[{title:'Rätt begärare?',text:'Är den som begär polisens hjälp behörig enligt den aktuella lagen?'},{title:'Rätt situation?',text:'Täcks åtgärden av den aktuella handräckningsbestämmelsen?'},{title:'Ytterligare befogenheter?',text:'Behövs tillträde, våld eller förvar och finns separat stöd?'},{title:'Proportionalitet och säkerhet?',text:'Hur kan uppgiften genomföras med minsta nödvändiga ingripande och med säkert bemötande?'}]}
    ],
    memory:'Handräckning = särskilt lagstöd + behörig formell begäran. Håll isär handräckning, tillträde (t.ex. PL 20), våld (PL 10) och eventuell förvarsregel.'
  });
  mergeLesson('handrackning',{
    quickChecks:[
      {after:0,goal:'1.2',level:'Förklara',q:'Varför räcker inte Förvaltningslagen 8 § ensam för polisiär handräckning?',a:['Polisens handräckning kräver särskilt lagstöd','FL förbjuder myndighetssamverkan','Polisen får aldrig hjälpa andra myndigheter','FL gäller bara domstolar'],c:0,e:'Föreläsningen betonar specialregleringen.'},
      {after:3,goal:'1.2',level:'Känna igen',q:'Vad ska en handräckning bygga på?',a:['Formell begäran från behörig aktör och rätt speciallag','Muntligt önskemål från vem som helst','Polisens egen diagnos','Allmän serviceplikt utan gräns'],c:0,e:'Begärare och lagstöd är centrala.'},
      {after:4,goal:'1.2',level:'Känna igen',q:'Vem kan begära hjälp för vårdintygsundersökning enligt LPT 47 § 2 st?',a:['Behörig läkare','Vilken granne som helst','Åklagare i alla fall','Patientens arbetsgivare'],c:0,e:'Läkare är uttrycklig begärare i den situationen.'},
      {after:8,goal:'1.2',level:'Tillämpa',q:'Ni har en giltig handräckning men personen finns bakom låst dörr i bostaden. Vilken ytterligare fråga måste prövas?',a:['Lagstöd/beslut för tillträde, t.ex. PL 20 §','Om personen är folkbokförd där','Om grannen godkänner','Ingen – handräckning ger alltid automatiskt inträde'],c:0,e:'Föreläsningen skiljer handräckningen från inträdesstödet.'},
      {after:10,goal:'1.2',level:'Tillämpa',q:'Personen gör aktivt motstånd mot ett lagligt frihetsberövande under handräckning. Vilket regelverk kan bli relevant för genomförandet?',a:['PL 10 § under dess förutsättningar','LPT 3 § ensam','SoL enbart','Ingen regel behövs'],c:0,e:'PL 10 § behandlar våld i bland annat situationer med lagligt frihetsberövande och motstånd.'}
    ],testSize:11,
    testQuestions:[
      {goal:'1.2',q:'Vilken bestämmelse reglerar LPT-handräckning i kursen?',a:['LPT 47 § andra stycket','LPT 3 § enbart','LVM 4 §','RB 28:12'],c:0,e:'47 § andra stycket räknar upp handräckningssituationerna.'},
      {goal:'1.2',q:'Vilken lagrumskoppling anges för LRV-handräckning?',a:['LRV 27 §','LRV 1 § enbart','PL 21 §','OSL 35:20'],c:0,e:'LRV 27 § hänvisar till LPT-handräckningsreglerna.'},
      {goal:'1.2',q:'Vad är kursens huvudbudskap om polis som transportresurs?',a:['Polis ska inte rutinmässigt utföra transporter – handräckning ska bygga på lagens förutsättningar','Polisen ska alltid transportera alla patienter','Ambulans får aldrig transportera','Transport kräver aldrig bedömning'],c:0,e:'Föreläsningen betonar individuell bedömning och särskilt behov av polisens befogenheter.'},
      {goal:'1.2',q:'Vilken särskild möjlighet finns i LVM 45 c § enligt kursmaterialet?',a:['Förvar när nödvändigt för handräckningstransport','Vårdintyg','Husrannsakan efter narkotika','Frivillig öppenvård'],c:0,e:'45 c § är förvarsbestämmelsen.'}
    ]
  });

  // 13. Allmänna polisiära befogenheter
  Object.assign(M('polisbefogenheter'), {
    intro:'Den här modulen samlar de generella polisiära regler som återkommer runt psykisk ohälsa och missbruk: hjälp/service, våldsanvändning, sekretess, tillträde vid hjälpbehov och omhändertagande av vapen. Syftet är att du ska kunna bygga en rättslig kedja i stället för att “hoppa” direkt till en tvångsåtgärd.',
    goals:['Koppla PL 2 § till polisens hjälp- och specialuppgifter','Förklara principerna i PL 10 § om våldsanvändning','Känna igen sekretessregeln som kursen lyfter vid LPT/LRV/LVM-ärenden','Känna igen när PL 21 § och vapenlagens omhändertaganderegel kan aktualiseras'],
    sections:[
      {h:'1. Polisens uppgifter enligt PL 2 §',p:'Föreläsningen lyfter hela uppgiftskatalogen men fokuserar särskilt på punkt 4 – att lämna allmänheten skydd, upplysningar och annan hjälp när biståndet lämpligen kan ges av polisen – och punkt 5 – verksamhet som ankommer på Polismyndigheten enligt särskilda bestämmelser.',table:{headers:['PL 2 §-spår','Betydelse i kursen'],rows:[['Punkt 4 – hjälp/service','Frivilligt stöd, skydd, information och praktisk hjälp när polis är lämplig aktör'],['Punkt 5 – särskilda bestämmelser','Exempelvis LPT-, LRV- eller LVM-handräckning och andra specialreglerade uppgifter']]},key:'Frågan “kan vi hjälpa?” är inte samma sak som “får vi använda tvång?”. Tvång kräver eget lagstöd.',source:'Allmänt – distans, PL 2 §.'},
      {h:'2. Frivillig hjälp och tvång måste hållas isär',p:'En person kan frivilligt vilja följa med polis till vård eller ta emot hjälp. Då är utgångspunkten samtycke och service. Om personen inte samtycker måste du kunna identifiera ett särskilt lagstöd för frihetsberövande, visitation, inträde eller våld.',warning:'Gör inte en frivillig hjälpåtgärd till ett dolt frihetsberövande. Om personen inte längre får lämna måste rättsgrunden kunna anges.'},
      {h:'3. PL 10 § – våld är ett genomförandestöd',p:'En polisman får enligt kursmaterialet använda våld i den mån andra medel är otillräckliga och åtgärden är försvarlig, bland annat när polismannen möts av våld/hot om våld eller när någon som med laga stöd ska berövas friheten försöker undkomma eller gör motstånd.',steps:[{title:'Laglig tjänsteåtgärd',text:'Det måste finnas stöd för den åtgärd som ska genomföras.'},{title:'Andra medel otillräckliga',text:'Kommunikation och mindre ingripande alternativ ska beaktas.'},{title:'Försvarligt',text:'Våldets art och omfattning ska stå i proportion till situationen.'}],key:'PL 10 § skapar inte i sig rätten att LPT-/LVM-omhänderta någon. Den kan bli relevant när ett lagligt frihetsberövande ska genomföras.'},
      {h:'4. Laga frihetsberövande som grund',p:'Föreläsningen ger exempel på LPT 47 §, handräckning och PL 12 a § som lagstöd som kan innebära att en person lagligen berövas friheten. Om personen då gör motstånd kan PL 10 § 2 bli relevant för genomförandet.',recall:{q:'Vilken ordning är juridiskt bäst?',a:'Identifiera först stödet för frihetsberövandet och därefter eventuellt stöd för våldsanvändningen.'}},
      {h:'5. PL 21 § – tillträde vid misstanke om hjälpbehov',p:'LPT-föreläsningen tar upp PL 21 § som en möjlighet att bereda sig tillträde till bostad eller annat ställe när det finns anledning att anta att någon där har avlidit, är medvetslös eller annars oförmögen att tillkalla hjälp. Bestämmelsen nämns också i samband med efterforskning av försvunnen person som kan behöva hjälp.',warning:'PL 21 § är ett hjälp-/nödläge, inte ett generellt sätt att komma in i en bostad för att “kontrollera läget”. Rekvisiten måste finnas.'},
      {h:'6. PL 20 § – söka efter någon som ska omhändertas',p:'Handräckningsföreläsningen behandlar PL 20 § som stöd för att söka efter en person som med laga stöd ska omhändertas och för att bereda tillträde till personens bostad eller annat ställe som disponeras av personen under bestämmelsens förutsättningar.',compare:[{title:'PL 20 §',items:['Söka efter person som med laga stöd ska omhändertas','Kan bli relevant vid handräckning']},{title:'PL 21 §',items:['Hjälpbehov: avliden, medvetslös eller oförmögen att kalla på hjälp','Efterforskning av försvunnen som kan behöva hjälp']}],key:'PL 20 och 21 kan båda handla om tillträde, men deras syften och rekvisit är olika.'},
      {h:'7. Sekretess – OSL 35 kap. 20 §',p:'Allmänt-föreläsningen lyfter sekretess hos Polismyndigheten för uppgifter om enskilds personliga förhållanden i bland annat ärenden om omhändertagande eller handräckning enligt psykiatrisk tvångsvård, rättspsykiatrisk vård eller vård av missbrukare utan samtycke.',key:'Psykiatriska och sociala uppgifter är känsliga. Hantera dem utifrån tjänstebehov och sekretessregler, inte som “allmän information” bara för att polis varit på plats.'},
      {h:'8. Omhändertagande av vapen',p:'Vapenlagen 6 kap. 4 § behandlas i föreläsningen. Polismyndigheten ska besluta att vapen med tillhörande egendom tas om hand om det finns risk att vapnet missbrukas eller om tillståndet sannolikt kommer att återkallas och särskilda omständigheter inte talar emot. Vid överhängande risk för missbruk får polisman ingripa direkt och åtgärden ska skyndsamt anmälas för prövning.',steps:[{title:'Identifiera risk',text:'Finns konkret risk att vapnet missbrukas?'},{title:'Beslut/akutläge',text:'Normalt myndighetsbeslut; vid överhängande missbruksrisk kan polisman ta om hand direkt.'},{title:'Efterkontroll',text:'Åtgärden ska skyndsamt anmälas så att Polismyndigheten omedelbart kan pröva om den ska bestå.'}],warning:'Psykisk ohälsa i sig är inte samma sak som konkret risk för vapenmissbruk. Bedömningen ska knytas till lagens rekvisit.'},
      {h:'9. En juridisk arbetsmodell',p:'När flera regler kan aktualiseras samtidigt hjälper det att sortera frågorna.',steps:[{title:'Vad vill vi uppnå?',text:'Hjälp, frihetsberövande, transport, inträde, visitation, våld eller omhändertagande av egendom?'},{title:'Vilket primärt lagstöd?',text:'LPT/LRV/LVM/RB/LOB/PL eller annan speciallag?'},{title:'Behövs följdbefogenhet?',text:'Exempelvis PL 20/21 för tillträde eller PL 10 för våld.'},{title:'Hur begränsas åtgärden?',text:'Nödvändighet, försvarlighet, proportionalitet, integritet och säkerhet.'}],key:'Namnge åtgärden först. Då blir det lättare att hitta rätt lagstöd.'}
    ],
    memory:'Bygg juridiken i lager: hjälp eller tvång? → primärt stöd för åtgärden → eventuell följdbefogenhet (tillträde/våld) → proportionalitet, sekretess och dokumentation.'
  });
  mergeLesson('polisbefogenheter',{
    quickChecks:[
      {after:0,goal:'1.2',level:'Känna igen',q:'Vilken PL 2-punkt handlar om allmänhetens skydd, upplysningar och annan hjälp?',a:['Punkt 4','Punkt 1','Punkt 9','Ingen'],c:0,e:'Punkt 4 är hjälp-/serviceuppgiften i föreläsningen.'},
      {after:2,goal:'1.2',level:'Förklara',q:'Vad är korrekt om PL 10 §?',a:['Det är ett stöd för våld i vissa lagliga tjänsteåtgärder när andra medel är otillräckliga och våldet är försvarligt','Det skapar automatiskt rätt att omhänderta alla','Det gäller bara narkotikabrott','Det ersätter LPT och LVM'],c:0,e:'PL 10 § reglerar våldets genomförande, inte alla primära frihetsberövanden.'},
      {after:4,goal:'1.2',level:'Känna igen',q:'Vilket lagrum lyfts vid tillträde för att hjälpa någon som kan vara medvetslös eller oförmögen att kalla på hjälp?',a:['PL 21 §','LPT 3 §','LVM 45 c §','RB 28:12'],c:0,e:'PL 21 § är hjälp-/nödlägesregeln i föreläsningen.'},
      {after:5,goal:'1.2',level:'Förklara',q:'Vad skiljer PL 20 § från PL 21 § i kursens exempel?',a:['PL 20 handlar om att söka person som lagligen ska omhändertas; PL 21 om hjälpbehov','Ingen skillnad','PL 20 gäller bara vapen','PL 21 gäller bara handräckning'],c:0,e:'Bestämmelserna kan båda ge tillträde men har olika ändamål.'},
      {after:7,goal:'1.2',level:'Tillämpa',q:'När kan polisman enligt kursmaterialet direkt ta om hand ett vapen utan föregående myndighetsbeslut?',a:['När risken för missbruk är överhängande','När innehavaren är ledsen','Vid varje psykiatrisk diagnos','Aldrig'],c:0,e:'Vapenlagen anger överhängande risk för missbruk som akutgrund.'}
    ],testSize:10,
    testQuestions:[
      {goal:'1.2',q:'Vad ska identifieras före eventuell våldsanvändning?',a:['Lagstödet för den tjänsteåtgärd/frihetsberövande som ska genomföras','En diagnos','En pressartikel','Ett vittne som håller med'],c:0,e:'Våldet är en följdbefogenhet till en laglig åtgärd.'},
      {goal:'3.1',q:'Vilken princip är mest förenlig med kursens rättighetsutgångspunkt?',a:['Använd minsta nödvändiga ingripande och respektera integritet','Använd tvång för säkerhets skull','Sprid psykiatriska uppgifter fritt','Diagnos räcker alltid för frihetsberövande'],c:0,e:'Rättigheter, nödvändighet och proportionalitet är grundläggande.'},
      {goal:'1.2',q:'Vilken sekretessregel lyfts specifikt i Allmänt-föreläsningen?',a:['OSL 35 kap. 20 §','LPT 3 §','NSL 1 §','BrB 31:3'],c:0,e:'OSL 35:20 behandlas i anslutning till LPT/LRV/LVM-ärenden.'}
    ]
  });

  // 14. Narkotikastrafflagen och tvångsmedel
  Object.assign(M('narkotikastraff'), {
    intro:'Narkotikamodulen bygger på kursens instuderingsfrågor och facit. Den tränar vad “olovligen” betyder, de centrala gärningsformerna, uppsåt, försök/medhjälp, narkotika avsedd att säljas och framför allt gränsen mellan misstanke om eget bruk, kroppsbesiktning och husrannsakan.',
    goals:['Känna igen centrala gärningsformer i narkotikastrafflagen enligt kursens upplägg','Förklara olovlig respektive lovlig hantering och betydelsen av uppsåt','Resonera om försök och medhjälp till eget bruk','Tillämpa kursens modell för skälig misstanke, kroppsbesiktning, medtagande och husrannsakan'],
    sections:[
      {h:'1. Hur vet man om ett ämne är narkotika?',p:'Kursens facit beskriver att en ny substans ofta upptäcks genom polis/tull och analyseras. Folkhälsomyndigheten utreder och kan föreslå klassning som hälsofarlig vara eller narkotika; regeringen fattar klassningsbeslut och narkotikaklassade preparat förs upp i Läkemedelsverkets förteckningar.',warning:'Klassningar och författningar kan ändras. Använd alltid aktuell officiell förteckning i verklig tjänsteutövning; här återges kursens studiemodell.',source:'Svar till instuderingsfrågor Narkotikastrafflagen, fråga 1.'},
      {h:'2. “Olovligen” – all hantering är inte brottslig',p:'Narkotikastrafflagen tar sikte på olovlig hantering. Kursens facit ger exempel på lovlig hantering: narkotikaklassad medicin enligt recept, polisens hantering av beslag, narkotika för hundträning/undervisning samt forskning eller annan hantering som uttryckligen tillåts genom regelverk.',table:{headers:['Lovlig kontext i kursfacit','Varför'],rows:[['Förskrivet läkemedel','Hanteringen stöds av recept/regler'],['Beslagtagen narkotika hos polis','Tjänstehantering enligt särskilda regler'],['Hundträning/undervisning','Reglerad myndighetshantering'],['Forskning','Tillstånd/föreskrifter kan ge lovlig grund']]},key:'“Narkotika” betyder inte att varje fysisk kontakt alltid är brottslig – frågan är om befattningen är olovlig och om övriga brottsrekvisit är uppfyllda.'},
      {h:'3. Framställning och odling',p:'Kursens facit ger exempel på framställning: amfetaminlaboratorium, cannabisodling samt odling/framställning av material med psilocybin eller meskalin. Syftet i utbildningen är att du ska kunna koppla konkreta hanteringssätt till rätt gärningsform.',recall:{q:'Ge två exempel på “framställer” enligt kursens facit.',a:'Exempel: amfetaminlabb och cannabisodling.'}},
      {h:'4. Förvaring – du behöver inte äga narkotikan',p:'I Zara-exemplet förvarar en person 100 gram amfetamin åt sin pojkvän. Kursens facit anger ansvar för förvaring enligt NSL 1 § punkt 4 trots att hon inte äger narkotikan och inte själv missbrukar.',key:'Äganderätt är inte avgörande för förvaring. Fråga vad personen faktiskt gör med narkotikan och om uppsåt finns.'},
      {h:'5. Uppsåt – dold narkotika utan vetskap',p:'Om pojkvännen i stället gömmer narkotikan på Zaras vind utan hennes vetskap anger kursfacit att hon inte ska dömas för narkotikabrott eftersom brottet förutsätter uppsåt. Utredningen kan initialt behöva klarlägga vad hon visste och avsåg.',compare:[{title:'Förvarar med vetskap',items:['Kan utgöra brottslig förvaring även om narkotikan tillhör någon annan']},{title:'Narkotika gömd utan vetskap',items:['Uppsåt saknas enligt kursens exempel','Utredningen måste klarlägga kunskap/avsikt']}],recall:{q:'Vilken subjektiv förutsättning lyfter Zara-fallet?',a:'Uppsåt.'}},
      {h:'6. Narkotika avsedd att säljas',p:'Kursfacit behandlar den särskilda strängare regleringen för den som befattar sig med narkotika som är avsedd att säljas. Bevisning kan enligt materialet vara uppdelning i försäljningsdoser, försäljningsmeddelanden, våg, förpackningsmaterial och listor.',warning:'Straffskalor och lagtext kan ändras. Portalen fokuserar på den kvalificerande omständigheten “avsedd att säljas” och de typer av bevisning kursen använder.'},
      {h:'7. Försök',p:'Kursfacit anger att narkotikabrott av normalgraden är straffbart på försöksstadiet enligt NSL 4 §, men att försök till eget bruk inte är straffbart. Det är en klassisk tentagräns.',table:{headers:['Situation','Kursens svar'],rows:[['Försök till narkotikabrott av normalgraden','Ja, kan vara straffbart'],['Försök till eget bruk','Nej enligt kursfacit']]},recall:{q:'Är försök till eget bruk straffbart enligt kursens facit?',a:'Nej.'}},
      {h:'8. Medhjälp till eget bruk',p:'Kursfacit anger att medhjälp till eget bruk inte är straffbart enligt NSL 5 §. Det innebär inte att all hjälp kring narkotika är straffri; andra gärningsformer kan vara uppfyllda beroende på vad personen faktiskt gör.',warning:'Identifiera gärningen innan du etiketterar den som “medhjälp”. Att exempelvis förvara, överlåta eller anskaffa narkotika kan utgöra självständiga narkotikabrott.'},
      {h:'9. Skälig misstanke om eget bruk',p:'Facit beskriver att skälig misstanke kan grundas på tydliga narkotikatecken, exempelvis stora pupiller, motorisk oro och osammanhängande tal. Svagare tecken kan tillsammans med andra omständigheter – exempelvis medgivande om intag i närtid, tips, umgänge och plats – sammantaget nå misstankegraden.',steps:[{title:'Konkreta tecken',text:'Beskriv pupiller, motorik, tal och beteende – inte bara slutsatsen “påverkad”.'},{title:'Övriga omständigheter',text:'Medgivande, underrättelse/tips, plats, sällskap eller fynd kan stärka eller försvaga helheten.'},{title:'Samlad bedömning',text:'Skälig misstanke måste bygga på konkreta omständigheter i det enskilda fallet.'}],key:'Ett starkt tentasvar redovisar vilka faktiska omständigheter som bär misstankegraden.'},
      {h:'10. Kroppsbesiktning och provtagning',p:'Kursfacit hänvisar till RB 28 kap. 12 § för kroppsbesiktning vid misstanke om eget bruk och anger förundersökningsledare som beslutsfattare i utbildningens modell. Blod- eller urinprov används för att säkra bevisning om bruk.',warning:'Beslutsordningar och delegationsregler ska alltid kontrolleras mot aktuell rätt och lokala rutiner i verklig tjänst.'},
      {h:'11. Medtagande för provtagning',p:'Kursfacit hänvisar till RB 28 kap. 13 a § för att ta med personen till polisstation eller sjukhus för genomförande av provtagning och anger polisman som beslutsfattare i den studerade situationen.',recall:{q:'Vilka två RB-bestäm­melser ska du kunna skilja i kursens facit?',a:'RB 28:12 om kroppsbesiktning och RB 28:13 a om medtagande för att åtgärden ska kunna genomföras.'}},
      {h:'12. Eget bruk ≠ automatiskt misstanke om innehav',p:'Kursens facit och JO-temat är tydligt: misstanke om ringa narkotikabrott genom eget bruk ger inte automatiskt skälig misstanke om innehav. För husrannsakan i syfte att leta efter narkotika måste det finnas en självständig tillräcklig misstanke om innehav. Eget bruk kan vara en del av helheten tillsammans med andra omständigheter.',compare:[{title:'Eget bruk',items:['Bevisas typiskt genom blod/urin','Kan ge grund för kroppsbesiktning när misstankegraden är uppfylld']},{title:'Innehav',items:['Separat gärning/misstanke','Kan tillsammans med övriga förutsättningar ge grund för husrannsakan efter narkotika']}],key:'Det här är en central gråzon: samma person kan vara skäligen misstänkt för bruk men inte för innehav.'},
      {h:'13. Husrannsakan – formulera vad du letar efter och varför',p:'När ändamålet är att leta efter narkotika måste misstanken knytas till innehav eller annan relevant brottslighet och tvångsmedlets övriga förutsättningar vara uppfyllda. Kursen använder detta för att träna juridisk precision.',steps:[{title:'Vilket brott?',text:'Bruk, innehav, försäljning eller annan gärning?'},{title:'Vilket bevis söker du?',text:'Narkotika, förpackningsmaterial, försäljningsbevisning eller annat?'},{title:'Vilken konkret misstanke?',text:'Vilka omständigheter gör just den gärningen skäligen misstänkt?'},{title:'Vilket tvångsmedel?',text:'Kroppsbesiktning, visitation eller husrannsakan har olika syften och rekvisit.'}],warning:'“Han ser narkotikapåverkad ut” är inte ett komplett husrannsakningsresonemang.'},
      {h:'14. Tentamensmodell – gärning, uppsåt, grad och tvångsmedel',p:'När du löser narkotikafall kan du arbeta i fyra lager.',steps:[{title:'Gärningen',text:'Vad har personen faktiskt gjort – brukat, innehaft, förvarat, framställt, överlåtit eller befattat sig med narkotika för försäljning?'},{title:'Uppsåt',text:'Visste personen om narkotikan och omfattade uppsåtet gärningen?'},{title:'Försök/medverkan',text:'Är brottet fullbordat? Är försöks- eller medverkansreglerna tillämpliga?'},{title:'Tvångsmedel',text:'Finns rätt misstankegrad och är tvångsmedlet kopplat till rätt brott och bevisändamål?'}]}
    ],
    memory:'Narkotika: börja i gärningen och uppsåtet. Eget bruk och innehav är olika misstankar. Kroppsbesiktning för bruk innebär inte automatiskt husrannsakan efter innehav.'
  });
  mergeLesson('narkotikastraff',{
    quickChecks:[
      {after:1,goal:'2.2',level:'Förklara',q:'Vad betyder “olovligen” i kursens narkotikamodell?',a:['Hanteringen saknar lagligt stöd/tillstånd; viss reglerad hantering kan vara lovlig','All narkotikakontakt är alltid brottslig','Endast försäljning är olovlig','Det betyder att personen är under 18'],c:0,e:'Facit ger flera exempel på laglig/reglerad narkotikahantering.'},
      {after:4,goal:'2.2',level:'Tillämpa',q:'Narkotika ligger gömd i din vind utan att du känner till den. Vilken fråga blir central?',a:['Uppsåt/kännedom','Om du äger huset','Din ålder ensam','Om preparatet luktar'],c:0,e:'Zara-exemplet används för att visa uppsåtskravet.'},
      {after:6,goal:'2.2',level:'Känna igen',q:'Är försök till eget bruk straffbart enligt kursfacit?',a:['Nej','Ja alltid','Bara på helger','Endast vid cannabis'],c:0,e:'Kursfacit anger att försök till eget bruk inte är straffbart.'},
      {after:8,goal:'2.2',level:'Förklara',q:'Vad är bäst sätt att grunda skälig misstanke om eget bruk?',a:['Konkreta tecken och övriga omständigheter i en samlad bedömning','En magkänsla','Ett enda stereotypt antagande','Att personen tidigare varit dömd'],c:0,e:'Facit kombinerar konkreta drogtecken med övriga omständigheter.'},
      {after:11,goal:'2.2',level:'Tillämpa',q:'Personen är skäligen misstänkt för eget bruk. Får du därför automatiskt husrannsaka bostaden efter narkotika?',a:['Nej, misstanke om innehav måste bedömas separat','Ja, alltid','Ja, om personen är nervös','Ja, utan beslut'],c:0,e:'Det är en central JO-/kursgräns.'},
      {after:13,goal:'2.2',level:'Tillämpa',q:'Vilken analysordning är bäst i ett narkotikafall?',a:['Gärning → uppsåt → fullbordat/försök/medverkan → rätt tvångsmedel','Tvångsmedel först, brott senare','Straffskala först, fakta senare','Diagnos → gripande'],c:0,e:'Den ordningen gör det lättare att hålla isär brott och bevisinhämtning.'}
    ],testSize:12,
    testQuestions:[
      {goal:'2.2',q:'Zara förvarar medvetet narkotika åt någon annan. Vilken princip visar fallet?',a:['Man behöver inte äga narkotikan för att förvaring ska kunna vara brottslig','Endast ägaren kan dömas','Förvaring är alltid straffri','Eget bruk krävs'],c:0,e:'Fysisk förvaring med uppsåt kan utgöra narkotikabrott.'},
      {goal:'2.2',q:'Vilken typ av bevisning nämner kursen för att narkotika varit avsedd att säljas?',a:['Uppdelade doser, försäljningsmeddelanden, våg och förpackningsmaterial','Endast personens klädstil','Endast tidigare dom','Ingen bevisning behövs'],c:0,e:'Kursfacit listar flera konkreta försäljningsindikatorer.'},
      {goal:'2.2',q:'Vilken bestämmelse hänvisar kursfacit till för kroppsbesiktning?',a:['RB 28:12','LPT 47','LVM 4','PL 21'],c:0,e:'RB 28 kap. 12 § anges i facit.'},
      {goal:'2.2',q:'Vad är en juridisk fallgrop vid drogtecken?',a:['Att låta en misstanke om bruk automatiskt bli misstanke om innehav','Att beskriva pupiller konkret','Att pröva flera omständigheter tillsammans','Att skilja brottsmisstankar åt'],c:0,e:'Bruk och innehav måste analyseras separat.'}
    ]
  });

  // 15. Kommunikation och konfliktreducering
  Object.assign(M('kommunikation'), {
    intro:'Kommunikationsmodulen fördjupar POLKON:s kommunikativa kunskapsområde. Du tränar hur tolkning, attityd, beteende och sakfråga påverkar konflikt; hur konflikter eskalerar; och hur aktivt lyssnande, fakta–känslor, parafrasering och kroppsspråk kan skapa förutsättningar för problemlösning.',
    goals:['Förklara kommunikation som ett taktiskt verktyg och betydelsen av återkoppling','Använda konflikttriangeln, konfliktpyramiden och konflikttrappan som analysmodeller','Redogöra för förändringstrappan och varför aktivt lyssnande föregår påverkan','Tillämpa parafrasering, fakta–känslor, jag-budskap och närvaro i polisiära möten'],
    sections:[
      {h:'1. Kommunikation är en del av det taktiska upplägget',p:'POLKON beskriver det kommunikativa kunskapsområdet som en teoretisk grund för polisens förmåga att påverka motparten och förstå hur motparten påverkar polisen. Tal och kroppsspråk kan bidra till kontroll eller eskalation och ska integreras med mentala och taktiska överväganden.',key:'Kommunikation är inte “mjuk” vid sidan av taktiken – den är en del av helhetslösningen.',source:'5 Kommunikativa kunskapsområdet, avsnitt 5.1–5.2.'},
      {h:'2. Sändare, budskap, kanal och återkoppling',p:'Materialet betonar att det vi tror att vi sagt inte nödvändigtvis är det mottagaren uppfattat. Erfarenheter, kultur, värderingar och olika typer av “brus” påverkar tolkningen. Därför behövs dubbelriktad kommunikation och återkoppling.',steps:[{title:'Sänd budskap',text:'Välj ord, ton, kroppsspråk och kanal.'},{title:'Observera mottagandet',text:'Hur reagerar personen – verbalt och icke-verbalt?'},{title:'Få återkoppling',text:'Kontrollera hur budskapet uppfattats.'},{title:'Anpassa',text:'Byt formulering eller kanal om du inte når fram.'}],recall:{q:'Varför är återkoppling central?',a:'För att kontrollera om mottagaren har tolkat budskapet som avsett och kunna anpassa kommunikationen.'}},
      {h:'3. Konflikttriangeln: A – B – C',p:'Konflikttriangeln används för att skilja sakfrågan från attityder/tolkningar och beteenden. C-hörnet är sakfrågan, A-hörnet rymmer tankar, känslor och vilja och B-hörnet handlar om beteende/handlingar.',table:{headers:['Hörn','Fråga att ställa'],rows:[['C – sakfråga','Vad handlar konflikten konkret om?'],['A – attityd/tolkning','Vad tänker, känner och vill parterna?'],['B – beteende','Vad gör parterna och hur påverkar handlingarna konflikten?']]},key:'Om du bara angriper C-frågan medan A-hörnet är fullt av rädsla, skam eller ilska kan sakliga argument få dålig effekt.'},
      {h:'4. Konfliktpyramiden – mer finns under ytan',p:'POLKON beskriver tre nivåer. Nivå 1 är det presenterade problemet – “toppen av isberget”. Nivå 2 är en medvetet dold agenda. Nivå 3 rör mer omedvetna tolkningar, egenskaper och beteenden som formats av arv, miljö och erfarenheter.',compare:[{title:'Nivå 1 – presenterat',items:['Synlig sakfråga','Medvetet visade känslor/beteenden']},{title:'Nivå 2 – dold agenda',items:['Medvetet undanhållen avsikt','Exempelvis hämnd eller vilja att provocera fram konfrontation']},{title:'Nivå 3 – omedvetet',items:['Djupt rotade tolkningar och beteenden','Tidigare erfarenheter kan påverka reaktionen utan att personen ser det själv']}],warning:'Modellen är ett analysverktyg – inte en licens att “psykoanalysera” en person på plats. Utgå från observerbart beteende och använd modellerna för att styra ditt eget förhållningssätt.'},
      {h:'5. Konflikttrappan – eskalation sker stegvis',p:'Konflikttrappan visar hur normer, tolkningar och beteenden förändras när en konflikt blir mer destruktiv. Ju längre ned, desto större risk för destruktivt och våldsamt beteende och desto svårare att reparera relationen.',key:'Titta både på motpartens steg och på polisens eget signalvärde. Eget kroppsspråk och ordval kan sänka eller höja konflikten.'},
      {h:'6. Fyra särskilt kritiska steg',p:'Materialet pekar ut fyra steg som kan ge kraftig eskalation.',table:{headers:['Steg','Varför riskfyllt'],rows:[['3. Handling i stället för ord','Konflikten flyttar från verbal nivå mot konkreta handlingar'],['4. Stereotypa bilder','Motparten reduceras till en negativ kategori'],['5. Ansiktsförlust','Värdighet/status upplevs gå förlorad'],['6. Hot och ultimatum','Handlingsutrymmet krymper och pressen ökar']]},recall:{q:'Vilka fyra steg lyfts särskilt i POLKON?',a:'Handling i stället för ord, stereotypa bilder, ansiktsförlust och hot/ultimatum.'}},
      {h:'7. Förändringstrappan – från lyssnande till påverkan',p:'Förändringstrappan bygger på att du inte börjar med order/påverkan när personen fortfarande är starkt känslomässigt aktiverad. Modellen går från aktivt lyssnande och empati via förtroende till problemlösning, påverkan och förändrat beteende.',steps:[{title:'Aktivt lyssnande',text:'Personen får uttrycka sin situation och känna sig hörd.'},{title:'Empati',text:'Visa att du förstår upplevelsen – utan att behöva hålla med om allt.'},{title:'Förtroende',text:'Ökar när personen upplever sig lyssnad på och förstådd.'},{title:'Problemlösning',text:'När känsloläget sjunkit kan sakfrågan hanteras.'},{title:'Påverkan',text:'Du kan presentera alternativ, gränser och budskap.'},{title:'Förändrat beteende',text:'Målet är en konkret säker och genomförbar förändring.'}],warning:'En vanlig fallgrop är att hoppa direkt till problemlösning eller krav innan personen är mottaglig.'},
      {h:'8. Känslomässig gungbräda',p:'Konceptet går ut på att du ställer dig själv som en tillgång och lyssnar. Genom att undvika att omedelbart värdera eller tolka budskapet kan personen få bättre möjlighet att ta emot det du senare behöver säga. Aktivt lyssnande innebär inte att hålla med.',key:'Bekräfta personen och känslan – inte nödvändigtvis påståendet eller kravet.'},
      {h:'9. Aktivt lyssnande – syfte och mål',p:'Syftet är enligt materialet att hjälpa personen ur ett starkt känsloläge så att rationellt tänkande och mottaglighet för information ökar. Målet är att personen känner sig sedd, hörd och bekräftad.',bullets:['Identifiera känslor','Parafrasera','Reflektera','Använd effektiva pauser','Jag-budskap','Visa närvaro med balanserad ögonkontakt och öppet kroppsspråk'],recall:{q:'Vad är målet med aktivt lyssnande?',a:'Att personen ska känna sig sedd, hörd och bekräftad och bli mer mottaglig för rationell information.'}},
      {h:'10. Fakta – känslor',p:'Samtalstekniken går ut på att identifiera känslor och tolkningar och skilja dem från faktadelen. Materialet nämner fem vanliga sakområden bakom konflikter/kriser: pengar/ekonomi, relationer till nära anhöriga, kärleksrelationer, arbete och hälsa.',table:{headers:['Känslodel','Faktadel'],rows:[['“Ingen bryr sig om mig, allt är förstört”','Vad har faktiskt hänt i relationen/ekonomin/hälsan?'],['“Ni försöker förstöra mitt liv”','Vilken konkret polisåtgärd upplever personen och vad behöver förklaras?']]},key:'Du behöver ofta arbeta med känslan först för att kunna komma åt fakta.'},
      {h:'11. Hinder för överenskommelse',p:'POLKON listar faktorer som kan blockera problemlösning: otillfredsställda behov, rädsla att förlora ansiktet, brist på delaktighet, att personen ännu inte är redo, rädsla för våld vid överlämnande, känsla av att vara felbehandlad/missförstådd eller nedtryckt.',recall:{q:'Nämn tre hinder som kan göra att personen inte är redo för överenskommelse.',a:'Exempel: förlorat ansikte, brist på delaktighet, rädsla för våld, känsla av att vara missförstådd eller ännu inte redo.'}},
      {h:'12. Parafrasera',p:'Att återge delar av det personen just sagt och följa med en öppen fråga hjälper personen att utveckla sin berättelse och ger samtidigt kvitto på om du förstått rätt.',compare:[{title:'Mindre hjälpsamt',items:['“Lugna ner dig.”','“Det där stämmer inte.”']},{title:'Parafras',items:['“Du blev rädd när de kom in – berätta vad som hände precis innan.”','“Du säger att ingen lyssnat på dig. Vad är det viktigaste du vill att jag ska förstå?”']}],key:'Parafrasering är både informationsinhämtning och relationsskapande.'},
      {h:'13. Jag-budskap',p:'Jag-budskapet utgår från vad du själv ser, hör eller upplever utan att värdera personen. Materialet ger exempel i stil med: “Du säger att du inte är upprörd, men jag upplever att du ser spänd och irriterad ut. Stämmer det?”',warning:'Jag-budskap är inte en retorisk teknik för att smyga in en anklagelse. Syftet är att beskriva din observation öppet och bjuda in korrigering.'},
      {h:'14. Visa närvaro med kroppsspråk',p:'POLKON betonar att rätt attityd måste synas. Vänd dig mot personen, ha öppen hållning, luta dig vid behov något framåt, håll balanserad ögonkontakt och slappna av. Uppmuntra med nickningar, korta följdljud, upprepning av sista ord och öppna uppmaningar som “berätta mer”.',key:'Kroppsspråk är ett budskap. I spända lägen kan stängd, överlägsen eller hotfull framtoning öka konflikten även om orden är korrekta.'},
      {h:'15. Polisiära gränser och kommunikation',p:'Konfliktreducering betyder inte att du avstår från lagliga åtgärder. Du kan vara tydlig med gränser och samtidigt använda aktivt lyssnande. En säker kommunikationskedja är ofta: lyssna → bekräfta upplevelsen → förklara vad som ska hända → ge realistiska valmöjligheter → sätt tydlig gräns → genomför laglig åtgärd med minsta nödvändiga ingripande.',key:'Empati och tydlighet är inte motsatser.'}
    ],
    memory:'Lyssna före påverkan. A-B-C: attityd/känsla – beteende – sakfråga. Sänk känsloläget, skapa förtroende och gå sedan till problemlösning och tydliga gränser.'
  });
  mergeLesson('kommunikation',{
    quickChecks:[
      {after:1,goal:'1.3',level:'Förklara',q:'Varför behövs återkoppling i kommunikation?',a:['För att kontrollera hur budskapet faktiskt uppfattats','För att alltid vinna diskussionen','För att slippa lyssna','För att förlänga samtalet'],c:0,e:'Tolkning och brus gör att sändarens avsikt och mottagarens förståelse kan skilja sig.'},
      {after:2,goal:'1.3',level:'Känna igen',q:'Vad står C för i konflikttriangeln?',a:['Sakfrågan/conflict','Känslor','Kroppsspråk','Kontrollförlust'],c:0,e:'C-hörnet är sakfrågan.'},
      {after:5,goal:'1.3',level:'Känna igen',q:'Vilket är ett av de fyra särskilt eskalerande stegen?',a:['Ansiktsförlust','Aktivt lyssnande','Parafrasering','Effektiv paus'],c:0,e:'Ansiktsförlust är steg 5 i den särskilt kritiska gruppen.'},
      {after:6,goal:'1.3',level:'Förklara',q:'Varför ska du inte hoppa direkt till problemlösning i förändringstrappan?',a:['Personen kan vara för känslomässigt aktiverad för att ta emot lösningar','Problemlösning är förbjudet','Polisen ska aldrig ge information','Det tar alltid för lång tid'],c:0,e:'Lyssnande, empati och förtroende skapar mottaglighet.'},
      {after:8,goal:'3.2',level:'Tillämpa',q:'Vad innebär aktivt lyssnande?',a:['Att försöka förstå och bekräfta utan att det betyder att du håller med','Att alltid säga ja','Att vara tyst oavsett risk','Att undvika ögonkontakt helt'],c:0,e:'POLKON skiljer aktivt lyssnande från att hålla med.'},
      {after:11,goal:'1.3',level:'Tillämpa',q:'Vilken replik är bäst exempel på parafrasering?',a:['“Du säger att du kände dig hotad när de kom in. Berätta vad som hände då.”','“Du har fel.”','“Lugna dig.”','“Det där är ointressant.”'],c:0,e:'Repliken återger kärnan och följs av en öppen fråga.'},
      {after:14,goal:'3.2',level:'Tillämpa',q:'Måste konfliktreducering betyda att polisen avstår från en laglig åtgärd?',a:['Nej, tydliga gränser och empatiskt bemötande kan kombineras','Ja alltid','Endast vid narkotikabrott','Endast om personen är lugn'],c:0,e:'Kommunikation är ett sätt att genomföra även nödvändiga åtgärder säkrare.'}
    ],testSize:12,
    testQuestions:[
      {goal:'1.3',q:'Vilken konfliktpyramidnivå är det presenterade problemet?',a:['Nivå 1','Nivå 2','Nivå 3','Nivå 5'],c:0,e:'Nivå 1 är toppen av isberget – det synliga problemet.'},
      {goal:'1.3',q:'Vilket är INTE ett mål med aktivt lyssnande?',a:['Att omedelbart visa att personen har fel','Att personen känner sig sedd','Att sänka känsloläget','Att öka mottaglighet för information'],c:0,e:'Aktivt lyssnande handlar inte om att vinna argumentet.'},
      {goal:'1.3',q:'Vilka fem faktområden nämns ofta bakom kris/konflikt?',a:['Ekonomi, nära relationer, kärlek, arbete och hälsa','Väder, sport, politik, resor, mat','Endast brott','Endast sjukdom'],c:0,e:'Det är POLKON:s fem exempel på faktadelen.'},
      {goal:'3.2',q:'Vilket eget beteende kan bidra till eskalation?',a:['Stängt/överlägset kroppsspråk och hotfullt signalvärde','Öppen hållning','Balanserad ögonkontakt','Parafrasering'],c:0,e:'Materialet betonar att även polisens signalvärde påverkar konflikten.'}
    ]
  });

  // 16. Krisreaktioner och krisstöd
  Object.assign(M('krisstod'), {
    intro:'Krisstödsmodulen bygger på Polismyndighetens kursmaterial/riktlinjer om krisstöd. Den handlar både om att känna igen normala reaktioner efter potentiellt traumatiserande händelser och om polisorganisationens stöd till medarbetare: psykologisk första hjälp, samling efter händelse, uppföljning och professionellt stöd.',
    goals:['Förklara grundsynen att krisreaktioner ofta är normala reaktioner på onormala händelser','Känna igen när krisstöd bör initieras och att behov varierar mellan individer','Redogöra för krisstödskedjan och psykologisk första hjälp','Förstå ansvar, stödresurser och vikten av uppföljning'],
    sections:[
      {h:'1. Krisstöd är en del av arbetsmiljöansvaret',p:'Riktlinjerna utgår från att Polismyndigheten är en arbetsplats där medarbetare kan utsättas för risker som inte helt går att förebygga. Krisstöd beskrivs som en del av arbetsgivarens arbetsmiljöansvar och chefens personalansvar och omfattar medmänskligt, praktiskt, psykologiskt och socialt stöd.',key:'Krisstöd är inte något den enskilde förväntas “lösa själv” efter allvarliga tjänstehändelser.',source:'Polismyndighetens riktlinjer för krisstöd, inledning.'},
      {h:'2. Modern grundsyn: normal reaktion på onormal händelse',p:'Materialet säger att krisreaktioner är normala reaktioner på en onormal händelse och att de för de flesta avtar med tiden. Fokus i modernt krisstöd har flyttats från tidig tvingande emotionell bearbetning till stöd utifrån individens unika behov.',warning:'Att normalisera en reaktion betyder inte att ignorera den. Uppföljning behövs för att hitta dem vars reaktioner kvarstår eller förvärras.'},
      {h:'3. När ska krisstöd initieras?',p:'Riktlinjerna ger flera exempel på potentiellt allvarliga händelser.',table:{headers:['Exempel','Varför relevant'],rows:[['Konkret eller upplevt hot/våld mot eget eller annans liv','Direkt hot mot säkerhet'],['Svår skada eller dödsfall bland medarbetare','Stark exponering/förlust'],['Allvarlig eller dödlig olycka','Potentiellt traumatisk händelse'],['Tjänstevapen mot person, varningsskott eller vådaskott','Särskild operativ och emotionell belastning'],['Situationer med barn/ungdomar eller särskilt psykiskt påfrestande moment','Kan ge hög belastning även utan egen fysisk skada'],['Stor massmedial exponering','Sekundär belastning'],['Medarbetarens egen begäran','Den subjektiva upplevelsen ska tas på allvar']]},recall:{q:'Måste händelsen finnas på en “lista” för att krisstöd ska kunna behövas?',a:'Nej. Riktlinjerna ger exempel och betonar att en och samma händelse påverkar individer olika; medarbetarens egen begäran är också en grund.'}},
      {h:'4. Varför reagerar människor olika?',p:'Behovet av stöd kan variera beroende på bland annat socialt nätverk, yrkeserfarenhet, tidigare upprepade allvarliga händelser, tidigare trauma och pågående belastande livssituation.',compare:[{title:'Skyddande/resursfaktorer',items:['Stödjande socialt nätverk','Erfarenhet kan i vissa fall ge hanteringsresurser']},{title:'Belastningsfaktorer',items:['Tidigare upprepade allvarliga händelser','Tidigare trauma','Pågående belastande livssituation']}],key:'Bedöm personen, inte bara händelsen.'},
      {h:'5. Ansvar i organisationen',p:'Chefer med tilldelade arbetsmiljöuppgifter ska identifiera behov av krisstöd och längre stöd och säkerställa att relevanta åtgärder erbjuds. Riktlinjerna anger också att vakthavande befäl och polischef i beredskap ansvarar för att vid behov initiera krisstöd.',warning:'Det exakta organisatoriska genomförandet kan förändras över tid. Kursens princip är att ansvar finns i linjen och att behov ska fångas aktivt.'},
      {h:'6. Stödresurser',p:'Riktlinjerna listar interna och externa resurser. Internt nämns andra chefer med krisstödsutbildning, nationellt utbildade krisstödshandledare, telefonberedskap och förstärkning från Noa i särskilda fall. Externt nämns företagshälsovård och samverkan Kyrka–Polis.',table:{headers:['Internt','Externt'],rows:[['Utbildade chefer/krisstödshandledare','Företagshälsovård'],['Telefonberedskap','Kyrka–Polis'],['Noa-resurs i särskilda fall','Professionell vård vid behov']]},source:'Riktlinjer för krisstöd, avsnitt 4.'},
      {h:'7. Krisstödskedjan',p:'Materialet presenterar flera stödformer som tillsammans bildar en kedja från omedelbar hjälp till längre uppföljning.',table:{headers:['Stödform','Typisk förmedlare i riktlinjerna'],rows:[['Psykologisk första hjälp','Chef, arbetsledare, medarbetare'],['Stöd till närstående','Chef, krisstödshandledare'],['Samling efter händelse','Utbildad chef/krisstödshandledare'],['Uppföljning/bedömning','Chef, företagshälsovård'],['Fortsatt stöd','Närstående, chef, medarbetare'],['Professionellt stöd','Företagshälsovård'],['Självhjälp','Den drabbade']]},key:'Krisstödets uppgift som helhet är enligt riktlinjerna att stärka individens egen förmåga till återhämtning.'},
      {h:'8. Psykologisk första hjälp – vad gör man direkt?',p:'Det omedelbara stödet ska först skapa säkerhet och trygghet. Därefter lyssnar man och lugnar personer som reagerar kraftigt, ger nödvändig information, förmedlar kontakt med socialt stöd, identifierar individuella behov och klargör hur fortsatt stöd kan ges.',steps:[{title:'Säkerhet',text:'För den drabbade ur fortsatt fara.'},{title:'Trygghet',text:'Skapa en stabil och förutsägbar ram.'},{title:'Lyssna/lugna',text:'Möt starka reaktioner utan att pressa fram bearbetning.'},{title:'Information',text:'Ge saklig information om vad som händer och vad som kommer härnäst.'},{title:'Socialt stöd',text:'Koppla in kollegor/närstående enligt behov.'},{title:'Fortsättning',text:'Identifiera behov och planera uppföljning.'}],recall:{q:'Vad kommer först i psykologisk första hjälp?',a:'Säkerhet och en känsla av trygghet.'}},
      {h:'9. Samling efter händelse',p:'Samling efter händelse genomförs med viss struktur och bör ledas av utbildad chef eller krisstödshandledare. Den kan stärka återhämtning genom att informellt gå igenom händelsen och lärdomar, förmedla information, lugna vid behov, aktivera socialt stöd, normalisera och stärka gruppsammanhållning.',warning:'Riktlinjernas modell är inte en tvingande detaljerad emotionell debriefing. Fokus är stöd, information, normalisering och återhämtning.'},
      {h:'10. Direkt, indirekt och övrig exponering',p:'Materialet skiljer mellan direkt exponerade, indirekt exponerade och övriga berörda och visar att stödets form/prioritet kan anpassas efter exponeringen. Principen är inte att alla ska få exakt samma insats.',key:'Likabehandling betyder inte identisk behandling – behov och exponering styr.'},
      {h:'11. Uppföljning',p:'Personalansvarig chef ansvarar enligt riktlinjerna för uppföljning. Ett uppföljande samtal kan ske individuellt eller i grupp och ska bedöma om ytterligare stöd behövs. Exempel på områden att inventera är sömn, kost och allmäntillstånd samt behov av information om stresshantering.',recall:{q:'Nämn tre områden som kan följas upp.',a:'Sömn, kost och allmäntillstånd är uttryckliga exempel.'}},
      {h:'12. När professionellt stöd behövs',p:'En viktig funktion i uppföljningen är att identifiera medarbetare med kvarstående reaktioner och erbjuda professionell bedömning och eventuell behandling. Företagshälsovården är en central resurs i riktlinjerna.',warning:'Det går inte att avgöra en persons långsiktiga reaktion enbart utifrån hur “samlad” personen verkar direkt efter händelsen.'},
      {h:'13. Koppling till dödsbud – men källunderlaget är begränsat',p:'Studiehandledningen anger att kursen innehåller föreläsning och handledning om dödsbud samt att krisreaktioner ska identifieras och bemötas. Det uppladdade materialet innehåller däremot inte den fullständiga operativa arbetsgången för hur dödsbud ska lämnas.',warning:'Portalen tränar därför krisreaktioner, bemötande och polisens eget krisstöd men hittar inte på en dödsbudsrutin som saknas i källmaterialet.',source:'Studiehandledning HT26 + Polismyndighetens riktlinjer för krisstöd.'}
    ],
    memory:'Krisreaktioner är ofta normala reaktioner på onormala händelser. Säkerhet → trygghet → lyssna/lugna → information → socialt stöd → uppföljning → professionellt stöd vid behov.'
  });
  mergeLesson('krisstod',{
    quickChecks:[
      {after:1,goal:'2.5',level:'Förklara',q:'Hur beskriver riktlinjerna krisreaktioner?',a:['Som normala reaktioner på en onormal händelse som för de flesta avtar','Som alltid psykiatrisk sjukdom','Som tecken på olämplighet för polisyrket','Som något som måste bearbetas emotionellt direkt'],c:0,e:'Det är riktlinjernas grundsyn.'},
      {after:3,goal:'2.5',level:'Förklara',q:'Varför ska krisstöd individualiseras?',a:['Samma händelse kan påverka människor olika beroende på nätverk, erfarenheter, trauma och aktuell belastning','Alla reagerar identiskt','Endast tjänsteår spelar roll','Det ska inte individualiseras'],c:0,e:'Riktlinjerna listar flera individuella faktorer.'},
      {after:6,goal:'2.5',level:'Känna igen',q:'Vilket ingår i krisstödskedjan?',a:['Psykologisk första hjälp, uppföljning och professionellt stöd','Endast en debriefing','Endast sjukskrivning','Endast självhjälp'],c:0,e:'Kedjan består av flera stödformer över tid.'},
      {after:7,goal:'2.5',level:'Tillämpa',q:'Vad bör komma först direkt efter en potentiellt traumatisk händelse?',a:['Säkerhet och trygghet','Detaljerad känslobearbetning inför hela gruppen','Kritik av insatsen','Att skicka hem alla utan kontakt'],c:0,e:'Psykologisk första hjälp börjar med säkerhet och trygghet.'},
      {after:8,goal:'2.5',level:'Förklara',q:'Vad är syftet med samling efter händelse enligt riktlinjerna?',a:['Information, stöd, normalisering, socialt stöd och lärande – inte tvingande emotionell bearbetning','Att fastställa skuld','Att ersätta brottsutredning','Att diagnostisera PTSD på plats'],c:0,e:'Samlingen är stödjande och återhämtningsinriktad.'},
      {after:10,goal:'2.5',level:'Känna igen',q:'Vad kan inventeras vid uppföljning?',a:['Sömn, kost och allmäntillstånd','Endast arbetsresultat','Endast fysisk träning','Ingenting – uppföljning behövs inte'],c:0,e:'Dessa nämns uttryckligen i riktlinjerna.'}
    ],testSize:11,
    testQuestions:[
      {goal:'2.5',q:'Vilken händelse nämns som exempel där krisstöd bör initieras?',a:['Brukande av tjänstevapen mot person','Vanlig lunchrast','En planerad semester','Rutinmässig administration'],c:0,e:'Tjänstevapen mot person är ett uttryckligt exempel.'},
      {goal:'2.5',q:'Vem har enligt riktlinjerna ansvar för att följa upp stödbehov?',a:['Chef/personalansvar i organisationen','Ingen – bara individen själv','Alltid kollegans partner','Domstolen'],c:0,e:'Arbetsgivaren och cheferna har ett uttalat ansvar.'},
      {goal:'2.5',q:'Vilket påstående är mest korrekt om tidiga krisstödsinsatser?',a:['Fokus ligger på individens behov och återhämtning snarare än obligatorisk tidig emotionell bearbetning','Alla måste beskriva känslor i detalj direkt','Stöd bör undvikas första månaden','Endast läkare får ge medmänskligt stöd'],c:0,e:'Riktlinjerna beskriver denna förskjutning i modern krisstödssyn.'},
      {goal:'3.3',q:'Vad gör portalen med dödsbudsrutinen?',a:['Markerar att full arbetsgång saknas i uppladdat material och hittar inte på den','Hittar på en egen rutin','Påstår att krisstöd = dödsbud','Tar bort lärandemålet'],c:0,e:'Källtrohet är viktig; studiehandledningen anger momentet men underlaget är inte komplett.'}
    ]
  });

  // Säkerställ minst tio unika slutfrågor i de moduler där V5-materialet annars gav nio.
  D.moduleLessons.affektiva.testQuestions.push({goal:'1.1',q:'Vilket symtom finns med bland depressionskriterierna i föreläsningen?',a:['Minskat intresse eller glädje','Ökat sömnbehov som krav','Alltid hallucinationer','Obligatorisk aggressivitet'],c:0,e:'Minskat intresse/glädje är ett centralt depressionssymtom i materialet.'});
  D.moduleLessons.personlighet.testQuestions.push({goal:'3.2',q:'Vilket bemötande betonas avslutningsvis vid personlighetssyndrom?',a:['Bygga tillit, validera och stödja autonomi','Konfrontera och vinna argumentet','Undvika delaktighet','Alltid använda tvång'],c:0,e:'Föreläsningen lyfter tillit/hopp, delaktighet, autonomi, validering och motivering.'});
  D.moduleLessons.npf.testQuestions.push({goal:'2.4',q:'Vilken instruktion passar bäst vid ADHD enligt kursmaterialet?',a:['En kort fråga i taget, kortfattat och tydligt','Flera frågor samtidigt i snabbt tempo','Mycket ironi','Så många detaljer som möjligt på en gång'],c:0,e:'ADHD-bemötandet anger korta frågor, kortfattning och långsamt/tydligt tal.'});
  D.moduleLessons.lrv.testQuestions.push({goal:'1.2',q:'Vilken myndighet genomför rättspsykiatriska undersökningar enligt föreläsningen?',a:['Rättsmedicinalverket','Socialnämnden','Polismyndigheten','Arbetsförmedlingen'],c:0,e:'Rättsmedicinalverket genomför de rättspsykiatriska undersökningarna.'});

})();
