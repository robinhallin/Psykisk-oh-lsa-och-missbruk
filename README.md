# Studieportal V3 – Polisiärt arbete vid psykisk ohälsa

En helt statisk studieportal för kursen **D2PM1U – Polisiärt arbete vid psykisk ohälsa och sjukdom samt missbruk, 9 hp (HT26 distans)**.

## Nytt i V3

- **Lärandemål** – samtliga 13 unika kursmål från studiehandledningen (1.1–1.3, 2.1–2.7 och 3.1–3.3), nedbrutna till konkreta kunskaper/färdigheter.
- **Egen checklista per lärandemål** – sparas lokalt i webbläsaren och visar progression.
- **Praxis & gråzoner** – 17 verkliga avgöranden/beslut från HD, HFD och JO, med fråga, fakta, bedömning, minnesregel, polisiär betydelse och länk till originalkällan.
- Tydlig märkning av **PREJUDIKAT** respektive **JO** så att de inte blandas ihop.
- Sökfunktionen hittar nu även lärandemål och praxis.
- Allt från V2 finns kvar: moduler, symtomkompass, lagrumsbank, interaktiv lagguide, spaced repetition, tentamensmotor, case-tränare och anteckningar.
- V2:s tidigare progression används fortfarande. V3 lägger bara till en ny localStorage-post för lärandemålen.

## Viktig källprincip

Den vanliga kursdelen bygger på de uppladdade kursfilerna. **Praxis-fliken är uttryckligen extern research** och använder officiella källor från Sveriges Domstolar och JO. Varje praxisfall har länk till originalkällan. Praxisresearchen i denna version är daterad **2026-09-03**.

Portalen är ett **studieverktyg – inte operativt beslutsstöd**. Kontrollera alltid aktuell lagtext, nyare praxis, föreskrifter och lokala rutiner vid skarp tillämpning.

## Filstruktur för ditt nuvarande GitHub-repo

V3 är anpassad efter den struktur du redan använder, alltså ligger SVG-filerna direkt i roten:

```text
README.md
app.js
brain.svg
data.js
dialogue.svg
drugs.svg
favicon.svg
index.html
law.svg
styles.css
```

Det ska **inte** finnas någon extra `assets/`-mapp i den här versionen.

## Uppgradera från V2 på GitHub

1. Packa upp ZIP-filen.
2. Öppna ditt befintliga GitHub-repository.
3. Ladda upp alla filer ovan och ersätt de befintliga filerna med V3-versionerna.
4. Du behöver inte ändra **Settings → Pages** om GitHub Pages redan fungerar.
5. Vänta någon minut på publiceringen.
6. Gör en hård uppdatering i webbläsaren om V2 ligger kvar i cache:
   - Windows: `Ctrl + F5`
   - Mac: `Cmd + Shift + R`

## Lokal data

Portalen använder endast webbläsarens `localStorage`. Ingen server eller databas används. V2-progress för moduler, tentamen, repetition, case och anteckningar bevaras när du ersätter filerna.
