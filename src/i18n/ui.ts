import type { Locale } from './config';

/*
 * Interface strings for every language.
 * French is the source: the other languages must provide exactly the same
 * keys, otherwise `npm run check` fails. French typography uses a
 * non-breaking space ( ) before « : », « ? » and « ! ».
 */

const fr = {
  'meta.title': 'Maxim Tokinlo — Product Engineer',
  'meta.description':
    'Product Engineer (TypeScript, React, Python). Je conçois et livre des applications web et mobiles, de l’idée à la mise en production. Fondateur de Ghost.Technologies.',

  'a11y.skip': 'Aller au contenu',
  'nav.label': 'Navigation principale',
  'nav.projects': 'Projets',
  'nav.journey': 'Parcours',
  'nav.contact': 'Contact',
  'nav.menu': 'Ouvrir le menu',
  'nav.close': 'Fermer le menu',
  'nav.top': 'Revenir en haut de la page',
  'lang.label': 'Choisir la langue',
  'theme.toDark': 'Passer en mode sombre',
  'theme.toLight': 'Passer en mode clair',

  'hero.kicker': 'Product Engineer',
  'hero.line1': 'Je conçois et je livre',
  'hero.line2.before': 'des applications ',
  'hero.line2.accent': 'utiles,',
  'hero.line2.after': '',
  'hero.line3': 'de l’idée à la production.',
  'hero.text':
    'Je construis des produits web et mobiles complets — interface, serveur, paiements, temps réel — avec une exigence : qu’ils soient fiables et pensés pour ceux qui les utilisent.',
  'hero.cta.primary': 'Voir mes projets',
  'hero.cta.secondary': 'Me contacter',
  'hero.meta1.strong': 'Disponible à distance',
  'hero.meta1.rest': ' · missions et opportunités',
  'hero.meta2.strong': 'TypeScript · React · Python',
  'hero.meta2.rest': ' · Supabase',
  'hero.meta3.before': 'Fondateur de ',
  'hero.meta3.strong': 'Ghost.Technologies',

  'approach.label': 'Approche',
  'approach.title.before': 'Ce que j’apporte ',
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
  'projects.intro': 'Certains projets sont confidentiels : je les présente volontiers lors d’un échange.',
  'projects.caseStudy': 'Lire l’étude de cas',
  'projects.demo': 'Essayer la démo',
  'projects.confidential': 'Confidentiel',
  'nav.skills': 'Compétences',
  'skills.label': 'Compétences',
  'skills.title.before': 'Des outils éprouvés sur ',
  'skills.title.accent': 'des projets réels.',
  'skills.intro': 'Chaque technologie est reliée au projet où je l’ai mise en œuvre.',

  'journey.label': 'Parcours',
  'journey.quote.before': 'Deux années loin des bancs de l’université. Deux années à ',
  'journey.quote.accent': 'apprendre à construire.',
  'journey.text':
    'Étudiant en Internet et multimédia à l’IFRI, j’ai mis mes études en pause pour devenir père et faire vivre ma famille. Ces années m’ont appris ce qu’aucun cours n’enseigne : aller au bout des choses, seul, avec rigueur. Aujourd’hui, je mène de front mes études, mes projets et ma vie de famille.',
  'journey.link': 'Lire mon parcours',

  'news.label': 'Actualités',
  'news.title.before': 'Ce qui se construit ',
  'news.title.accent': 'en ce moment.',
  'news.intro': 'Les réalisations en cours de Ghost.Technologies et mes projets personnels.',
  'ghost.label': 'Structure',
  'ghost.text':
    'La structure à travers laquelle je conçois mes produits. Son ambition : créer des outils numériques utiles, pensés pour les réalités africaines et prêts à servir au-delà.',

  'contact.label': 'Contact',
  'contact.title.before': 'Un projet, une idée, ',
  'contact.title.accent': 'une opportunité ?',
  'contact.text': 'Je réponds à chaque message. Parlons de ce que vous voulez construire.',
  'contact.cta': 'Me contacter',

  'portrait.alt': 'Portrait de Maxim Tokinlo',
  'portrait.pending': 'Photo à venir',

  'form.title': 'Écrivez-moi',
  'form.intro': 'Quelques mots suffisent. Je vous réponds au plus vite, en général sous 48\u00A0heures.',
  'form.close': 'Fermer',
  'form.firstName': 'Prénom',
  'form.lastName': 'Nom',
  'form.email': 'E-mail',
  'form.reason': 'Motif',
  'form.reason.placeholder': 'Choisissez un motif',
  'form.reason.project': 'Un projet à réaliser',
  'form.reason.freelance': 'Une mission freelance',
  'form.reason.job': 'Une opportunité d’emploi',
  'form.reason.partnership': 'Un partenariat',
  'form.reason.other': 'Autre',
  'form.message': 'Message',
  'form.submit': 'Envoyer le message',
  'form.sending': 'Envoi en cours…',
  'form.required': 'Ce champ est obligatoire.',
  'form.invalidEmail': 'Saisissez une adresse e-mail valide.',
  'form.success.title': 'Message envoyé.',
  'form.success.text': 'Merci. Je vous réponds au plus vite.',
  'form.error': 'L’envoi n’a pas abouti. Réessayez, ou écrivez-moi directement à',

  'case.back': 'Tous les projets',
  'case.role': 'Rôle',
  'case.period': 'Période',
  'case.status': 'Statut',
  'case.stack': 'Technologies',
  'case.next': 'Projet suivant',
  'case.cta.title.before': 'Un projet de cette ',
  'case.cta.title.accent': 'exigence\u00A0?',
  'case.cta.text': 'Parlons de ce que vous voulez construire.',

  'about.label': 'À propos',
  'about.title.before': 'Rigueur, persévérance, ',
  'about.title.accent': 'et l’envie de bien faire.',
  'about.fact.education': 'Formation',
  'about.fact.education.value': 'Licence Internet et multimédia, IFRI (Université d’Abomey-Calavi)',
  'about.fact.location': 'Localisation',
  'about.fact.location.value': 'Bénin · disponible à distance',
  'about.fact.company': 'Structure',
  'about.fact.tools': 'Outils',
  'about.cta.before': 'Construisons quelque chose ',
  'about.cta.accent': 'ensemble.',

  'footer.credit': 'Conçu et développé par Maxim Tokinlo',
} as const;

