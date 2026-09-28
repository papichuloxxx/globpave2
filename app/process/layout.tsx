import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'Our Process',
  description: 'See how Globpave moves a construction project from the initial brief and site discussion through quotation, delivery and completion.',
  path: '/process',
  image: '/images/projects/project-16.jpeg',
});

export default function ProcessLayout({ children }: { children: React.ReactNode }) {
  return children;
}
