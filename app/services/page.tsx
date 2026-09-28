import Link from 'next/link';
import { ArrowUpRight } from '@phosphor-icons/react/ssr';
import PageIntro from '../components/PageIntro';

const services = [
  ['01', 'Civil & infrastructure', 'civil-infrastructure', 'Start with a site that is ready for what comes next. We undertake ground preparation, road works and drainage for residential, commercial and infrastructure projects.', 'Earthworks / Roads / Drainage'],
  ['02', 'Building & construction', 'building-construction', 'Create more room for the way you live and work. From new structures to extensions and renovations, we help turn the agreed scope into a space with a purpose.', 'New builds / Extensions / Renovations'],
  ['03', 'Paving & outdoor spaces', 'paving-external-works', 'An entrance should do more than look good. We consider movement, surface preparation and drainage alongside the colours and patterns that give your property its character.', 'Driveways / Parking / Walkways'],
  ['04', 'Plumbing & water solutions', 'plumbing-water-solutions', 'Keep the essential systems behind your property working. Our plumbing services cover installations, repairs and the connections that carry water to and from your building.', 'Installations / Repairs / Water systems'],
  ['05', 'Roofing & interiors', 'roofing-interiors', 'Protect the structure and bring the interior together. Roofing, waterproofing, ceilings and finishes each play a part in making a building ready for everyday use.', 'Roofing / Ceilings / Tiling & painting'],
  ['06', 'Electrical & property care', 'fencing-electrical-maintenance', 'Look after the places you have already invested in. We support property improvements, electrical work, fencing and ongoing repairs around the needs of your site.', 'Electrical / Fencing / Maintenance'],
];

export default function ServicesPage() {
  return <><PageIntro eyebrow="OUR CAPABILITIES" title="The right expertise. At the right stage." description="Some projects start with bare ground. Others begin with a space that needs to work better. Explore how Globpave can support yours." /><section className="service-list section-wrap">{services.map(([number,title,slug,description,tags]) => <article key={slug}><span className="row-number">{number}</span><div><h2>{title}</h2><p>{description}</p><span className="service-tags">{tags}</span></div><Link className="text-link" href={'/services/' + slug} aria-label={'Explore ' + title}>Explore <ArrowUpRight size={22} aria-hidden /></Link></article>)}</section><section className="inner-cta section-wrap"><h2>Not sure where your project fits?</h2><p>Describe the result you want. We can work through the scope together.</p><Link className="button button-blue" href="/#plan-project">Tell us your plans <ArrowUpRight size={20} aria-hidden /></Link></section></>;
}