export type UIKey = keyof typeof fr;
type Dictionary = Record<UIKey, string>;

const en: Dictionary = {
  'meta.title': 'Maxim Tokinlo — Product Engineer',
  'meta.description':
    'Product engineer (TypeScript, React, Python). I design and ship web and mobile apps, from idea to production. Founder of Ghost.Technologies.',

  'a11y.skip': 'Skip to content',
  'nav.label': 'Main navigation',
  'nav.projects': 'Work',
  'nav.journey': 'Journey',
  'nav.contact': 'Contact',
  'nav.menu': 'Open menu',
  'nav.close': 'Close menu',
  'nav.top': 'Back to top',
  'lang.label': 'Choose language',
  'theme.toDark': 'Switch to dark mode',
  'theme.toLight': 'Switch to light mode',

  'hero.kicker': 'Product Engineer',
  'hero.line1': 'I design and ship',
  'hero.line2.before': '',
  'hero.line2.accent': 'useful',
  'hero.line2.after': ' applications,',
  'hero.line3': 'from idea to production.',
  'hero.text':
    'I build complete web and mobile products — interface, backend, payments, real time — held to one standard: they must be reliable and designed for the people who use them.',
  'hero.cta.primary': 'See my work',
  'hero.cta.secondary': 'Get in touch',
  'hero.meta1.strong': 'Available remotely',
  'hero.meta1.rest': ' · projects and opportunities',
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
  'projects.intro': 'Some projects are confidential: I am happy to walk you through them in person.',
  'projects.caseStudy': 'Read the case study',
  'projects.demo': 'Try the demo',
  'projects.confidential': 'Confidential',
  'nav.skills': 'Skills',
  'skills.label': 'Skills',
  'skills.title.before': 'Tools proven on ',
  'skills.title.accent': 'real projects.',
  'skills.intro': 'Each technology is linked to the project where I put it to work.',

  'journey.label': 'Journey',
  'journey.quote.before': 'Two years away from the lecture hall. Two years spent ',
  'journey.quote.accent': 'learning to build.',
  'journey.text':
    'A student in Internet and Multimedia at IFRI, I put my studies on hold to become a father and provide for my family. Those years taught me what no course does: seeing things through, on my own, with rigour. Today I balance my studies, my projects and my family life.',
  'journey.link': 'Read my story',

  'news.label': 'News',
  'news.title.before': 'What I’m building ',
  'news.title.accent': 'right now.',
  'news.intro': 'Work in progress at Ghost.Technologies, and my own projects.',
  'ghost.label': 'Company',
  'ghost.text':
    'The company through which I design my products. Its ambition: to create useful digital tools, built for African realities and ready to serve beyond them.',

  'contact.label': 'Contact',
  'contact.title.before': 'A project, an idea, ',
  'contact.title.accent': 'an opportunity?',
  'contact.text': 'I answer every message. Let’s talk about what you want to build.',
  'contact.cta': 'Get in touch',

  'portrait.alt': 'Portrait of Maxim Tokinlo',
  'portrait.pending': 'Photo coming soon',

  'form.title': 'Write to me',
  'form.intro': 'A few words are enough. I reply as soon as I can, usually within 48 hours.',
  'form.close': 'Close',
  'form.firstName': 'First name',
  'form.lastName': 'Last name',
  'form.email': 'Email',
  'form.reason': 'Reason',
  'form.reason.placeholder': 'Choose a reason',
  'form.reason.project': 'A project to build',
  'form.reason.freelance': 'A freelance assignment',
  'form.reason.job': 'A job opportunity',
  'form.reason.partnership': 'A partnership',
  'form.reason.other': 'Other',
  'form.message': 'Message',
  'form.submit': 'Send message',
  'form.sending': 'Sending…',
  'form.required': 'This field is required.',
  'form.invalidEmail': 'Enter a valid email address.',
  'form.success.title': 'Message sent.',
  'form.success.text': 'Thank you. I will get back to you shortly.',
  'form.error': 'Your message could not be sent. Please try again, or email me directly at',

  'case.back': 'All work',
  'case.role': 'Role',
  'case.period': 'Timeline',
  'case.status': 'Status',
  'case.stack': 'Technologies',
  'case.next': 'Next project',
  'case.cta.title.before': 'A project held to ',
  'case.cta.title.accent': 'this standard?',
  'case.cta.text': 'Let’s talk about what you want to build.',

  'about.label': 'About',
  'about.title.before': 'Rigour, perseverance, ',
  'about.title.accent': 'and the drive to do it well.',
  'about.fact.education': 'Education',
  'about.fact.education.value': 'Bachelor’s in Internet and Multimedia, IFRI (University of Abomey-Calavi)',
  'about.fact.location': 'Location',
  'about.fact.location.value': 'Benin · available remotely',
  'about.fact.company': 'Company',
  'about.fact.tools': 'Tools',
  'about.cta.before': 'Let’s build something ',
  'about.cta.accent': 'together.',

  'footer.credit': 'Designed and built by Maxim Tokinlo',
};

