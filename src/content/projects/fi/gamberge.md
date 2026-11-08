---
title: "Gamberge"
category: "Mobiilisovellus · Oppimista pelaamalla"
tagline: "10 aivopeliä, yksi täysillä käyvä mieli."
summary: "Kymmenen ranskankielisen aivopelin mobiilikokonaisuus: pelaa yksin, kavereiden kanssa samalla puhelimella tai reaaliaikaisissa verkkokaksintaisteluissa. Suunniteltu, kehitetty ja muotoiltu yksin alusta loppuun."
role: "Perustaja, projektipäällikkö ja kehittäjä (sooloprojekti)"
period: "Vuoden 2025 puolivälistä (noin 18 kuukautta)"
status: "Viimeistelyssä — julkaisu suunniteltu joulukuun 2026 loppuun"
stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS v4", "Framer Motion", "Capacitor", "Supabase", "PostgreSQL", "FedaPay", "Vitest"]
stats:
  - { value: "10", label: "peliä" }
  - { value: "616", label: "automaattista testiä" }
  - { value: "0", label: "mainosta" }
links:
  demo: "https://gamberge.vercel.app"
  site: "https://gamberge-site.vercel.app"
images:
  - { src: "../../../assets/projects/gamberge-hub-light.png", alt: "Gambergen aloitusnäkymä vaaleassa tilassa" }
  - { src: "../../../assets/projects/gamberge-hub-dark.png", alt: "Gambergen aloitusnäkymä tummassa tilassa" }
featured: true
order: 1
---

## Lyhyesti

- **10** aivopeliä
- **3** pelitapaa: yksin, samalla puhelimella, verkkokaksintaistelu
- **7** peliä, joissa on päivän haaste ja tulostaulu
- **616** automaattista testiä
- **0** mainosta
- **500 CFA-frangia**, kertaostos, ei tilausta

## Miksi Gamberge

Uskon, että pelaamalla voi oppia. Minulla ei ole mitään videopelejä vastaan, mutta halusin luoda jotain muuta: pelin, josta puhutaan myönteisenä työkaluna, joka harjoittaa muistia, logiikkaa ja sanavarastoa ja jonka ympärille syntyy aito yhteisö.

Siksi sovelluksessa on GambNews, sen yhteisösyöte: Gambergessa pelataan, mutta myös jaetaan anekdootteja, vinkkejä ja yleistietoa.

## Mitä rakensin

Gamberge kokoaa yhteen kymmenen peliä, joilla jokaisella on oma visuaalinen ja äänellinen identiteettinsä. Ne jakautuvat kolmeen ryhmään:

- **Numerot ja laskeminen**: Devinettes, Haut ou Bas, Cascade, Oracle
- **Sanat ja kirjaimet**: Mot Caché, Anagramme, Déclic, Bobard
- **Logiikka ja päättely**: Imposteur (tutkimuksia, joissa vain yksi todistaja valehtelee), Équilibre (peliteorian dilemmoja)

Pelien lisäksi sovellus tarjoaa:

- **Seurapelitilan**: 2–4 pelaajaa jakaa saman puhelimen, ja peli jatkuu automaattisesti sivun uudelleenlatauksen jälkeen.
- **Verkkokaksintaistelun**: satunnainen vastustaja tai yksityinen huone koodilla, sama sisältö molemmille, uusintaottelu yhdellä napautuksella ja tunnistus, jos vastustaja poistuu.
- **Päivän haasteen**: yksi yritys peliä kohden päivässä, sama sisältö kaikille, yhteinen tulostaulu.
- **GambNewsin**: yhteisösyöte reaktioineen ja kommentteineen sekä automaattinen moderointi ilmoitusten perusteella.
- **Maksupolun**: Mobile Money (MTN, Moov, Celtiis) ja korttimaksu FedaPayn kautta.

Myös sisällön kirjoittaminen oli osa projektia: sanakirja, vihjeet, tutkimusten tarinat ja dilemmat on kaikki kirjoitettu sovellusta varten.

## Roolini

Vein Gambergen yksin ideasta tuotantoon:

- **Pelisuunnittelu**: pelit ja niiden säännöt
- **Verkko- ja Android-sovelluksen kehitys**
- **Infrastruktuuri**: tietokanta, reaaliaikainen kaksintaistelu, maksut
- **Sisältö**: sanat, tarinat, dilemmat, vihjeet
- **Muotoilu**: visuaalinen identiteetti, maskotti (Cogito), animaatiot ja äänimaailmat

Käytin tekoälyä kehitysavustajana. Suunnittelu, arkkitehtuuri, ratkaisut ja koodin validointi (erityisesti testien avulla) ovat omaa työtäni.

