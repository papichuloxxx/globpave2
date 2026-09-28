import { pageMetadata } from '../../seo';

export const metadata = pageMetadata({
  title: 'Building & Construction Services',
  description: 'New house construction, extensions, renovations, brickwork, concrete work and plastering for residential and commercial properties.',
  path: '/services/building-construction',
  image: '/images/projects/project-12.jpeg',
});

export default function ServiceLayout({ children }: { children: React.ReactNode }) { return children; }
