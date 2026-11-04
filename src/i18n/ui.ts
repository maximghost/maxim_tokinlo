import type { Locale } from './config';

/*
 * Interface strings for every language.
 * French is the source: the other languages must provide exactly the same
 * keys, otherwise `npm run check` fails. French typography uses a
 * non-breaking space ( ) before « : », « ? » and « ! ».
 */

const fr = {
  'meta.title': 'Maxim Tokinlo — Développeur Full-Stack orienté produit',
  'meta.description':
    "Développeur Full-Stack (TypeScript, React, Python) basé au Bénin. Je conçois et livre des applications web et mobiles, de l’idée à la mise en production. Fondateur de Ghost.Technologies.",

  'a11y.skip': 'Aller au contenu',
  'nav.label': 'Navigation principale',
  'nav.projects': 'Projets',
  'nav.journey': 'Parcours',
  'nav.contact': 'Contact',
  'lang.label': 'Choisir la langue',
  'theme.toDark': 'Passer en mode sombre',
  'theme.toLight': 'Passer en mode clair',

  'hero.kicker': 'Développeur Full-Stack',
  'hero.place': 'Bénin',
  'hero.line1': 'Je conçois et je livre',
  'hero.line2.before': 'des applications ',
  'hero.line2.accent': 'utiles,',
  'hero.line2.after': '',
  'hero.line3': "de l’idée à la production.",
  'hero.text':
    "Je construis des produits web et mobiles complets — interface, serveur, paiements, temps réel — avec une exigence : qu’ils soient fiables et pensés pour ceux qui les utilisent.",
  'hero.cta.primary': 'Voir mes projets',
  'hero.cta.secondary': 'Me contacter',
  'hero.meta1.strong': 'Basé au Bénin',
  'hero.meta1.rest': ' · disponible à distance',
  'hero.meta2.strong': 'TypeScript · React · Python',
  'hero.meta2.rest': ' · Supabase',
  'hero.meta3.before': 'Fondateur de ',
  'hero.meta3.strong': 'Ghost.Technologies',

  'approach.label': 'Approche',
  'approach.title.before': "Ce que j’apporte ",
  'approach.title.accent': 'à un projet.',
  'approach.1.title': 'Concevoir',
  'approach.1.text':
    'Partir du problème réel et des utilisateurs, puis traduire le besoin en parcours, en écrans et en architecture.',
  'approach.2.title': 'Construire',
  'approach.2.text':
    'Développer le produit de bout en bout : React et TypeScript côté interface, Supabase et PostgreSQL côté serveur, Capacitor pour le mobile, Python pour les traitements.',
  'approach.3.title': 'Fiabiliser',
  'approach.3.text':
    'Tester, sécuriser et documenter : paiements vérifiés côté serveur, données sensibles protégées, et des centaines de tests automatisés là où ça compte.',

  'projects.label': 'Projets',
  'projects.title.before': 'Une sélection ',
  'projects.title.accent': 'choisie.',
  'projects.intro':
    "Certains projets sont confidentiels : je les présente volontiers lors d’un échange.",
  'projects.caseStudy': "Lire l’étude de cas",
  'projects.demo': 'Essayer la démo',
  'projects.confidential': 'Confidentiel',

  'journey.label': 'Parcours',
  'journey.quote.before':
    "Deux années loin des bancs de l’université. Deux années à ",
  'journey.quote.accent': 'apprendre à construire.',
  'journey.text':
    "Étudiant en Internet et multimédia à l’IFRI, j’ai mis mes études en pause pour devenir père et faire vivre ma famille. Ces années m’ont appris ce qu’aucun cours n’enseigne : aller au bout des choses, seul, avec rigueur. Aujourd’hui, je mène de front mes études, mes projets et ma vie de famille.",
  'journey.link': 'Lire mon parcours',

  'ghost.label': 'Structure',
  'ghost.text':
    'La structure à travers laquelle je conçois mes produits. Son ambition : créer des outils numériques utiles, pensés pour les réalités africaines et prêts à servir au-delà.',

  'contact.label': 'Contact',
  'contact.title.before': 'Un projet, une idée, ',
  'contact.title.accent': 'une opportunité ?',
  'contact.text':
    'Je réponds à chaque message. Parlons de ce que vous voulez construire.',
  'contact.cta': 'Me contacter',

  'footer.credit': 'Conçu et développé par Maxim Tokinlo',
} as const;

