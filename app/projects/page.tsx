'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from '@phosphor-icons/react';
import PageIntro from '../components/PageIntro';
import { assetPath } from '../paths';
import { projects } from '../project-data';

const categories = ['All work', 'Commercial', 'Outdoor spaces', 'Groundworks', 'Work in progress'];
export default function ProjectsPage() {
  const [active, setActive] = useState('All work');
  const visible = projects.filter(project => active === 'All work' || project.category === active);
  return <><PageIntro eyebrow="THE WORK, UP CLOSE" title="From the ground beneath to the space ahead." description="Explore paving, site preparation and work in progress through photographs from Globpave’s project collection." /><section className="project-gallery section-wrap"><div className="gallery-filters" role="group" aria-label="Filter project gallery">{categories.map(category => <button key={category} aria-pressed={category === active} onClick={() => setActive(category)}>{category}</button>)}</div><p className="gallery-count" role="status">{visible.length} {visible.length === 1 ? 'project' : 'projects'} shown</p><div className="gallery-grid">{visible.map(project => <Link className="gallery-item" href={'/projects/' + project.id} key={project.id}><div className="gallery-image"><Image src={assetPath('/images/projects/' + project.image)} alt={project.title} fill sizes="(max-width: 760px) 100vw, 50vw" /></div><p>{project.category}</p><div><h2>{project.title}</h2><ArrowUpRight size={23} aria-hidden /></div></Link>)}</div></section></>;
}