const fi: Dictionary = {
  'meta.title': 'Maxim Tokinlo — Product Engineer',
  'meta.description':
    'Product Engineer (TypeScript, React, Python). Suunnittelen ja toteutan verkko- ja mobiilisovelluksia ideasta tuotantoon. Ghost.Technologiesin perustaja.',

  'a11y.skip': 'Siirry sisältöön',
  'nav.label': 'Päävalikko',
  'nav.projects': 'Projektit',
  'nav.journey': 'Tarinani',
  'nav.contact': 'Yhteystiedot',
  'nav.menu': 'Avaa valikko',
  'nav.close': 'Sulje valikko',
  'nav.top': 'Takaisin sivun alkuun',
  'lang.label': 'Valitse kieli',
  'theme.toDark': 'Vaihda tummaan tilaan',
  'theme.toLight': 'Vaihda vaaleaan tilaan',

  'hero.kicker': 'Product Engineer',
  'hero.line1': 'Suunnittelen ja toteutan',
  'hero.line2.before': '',
  'hero.line2.accent': 'hyödyllisiä',
  'hero.line2.after': ' sovelluksia',
  'hero.line3': 'ideasta tuotantoon.',
  'hero.text':
    'Rakennan kokonaisia verkko- ja mobiilituotteita — käyttöliittymän, palvelimen, maksut ja reaaliaikaisuuden — yhdellä vaatimuksella: niiden on oltava luotettavia ja suunniteltu niitä käyttäville ihmisille.',
  'hero.cta.primary': 'Katso projektini',
  'hero.cta.secondary': 'Ota yhteyttä',
  'hero.meta1.strong': 'Saatavilla etänä',
  'hero.meta1.rest': ' · projektit ja mahdollisuudet',
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
  'projects.intro': 'Osa projekteista on luottamuksellisia: esittelen niitä mielelläni henkilökohtaisesti.',
  'projects.caseStudy': 'Lue tapaustutkimus',
  'projects.demo': 'Kokeile demoa',
  'projects.confidential': 'Luottamuksellinen',
  'nav.skills': 'Osaaminen',
  'skills.label': 'Osaaminen',
  'skills.title.before': 'Työkalut, jotka on koeteltu ',
  'skills.title.accent': 'oikeissa projekteissa.',
  'skills.intro': 'Jokainen teknologia on liitetty projektiin, jossa olen käyttänyt sitä.',

  'journey.label': 'Tarinani',
  'journey.quote.before': 'Kaksi vuotta poissa yliopistosta. Kaksi vuotta, jotka opettivat minut ',
  'journey.quote.accent': 'rakentamaan.',
  'journey.text':
    'Opiskelen internetiä ja multimediaa IFRI:ssä. Keskeytin opintoni, kun minusta tuli isä ja perheeni elättäminen oli etusijalla. Nuo vuodet opettivat minulle sen, mitä mikään kurssi ei opeta: viemään asiat loppuun, yksin ja huolellisesti. Nyt yhdistän opinnot, projektit ja perhe-elämän.',
  'journey.link': 'Lue tarinani',

  'news.label': 'Ajankohtaista',
  'news.title.before': 'Mitä rakennan ',
  'news.title.accent': 'juuri nyt.',
  'news.intro': 'Ghost.Technologiesin keskeneräiset työt ja omat projektini.',
  'ghost.label': 'Yritys',
  'ghost.text':
    'Yritys, jonka kautta suunnittelen tuotteeni. Sen tavoitteena on luoda hyödyllisiä digitaalisia työkaluja, jotka on suunniteltu afrikkalaisiin olosuhteisiin ja jotka palvelevat myös niiden ulkopuolella.',

  'contact.label': 'Yhteystiedot',
  'contact.title.before': 'Projekti, idea, ',
  'contact.title.accent': 'mahdollisuus?',
  'contact.text': 'Vastaan jokaiseen viestiin. Kerro, mitä haluat rakentaa.',
  'contact.cta': 'Ota yhteyttä',

  'portrait.alt': 'Maxim Tokinlon muotokuva',
  'portrait.pending': 'Kuva tulossa',

  'form.title': 'Kirjoita minulle',
  'form.intro': 'Muutama sana riittää. Vastaan mahdollisimman pian, yleensä 48 tunnin kuluessa.',
  'form.close': 'Sulje',
  'form.firstName': 'Etunimi',
  'form.lastName': 'Sukunimi',
  'form.email': 'Sähköposti',
  'form.reason': 'Aihe',
  'form.reason.placeholder': 'Valitse aihe',
  'form.reason.project': 'Toteutettava projekti',
  'form.reason.freelance': 'Freelance-toimeksianto',
  'form.reason.job': 'Työmahdollisuus',
  'form.reason.partnership': 'Kumppanuus',
  'form.reason.other': 'Muu',
  'form.message': 'Viesti',
  'form.submit': 'Lähetä viesti',
  'form.sending': 'Lähetetään…',
  'form.required': 'Tämä kenttä on pakollinen.',
  'form.invalidEmail': 'Anna kelvollinen sähköpostiosoite.',
  'form.success.title': 'Viesti lähetetty.',
  'form.success.text': 'Kiitos. Vastaan sinulle pian.',
  'form.error': 'Viestin lähetys epäonnistui. Yritä uudelleen tai kirjoita suoraan osoitteeseen',

  'case.back': 'Kaikki projektit',
  'case.role': 'Rooli',
  'case.period': 'Ajanjakso',
  'case.status': 'Tila',
  'case.stack': 'Teknologiat',
  'case.next': 'Seuraava projekti',
  'case.cta.title.before': 'Projekti, jossa on ',
  'case.cta.title.accent': 'samat vaatimukset?',
  'case.cta.text': 'Kerro, mitä haluat rakentaa.',

  'about.label': 'Tietoa minusta',
  'about.title.before': 'Huolellisuutta, sinnikkyyttä ',
  'about.title.accent': 'ja halu tehdä hyvin.',
  'about.fact.education': 'Koulutus',
  'about.fact.education.value':
    'Internetin ja multimedian kandidaattiopinnot, IFRI (Abomey-Calavin yliopisto)',
  'about.fact.location': 'Sijainti',
  'about.fact.location.value': 'Benin · saatavilla etänä',
  'about.fact.company': 'Yritys',
  'about.fact.tools': 'Työkalut',
  'about.cta.before': 'Rakennetaan jotain ',
  'about.cta.accent': 'yhdessä.',

  'footer.credit': 'Suunnitellut ja toteuttanut Maxim Tokinlo',
};

const dictionaries: Record<Locale, Dictionary> = { fr, en, fi };

/** Returns a translator bound to one language: t('hero.line1'). */
export function useTranslations(locale: Locale) {
  return (key: UIKey): string => dictionaries[locale][key];
}
