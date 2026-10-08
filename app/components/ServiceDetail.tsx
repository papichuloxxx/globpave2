import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight, Phone } from '@phosphor-icons/react/ssr';
import PageIntro from './PageIntro';
import { assetPath } from '../paths';
import { primaryPhone } from '../site';
import { getService, type Service } from '../service-data';

export default function ServiceDetail({ service }: { service: Service }) {
  const related = service.related.map(getService);
  return <>
    <PageIntro eyebrow={service.eyebrow} title={service.headline} description={service.intro} />
    <section className="editorial-split section-wrap">
      <div className="editorial-image"><Image src={assetPath(service.image)} alt={service.imageAlt} fill sizes="(max-width: 760px) 100vw, 50vw" preload /></div>
      <div>
        <Link className="text-link" href="/services"><ArrowLeft size={18} aria-hidden />All services</Link>
        <h2>{service.overviewHeading}</h2>
        {service.overview.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
        <a className="text-link" href={'tel:' + primaryPhone.tel}><Phone size={19} aria-hidden />Discuss your site: {primaryPhone.display}</a>
      </div>
    </section>
    <section className="service-offerings section-wrap" aria-labelledby="offerings-heading">
      <p className="eyebrow">WHAT WE PROVIDE</p>
      <h2 id="offerings-heading" className="section-title">The work we take on.</h2>
      <div className="service-list">{service.offerings.map((item, i) => <article key={item.title}><span className="row-number">{String(i + 1).padStart(2, '0')}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}</div>
    </section>
    {service.applications && <section className="values-section section-wrap" aria-labelledby="applications-heading">
      <p className="eyebrow">WHERE IT APPLIES</p>
      <h2 id="applications-heading" className="section-title">Typical projects.</h2>
      <div className="values-grid">{service.applications.map((item, i) => <article key={item.title}><span>{String(i + 1).padStart(2, '0')}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </section>}
    {service.faqs && <section className="faq-section section-wrap" aria-labelledby="faq-heading">
      <p className="eyebrow">COMMON QUESTIONS</p>
      <h2 id="faq-heading" className="section-title">Before you get in touch.</h2>
      <div className="faq-list">{service.faqs.map(item => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
    </section>}
    <section className="related-services section-wrap" aria-labelledby="related-heading">
      <h2 id="related-heading" className="eyebrow">RELATED SERVICES</h2>
      <ul>{related.map(item => <li key={item.slug}><Link className="text-link" href={'/services/' + item.slug}>{item.title}<ArrowUpRight size={18} aria-hidden /></Link></li>)}</ul>
    </section>
    <section className="inner-cta section-wrap">
      <h2>Ready to talk about your project?</h2>
      <p>Tell us what you need and where your site is. We will discuss the scope and the next practical step.</p>
      <Link className="button button-blue" href="/#plan-project">Plan your project <ArrowRight size={20} aria-hidden /></Link>
    </section>
  </>;
}
