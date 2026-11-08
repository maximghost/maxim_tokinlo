---
title: "Gamberge: julkaisu suunniteltu joulukuun 2026 loppuun"
tag: "Ghost.Technologies · Gamberge"
date: 2026-11-08
status: "Viimeistelyssä"
summary: "Gamberge on loppusuoralla: pelien sisältöä, ostosivua ja käytettävyyttä hiotaan, samoin esittelysivustoa."
stack: ["React 19", "TypeScript", "Capacitor", "Supabase", "FedaPay", "Vitest"]
links:
  - { label: "Kokeile demoa", url: "https://gamberge.vercel.app" }
  - { label: "Esittelysivusto", url: "https://gamberge-site.vercel.app" }
  - { label: "Lue tapaustutkimus", url: "/fi/projektit/gamberge/" }
highlights:
  - { label: "Alustat", value: "Verkko ja Android, sitten iOS" }
  - { label: "Testit", value: "616 automaattista testiä" }
  - { label: "Malli", value: "Kertaosto 500 CFA-frangia, ei mainoksia" }
  - { label: "Julkaisu", value: "Joulukuun 2026 loppu" }
steps:
  - { label: "10 peliä ja verkkokaksintaistelu", state: done }
  - { label: "Päivän haaste ja GambNews", state: done }
  - { label: "Sisältö, osto ja käytettävyys", state: current }
  - { label: "Julkaisu Play Storessa", state: next, note: "Joulukuun 2026 loppu" }
  - { label: "Julkaisu App Storessa", state: next }
order: 3
---

## Missä Gamberge on nyt

Kymmenen peliä, verkkokaksintaistelu, päivän haaste ja GambNews-yhteisösyöte ovat valmiina ja pelattavissa demossa. Jäljellä on hioa se, mikä ratkaisee julkaisussa.

## Työn alla

- **Pelien sisältö**: laajennettu ja oikoluettu peli kerrallaan.
- **Ostosivu**: Mobile Money- ja korttimaksun polku.
- **Käytettävyys**: jokainen näkymä tehdään selkeämmäksi ja sujuvammaksi.
- **Esittelysivusto**, [gamberge-site.vercel.app](https://gamberge-site.vercel.app), on myös hiottavana.

## Konepellin alla

Käyttöliittymä: React 19, TypeScript, Vite ja Tailwind CSS v4; Capacitor yhteen koodipohjaan verkossa ja Androidilla; Supabase (PostgreSQL, reaaliaikaisuus) käyttäjätileihin, kaksintaisteluihin ja tulostauluihin; FedaPay paikallisiin maksuihin palvelimella vahvistettuina. 616 automaattista Vitest-testiä kattaa pelilogiikan.

## Mitä seuraavaksi

Julkaisu Play Storessa on suunniteltu joulukuun 2026 loppuun, ennen App Storea.