export type UIKey = keyof typeof fr;
type Dictionary = Record<UIKey, string>;

const en: Dictionary = {
  'meta.title': 'Maxim Tokinlo — Full-Stack Product Engineer',
  'meta.description':
    'Full-stack developer (TypeScript, React, Python) based in Benin. I design and ship web and mobile apps, from idea to production. Founder of Ghost.Technologies.',

  'a11y.skip': 'Skip to content',
  'nav.label': 'Main navigation',
  'nav.projects': 'Work',
  'nav.journey': 'Journey',
  'nav.contact': 'Contact',
  'lang.label': 'Choose language',
  'theme.toDark': 'Switch to dark mode',
  'theme.toLight': 'Switch to light mode',

  'hero.kicker': 'Full-Stack Developer',
  'hero.place': 'Benin',
  'hero.line1': 'I design and ship',
  'hero.line2.before': '',
  'hero.line2.accent': 'useful',
  'hero.line2.after': ' applications,',
  'hero.line3': 'from idea to production.',
  'hero.text':
    'I build complete web and mobile products — interface, backend, payments, real time — held to one standard: they must be reliable and designed for the people who use them.',
  'hero.cta.primary': 'See my work',
  'hero.cta.secondary': 'Get in touch',
  'hero.meta1.strong': 'Based in Benin',
  'hero.meta1.rest': ' · available remotely',
  'hero.meta2.strong': 'TypeScript · React · Python',
  'hero.meta2.rest': ' · Supabase',
  'hero.meta3.before': 'Founder of ',
  'hero.meta3.strong': 'Ghost.Technologies',

  'approach.label': 'Approach',
  'approach.title.before': 'What I bring ',
  'approach.title.accent': 'to a project.',
  'approach.1.title': 'Design',
  'approach.1.text':
    'Start from the real problem and the people involved, then turn the need into user flows, screens and architecture.',
  'approach.2.title': 'Build',
  'approach.2.text':
    'Develop the product end to end: React and TypeScript on the front end, Supabase and PostgreSQL on the back end, Capacitor for mobile, Python for data processing.',
  'approach.3.title': 'Make it reliable',
  'approach.3.text':
    'Test, secure and document: payments verified server-side, sensitive data protected, and hundreds of automated tests where it matters.',

  'projects.label': 'Work',
  'projects.title.before': 'Selected ',
  'projects.title.accent': 'work.',
  'projects.intro':
    'Some projects are confidential: I am happy to walk you through them in person.',
  'projects.caseStudy': 'Read the case study',
  'projects.demo': 'Try the demo',
  'projects.confidential': 'Confidential',

  'journey.label': 'Journey',
  'journey.quote.before':
    'Two years away from the lecture hall. Two years spent ',
  'journey.quote.accent': 'learning to build.',
  'journey.text':
    'A student in Internet and Multimedia at IFRI, I put my studies on hold to become a father and provide for my family. Those years taught me what no course does: seeing things through, on my own, with rigour. Today I balance my studies, my projects and my family life.',
  'journey.link': 'Read my story',

  'ghost.label': 'Company',
  'ghost.text':
    'The company through which I design my products. Its ambition: to create useful digital tools, built for African realities and ready to serve beyond them.',

  'contact.label': 'Contact',
  'contact.title.before': 'A project, an idea, ',
  'contact.title.accent': 'an opportunity?',
  'contact.text': "I answer every message. Let’s talk about what you want to build.",
  'contact.cta': 'Get in touch',

  'footer.credit': 'Designed and built by Maxim Tokinlo',
};

