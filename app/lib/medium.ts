// Medium feed fetching + parsing. Runs at build time only (static export),
// so the writing section refreshes with every deploy.

export interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  readingMinutes: number;
}

export const MEDIUM_PROFILE = 'https://medium.com/@kylelevitan';
const FEED_URL = 'https://medium.com/feed/@kylelevitan';
const MAX_POSTS = 3;
const EXCERPT_LENGTH = 165;

const decodeEntities = (value: string) =>
  value
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');

const unwrap = (value: string) =>
  decodeEntities(value.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '')).trim();

const readTag = (item: string, name: string) => {
  const match = item.match(new RegExp(`<${name}(?:\\s[^>]*)?>([\\s\\S]*?)</${name}>`));
  return match ? unwrap(match[1]) : '';
};

const toPlainText = (html: string) =>
  html
    .replace(/<figure[\s\S]*?<\/figure>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const truncate = (text: string, limit: number) => {
  if (text.length <= limit) return text;
  const clipped = text.slice(0, limit);
  return `${clipped.slice(0, clipped.lastIndexOf(' ')).replace(/[,.;:]$/, '')}…`;
};

export const getMediumPosts = async (): Promise<MediumPost[]> => {
  let feed: string;

  try {
    const response = await fetch(FEED_URL, {
      cache: 'force-cache',
      headers: { 'User-Agent': 'kylelevitan.com build' },
    });
    if (!response.ok) throw new Error(`Medium feed responded ${response.status}`);
    feed = await response.text();
  } catch (error) {
    // Never fail the build on a flaky feed - the section just hides itself.
    console.warn('[medium] Skipping writing section:', error);
    return [];
  }

  const items = feed.match(/<item>[\s\S]*?<\/item>/g) ?? [];

  return items.slice(0, MAX_POSTS).map((item) => {
    const body = toPlainText(readTag(item, 'content:encoded'));

    return {
      title: readTag(item, 'title'),
      link: readTag(item, 'link').split('?')[0],
      pubDate: readTag(item, 'pubDate'),
      excerpt: truncate(body, EXCERPT_LENGTH),
      readingMinutes: Math.max(1, Math.round(body.split(' ').length / 220)),
    };
  });
};
