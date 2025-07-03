import { Helmet } from "react-helmet-async";
import logo from "../../assets/images/logo.png";

const SEO = ({
  title = "Top Design & Degree College in India – International Academy of Design",
  description = "Explore top-rated design and academic programs at the International Academy of Design. Enroll in Fashion Design, Architecture, Web Development, Digital Marketing, and UGC-approved degrees like B.A, B.Com, M.Sc, and more.",
  keywords = "Fashion Design course, Interior Design degree, Architecture course, Web Development training, Digital Marketing institute, UGC approved college, B.A, M.B.A courses India, Design College India",
  url = "https://thenad.in",
  image = logo,
  author = "International Academy of Design",
  type = "website",
}) => {
  const fullImageUrl = image?.startsWith("https")
    ? image
    : `${url.replace(/\/$/, "")}/${image.replace(/^\//, "")}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: "International Academy of Design",
    url,
    logo: fullImageUrl,
    email: "Thenadskr@gmail.com",
    description:
      "Leading college offering accredited programs in design, development, and business studies including Fashion Design, Web Development, B.A, M.B.A, and more.",
    founder: {
      "@type": "Organization",
      name: "International Academy of Design",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91 8058866333",
        contactType: "Customer Support",
        areaServed: ["IN", "GB"],
        availableLanguage: ["English"],
      },
    ],
    sameAs: [
      "https://www.facebook.com/thenadskr",
      "https://www.instagram.com/thenad.in",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Railway Sta Rd, opp. Garg Hospital, near City Centre Mall, Ward No 35, Sakpura Mohlla, Radha Kishanpura",
      addressLocality: "Sikar",
      addressRegion: "Rajasthan",
      postalCode: "332001",
      addressCountry: "IN",
    },
  };

  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      titleTemplate="%s | International Academy of Design"
      defaultTitle="Top Design & Degree College in India – International Academy of Design"
    >
      <meta charSet="UTF-8" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="robots" content="index, follow" />

      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />
      <link rel="icon" href={fullImageUrl} type="image/png" sizes="32x32" />
      <link rel="apple-touch-icon" href={fullImageUrl} />
      <meta name="format-detection" content="telephone=no" />

      {/* Microdata for Google Rich Snippets */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={fullImageUrl} />

      {/* Open Graph for Facebook */}
      <meta property="og:site_name" content="International Academy of Design" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={fullImageUrl} />
      <meta
        property="og:image:alt"
        content="International Academy of Design Logo"
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="en_IN" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