const fi: Dictionary = {
  'meta.title': 'Maxim Tokinlo — Full-Stack-ohjelmistokehittäjä',
  'meta.description':
    'Full-Stack-kehittäjä (TypeScript, React, Python) Beninistä. Suunnittelen ja toteutan verkko- ja mobiilisovelluksia ideasta tuotantoon. Ghost.Technologiesin perustaja.',

  'a11y.skip': 'Siirry sisältöön',
  'nav.label': 'Päävalikko',
  'nav.projects': 'Projektit',
  'nav.journey': 'Tarinani',
  'nav.contact': 'Yhteystiedot',
  'lang.label': 'Valitse kieli',
  'theme.toDark': 'Vaihda tummaan tilaan',
  'theme.toLight': 'Vaihda vaaleaan tilaan',

  'hero.kicker': 'Full-Stack-kehittäjä',
  'hero.place': 'Benin',
  'hero.line1': 'Suunnittelen ja toteutan',
  'hero.line2.before': '',
  'hero.line2.accent': 'hyödyllisiä',
  'hero.line2.after': ' sovelluksia',
  'hero.line3': 'ideasta tuotantoon.',
  'hero.text':
    'Rakennan kokonaisia verkko- ja mobiilituotteita — käyttöliittymän, palvelimen, maksut ja reaaliaikaisuuden — yhdellä vaatimuksella: niiden on oltava luotettavia ja suunniteltu niitä käyttäville ihmisille.',
  'hero.cta.primary': 'Katso projektini',
  'hero.cta.secondary': 'Ota yhteyttä',
  'hero.meta1.strong': 'Beninissä',
  'hero.meta1.rest': ' · saatavilla etänä',
  'hero.meta2.strong': 'TypeScript · React · Python',
  'hero.meta2.rest': ' · Supabase',
  'hero.meta3.before': '',
  'hero.meta3.strong': 'Ghost.Technologiesin perustaja',

  'approach.label': 'Lähestymistapa',
  'approach.title.before': 'Mitä tuon ',
  'approach.title.accent': 'projektiin.',
  'approach.1.title': 'Suunnittelu',
  'approach.1.text':
    'Lähden todellisesta ongelmasta ja käyttäjistä ja muutan tarpeen käyttäjäpoluiksi, näkymiksi ja arkkitehtuuriksi.',
  'approach.2.title': 'Rakentaminen',
  'approach.2.text':
    'Kehitän tuotteen alusta loppuun: React ja TypeScript käyttöliittymässä, Supabase ja PostgreSQL palvelimella, Capacitor mobiilissa ja Python tietojenkäsittelyssä.',
  'approach.3.title': 'Luotettavuus',
  'approach.3.text':
    'Testaan, suojaan ja dokumentoin: maksut tarkistetaan palvelimella, arkaluonteiset tiedot suojataan, ja satoja automaattisia testejä siellä, missä sillä on merkitystä.',

  'projects.label': 'Projektit',
  'projects.title.before': 'Valittuja ',
  'projects.title.accent': 'töitä.',
  'projects.intro':
    'Osa projekteista on luottamuksellisia: esittelen niitä mielelläni henkilökohtaisesti.',
  'projects.caseStudy': 'Lue tapaustutkimus',
  'projects.demo': 'Kokeile demoa',
  'projects.confidential': 'Luottamuksellinen',

  'journey.label': 'Tarinani',
  'journey.quote.before':
    'Kaksi vuotta poissa yliopistosta. Kaksi vuotta, jotka opettivat minut ',
  'journey.quote.accent': 'rakentamaan.',
  'journey.text':
    'Opiskelen internetiä ja multimediaa IFRI:ssä. Keskeytin opintoni, kun minusta tuli isä ja perheeni elättäminen oli etusijalla. Nuo vuodet opettivat minulle sen, mitä mikään kurssi ei opeta: viemään asiat loppuun, yksin ja huolellisesti. Nyt yhdistän opinnot, projektit ja perhe-elämän.',
  'journey.link': 'Lue tarinani',

  'ghost.label': 'Yritys',
  'ghost.text':
    'Yritys, jonka kautta suunnittelen tuotteeni. Sen tavoitteena on luoda hyödyllisiä digitaalisia työkaluja, jotka on suunniteltu afrikkalaisiin olosuhteisiin ja jotka palvelevat myös niiden ulkopuolella.',

  'contact.label': 'Yhteystiedot',
  'contact.title.before': 'Projekti, idea, ',
  'contact.title.accent': 'mahdollisuus?',
  'contact.text': 'Vastaan jokaiseen viestiin. Kerro, mitä haluat rakentaa.',
  'contact.cta': 'Ota yhteyttä',

  'footer.credit': 'Suunnitellut ja toteuttanut Maxim Tokinlo',
};

const dictionaries: Record<Locale, Dictionary> = { fr, en, fi };

/** Returns a translator bound to one language: t('hero.line1'). */
export function useTranslations(locale: Locale) {
  return (key: UIKey): string => dictionaries[locale][key];
}
