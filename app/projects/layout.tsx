import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'Construction & Paving Projects',
  description: 'Explore Globpave paving, groundwork and construction projects for residential and commercial properties in Zimbabwe.',
  path: '/projects',
  image: '/images/projects/project-04.jpeg',
});

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
