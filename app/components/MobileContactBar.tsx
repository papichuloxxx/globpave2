import Link from 'next/link';
import { Phone, WhatsappLogo, ArrowRight } from '@phosphor-icons/react/ssr';
import { primaryPhone, site } from '../site';
export default function MobileContactBar() {
  return <nav className="mobile-contact" aria-label="Quick contact"><a href={'tel:' + primaryPhone.tel}><Phone size={19} aria-hidden />Call</a><a href={site.whatsapp} target="_blank" rel="noopener noreferrer"><WhatsappLogo size={20} aria-hidden />WhatsApp</a><Link href="/#plan-project">Get a quote <ArrowRight size={19} aria-hidden /></Link></nav>;
}
