export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Globpave Construction",
    "description": "Globpave Construction provides civil works, building, paving, plumbing, roofing, electrical, fencing and property maintenance services across Zimbabwe.",
    "url": "https://www.globpaveconstruction.co.zw",
    "telephone": "+263 772 900 562",
    "email": "info@globpaveconstruction.co.zw",
    "image": "https://www.globpaveconstruction.co.zw/images/projects/project-20.jpeg",
    "logo": "https://www.globpaveconstruction.co.zw/images/logos/logo-primary.jpeg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "684 Glenwood, Glen Lorne",
      "addressLocality": "Harare",
      "addressCountry": "ZW"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Zimbabwe"
    },
    "contactPoint": [
      { "@type": "ContactPoint", "telephone": "+263 772 900 562", "contactType": "customer service" },
      { "@type": "ContactPoint", "telephone": "+263 772 552 143", "contactType": "customer service" },
      { "@type": "ContactPoint", "telephone": "+263 242 494 546", "contactType": "customer service" }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
