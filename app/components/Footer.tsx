import Link from 'next/link';
import Image from 'next/image';
import { Phone, Envelope, WhatsappLogo, ArrowUpRight, MapPin } from '@phosphor-icons/react/ssr';
import { assetPath } from '../paths';

export default function Footer() {
  return <footer className="site-footer">
    <div className="footer-grid">
      <div className="footer-brand"><Link href="/" aria-label="Globpave home"><span className="footer-brand-image"><Image src={assetPath('/images/logos/logo-primary.jpeg')} alt="Globpave Construction" fill sizes="152px" /></span></Link><p>Complete construction solutions.<br />From foundations to finishing, across Zimbabwe.</p></div>
      <div><h2>Explore</h2><ul>{[['About Globpave','/about'],['Our work','/projects'],['Our process','/process'],['Get a quote','/quote']].map(([label,href]) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul></div>
      <div><h2>What we do</h2><ul>{[['Civil & infrastructure','civil-infrastructure'],['Building & construction','building-construction'],['Paving & outdoor spaces','paving-external-works'],['Plumbing & water','plumbing-water-solutions'],['Roofing & interiors','roofing-interiors'],['Electrical & maintenance','fencing-electrical-maintenance']].map(([label,slug]) => <li key={slug}><Link href={'/services/' + slug}>{label}</Link></li>)}</ul></div>
      <div className="footer-contact"><h2>Let’s talk about your project</h2><ul><li><a href="tel:+263772900562"><Phone size={18} aria-hidden />0772 900 562</a></li><li><a href="tel:+263772552143"><Phone size={18} aria-hidden />0772 552 143</a></li><li><a href="tel:+263242494546"><Phone size={18} aria-hidden />0242 494 546</a></li><li><a href="mailto:info@globpaveconstruction.co.zw"><Envelope size={18} aria-hidden />info@globpaveconstruction.co.zw</a></li><li><span className="footer-address"><MapPin size={18} aria-hidden />684 Glenwood, Glen Lorne, Harare</span></li><li><a href="https://wa.me/263772900562" target="_blank" rel="noopener noreferrer"><WhatsappLogo size={18} aria-hidden />Chat on WhatsApp <ArrowUpRight size={14} aria-hidden /></a></li></ul></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Globpave Construction. All rights reserved.</span><span>Built with care. Built to last.</span></div>
  </footer>;
}
