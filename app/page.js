
// Top-level page component for the home page. This component reproduces the
// layout and content of the original Hugo site using JSX. The imported
// Header and Footer components wrap the content, while the main sections
// mirror the hero, about and news blocks from the Hugo homepage. When
// customizing your site further, keep class names intact so styles in
// globals.css continue to apply.

// import Header from '../components/Header';

import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';


export default function Home() {
  return (
    <>
      {/* Site header with logo and hamburger. */}
      <Header />

      {/* Hero section from the Hugo homepage */}
      <main className="hero">
        <div className="page-container">
          <h1 className="tagline m-0">
            <span className="tagline-line">Where data</span>
            <span className="tagline-line">meets storytelling.</span>
          </h1>

          <section className="graphic-block">
            <div className="graphic-frame">
              <a href="/portfolio" className="btn cta-portfolio">
                Portfolio
              </a>
              <div className="graphic-aspect">
                {/* Replace wordsfalling.svg in public/images to customise */}
                <img src="/images/wordsfalling.svg" alt="Words falling graphic" />
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* About section with narrative description */}
      <section className="bg-brand">
        <div className="page-container py-5">
          <h2 className="about-title text-start">About us</h2>
          <div className="text-start mb-0" style={{ maxWidth: 800 }}>
            <p>Within all datasets are stories:</p>
            <p>
              stories that go beyond your monthly stakeholder meeting, marketing presentation,
              or scientific publication, and can only be told after thorough forensics and a
              careful, tasteful creative process. A good data story is able to connect
              people to new ideas and elicit an emotional response to what the data is
              saying.
            </p>
            <p>
              At Confluence, we embrace a &apos;jack of all trades&apos; ethos and a vigorous
              and creative investigation process that will help you track down answers to
              open questions and tell the best story possible with your data. We have a
              small but mighty team, with schooling and experience in data science,
              journalism, policymaking, physics, earth science, cartography, start-up
              business, web design, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Latest news section showcasing the most recent post */}
      <section className="py-5">
        <div className="page-container">
          <h2 className="about-title mb-4">Latest news</h2>
          <div className="vstack gap-4">
            <article>
              <h3 className="h5 mb-1">
                <a className="text-decoration-none" href="/blog/confluence-launch">
                  Confluence launches data storytelling lab
                </a>
              </h3>
              <div className="text-muted mb-2">Aug 9, 2025</div>
              <p className="mb-0">
                We’re starting a lab to turn messy datasets into clear, visual and
                editorial narratives!
              </p>
            </article>
          </div>
          <div className="mt-4">
            <a
              className="btn btn-outline-light"
              style={{ borderColor: '#ccc', color: '#333' }}
              href="/blog"
            >
              More news
            </a>
          </div>
        </div>
      </section>

      {/* Site footer */}
      <Footer />
    </>
  );
}
