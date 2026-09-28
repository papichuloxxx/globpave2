import { pageMetadata } from '../../seo';

export const metadata = pageMetadata({
  title: 'Plumbing & Water Solutions',
  description: 'Plumbing installation and repair, borehole plumbing, septic tank and soakaway construction services in Zimbabwe.',
  path: '/services/plumbing-water-solutions',
  image: '/images/services/plumbing-water.webp',
});

export default function ServiceLayout({ children }: { children: React.ReactNode }) { return children; }
