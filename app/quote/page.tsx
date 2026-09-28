import QuoteForm from '../components/QuoteForm';
import { pageMetadata } from '../seo';

export const metadata = pageMetadata({
  title: 'Request a Construction Quote',
  description: 'Prepare a construction, paving or property maintenance enquiry for Globpave Construction and continue through WhatsApp or email.',
  path: '/quote',
});

export default async function QuotePage({ searchParams }: { searchParams: Promise<{ type?: string | string[]; location?: string | string[] }> }) {
  const params = await searchParams;
  const type = typeof params.type === 'string' ? params.type.slice(0, 100) : '';
  const location = typeof params.location === 'string' ? params.location.slice(0, 160) : '';
  return <div className="quote-page"><div className="quote-heading"><p className="eyebrow">LET’S MAKE IT HAPPEN</p><h1>Tell us about<br />your next project.</h1><p>A few details help us start the right conversation. Review your enquiry, then send it to our team through WhatsApp or your email app.</p></div><QuoteForm key={type + location} initialType={type} initialLocation={location} /></div>;
}
