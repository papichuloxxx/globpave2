import { pageMetadata } from '../../seo';

export const metadata = pageMetadata({
  title: 'Fencing, Electrical & Maintenance',
  description: 'Palisade, razor wire and diamond mesh fencing, electrical installations and general building maintenance in Zimbabwe.',
  path: '/services/fencing-electrical-maintenance',
  image: '/images/services/electrical-fencing.webp',
});

export default function ServiceLayout({ children }: { children: React.ReactNode }) { return children; }
