import { entries } from 'bibtex-parse';
import fs from 'node:fs';
import { join } from 'node:path';

const bibPath = join(process.cwd(), 'my-bib.bib');
const bibSource = fs.readFileSync(bibPath, 'utf-8');
const parsed = entries(bibSource);

export interface Publication {
  key: string;
  type: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  doi?: string;
  arxiv?: string;
  link?: string;
  isRefereed: boolean;
  isInvited: boolean;
  isSelected: boolean;
}

function cleanLatex(s: string): string {
  return s
    .replace(/[{}]/g, '')
    .replace(/\\textbf\s*/g, '')
    .replace(/\\"u/g, 'ü')
    .replace(/\\"o/g, 'ö')
    .replace(/\\"a/g, 'ä')
    .replace(/\\\w+\s*/g, '')
    .trim();
}

function formatAuthors(raw: string): string {
  return raw
    .split(/ AND /i)
    .map(a => {
      const cleaned = cleanLatex(a).trim();
      // Convert "Last, First" to "First Last"
      if (cleaned.includes(',')) {
        const [last, first] = cleaned.split(',').map(s => s.trim());
        return first ? `${first} ${last}` : last;
      }
      return cleaned;
    })
    .join(', ');
}

function getVenue(entry: Record<string, string>): string {
  const type = entry.type;
  if (type === 'article') {
    return cleanLatex(entry.JOURNAL || '');
  } else if (type === 'inproceedings') {
    const booktitle = cleanLatex(entry.BOOKTITLE || '');
    const series = cleanLatex(entry.SERIES || '');
    return series || booktitle;
  } else if (type === 'phdthesis') {
    return `Doctoral Thesis, ${cleanLatex(entry.SCHOOL || '')}`;
  } else if (type === 'mastersthesis') {
    return `Master's Thesis, ${cleanLatex(entry.SCHOOL || '')}`;
  } else if (type === 'misc') {
    return cleanLatex(entry.HOWPUBLISHED || entry.SERIES || '');
  }
  return '';
}

function toPublication(entry: Record<string, string>): Publication {
  const annote = (entry.ANNOTE || '').toLowerCase();
  const note = (entry.NOTE || '').toLowerCase();

  // Extract arXiv ID, handling both plain IDs and URLs
  let arxiv: string | undefined;
  const eprint = entry.EPRINT ? cleanLatex(entry.EPRINT) : undefined;
  if (eprint) {
    const match = eprint.match(/(\d{4}\.\d{4,5})/);
    arxiv = match ? match[1] : undefined;
  }

  // Clean DOI (skip empty ones)
  const rawDoi = entry.DOI ? cleanLatex(entry.DOI) : undefined;
  const doi = rawDoi && rawDoi.length > 0 ? rawDoi : undefined;

  // Clean URL
  const rawUrl = entry.URL ? cleanLatex(entry.URL) : undefined;
  const link = rawUrl && rawUrl.length > 0 ? rawUrl : undefined;

  return {
    key: entry.key,
    type: entry.type,
    title: cleanLatex(entry.TITLE || ''),
    authors: formatAuthors(entry.AUTHOR || ''),
    venue: getVenue(entry),
    year: parseInt(entry.YEAR || '0', 10),
    doi,
    arxiv,
    link,
    isRefereed: annote.includes('refereed') && !annote.includes('nonrefereed') && !annote.includes('invited'),
    isInvited: annote.includes('invited'),
    isSelected: note.includes('selected'),
  };
}

const all = parsed.map(toPublication);

// Filter out Japanese-language entries
const englishOnly = all.filter(p => {
  const entry = parsed.find(e => e.key === p.key);
  const lang = (entry?.LANGUAGE || '').toLowerCase();
  return !lang.includes('japanese');
});

export const journalArticles = englishOnly
  .filter(p => p.type === 'article')
  .sort((a, b) => b.year - a.year);

export const conferenceProceedings = englishOnly
  .filter(p => p.type === 'inproceedings')
  .sort((a, b) => b.year - a.year);

export const theses = englishOnly
  .filter(p => p.type === 'phdthesis' || p.type === 'mastersthesis')
  .sort((a, b) => b.year - a.year);

export const talks = englishOnly
  .filter(p => p.type === 'misc')
  .sort((a, b) => b.year - a.year);

export const selectedPubs = englishOnly
  .filter(p => p.isSelected)
  .sort((a, b) => b.year - a.year);
