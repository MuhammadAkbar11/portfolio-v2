import Head from "next/head";
import { useRouter } from "next/router";

const SITE_NAME = "Muhammad Akbar L";
const DEFAULT_DESCRIPTION =
  "Web developer focused on building modern, high-performance websites with clean design, smooth interactions, and user-centered experiences.";
const DEFAULT_IMAGE = "/og/og-image.png";
const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://muhammadakbar11.xyz";

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
};

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  image,
  url,
}: SEOProps) => {
  const router = useRouter();

  const pageTitle = title ? `${title} || ${SITE_NAME}` : SITE_NAME;
  const pageUrl = url || `${BASE_URL}${router.asPath}`;
  const pageImage = image
    ? `${BASE_URL}${image}`
    : `${BASE_URL}${DEFAULT_IMAGE}`;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_NAME,
    url: BASE_URL,
    jobTitle: "Web Developer",
    description: DEFAULT_DESCRIPTION,
    sameAs: ["https://github.com/MuhammadAkbar11"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Indonesia",
      addressRegion: "Indonesia",
      addressCountry: "ID",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: BASE_URL,
    description: DEFAULT_DESCRIPTION,
    author: {
      "@type": "Person",
      name: SITE_NAME,
    },
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:url" content={pageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={pageImage} />

      {/* Canonical */}
      <link rel="canonical" href={pageUrl} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </Head>
  );
};

export default SEO;
