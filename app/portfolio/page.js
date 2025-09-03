// app/portfolio/page.js
import Header from '../../components/Header';
import { portfolioItems } from './data';

// Metadata for the Next.js app router
export const metadata = {
  title: 'Portfolio',
  description: 'Projects & webapps',
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <section className="page-container py-4">
        <h1 className="fw-bold fs-2 mb-3">Portfolio</h1>

        {/* Reuse the same grid and card styles as the blog */}
        <div className="post-grid">
          {portfolioItems.map((item) => (
            <article key={item.href} className="post-card">
              <h3 className="h5 mb-1">
                <a
                  className="stretched-link text-decoration-none"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
              </h3>
              {item.summary ? (
                <p className="mb-0">{item.summary}</p>
              ) : null}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
