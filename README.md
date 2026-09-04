# Studieportal V6.1 – Polisiärt arbete vid psykisk ohälsa

V6.1 bygger vidare på de 16 fördjupade kursmodulerna och lägger till två stora träningsspår: **tentamensinspirerad träning** och ett **visuellt/adaptivt träningslabb**.


## V6.1 – buggfix för tentamensmotorn

V6 hade en missad hjälpfunktion (`setupSegment`) i `app.js`. Det gjorde att Tentamen-sidan hann renderas men JavaScript avbröts innan klickhändelserna kopplades, vilket gjorde inställningarna och **Starta testet** oklickbara. V6.1 lägger tillbaka funktionen och återställer klickbarheten för frågeantal, läge, tid och startknapp.

## Nytt i V6

### 1. Tentamen 2025 används som inspirationskälla
Den uppladdade tentamen `D2PM2U Polisiärt arbete vid psykisk ohälsa och sjukdom samt missbruk` från 17 oktober 2025 har använts för att skapa **47 omarbetade tentamensnära frågor**.

Frågorna är spridda till relevanta områden:
- beroende och samsjuklighet
- LPT och handräckning
- LVM och LRV
- ADHD/NPF
- personlighetssyndrom
- affektiva syndrom och suicid
- psykos/schizofreni
- drogtecken och preparatkännedom
- narkotikastrafflag/tvångsmedel
- krisstöd
- vardagsförhandling och aktivt lyssnande

De är **inte avsedda som en kopia av originaltentamen**. Formuleringar och distraktorer har i många fall ändrats så att du tränar kunskapen och inte bara memorerar provet.

### 2. Riktiga flersvarsfrågor
Tentamensmotorn och modulernas sluttest kan nu hantera frågor där flera alternativ är korrekta.

- sidan visar hur många alternativ som ska väljas
- alla korrekta alternativ krävs för full poäng
- i träningsläge får du facit och förklaring direkt
- i tentamensläge får du facit först efter inlämning

### 3. Frågestilsfilter i tentamensmotorn
Du kan välja:
- **Blanda allt**
- **Tentamensinspirerad**
- **Övrig kursbank**

Det går fortfarande att kombinera detta med ämnesfilter, svaga områden och timer.

### 4. Träningslabb
Ny flik: **Träningslabb**.

#### Drogtecken-simulator
Visar ett simulerat observationsmönster med bland annat:
- pupillstorlek
- ögon
- puls/andning
- tal
- motorik
- psyke/beteende

Du identifierar preparatgruppen och får kursförankrad återkoppling. Syftet är att träna helhetsmönster, inte att diagnostisera utifrån ett enda tecken.

#### Adaptiva scenarioförlopp
Fyra förgrenade scenarier finns i V6:
- akut suicidrisk på bro – LPT 47 / PL 11
- Brita – LPT-handräckning och vårdintyg
- Conny – misstänkt eget bruk och kroppsbesiktning
- Krister – LVM-handräckning och resursfråga

Dina val påverkar nästa steg och ger en pedagogisk beslutsprofil.

#### Tentamenspuls
Från Träningslabbet kan du starta en snabb runda med 10 slumpade tentamensinspirerade frågor.

## Källprincip

Kursinnehåll bygger på materialet i projektet. Tentamen 2025 är en separat användartillhandahållen inspirationskälla. Där en tentamensfråga innehåller en daterad statistikuppgift markeras den som just tentamensinspiration och inte som aktuell officiell statistik.

Praxis-fliken är fortsatt separat och bygger på extern research från officiella rättskällor.

## Uppgradering från V5

Ladda upp/ersätt följande filer i GitHub-repots rot:

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
module-v6.js
styles.css
```

**Ta bort `module-v5.js`** om den fortfarande ligger kvar i repot.

GitHub Pages-inställningarna behöver inte ändras.

## Progression

V6 behåller tidigare localStorage-data för bland annat:
- modultest
- snabbfrågor
- flashcards
- tentamensresultat
- case
- lärandemålschecklistor
- anteckningar

V6 skapar dessutom ny lokal lagring för resultat från Träningslabbet.

## Viktigt

Portalen är ett **studieverktyg och inte ett operativt beslutsstöd**. Kontrollera aktuell lagtext, praxis, föreskrifter och lokala rutiner vid skarp tillämpning.
