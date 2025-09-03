
import Link from 'next/link';
import { getAllPostsMeta } from '@/lib/posts';

// Blog index page. Displays all posts in a responsive grid. Each post is
// rendered as a card with a clickable title, publication date and
// optional description. The surrounding layout (header and container)
// is provided by app/blog/layout.js.
export default function BlogIndex() {
  const posts = getAllPostsMeta();
  return (
    <>
      <h1 className="fw-bold fs-2 mb-3">Latest posts</h1>
      <div className="post-grid">
        {posts.map((post) => (
          <article key={post.slug} className="post-card">
            <h3 className="h5 mb-1">
              <Link
                href={`/blog/${post.slug}`}
                className="stretched-link text-decoration-none"
              >
                {post.title}
              </Link>
            </h3>
            <div className="text-muted small mb-2">{post.date}</div>
            {post.description && <p className="mb-0">{post.description}</p>}
          </article>
        ))}
      </div>
    </>
  );
}
