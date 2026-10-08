import Link from 'next/link';
import Image from 'next/image';
import { Phone, Envelope, WhatsappLogo, ArrowUpRight, MapPin } from '@phosphor-icons/react/ssr';
import { assetPath } from '../paths';
import { site } from '../site';
import { services } from '../service-data';

export default function Footer() {
  return <footer className="site-footer">
    <div className="footer-grid">
      <div className="footer-brand"><Link href="/" aria-label="Globpave home"><span className="footer-brand-image"><Image src={assetPath('/images/logos/logo-primary.jpeg')} alt={site.name} fill sizes="152px" /></span></Link><p>Complete construction solutions.<br />From foundations to finishing, across Zimbabwe.</p></div>
      <div><h2>Explore</h2><ul>{[['About Globpave','/about'],['Our work','/projects'],['Our process','/process'],['Get a quote','/quote']].map(([label,href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul></div>
      <div><h2>What we do</h2><ul>{services.map(service => <li key={service.slug}><Link href={'/services/' + service.slug}>{service.title}</Link></li>)}</ul></div>
      <div className="footer-contact"><h2>Let’s talk about your project</h2><ul>{site.phones.map(phone => <li key={phone.tel}><a href={'tel:' + phone.tel}><Phone size={18} aria-hidden />{phone.display}</a></li>)}<li><a href={'mailto:' + site.email}><Envelope size={18} aria-hidden />{site.email}</a></li><li><span className="footer-address"><MapPin size={18} aria-hidden />{site.address.street}, {site.address.suburb}, {site.address.city}</span></li><li><a href={site.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsappLogo size={18} aria-hidden />Chat on WhatsApp <ArrowUpRight size={14} aria-hidden /></a></li></ul></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span><span>Built with care. Built to last.</span></div>
  </footer>;
}
