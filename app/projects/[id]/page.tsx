import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/ssr';
import { projects } from '../../project-data';
import PageIntro from '../../components/PageIntro';
import { pageMetadata } from '../../seo';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find(item => String(item.id) === id);
  if (!project) return {};
  return pageMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.id}`,
    image: `/images/projects/${project.image}`,
  });
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find(item => String(item.id) === id);
  if (!project) notFound();
  return <><PageIntro eyebrow={project.category} title={project.title} description={project.description} /><section className="project-detail section-wrap"><Link className="text-link" href="/projects"><ArrowLeft size={20} aria-hidden />Back to the gallery</Link><Image src={'/images/projects/' + project.image} alt={project.title} width={1400} height={900} sizes="(max-width: 1400px) 100vw, 1300px" className="project-detail-photo" /><div className="inner-cta"><h2>Thinking about a similar space?</h2><p>Tell us what you want to achieve at your property and we can discuss an approach.</p><Link className="button button-blue" href="/#plan-project">Plan your project <ArrowRight size={20} aria-hidden /></Link></div></section></>;
}
