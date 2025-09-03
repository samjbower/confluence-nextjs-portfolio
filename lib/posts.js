
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function getAllPostSlugs() {
  return fs.readdirSync(postsDirectory)
    .filter((n) => n.endsWith('.md'))
    .map((n) => n.replace(/\.md$/, ''));
}

export function getAllPostsMeta() {
  return getAllPostSlugs().map((slug) => {
    const full = path.join(postsDirectory, `${slug}.md`);
    const file = fs.readFileSync(full, 'utf8');
    const { data } = matter(file);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? '',
      description: data.description ?? ''
    };
  }).sort((a,b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug) {
  const full = path.join(postsDirectory, `${slug}.md`);
  const file = fs.readFileSync(full, 'utf8');
  const { data, content } = matter(file);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    description: data.description ?? '',
    contentHtml
  };
}
