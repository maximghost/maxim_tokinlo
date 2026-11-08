---
title: "AgroMarket"
category: "Verkkosivusto · Verkkokauppa"
tagline: "Pellolta pöytään, ilman välikäsiä."
summary: "Verkkokauppa-alusta, joka yhdistää viljelijät suoraan kuluttajiin. Toteutettu IFRI-UAC:n Sovellusten ergonomia -opintojaksolla: kehitin taustajärjestelmän, tilauspolun ja testit."
role: "Taustajärjestelmäkehittäjä"
period: "Opintoprojekti, IFRI-UAC"
status: "Valmis"
stack: ["Node.js", "MongoDB"]
links: {}
order: 4
---

## Projekti

AgroMarketissa viljelijät myyvät tuotteitaan verkossa suoraan kuluttajille. Ilman välikäsiä viljelijä päättää itse hinnoistaan, ja kuluttaja tietää, mistä ruoka tulee.

Projekti toteutettiin **Sovellusten ergonomia** -opintojaksolla: jokaisen näkymän piti pysyä yksinkertaisena ja selkeänä myös niille, jotka ostavat verkosta harvoin.

## Roolini

- **Taustajärjestelmä** Node.js:llä ja MongoDB-tietokannalla: palvelinlogiikka sekä tuotteiden, käyttäjätilien ja tilausten tallennus.
- **Tilauspolku** tuotteiden valinnasta tilauksen vahvistamiseen.
- **Testit**, jotka varmistavat, että tilauspolku toimii alusta loppuun.

## Mitä opin

Tässä projektissa käytin MongoDB:tä ensimmäistä kertaa. Opin myös, että tilauspolku on luotettava vasta testattuna: jokainen asiakas kulkee sen läpi, ja yksikin virhe voi maksaa kaupan.
