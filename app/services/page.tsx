import Link from 'next/link';
import { ArrowUpRight } from '@phosphor-icons/react/ssr';
import PageIntro from '../components/PageIntro';
import { services } from '../service-data';

export default function ServicesPage() {
  return <><PageIntro eyebrow="OUR CAPABILITIES" title="The right expertise. At the right stage." description="Some projects start with bare ground. Others begin with a space that needs to work better. Explore how Globpave can support yours." /><section className="service-list section-wrap">{services.map(({ slug, title, summary, tags }, i) => <article key={slug}><span className="row-number">{String(i + 1).padStart(2, '0')}</span><div><h2>{title}</h2><p>{summary}</p><span className="service-tags">{tags}</span></div><Link className="text-link" href={'/services/' + slug} aria-label={'Explore ' + title}>Explore <ArrowUpRight size={22} aria-hidden /></Link></article>)}</section><section className="inner-cta section-wrap"><h2>Not sure where your project fits?</h2><p>Describe the result you want. We can work through the scope together.</p><Link className="button button-blue" href="/#plan-project">Tell us your plans <ArrowUpRight size={20} aria-hidden /></Link></section></>;
}
