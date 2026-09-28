import Link from 'next/link';
import { ArrowRight } from '@phosphor-icons/react/ssr';
import PageIntro from '../components/PageIntro';

const steps = [
  ['01', 'Start with the outcome.', 'Tell us what needs to change and how you want the space to work. Your location, approximate measurements and any photos help establish a useful starting point.'],
  ['02', 'Understand the site.', 'We discuss access, ground conditions and other requirements. Where needed, a site visit helps turn the initial brief into a clearer scope.'],
  ['03', 'Agree what is included.', 'Materials, work items and project requirements inform the quotation. This is the stage to work through questions and agree the scope before work begins.'],
  ['04', 'Put the plan into practice.', 'The agreed work moves to site, from preparation through installation or construction. Project-specific arrangements are discussed with you.'],
  ['05', 'Review the result.', 'We review the completed scope and discuss any relevant care or maintenance considerations for the finished work.'],
];
export default function ProcessPage() {
  return <><PageIntro eyebrow="WORKING WITH US" title="A clear path from brief to build." description="Every site has its own demands. These are the conversations and decisions that help move a project forward." /><section className="service-list section-wrap">{steps.map(([number,title,description]) => <article key={number}><span className="row-number">{number}</span><div><h2>{title}</h2><p>{description}</p></div></article>)}</section><section className="inner-cta section-wrap"><h2>Start with what you have in mind.</h2><p>You do not need every detail worked out to begin a conversation.</p><Link href="/#plan-project" className="button button-blue">Open the project planner <ArrowRight size={20} aria-hidden /></Link></section></>;
}
