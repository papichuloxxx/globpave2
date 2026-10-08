export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  headline: string;
  intro: string;
  summary: string;
  tags: string;
  image: string;
  imageAlt: string;
  overviewHeading: string;
  overview: string[];
  offerings: { title: string; text: string }[];
  applications?: { title: string; text: string }[];
  faqs?: { question: string; answer: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: 'civil-infrastructure',
    title: 'Civil & infrastructure',
    eyebrow: 'CIVIL & INFRASTRUCTURE',
    headline: 'Prepare the ground for everything that follows.',
    intro: 'Site preparation, earthworks, road construction and drainage for residential, commercial and industrial projects across Zimbabwe.',
    summary: 'Start with a site that is ready for what comes next. We undertake ground preparation, road works and drainage for residential, commercial and infrastructure projects.',
    tags: 'Earthworks / Roads / Drainage',
    image: '/images/projects/project-14.jpeg',
    imageAlt: 'Earthmoving equipment preparing a construction site beside a brick building',
    overviewHeading: 'The work beneath the surface.',
    overview: [
      'Levels, compaction and water management decide how a site performs long after the machinery leaves. We take projects from initial site preparation and earthworks through to road construction and drainage.',
      'Our team works on projects of different scales, from residential developments to commercial and industrial sites.',
    ],
    offerings: [
      { title: 'Civils', text: 'Site preparation, earthworks and ground preparation for construction projects.' },
      { title: 'Road construction', text: 'New roads for residential estates, commercial complexes and industrial facilities.' },
      { title: 'Road rehabilitation', text: 'Repair and upgrade of existing roads, including pothole repair, resurfacing and structural improvements.' },
      { title: 'Drainage systems', text: 'Stormwater drainage, culverts and water management systems.' },
    ],
    applications: [
      { title: 'Residential developments', text: 'Site preparation, access roads and drainage for housing estates.' },
      { title: 'Commercial complexes', text: 'Parking areas, access roads and stormwater management.' },
      { title: 'Industrial facilities', text: 'Heavy-duty paving, loading areas and industrial drainage.' },
      { title: 'Public infrastructure', text: 'Roads, pathways and community drainage systems.' },
    ],
    faqs: [
      { question: 'What types of civil works do you handle?', answer: 'Site preparation, earthworks, road construction, road rehabilitation and drainage systems for residential, commercial and industrial projects.' },
      { question: 'Do you provide site assessments?', answer: 'Yes. We assess project requirements, soil conditions and infrastructure needs before construction begins.' },
      { question: 'What is your service area?', answer: 'We serve clients across Zimbabwe, with a particular focus on Harare and the surrounding areas. Contact us to discuss your location.' },
    ],
    related: ['building-construction', 'paving-external-works', 'plumbing-water-solutions'],
  },
  {
    slug: 'building-construction',
    title: 'Building & construction',
    eyebrow: 'BUILDING & CONSTRUCTION',
    headline: 'Shape the structure around the way you live and work.',
    intro: 'New homes, extensions and renovations, with brickwork, concrete and plastering brought together in one clear scope.',
    summary: 'Create more room for the way you live and work. From new structures to extensions and renovations, we help turn the agreed scope into a space with a purpose.',
    tags: 'New builds / Extensions / Renovations',
    image: '/images/projects/project-12.jpeg',
    imageAlt: 'Globpave team working on a residential building project',
    overviewHeading: 'From foundation to finishing.',
    overview: [
      'We build new homes and house extensions, and carry out renovations and remodelling. Our team handles brickwork, concrete works and plastering for residential and commercial projects.',
      'Bringing these trades into one scope keeps decisions connected, from the foundations through to the finished walls.',
    ],
    offerings: [
      { title: 'New house construction', text: 'New homes built from foundation to finishing.' },
      { title: 'House extensions', text: 'More space added to your existing home.' },
      { title: 'Renovations & remodelling', text: 'Existing properties reworked for how you use them today.' },
      { title: 'Brickwork', text: 'Bricklaying and masonry.' },
      { title: 'Concrete works', text: 'Foundations, slabs and structural concrete.' },
      { title: 'Plastering', text: 'Interior and exterior plastering.' },
    ],
    applications: [
      { title: 'New homes', text: 'Complete new builds from foundation to handover.' },
      { title: 'Home additions', text: 'Extensions and additions to existing properties.' },
      { title: 'Commercial buildings', text: 'Office buildings, retail spaces and commercial construction.' },
      { title: 'Property renovations', text: 'Renovation and remodelling of existing buildings.' },
    ],
    related: ['civil-infrastructure', 'plumbing-water-solutions', 'roofing-interiors'],
  },
  {
    slug: 'paving-external-works',
    title: 'Paving & outdoor spaces',
    eyebrow: 'PAVING & EXTERNAL WORKS',
    headline: 'Make an impression from the moment people arrive.',
    intro: 'Driveways, parking areas, perimeter walls and landscaping, with a considered, hard-wearing finish.',
    summary: 'An entrance should do more than look good. We consider movement, surface preparation and drainage alongside the colours and patterns that give your property its character.',
    tags: 'Driveways / Parking / Walkways',
    image: '/images/projects/project-24.jpeg',
    imageAlt: 'Red herringbone paved driveway curving beside a lawn',
    overviewHeading: 'A surface that works as well as it looks.',
    overview: [
      'We pave residential driveways and commercial parking areas, and build perimeter walls. Landscaping completes the external works around them.',
      'Good paving starts below the blocks: levels, base preparation and drainage support the pattern and colour you see on top.',
    ],
    offerings: [
      { title: 'Paving', text: 'Paved surfaces for homes, businesses and public spaces.' },
      { title: 'Driveways', text: 'Residential and commercial driveways.' },
      { title: 'Parking bays', text: 'Commercial and industrial parking areas.' },
      { title: 'Perimeter wall construction', text: 'Security and boundary walls.' },
      { title: 'Landscaping', text: 'Planting and outdoor areas around the finished surfaces.' },
    ],
    related: ['civil-infrastructure', 'building-construction', 'fencing-electrical-maintenance'],
  },
  {
    slug: 'plumbing-water-solutions',
    title: 'Plumbing & water solutions',
    eyebrow: 'PLUMBING & WATER SOLUTIONS',
    headline: 'Keep water moving where it needs to go.',
    intro: 'Plumbing installation, repair and maintenance, with borehole connections, septic tanks and soakaway systems.',
    summary: 'Keep the essential systems behind your property working. Our plumbing services cover installations, repairs and the connections that carry water to and from your building.',
    tags: 'Installations / Repairs / Water systems',
    image: '/images/services/plumbing-water.webp',
    imageAlt: 'Plumber installing water pipes and fittings in a building under construction',
    overviewHeading: 'The systems behind the walls.',
    overview: [
      'We install plumbing in new construction, repair and maintain existing systems, and build borehole connections.',
      'For properties that manage their own waste water, we construct septic tanks and soakaways for residential and commercial sites.',
    ],
    offerings: [
      { title: 'Plumbing installations', text: 'Complete plumbing systems for new construction.' },
      { title: 'Plumbing repairs', text: 'Repairs to existing pipework and fittings.' },
      { title: 'Plumbing maintenance', text: 'Ongoing maintenance and inspections.' },
      { title: 'Borehole installation & plumbing', text: 'Borehole systems and the plumbing that connects them.' },
      { title: 'Septic tank construction', text: 'Septic tank installation.' },
      { title: 'Soakaway construction', text: 'Soakaway pit construction and maintenance.' },
    ],
    related: ['building-construction', 'civil-infrastructure', 'fencing-electrical-maintenance'],
  },
  {
    slug: 'roofing-interiors',
    title: 'Roofing & interiors',
    eyebrow: 'ROOFING & INTERIORS',
    headline: 'Protect the structure. Finish the space.',
    intro: 'Roofing, ceilings, tiling, painting and waterproofing for residential and commercial buildings.',
    summary: 'Protect the structure and bring the interior together. Roofing, waterproofing, ceilings and finishes each play a part in making a building ready for everyday use.',
    tags: 'Roofing / Ceilings / Tiling & painting',
    image: '/images/projects/project-13.jpeg',
    imageAlt: 'Roofed commercial buildings at a completed external works site',
    overviewHeading: 'From the roofline to the final coat.',
    overview: [
      'We install and repair IBR and tile roofs, and handle the interior fit-out beneath them: ceilings, tiling and painting.',
      'Waterproofing ties the two together, protecting the building and the finishes inside it.',
    ],
    offerings: [
      { title: 'IBR roofing', text: 'IBR roof installation and repairs.' },
      { title: 'Tile roofing', text: 'Tile roof installation and maintenance.' },
      { title: 'Roof repairs', text: 'Repairs to existing roofs.' },
      { title: 'Gypsum ceilings', text: 'Gypsum ceiling installation.' },
      { title: 'PVC ceilings', text: 'PVC ceiling installation and repairs.' },
      { title: 'Floor & wall tiling', text: 'Tiling for floors and walls.' },
      { title: 'Interior & exterior painting', text: 'Painting inside and out.' },
      { title: 'Waterproofing', text: 'Waterproofing for roofs and building surfaces.' },
    ],
    related: ['building-construction', 'plumbing-water-solutions', 'fencing-electrical-maintenance'],
  },
  {
    slug: 'fencing-electrical-maintenance',
    title: 'Fencing, electrical & maintenance',
    eyebrow: 'FENCING, ELECTRICAL & MAINTENANCE',
    headline: 'Secure, power and care for your property.',
    intro: 'Security fencing, electrical installations and general building maintenance for homes and businesses.',
    summary: 'Look after the places you have already invested in. We support property improvements, electrical work, fencing and ongoing repairs around the needs of your site.',
    tags: 'Electrical / Fencing / Maintenance',
    image: '/images/services/electrical-fencing.webp',
    imageAlt: 'Electrical contractor working beside a palisade perimeter fence',
    overviewHeading: 'Looking after what you have built.',
    overview: [
      'We install palisade, razor wire and diamond mesh fencing, carry out electrical installations and provide general building maintenance.',
      'Together these keep residential and commercial properties secure, working and well kept.',
    ],
    offerings: [
      { title: 'Palisade fencing', text: 'Palisade fence installation.' },
      { title: 'Razor wire fencing', text: 'Razor wire for perimeter security.' },
      { title: 'Diamond mesh fencing', text: 'Diamond mesh fence installation.' },
      { title: 'Electrical installations', text: 'Electrical installation for homes and businesses.' },
      { title: 'General building maintenance', text: 'Ongoing repairs and upkeep for your property.' },
    ],
    related: ['building-construction', 'paving-external-works', 'plumbing-water-solutions'],
  },
];

export function getService(slug: string) {
  const service = services.find(item => item.slug === slug);
  if (!service) throw new Error(`Unknown service: ${slug}`);
  return service;
}
