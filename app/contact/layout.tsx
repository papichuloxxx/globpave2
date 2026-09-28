import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'Contact',
  description: 'Contact Globpave Construction in Glen Lorne, Harare to discuss construction, paving, civil works, plumbing, roofing, electrical or maintenance projects.',
  path: '/contact',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
