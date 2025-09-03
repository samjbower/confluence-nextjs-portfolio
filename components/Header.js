// Header component for the Confluence site. This reflects the
// structure used on the Hugo homepage, including the logo and
// hamburger icon. Navigation links can be added within the nav
// element if desired. All styling is handled via Bootstrap and
// globals.css.

// components/Header.js
export default function Header() {
  return (
    <header className="site-header py-3">
      {/* Remove "justify-content-between" here */}
      <div className="page-container d-flex align-items-center">
        <a href="/" className="brand d-inline-flex align-items-center text-decoration-none">
          <img src="/images/logo.svg" alt="cnflnce logo" />
        </a>
        <nav className="site-nav d-flex align-items-center" aria-label="Main navigation">
          <a href="/blog" className="nav-link text-decoration-none">Posts</a>
          <a href="/portfolio" className="nav-link text-decoration-none ms-3">Portfolio</a>
        </nav>
        <div className="hamburger" aria-label="menu" role="button" tabIndex={0}>
          <span></span><span></span><span></span>
        </div>
      </div>
    </header>
  );
}

