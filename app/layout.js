
// Global layout for the Next.js app. Here we import our global styles and
// include a Bootstrap 5 CDN so that utility classes used in the converted
// Hugo markup (container, d-flex, etc.) work out-of-the-box. Metadata is
// defined for SEO and page headers.
import '../styles/globals.css';


export const metadata = {
  title: 'Confluence',
  description: 'Portfolio & blog',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Import Bootstrap CSS via CDN. This is safe for development and
            replicates the layout classes used in the original Hugo site. */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
