'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, HouseLine, Stack, Wrench, Check, MapPin } from '@phosphor-icons/react';
import { assetPath } from '../paths';

const options = [
  { value: 'Build or renovate', Icon: HouseLine },
  { value: 'Pave an outdoor space', Icon: Stack },
  { value: 'Repair & maintain', Icon: Wrench },
];

export default function ProjectPlanner() {
  const router = useRouter();
  const [selected, setSelected] = useState('');
  return <form className="project-planner" action={assetPath('/quote')} onSubmit={event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const location = String(data.get('location') || '').trim();
    const input = event.currentTarget.elements.namedItem('location') as HTMLInputElement;
    input.setCustomValidity(location ? '' : 'Please enter your project location.');
    if (!event.currentTarget.reportValidity()) return;
    router.push('/quote?' + new URLSearchParams({ type: selected, location }));
  }}>
    <p className="eyebrow">LET’S MAKE IT HAPPEN</p>
    <h2>What are you<br />planning?</h2>
    <fieldset>
      <legend className="sr-only">Choose your project type</legend>
      {options.map(({ value, Icon }) => <label className={'planner-option ' + (selected === value ? 'is-selected' : '')} key={value}>
        <input type="radio" name="type" value={value} required checked={selected === value} onChange={() => setSelected(value)} />
        <Icon size={28} weight="light" aria-hidden />
        <span>{value}</span>
        {selected === value ? <Check size={20} weight="bold" aria-hidden /> : <ArrowRight size={20} aria-hidden />}
      </label>)}
    </fieldset>
    <label className="planner-location" htmlFor="planner-location">Project location</label>
    <div className="location-field"><MapPin size={21} aria-hidden /><input id="planner-location" name="location" required maxLength={160} placeholder="City or area, e.g. Harare" autoComplete="address-level2" onChange={e => e.target.setCustomValidity('')} /></div>
    <button className="button button-white" type="submit">Start my quote <ArrowRight size={20} aria-hidden /></button>
    <p className="planner-note">No obligation. Just the first step towards your project.</p>
  </form>;
}
