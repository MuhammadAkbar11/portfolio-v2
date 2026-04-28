import Head from "next/head";
import { useRouter } from "next/router";

const SITE_NAME = "Muhammad Akbar L";
const DEFAULT_DESCRIPTION =
  "Frontend Developer specializing in React, Next.js, and modern web technologies. Explore my portfolio, projects, and get in touch.";
const DEFAULT_IMAGE = "/og/og-image.png";
const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://muhammadakbar11.dev";

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
    </Head>
  );
};

export default SEO;
