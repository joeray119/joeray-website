import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'writing'>;

/** Published posts, newest first. Drafts show up in `npm run dev` only. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('writing', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Minutes to read at an unhurried 230 words per minute. */
export function readingTime(body = ''): number {
  const words = body.replace(/```[\s\S]*?```/g, '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

/** Short form for lists and meta lines: "Sept 2026". */
export function formatMonth(date: Date): string {
  const month = date.toLocaleDateString('en-US', { month: 'short', timeZone: 'UTC' });
  return `${month === 'Sep' ? 'Sept' : month} ${date.getUTCFullYear()}`;
}
