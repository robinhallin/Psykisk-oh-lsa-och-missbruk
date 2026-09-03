# Studieportal V2 – Polisiärt arbete vid psykisk ohälsa

En statisk studieportal byggd för kursmaterialet i projektet. Ingen server, databas eller byggprocess krävs.

## Nytt i V2

- **Case-tränare i flera steg** – 9 scenarier med beslut om risk, juridik, bemötande och överlämning.
- **Tentamensmotor** – 72 frågor, 10/20/30/alla frågor, ämnesfilter, svaga områden, träningsläge och valfri övningstimer.
- **Interaktiv lagguide** – beslutsträd för LPT, handräckning, LVM och narkotika/tvångsmedel.
- **Smart repetition** – spaced repetition för 46 flashcards med Igen / Svårt / Bra / Lätt.
- **Dashboard** – kunskapsnivå per område, fellista, studiestreak och rekommenderad träning.
- Progressionen sparas lokalt i webbläsaren via `localStorage`.

> Portalen är ett studieverktyg och inte ett operativt beslutsstöd. Juridiken återges pedagogiskt så som den behandlas i kursmaterialet.

## Lägg upp på GitHub Pages

1. Skapa ett nytt GitHub-repository, till exempel `psykisk-ohalsa-study`.
2. Ladda upp **innehållet i denna mapp** till repositoryts rot. `index.html` ska alltså ligga direkt i roten.
3. Öppna **Settings → Pages** i repositoryt.
4. Under **Build and deployment** välj:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Klicka **Save**.
6. Efter någon minut visas adressen till din publicerade webbplats på samma Pages-sida.

## Uppgradera från V1

Om V1 redan ligger i ditt GitHub-repo kan du ersätta dessa filer med V2-versionerna:

- `index.html`
- `styles.css`
- `app.js`
- `data.js`
- `README.md`
- `assets/` kan ligga kvar om filerna är samma, men det är enklast att ladda upp hela V2-mappens innehåll och skriva över.

Den gamla `localStorage`-markeringen för klara moduler och anteckningar behålls. V2 skapar nya separata nycklar för repetition, tentamen, case och kunskapsprofil.

## Filer

```text
index.html
styles.css
app.js
data.js
README.md
assets/
  brain.svg
  dialogue.svg
  drugs.svg
  favicon.svg
  law.svg
```
