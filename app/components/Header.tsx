'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, List, X } from '@phosphor-icons/react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Our work', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="Globpave Construction home" onClick={() => setOpenPath(null)}>
          <span className="brand-image">
            <Image src="/images/logos/logo-transparent.png" alt="Globpave Construction — pavers and paving specialists" fill sizes="(max-width: 900px) 118px, 142px" preload />
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined}>{item.name}</Link>)}
        </nav>
        <Link href="/#plan-project" className="button button-blue header-quote">Request a quote <ArrowRight size={18} aria-hidden /></Link>
        <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpenPath(open ? null : pathname)}>{open ? <X size={26} /> : <List size={26} />}</button>
      </div>
      {open && <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" onKeyDown={e => { if (e.key === 'Escape') setOpenPath(null); }}>
        {navigation.map(item => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined} onClick={() => setOpenPath(null)}>{item.name}</Link>)}
        <Link href="/#plan-project" className="button button-blue" onClick={() => setOpenPath(null)}>Plan your project <ArrowRight size={18} /></Link>
      </nav>}
    </header>
  );
}
