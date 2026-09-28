import { pageMetadata } from '../../seo';

export const metadata = pageMetadata({
  title: 'Civil & Infrastructure Services',
  description: 'Civil works, road construction and rehabilitation, site preparation and drainage systems for projects across Zimbabwe.',
  path: '/services/civil-infrastructure',
  image: '/images/projects/project-14.jpeg',
});

export default function ServiceLayout({ children }: { children: React.ReactNode }) { return children; }
