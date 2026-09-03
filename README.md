# Studieportal V5 – Polisiärt arbete vid psykisk ohälsa

V5 är den stora innehållsuppdateringen. Samtliga 16 moduler har skrivits om och fördjupats samtidigt så att **modulerna fungerar som riktiga kurslektioner**, inte som korta sammanfattningar.

## Vad som är nytt i V5

Alla moduler följer nu samma pedagogiska grund:

`Lärandemål → förklaring → jämförelse/tabell → aktiv återkallning → snabbkoll → polisiär tillämpning → juridik/praxis → case → sluttest → repetition`

### Samtliga 16 moduler är fördjupade

1. Psykisk ohälsa – grunden
2. Depression & bipolär sjukdom
3. Psykos & schizofreni
4. Personlighetssyndrom
5. Autism & ADHD
6. Suicidrisk & akut psykisk kris
7. Beroende & samsjuklighet
8. Drogtecken & symtom
9. LPT – psykiatrisk tvångsvård
10. LRV – rättspsykiatrisk vård
11. LVM – vård av missbrukare
12. Handräckning
13. Polisiära befogenheter & sekretess
14. Narkotikastrafflagen & provtagning
15. Kommunikation & konfliktreducering
16. Krisstöd inom Polismyndigheten

Modulerna innehåller nu betydligt fler kursförankrade avsnitt, tabeller, jämförelser, rättsliga stegkedjor, minnesregler, fallgropar och frågor.

## Nya pedagogiska element

- **Aktiv återkallning:** frågor där svaret är dolt tills du själv försökt formulera det.
- **Snabbkoll i textflödet:** frågor kommer direkt efter det innehåll de mäter.
- **Jämförelsetabeller:** exempelvis LPT/LRV/LVM, positiva/negativa psykossymtom och drogkategorier.
- **Stegmodeller:** juridiska rekvisit och polisiära analysordningar visas som sekvenser.
- **Kom ihåg-rutor:** kärnan i varje avsnitt.
- **Fallgropar:** vanliga sammanblandningar och juridiska gråzoner markeras tydligt.
- **Kurskälla per avsnitt** där det är särskilt viktigt att se vilket material informationen kommer från.
- **Sluttest:** minst 80 % krävs för att en modul ska räknas som behärskad.
- **Lärandemålsdata:** svaren matas tillbaka till Lärandemål-fliken så att du kan jämföra egen bedömning med faktisk testprestation.

## Källprincip

Det fördjupade modulinnehållet bygger på kursfilerna i projektet. Portalen försöker inte fylla kunskapsluckor med egen kurslitteratur.

Där källunderlaget är ofullständigt markeras det uttryckligen. Exempel:

- Den separata suicidologiföreläsningen/SPiSS finns inte komplett bland projektfilerna. Suicidmodulen bygger därför på tillgängligt POLKON-stöd, affektiva syndrom, LPT, kommunikationsmaterial och studiehandledningen.
- Studiehandledningen anger ett dödsbudsmoment, men en fullständig operativ dödsbudsrutin finns inte i det uppladdade materialet. V5 hittar därför inte på en sådan rutin.
- Äldre kursmaterial om exempelvis interna beslutsnivåer, statistik och rättsliga detaljer ska inte behandlas som ett operativt nutidsbesked.

**Praxis-fliken är det avgränsade undantaget** och använder extern research från officiella källor hos domstolar och JO, med länk till originalkällan.

## Progression från tidigare version

V5 behåller data för bland annat anteckningar, flashcards, tentamen, case och lärandemålschecklistor.

Eftersom modulernas innehåll och sluttest har förändrats kraftigt använder V5 däremot nya localStorage-nycklar för modulernas snabbfrågor och mastery-test. Det gör att en gammal V4-modul inte automatiskt räknas som behärskad efter den stora innehållsuppdateringen.

## Filer i repositoryts rot

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
module-v5.js
styles.css
```

Det ska **inte** finnas någon `assets/`-mapp i den version som är anpassad till ditt nuvarande GitHub-repo.

## Uppgradera ditt befintliga GitHub Pages-repo

1. Packa upp V5-zippen.
2. Gå till ditt befintliga GitHub-repository.
3. Ladda upp filerna ovan och ersätt de gamla filerna.
4. **Ta bort `module-v4.js`** om den fortfarande ligger kvar i repositoryt.
5. Kontrollera att **`module-v5.js`** ligger direkt i roten.
6. Du behöver inte ändra **Settings → Pages** om GitHub Pages redan fungerar.
7. Vänta någon minut efter commit och gör vid behov en hård omladdning: `Ctrl+F5` eller `Cmd+Shift+R`.

## GitHub Pages från nytt repo

- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/ (root)**

## Viktigt

Portalen är ett **studieverktyg – inte ett operativt beslutsstöd**. Lagtext, praxis, klassningar, beslutsnivåer, föreskrifter och lokala rutiner kan ändras och ska kontrolleras mot aktuella officiella källor inför verklig tjänsteutövning.
