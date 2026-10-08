import { WhatsappLogo } from '@phosphor-icons/react/ssr';
import { site } from '../site';

export default function FloatingWhatsapp() {
  return (
    <a
      className="floating-whatsapp"
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Globpave on WhatsApp"
      title="Chat with Globpave on WhatsApp"
    >
      <WhatsappLogo size={31} weight="fill" aria-hidden />
    </a>
  );
}
