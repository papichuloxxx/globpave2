'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { Pause, Play } from '@phosphor-icons/react';
import { assetPath } from '../paths';

const slides = [
  { image: 'project-20.jpeg', alt: 'Completed patterned paving winding through a landscaped garden', tag: 'CRAFTED TO LAST', title: 'Paving with purpose.', note: 'Residential garden path' },
  { image: 'project-24.jpeg', alt: 'Red herringbone paved driveway curving beside a lawn', tag: 'A CLASSIC FINISH', title: 'Herringbone in red.', note: 'Residential driveway' },
  { image: 'project-04.jpeg', alt: 'Completed paved parking bays alongside a row of commercial buildings', tag: 'BUILT FOR BUSINESS', title: 'Room to arrive.', note: 'Commercial parking bays' },
  { image: 'project-23.jpeg', alt: 'Close-up of yellow, white and grey pavers laid in a 3D pattern', tag: 'PATTERN & COLOUR', title: 'Detail in every block.', note: 'Decorative paving' },
  { image: 'project-05.jpeg', alt: 'Marked parking bays paved beside warehouse units', tag: 'CLEAN LINES', title: 'Set out with precision.', note: 'Commercial paving' },
  { image: 'project-22.jpeg', alt: 'Close-up of interlocking trefoil pavers in grey and white tones', tag: 'TEXTURE UNDERFOOT', title: 'Made to be noticed.', note: 'Interlocking pavers' },
];

const SLIDE_MS = 6000;
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)';

function subscribeReducedMotion(onChange: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

function shuffled(items: number[]) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, () => window.matchMedia(REDUCED_MOTION).matches, () => false);
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const paused = userPaused ?? reducedMotion;
  const [hovered, setHovered] = useState(false);
  const queue = useRef<number[]>([]);

  useEffect(() => {
    if (paused || hovered) return;
    const timer = window.setInterval(() => {
      if (document.hidden) return;
      setActive(current => {
        if (!queue.current.length) queue.current = shuffled(slides.map((_, i) => i).filter(i => i !== current));
        return queue.current.shift()!;
      });
    }, SLIDE_MS);
    return () => window.clearInterval(timer);
  }, [paused, hovered]);

  const slide = slides[active];
  return <div
    className="hero-photograph"
    role="region"
    aria-roledescription="carousel"
    aria-label="Completed paving projects"
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    onFocus={() => setHovered(true)}
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setHovered(false); }}
  >
    {slides.map((item, i) => <div className={'hero-slide' + (i === active ? ' is-active' : '')} key={item.image} aria-hidden={i !== active}>
      <Image src={assetPath('/images/projects/' + item.image)} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 58vw" preload={i === 0} className="hero-image" />
    </div>)}
    <div className="photo-caption" key={active}><span>{slide.tag}</span><strong>{slide.title}</strong><p>{slide.note}</p></div>
    <div className="hero-controls">
      <button type="button" className="hero-toggle" onClick={() => setUserPaused(!paused)} aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}>{paused ? <Play size={16} weight="fill" aria-hidden /> : <Pause size={16} weight="fill" aria-hidden />}</button>
      {slides.map((item, i) => <button type="button" key={item.image} className="hero-dot" aria-label={`Show photo ${i + 1} of ${slides.length}: ${item.note}`} aria-current={i === active ? 'true' : undefined} onClick={() => { queue.current = []; setActive(i); }} />)}
    </div>
  </div>;
}
