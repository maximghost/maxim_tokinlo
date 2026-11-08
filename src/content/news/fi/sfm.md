---
title: "Esittely- ja tuoteluettelosivusto SFM:lle"
tag: "Ghost.Technologies · Asiakas"
date: 2026-11-08
status: "Suunnitteluvaiheessa"
summary: "Ghost.Technologies suunnittelee verkkosivustoa SFM:lle, hêviéläiselle laadukkaiden viinien ja väkevien juomien, hajuvesien ja päivittäistavaroiden kauppiaalle: esittely, tuoteluettelo ja varaus WhatsAppin kautta."
stack: ["Next.js", "TypeScript", "Supabase"]
links: []
highlights:
  - { label: "Asiakas", value: "SFM, Hêvié (Abomey-Calavi), kaksi myymälää" }
  - { label: "Toimitukset", value: "Visuaalinen ilme, esittely, tuoteluettelo, WhatsApp-varaus" }
  - { label: "Roolini", value: "Suunnittelu ja kehitys alusta loppuun" }
  - { label: "Teknologiat", value: "Next.js · TypeScript · Supabase" }
steps:
  - { label: "Tarpeiden kartoitus", state: done }
  - { label: "Graafinen ohjeisto ja luonnos", state: current, note: "Asiakkaan hyväksyttävänä" }
  - { label: "Varauspolku", state: next }
  - { label: "Kehitys", state: next }
  - { label: "Julkaisu", state: next }
order: 1
---

## Tausta

SFM on hêviéläinen yritys Abomey-Calavissa. Se myy laadukkaita viinejä ja väkeviä juomia, hajuvesiä ja tuoksuja sekä päivittäistavaroita kahdessa myymälässä. Sivuston on esiteltävä yritys, näytettävä valikoiman laajuus ja tehtävä tuotteen varaamisesta vaivatonta.

## Mitä rakennan

- **Esittely**: yritys, sen kolme tuotealuetta ja kaksi myymälää.
- **Tuoteluettelo**: tuotteet tuotealueittain ja luokittain, suunniteltu ensisijaisesti mobiiliin.
- **Varaus WhatsAppin kautta**: tuotesivulta asiakas avaa keskustelun myymälän kanssa, ja tuote on valmiiksi mainittu viestissä.
- **Visuaalinen ilme**: graafinen ohjeisto, typografia ja luonnokset, jotka sopivat laadukkaalle liikkeelle.

## Tekniset valinnat

- **Next.js ja TypeScript**: palvelimella renderöidyt tai etukäteen generoidut sivut nopeaa ja hyvin löydettävää sivustoa varten sekä täysin tyypitetty koodi.
- **Supabase (PostgreSQL)**: tuoteluettelo (tuotteet, luokat, hinnat, saatavuus) on tietokannassa eikä koodissa. Sitä voi muuttaa julkaisematta sivustoa uudelleen.
- **WhatsApp**: kanava, jota asiakkaat jo käyttävät. Ei luotavaa käyttäjätiliä eikä verkkomaksua alkuvaiheessa.

## Seuraavat vaiheet

Graafisen ohjeiston ja luonnoksen hyväksyminen asiakkaan kanssa, sitten varauspolku. Kehitys seuraa.
