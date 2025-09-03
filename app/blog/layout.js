// Layout component for all pages under /blog. This provides a header with
// navigation links back to the home page and the blog index. Using this
// layout keeps the blog consistent with the rest of the site and adds a
// convenient way for visitors to return home or explore more posts.
// import SiteHeader from '/components/SiteHeader';

// export const metadata = {
//   title: 'Blog',
//   description: 'News & posts'
// };

// export default function BlogLayout({ children }) {
//   return (
//     <>
//       <header className="site-header py-3">
//         <div className="page-container d-flex align-items-center justify-content-between">
//           <a href="/" className="brand d-inline-flex align-items-center text-decoration-none">
//             <img src="/images/logo.svg" alt="cnflnce logo" />
//           </a>
//           <nav className="d-flex align-items-center" aria-label="Blog navigation">
//             <a href="/" className="text-decoration-none me-3">Home</a>
//             <a href="/blog" className="text-decoration-none fw-semibold">Blog</a>
//           </nav>
//         </div>
//       </header>
//       <main className="page-container py-4">{children}</main>
//     </>
//   );
// }

// app/blog/layout.js
import Header from '../../components/Header';

export const metadata = {
  title: 'Blog',
  description: 'News & posts',
};

export default function BlogLayout({ children }) {
  return (
    <>
      <Header />
      <main className="page-container py-4">{children}</main>
    </>
  );
}
