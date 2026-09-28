import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'Construction Services',
  description: 'Explore civil works, building construction, paving, plumbing, roofing, interiors, fencing, electrical installation and maintenance services in Zimbabwe.',
  path: '/services',
  image: '/images/projects/project-14.jpeg',
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
