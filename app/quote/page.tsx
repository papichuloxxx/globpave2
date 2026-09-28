import QuoteForm from '../components/QuoteForm';
import { pageMetadata } from '../seo';
import { Suspense } from 'react';

export const metadata = pageMetadata({
  title: 'Request a Construction Quote',
  description: 'Prepare a construction, paving or property maintenance enquiry for Globpave Construction and continue through WhatsApp or email.',
  path: '/quote',
});

export default function QuotePage() {
  return <div className="quote-page"><div className="quote-heading"><p className="eyebrow">LET’S MAKE IT HAPPEN</p><h1>Tell us about<br />your next project.</h1><p>A few details help us start the right conversation. Review your enquiry, then send it to our team through WhatsApp or your email app.</p></div><Suspense fallback={<div className="quote-form" aria-busy="true">Preparing your quote form…</div>}><QuoteForm /></Suspense></div>;
}
