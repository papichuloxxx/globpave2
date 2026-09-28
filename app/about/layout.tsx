import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'About',
  description: 'Learn how Globpave Construction approaches building, paving, civil works and property care for projects across Zimbabwe.',
  path: '/about',
  image: '/images/projects/project-03.jpeg',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
