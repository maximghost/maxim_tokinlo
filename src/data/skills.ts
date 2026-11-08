import type { Locale } from '../i18n/config';
import {
  siAstro,
  siC,
  siCapacitor,
  siCss,
  siFigma,
  siGit,
  siGithub,
  siGnubash,
  siGodotengine,
  siHtml5,
  siJavascript,
  siLinux,
  siMongodb,
  siNodedotjs,
  siPostgresql,
  siPython,
  siReact,
  siRust,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
  siVitest,
  type SimpleIcon,
} from 'simple-icons';

/*
 * The Skills section: every technology is tied to where it was actually used.
 * Logos come from Simple Icons (CC0). A proof key refers to `proofs` below.
 */

type Text = Record<Locale, string>;

const proofs = {
  gamberge: { fr: 'Gamberge', en: 'Gamberge', fi: 'Gamberge' },
  gestatio: { fr: 'Gestatio', en: 'Gestatio', fi: 'Gestatio' },
  agromarket: { fr: 'AgroMarket', en: 'AgroMarket', fi: 'AgroMarket' },
  harvest: { fr: 'Harvest World', en: 'Harvest World', fi: 'Harvest World' },
  ghoststructure: { fr: 'ghoststructure', en: 'ghoststructure', fi: 'ghoststructure' },
  portfolio: { fr: 'ce portfolio', en: 'this portfolio', fi: 'tämä portfolio' },
  ifri: { fr: 'formation IFRI', en: 'IFRI coursework', fi: 'IFRI-opinnot' },
  daily: { fr: 'au quotidien', en: 'every day', fi: 'päivittäin' },
  all: { fr: 'tous mes projets', en: 'all my projects', fi: 'kaikki projektini' },
  ui: { fr: 'maquettes d’interface', en: 'interface mock-ups', fi: 'käyttöliittymäluonnokset' },
} satisfies Record<string, Text>;

type Proof = keyof typeof proofs;

interface Skill {
  icon: SimpleIcon;
  name?: string;
  used: Proof[];
}

interface Group {
  label: Text;
  skills: Skill[];
}

const groups: Group[] = [
  {
    label: { fr: 'Langages', en: 'Languages', fi: 'Ohjelmointikielet' },
    skills: [
      { icon: siTypescript, used: ['gamberge', 'gestatio', 'portfolio'] },
      { icon: siJavascript, used: ['agromarket'] },
      { icon: siPython, used: ['gestatio', 'ghoststructure'] },
      { icon: siRust, used: ['gestatio'] },
      { icon: siC, used: ['ifri'] },
      { icon: siGnubash, name: 'Bash', used: ['daily'] },
    ],
  },
  {
    label: { fr: 'Front-end & mobile', en: 'Front end & mobile', fi: 'Käyttöliittymä & mobiili' },
    skills: [
      { icon: siHtml5, name: 'HTML', used: ['gamberge', 'portfolio'] },
      { icon: siCss, used: ['gamberge', 'portfolio'] },
      { icon: siReact, used: ['gamberge'] },
      { icon: siTailwindcss, used: ['gamberge'] },
      { icon: siVite, used: ['gamberge'] },
      { icon: siCapacitor, used: ['gamberge'] },
      { icon: siAstro, used: ['portfolio'] },
    ],
  },
  {
    label: { fr: 'Back-end & données', en: 'Back end & data', fi: 'Taustajärjestelmät & data' },
    skills: [
      { icon: siNodedotjs, used: ['agromarket'] },
      { icon: siSupabase, used: ['gamberge'] },
      { icon: siPostgresql, used: ['gamberge'] },
      { icon: siMongodb, used: ['agromarket'] },
    ],
  },
  {
    label: { fr: 'Qualité & outils', en: 'Quality & tooling', fi: 'Laatu & työkalut' },
    skills: [
      { icon: siVitest, used: ['gamberge'] },
      { icon: siGit, used: ['all'] },
      { icon: siGithub, used: ['all'] },
      { icon: siLinux, used: ['daily'] },
      { icon: siVercel, used: ['gamberge', 'portfolio'] },
    ],
  },
  {
    label: { fr: 'Jeu & design', en: 'Games & design', fi: 'Pelit & suunnittelu' },
    skills: [
      { icon: siGodotengine, name: 'Godot', used: ['harvest'] },
      { icon: siFigma, used: ['ui'] },
    ],
  },
];

/** Brand colours too dark to read on the dark theme fall back to the text colour. */
function brandColor(hex: string): string | undefined {
  const channel = (i: number) => parseInt(hex.slice(i, i + 2), 16) / 255;
  const luminance = 0.2126 * channel(0) + 0.7152 * channel(2) + 0.0722 * channel(4);
  return luminance < 0.12 ? undefined : `#${hex}`;
}

export function skillGroups(locale: Locale) {
  return groups.map((group) => ({
    label: group.label[locale],
    skills: group.skills.map(({ icon, name, used }) => ({
      name: name ?? icon.title,
      path: icon.path,
      color: brandColor(icon.hex),
      used: used.map((p) => proofs[p][locale]).join(' · '),
    })),
  }));
}

export const skillCount = groups.reduce((n, g) => n + g.skills.length, 0);
