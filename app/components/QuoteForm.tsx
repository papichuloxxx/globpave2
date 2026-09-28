'use client';

import { useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, ArrowLeft, Phone, Envelope, WhatsappLogo, ClipboardText } from '@phosphor-icons/react';

const projectTypes = ['Build or renovate', 'Pave an outdoor space', 'Repair & maintain', 'Civil works & drainage', 'Roofing & interiors', 'Plumbing & water', 'Electrical & fencing', 'Other / not sure'];

export default function QuoteForm() {
  const searchParams = useSearchParams();
  const initialType = (searchParams.get('type') ?? '').slice(0, 100);
  const initialLocation = (searchParams.get('location') ?? '').slice(0, 160);
  const [details, setDetails] = useState({
    name: '', phone: '', email: '', location: initialLocation,
    type: projectTypes.includes(initialType) ? initialType : '',
    description: '', timeline: '', consent: false,
  });
  const [review, setReview] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');
  const reviewHeading = useRef<HTMLHeadingElement>(null);
  const formHeading = useRef<HTMLHeadingElement>(null);
  const message = [
    'Hello Globpave, I would like to request a project quote.',
    '', 'Name: ' + details.name.trim(), 'Phone: ' + details.phone.trim(),
    ...(details.email.trim() ? ['Email: ' + details.email.trim()] : []),
    'Project: ' + details.type, 'Location: ' + details.location.trim(),
    ...(details.timeline.trim() ? ['Preferred timing: ' + details.timeline.trim()] : []),
    '', 'Project details:', details.description.trim(),
  ].join('\n');

  function update(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setDetails(previous => ({ ...previous, [name]: value }));
    event.target.setCustomValidity('');
  }

  function changeStep(next: boolean) {
    setReview(next);
    setCopyStatus('');
    requestAnimationFrame(() => {
      const heading = next ? reviewHeading.current : formHeading.current;
      heading?.focus();
      heading?.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
  }

  return <div className="quote-layout">
    <div>
      {!review ? <form className="quote-form" onSubmit={event => {
        event.preventDefault();
        for (const name of ['name', 'phone', 'location', 'description']) {
          const input = event.currentTarget.elements.namedItem(name) as HTMLInputElement | HTMLTextAreaElement;
          input.setCustomValidity(input.value.trim() ? '' : 'Please complete this field.');
        }
        const phone = event.currentTarget.elements.namedItem('phone') as HTMLInputElement;
        const digits = phone.value.replace(/\D/g, '');
        if (phone.value.trim() && (digits.length < 7 || digits.length > 15 || !/^[+\d\s().-]+$/.test(phone.value))) {
          phone.setCustomValidity('Please enter a valid phone number, including your country code if outside Zimbabwe.');
        }
        if (event.currentTarget.reportValidity()) changeStep(true);
      }}>
        <h2 ref={formHeading} tabIndex={-1}>Your project details</h2>
        <div className="form-grid">
          <label className="form-field">Full name<input name="name" autoComplete="name" required maxLength={100} value={details.name} onChange={update} placeholder="Your full name" /></label>
          <label className="form-field">Phone number<input name="phone" type="tel" autoComplete="tel" required maxLength={25} value={details.phone} onChange={update} placeholder="e.g. 0772 123 456" /></label>
          <label className="form-field full-width">Email <span className="sr-only">(optional)</span><input name="email" type="email" autoComplete="email" maxLength={160} value={details.email} onChange={update} placeholder="Optional — your email address" /></label>
          <label className="form-field">Project type<select name="type" required value={details.type} onChange={update}><option value="">Choose a project type</option>{projectTypes.map(type => <option key={type}>{type}</option>)}</select></label>
          <label className="form-field">Project location<input name="location" autoComplete="address-level2" required maxLength={160} value={details.location} onChange={update} placeholder="City, town or suburb" /></label>
          <label className="form-field full-width">What do you have in mind?<textarea name="description" required maxLength={1800} value={details.description} onChange={update} placeholder="Tell us about your space, the work you need, and any approximate measurements." rows={5} /></label>
          <label className="form-field full-width">Preferred timing (optional)<input name="timeline" maxLength={100} value={details.timeline} onChange={update} placeholder="e.g. In the next 3 months" /></label>
          <label className="form-consent"><input name="consent" type="checkbox" required checked={details.consent} onChange={event => setDetails(previous => ({ ...previous, consent: event.target.checked }))} /><span>I agree to Globpave contacting me about this project using the details I choose to send.</span></label>
          <div className="form-submit"><button className="button button-blue" type="submit">Review my enquiry <ArrowRight size={20} aria-hidden /></button><p>You can review everything before sending. Nothing is sent by this form.</p></div>
        </div>
      </form> : <section className="quote-review" aria-labelledby="review-heading">
        <p className="eyebrow">READY FOR THE NEXT STEP</p><h2 ref={reviewHeading} id="review-heading" tabIndex={-1}>Your enquiry is ready.</h2><p>Check your details below, then choose how to send them. You’ll complete the send in WhatsApp or your email app.</p>
        <pre>{message}</pre>
        <div className="review-actions"><a className="button button-blue" href={'https://wa.me/263772900562?text=' + encodeURIComponent(message)} target="_blank" rel="noopener noreferrer"><WhatsappLogo size={22} aria-hidden />Continue in WhatsApp</a><a className="button button-outline" href={'mailto:info@globpaveconstruction.co.zw?subject=' + encodeURIComponent('Quote enquiry — ' + details.type) + '&body=' + encodeURIComponent(message)}><Envelope size={21} aria-hidden />Open email draft</a></div>
        <p>Have site photos or plans? Attach them in your message. Your enquiry has not been sent yet.</p>
        <div className="review-actions"><button className="edit-details" type="button" onClick={() => changeStep(false)}><ArrowLeft size={16} className="inline mr-2" aria-hidden />Edit details</button><button className="edit-details" type="button" onClick={async () => {
          try { await navigator.clipboard.writeText(message); setCopyStatus('Enquiry copied. You can paste it into your preferred messaging app.'); }
          catch { setCopyStatus('Copy is unavailable in this browser. Select and copy the enquiry text above.'); }
        }}><ClipboardText size={17} className="inline mr-2" aria-hidden />Copy enquiry</button></div>
        <p role="status">{copyStatus}</p>
      </section>}
    </div>
    <aside className="quote-aside"><h2>From an idea<br />to a plan.</h2><p>We’ll discuss the scope, materials and site requirements with you before preparing a tailored quotation.</p><p>Not sure which service you need? Choose “Other / not sure” and tell us what you want to achieve.</p><a href="tel:+263772900562"><Phone size={20} aria-hidden />0772 900 562</a><a href="mailto:info@globpaveconstruction.co.zw"><Envelope size={20} aria-hidden />info@globpaveconstruction.co.zw</a></aside>
  </div>;
}
