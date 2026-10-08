import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react/ssr';
import PageIntro from './components/PageIntro';

export const metadata = { title: 'Page not found' };

const links = [
  ['Our services', '/services'],
  ['Project gallery', '/projects'],
  ['Contact us', '/contact'],
];

export default function NotFound() {
  return <>
    <PageIntro eyebrow="404 · PAGE NOT FOUND" title="This page has moved, or never existed." description="The link may be out of date or mistyped. Here are some good places to pick up from." />
    <section className="related-services section-wrap" aria-label="Suggested pages">
      <ul>{links.map(([label, href]) => <li key={href}><Link className="text-link" href={href}>{label}<ArrowUpRight size={18} aria-hidden /></Link></li>)}</ul>
    </section>
    <section className="inner-cta section-wrap">
      <h2>Planning a project?</h2>
      <p>Tell us what you have in mind and where your site is.</p>
      <Link className="button button-blue" href="/#plan-project">Plan your project <ArrowRight size={20} aria-hidden /></Link>
    </section>
  </>;
}
