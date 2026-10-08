import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, CheckCircle, Phone } from '@phosphor-icons/react/ssr';
import ProjectPlanner from './components/ProjectPlanner';
import HeroSlideshow from './components/HeroSlideshow';
import { assetPath } from './paths';
import { primaryPhone } from './site';

const services = [
  { title: 'Civil & infrastructure', text: 'Prepare sites, construct and rehabilitate roads, and manage stormwater with practical drainage systems.', image: '/images/projects/project-14.jpeg', alt: 'Earthmoving equipment preparing a construction site beside a brick building', href: '/services/civil-infrastructure', tag: 'PREPARE THE GROUND' },
  { title: 'Building & construction', text: 'Create new homes, extensions and renovations with brickwork, concrete and plastering brought into one clear scope.', image: '/images/projects/project-12.jpeg', alt: 'Globpave team working on a residential building project', href: '/services/building-construction', tag: 'SHAPE THE STRUCTURE' },
  { title: 'Paving & external works', text: 'Give driveways, parking areas, perimeter walls and landscapes a considered, hard-wearing finish.', image: '/images/projects/project-01.jpeg', alt: 'Finished commercial paving with a channel drain along the edge', href: '/services/paving-external-works', tag: 'MAKE AN IMPRESSION' },
  { title: 'Plumbing & water solutions', text: 'Install, repair and maintain plumbing, borehole connections, septic tanks and soakaway systems.', image: '/images/services/plumbing-water.webp', alt: 'Plumber installing water pipes and fittings in a building under construction', href: '/services/plumbing-water-solutions', tag: 'KEEP WATER MOVING' },
  { title: 'Roofing & interiors', text: 'Protect and finish your building with roofing, ceilings, tiling, painting and waterproofing.', image: '/images/projects/project-13.jpeg', alt: 'Roofed commercial buildings at a completed external works site', href: '/services/roofing-interiors', tag: 'PROTECT AND FINISH' },
  { title: 'Fencing, electrical & maintenance', text: 'Secure, power and care for your property with fencing, electrical installations and general building maintenance.', image: '/images/services/electrical-fencing.webp', alt: 'Electrical contractor working beside a palisade perimeter fence', href: '/services/fencing-electrical-maintenance', tag: 'SECURE AND MAINTAIN' },
];

export default function Home() {
  return <div className="home-redesign">
    <section className="hero-split" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="eyebrow">CONSTRUCTION. CONSIDERED.</p>
        <h1 id="hero-heading">Built on<br />precision.<br />Finished<br />with care.</h1>
        <p className="hero-description">A well-built space begins long before the final finish. We bring groundwork, construction and property care together to move your plans forward.</p>
        <div className="hero-actions"><Link href="#plan-project" className="button button-blue">Plan your project <ArrowRight size={19} aria-hidden /></Link><Link href="/projects" className="button button-outline">View our work</Link></div>
        <p className="hero-footnote">From foundations to a brighter tomorrow.</p>
      </div>
      <HeroSlideshow />
    </section>
    <section className="home-services section-wrap" aria-labelledby="services-heading">
      <div className="section-heading"><div><p className="eyebrow">OUR SERVICES</p><h2 id="services-heading">Every stage.<br className="mobile-break" /> Thoughtfully built.</h2></div><Link href="/services" className="text-link">Explore all services <ArrowUpRight size={20} aria-hidden /></Link></div>
      <p className="section-intro">Prepare the ground. Shape the structure. Refine the finish. Find the right expertise for the next stage of your property.</p>
      <div className="service-grid">{services.map(service => <Link className="service-feature" key={service.title} href={service.href}>
        <div className="service-image"><Image src={assetPath(service.image)} alt={service.alt} fill sizes="(max-width: 760px) 100vw, 33vw" /></div>
        <p className="service-tag">{service.tag}</p><div className="service-title"><h3>{service.title}</h3><ArrowUpRight size={24} aria-hidden /></div><p>{service.text}</p>
      </Link>)}</div>
    </section>
    <section className="planning-section" id="plan-project" aria-labelledby="planning-heading">
      <div className="planning-copy"><p className="eyebrow">FROM POSSIBILITY TO A PRACTICAL PLAN</p><h2 id="planning-heading">A clear brief.<br />A considered<br />next step.</h2><p>A new build, an outdoor upgrade or a repair that cannot wait — start with your priorities. We’ll discuss the site, the scope and what needs to happen next.</p>
        <ol className="process-steps"><li><span>01</span><h3>Tell us your plans</h3><p>A few details about your space and what you want to achieve.</p></li><li><span>02</span><h3>Discuss your site</h3><p>We’ll talk through your needs and arrange a visit where needed.</p></li><li><span>03</span><h3>Get a tailored quote</h3><p>A clear scope of work, shaped around your project.</p></li></ol>
        <a className="text-link" href={'tel:' + primaryPhone.tel}><Phone size={19} aria-hidden /> Prefer a conversation? {primaryPhone.display}</a>
      </div>
      <ProjectPlanner />
    </section>
    <section className="work-section section-wrap" aria-labelledby="work-heading"><div className="section-heading"><div><p className="eyebrow">A CLOSER LOOK</p><h2 id="work-heading">The details make<br />the difference.</h2></div><Link className="text-link" href="/projects">View project gallery <ArrowUpRight size={20} aria-hidden /></Link></div>
      <div className="work-grid"><figure><div className="work-image"><Image src={assetPath('/images/projects/project-04.jpeg')} alt="Completed paved parking bays alongside a commercial building" fill sizes="(max-width: 760px) 100vw, 60vw" /></div><figcaption><h3>Room for business to grow.</h3><span>Commercial paving</span></figcaption></figure><figure><div className="work-image"><Image src={assetPath('/images/projects/project-03.jpeg')} alt="Construction team carefully laying paving blocks by hand" fill sizes="(max-width: 760px) 100vw, 40vw" /></div><figcaption><h3>Care in every course.</h3><span>Our team at work</span></figcaption></figure></div>
    </section>
    <section className="home-about section-wrap"><div><p className="eyebrow">THE GLOBPAVE APPROACH</p><h2>The unseen work.<br />The visible difference.</h2></div><div><p className="about-lead">The finish gets noticed. The preparation makes it possible.</p><p>Levels, drainage, material choices and careful installation all shape how a space performs. Our approach connects those decisions, so the work beneath the surface supports the result above it.</p><ul>{['Thoughtful preparation', 'Careful workmanship', 'Clear communication'].map(value => <li key={value}><CheckCircle size={21} aria-hidden />{value}</li>)}</ul><Link href="/about" className="text-link">Get to know Globpave <ArrowRight size={20} aria-hidden /></Link></div></section>
    <section className="home-cta section-wrap"><div><p className="eyebrow">LET’S BUILD SOMETHING LASTING</p><h2>Make room for what comes next.</h2></div><Link href="#plan-project" className="button button-blue">Start your project <ArrowRight size={20} aria-hidden /></Link></section>
  </div>;
}
