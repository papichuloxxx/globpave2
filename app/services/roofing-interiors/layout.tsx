import { pageMetadata } from '../../seo';

export const metadata = pageMetadata({
  title: 'Roofing & Interior Finishes',
  description: 'IBR and tile roofing, roof repairs, ceilings, tiling, painting and waterproofing for homes and commercial buildings.',
  path: '/services/roofing-interiors',
  image: '/images/projects/project-13.jpeg',
});

export default function ServiceLayout({ children }: { children: React.ReactNode }) { return children; }
