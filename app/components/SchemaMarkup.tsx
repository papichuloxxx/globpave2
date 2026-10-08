import { site } from '../site';

export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": site.name,
    "description": site.description,
    "url": site.url,
    "telephone": site.phones[0].intl,
    "email": site.email,
    "image": `${site.url}/images/projects/project-20.jpeg`,
    "logo": `${site.url}/images/logos/logo-primary.jpeg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${site.address.street}, ${site.address.suburb}`,
      "addressLocality": site.address.city,
      "addressCountry": site.address.countryCode
    },
    "areaServed": {
      "@type": "Country",
      "name": site.address.country
    },
    "contactPoint": site.phones.map(phone => ({ "@type": "ContactPoint", "telephone": phone.intl, "contactType": "customer service" }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
