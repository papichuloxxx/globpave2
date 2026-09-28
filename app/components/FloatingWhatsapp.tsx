import { WhatsappLogo } from '@phosphor-icons/react/ssr';

export default function FloatingWhatsapp() {
  return (
    <a
      className="floating-whatsapp"
      href="https://wa.me/263772900562"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Globpave on WhatsApp"
      title="Chat with Globpave on WhatsApp"
    >
      <WhatsappLogo size={31} weight="fill" aria-hidden />
    </a>
  );
}
