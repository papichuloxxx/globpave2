import type { Metadata } from 'next';
import { site } from './site';

const siteName = site.name;
const defaultImage = '/images/og-default.jpg';

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function pageMetadata({ title, description, path, image = defaultImage }: PageMetadataOptions): Metadata {
  const socialTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_ZW',
      siteName,
      title: socialTitle,
      description,
      url: path,
      images: [{ url: image, alt: `${title} — ${siteName}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [image],
    },
  };
}
