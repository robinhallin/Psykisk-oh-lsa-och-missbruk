# Studieportal – Psykisk ohälsa, missbruk och polisiärt arbete

En statisk, responsiv och interaktiv studiesida byggd utifrån kursmaterialet i projektet. Ingen backend och inga externa JavaScript-ramverk behövs.

## Funktioner

- 16 pedagogiska kursmoduler
- Lagrumsbank med filtrering
- Symtomkompass för psykiatri och drogtecken
- Flashcards med tangentbordsstyrning
- Slumpat quiz / tentaträning
- Polisiära case med återkoppling
- Sökfunktion
- Progression och anteckningar sparas lokalt i webbläsaren (`localStorage`)
- Ljust/mörkt tema
- Responsiv design för mobil, surfplatta och dator

## Kör lokalt

Du kan öppna `index.html` direkt. För säkrast beteende kan du också starta en enkel lokal server:

```bash
python3 -m http.server 8000
```

Öppna sedan `http://localhost:8000`.

## Publicera med GitHub Pages

1. Skapa ett nytt GitHub-repository, t.ex. `psykisk-ohalsa-study`.
2. Lägg innehållet i den här mappen i repositoryts rot.
3. Commit + push till `main`.
4. I GitHub: **Settings → Pages**.
5. Under **Build and deployment**, välj **Deploy from a branch**.
6. Välj `main` och `/ (root)` och klicka **Save**.
7. GitHub visar adressen när sidan är publicerad.

Eftersom sidan är helt statisk behövs ingen build-process.

## Struktur

- `index.html` – skal och navigering
- `styles.css` – all design/responsivitet
- `data.js` – kursinnehåll, lagrum, flashcards, quiz och case
- `app.js` – rendering, routing och interaktivitet
- `assets/` – egna SVG-illustrationer

## Viktigt

Sidan är ett **studieverktyg**, inte operativt beslutsstöd. Lagrumsuppgifter och beslutsnivåer är återgivna i den kontext de behandlas i kursmaterialet. Kontrollera alltid aktuell lagtext, föreskrifter och lokala rutiner vid skarp tillämpning.

## Uppdatera innehåll

Nästan allt innehåll ligger i `data.js`. Där kan du enkelt lägga till fler moduler, frågor, case och lagrum utan att ändra sidans layout.