## Suurin haaste: verkkokaksintaistelun parinmuodostus

**Ongelma.** Kaksintaistelun voi aloittaa kahdella tavalla: haastamalla satunnaisen verkossa olevan pelaajan, jonka on hyväksyttävä pyyntö, tai jakamalla yksityisen huoneen koodin. Kummassakin tapauksessa kahden ihmisen, jotka eivät kirjaudu samalla hetkellä, on päädyttävä samaan peliin, nähtävä sama näkymä samaan aikaan ja saatava reilut tulokset.

**Mikä meni pieleen.** Ensimmäiset versiot eivät kestäneet. Jos pelaajat eivät saapuneet täsmälleen samaan aikaan, he eivät koskaan nähneet toisiaan. Ja pelaaja, joka sai useita pyyntöjä kerralla, ei päässyt mihinkään istuntoon.

**Ratkaisu.** Sen sijaan, että olisin korjannut virheitä yksi kerrallaan, otin etäisyyttä ja suunnittelin koko polun uudelleen käymällä läpi jokaisen mahdollisen tilanteen: eriaikaiset saapumiset, samanaikaiset pyynnöt, kieltäytymiset ja poistumiset. Järjestelmä rakennettiin sitten uudelleen tämän pohjalta:

- **jono** kerää saapuvat pyynnöt, ja pelaaja valitsee, minkä hän hyväksyy;
- vapaiden pelaajien luettelo **päivittyy automaattisesti 10 sekunnin välein**, mikä tasoittaa eriaikaiset saapumiset;
- jokainen vaihe vaatii **molempien pelaajien nimenomaisen suostumuksen**, ja yksikin kieltäytyminen päättää istunnon hallitusti;
- kun peli alkaa, molemmat pelaajat näkevät **saman näkymän samalla hetkellä**, ja tulokset paljastetaan vasta kierroksen lopussa.

**Tulos.** Kaksintaistelu on nyt vakaa ja automaattisten testien kattama. Ennen kaikkea sain siitä menetelmän: synkronointiongelman edessä kartoitan kaikki mahdolliset tilat ennen kuin kirjoitan riviäkään koodia.

## Tekniset valinnat

- **React 19 + Vite + Tailwind CSS v4** ja animaatioihin **Framer Motion**: sujuva käyttöliittymä, joka tuottaa jokaisen voiton kohdalla tavoittelemani wau-efektin.
- **Capacitor**, jotta yksi koodikanta toimii verkossa (Vercel), Androidilla ja myöhemmin iOS:llä.
- **Supabase** (PostgreSQL, reaaliaikaisuus, palvelinfunktiot) tileihin, kaksintaisteluihin, tulostauluihin ja yhteisöön.
- **FedaPay** paikallisiin maksuihin. Jokainen maksu tarkistetaan palvelimella: sovelluksessa ei ole yhtään maksuavainta.
- **Vitest**: 616 automaattista testiä kattaa pelilogiikan, kaksintaistelut, tallennuksen, maksut ja yhteisön.

## Pelaajan kunnioittaminen

Gamberge kieltäytyy mainoksista. Malli on yksinkertainen: 20 ilmaista peliä tutustumiseen ja sitten kertaostos, 500 CFA-frangia. Tili ei vaadi sähköpostia eikä tarpeettomia tietoja: käyttäjänimi, salasana ja henkilökohtainen palautuskoodi riittävät.

## Projektin tilanne

Sovellusta voi pelata demona verkossa. Pelien sisältöä, ostosivua ja käyttöliittymien käytettävyyttä hiotaan parhaillaan, ja testaus oikeilla laitteilla jatkuu. Julkaisu Play Storessa ja sitten App Storessa on suunniteltu joulukuun 2026 loppuun. Seuraava tekninen tavoite on sujuva kaksintaistelu 1 000 ja sitten 10 000 samanaikaisella pelaajalla.

## Mitä opin

**Valmis tuote vaatii täyden sitoutumisen.** Gamberge täytti kuukausien ajan päiväni ja ajatukseni. Näin suuren projektin vetäminen yksin opetti minulle päättäväisyyttä ja tarkkuutta: koodin uudelleenlukemista, testaamista yhä uudelleen ja sitä, ettei tyydy pelkkään ”se toimii”.

**Laatu syntyy iteroimalla.** Ensimmäiset versiot olivat keskeneräisiä, eikä alkuperäinen ulkoasu muistuttanut lainkaan nykyistä. Jokainen uudistus vei sovellusta lähemmäs asettamaani vaatimustasoa.

**Pelaajilla on viimeinen sana.** Hankin testaajia, jotta valintani kohtaisivat todellisen käytön. Heidän palautteensa ohjasi suurta osaa viimeistelystä.
