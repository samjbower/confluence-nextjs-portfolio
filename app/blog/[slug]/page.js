
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

// Single blog post page. Adds simple navigation links at the top to
// return home or back to the blog index. The main article content is
// injected via dangerouslySetInnerHTML. The surrounding layout is
// provided by app/blog/layout.js.
export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);
  return (
    <article>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <a href="/" className="text-decoration-none">&larr; Home</a>
        <a href="/blog" className="text-decoration-none">All posts</a>
      </div>
      <h1>{post.title}</h1>
      <p>
        <small>{post.date}</small>
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
