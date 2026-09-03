# Studieportal V4 – Polisiärt arbete vid psykisk ohälsa

V4 bygger vidare på V3 men gör **modulerna till portalens huvudsakliga lärflöde**.

## Nytt i V4

- De gamla uppskattade tidsangivelserna visas inte längre.
- Modulkorten visar i stället antal **avsnitt, snabbfrågor, case och slutfrågor**.
- Alla 16 moduler är kopplade till relevanta **lärandemål**.
- Frågor ligger inne i själva textflödet som **Snabbkoll** efter relevanta avsnitt.
- Varje modul har en **Tänk som polis**-del som kopplar teori till observation, risk, bemötande och rättsgrund.
- Juridiskt relevanta moduler länkar vidare till **lagguide, lagrumsbank och praxis**.
- Modulerna använder befintliga flerstegscase när ett passande case finns. Övriga får reflektionscase.
- Varje modul avslutas med ett **sluttest**. Minst 80 % krävs för att modulen ska räknas som behärskad.
- Svar i modulfrågorna registreras även mot berörda lärandemål, så Lärandemål-fliken kan visa faktisk **testdata** utöver den manuella checklistan.
- V2/V3:s tidigare data för repetition, tentamen, case, anteckningar och checklistor ligger kvar i webbläsaren.

## Pedagogisk princip

`Lärandemål → läs → snabbkoll → polisiär tillämpning → juridik/praxis → case → sluttest → repetition`

Modulinnehållet bygger på de uppladdade kursfilerna. Där komplett underlag saknas markeras detta. Exempelvis finns inte den separata suicidologiföreläsningen/SPiSS-materialet bland projektfilerna, så suicidmodulen begränsar sig till det som faktiskt stöds av studiehandledningen, affektiva syndrom, LPT och kommunikationsmaterialet.

Praxis-fliken är det avgränsade undantaget och bygger på extern research från officiella källor, precis som i V3.

## Filer i roten

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
module-v4.js
styles.css
```

Observera den nya filen **`module-v4.js`**. Den måste laddas upp tillsammans med övriga filer.

## Uppgradera ditt befintliga GitHub Pages-repo

1. Packa upp V4-zippen.
2. Gå till ditt befintliga GitHub-repository.
3. Ladda upp filerna ovan och ersätt de gamla filerna med V4-versionerna.
4. Se särskilt till att **`module-v4.js`** finns i repositoryts rot.
5. Du behöver inte ändra inställningarna under **Settings → Pages** om sidan redan fungerar.
6. Vänta någon minut efter commit och gör vid behov en hård omladdning (`Ctrl+F5` eller `Cmd+Shift+R`).

## GitHub Pages från nytt repo

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/ (root)**

## Viktigt

Portalen är ett studieverktyg och inte ett operativt beslutsstöd. Juridik och praxis ska alltid kontrolleras mot aktuell lagtext, nyare avgöranden, föreskrifter och lokala rutiner inför skarp tillämpning.
