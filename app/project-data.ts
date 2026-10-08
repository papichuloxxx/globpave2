export type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  services: string[];
};

export const projects: Project[] = [
  { id: 1, title: 'Commercial paving & drainage', category: 'Commercial', image: 'project-01.jpeg', services: ['paving-external-works', 'civil-infrastructure'], description: 'A broad paved surface alongside industrial buildings, with a channel drain at the edge. Surface levels and water management are central considerations for spaces like these.' },
  { id: 2, title: 'A foundation for the final surface', category: 'Groundworks', image: 'project-10.jpeg', services: ['civil-infrastructure'], description: 'Ground preparation across a commercial site. The work before paving establishes the levels and base that support the finished surface.' },
  { id: 3, title: 'Paving, laid with care', category: 'Work in progress', image: 'project-03.jpeg', services: ['paving-external-works'], description: 'The team laying interlocking blocks beside a brick building. A closer view of alignment, edge work and hands-on installation.' },
  { id: 4, title: 'Space to arrive and park', category: 'Commercial', image: 'project-04.jpeg', services: ['paving-external-works'], description: 'Paved parking bays outside a row of commercial buildings, with marked spaces and a clear pedestrian edge.' },
  { id: 5, title: 'A path through the garden', category: 'Outdoor spaces', image: 'project-20.jpeg', services: ['paving-external-works'], description: 'A patterned paved driveway framed by established planting. The changing tones of the blocks add definition to the route through the garden.' },
  { id: 6, title: 'Preparing the way', category: 'Groundworks', image: 'project-14.jpeg', services: ['civil-infrastructure'], description: 'Earthmoving equipment working beside a building. Access, ground conditions and the intended surface all inform this stage of a project.' },
  { id: 7, title: 'Colour along the approach', category: 'Outdoor spaces', image: 'project-24.jpeg', services: ['paving-external-works'], description: 'A red paved approach with contrasting edges beside a lawn. A simple material palette gives the driveway a distinct character.' },
  { id: 8, title: 'Progress on site', category: 'Work in progress', image: 'project-12.jpeg', services: ['building-construction'], description: 'A view of a residential site during ongoing work, showing the building, outdoor areas and the team on site.' },
  { id: 9, title: 'A yard paved end to end', category: 'Commercial', image: 'project-13.jpeg', services: ['paving-external-works', 'civil-infrastructure'], description: 'An open commercial yard finished in interlocking paving between warehouse buildings, with room for vehicles to turn and load.' },
  { id: 10, title: 'Bays beside the units', category: 'Commercial', image: 'project-05.jpeg', services: ['paving-external-works'], description: 'Marked parking bays along a row of commercial units, with bollards protecting the walkway in front of the shopfronts.' },
  { id: 11, title: 'Two tones in herringbone', category: 'Pattern & detail', image: 'project-25.jpeg', services: ['paving-external-works'], description: 'Red and charcoal blocks laid in a herringbone pattern. The contrast turns a simple path into a feature.' },
  { id: 12, title: 'Colour in three tones', category: 'Pattern & detail', image: 'project-23.jpeg', services: ['paving-external-works'], description: 'Yellow, white and grey pavers set in a pattern that reads as a three-dimensional surface.' },
  { id: 13, title: 'Interlocking curves', category: 'Pattern & detail', image: 'project-22.jpeg', services: ['paving-external-works'], description: 'Rounded interlocking pavers in grey and white tones, creating texture across the whole surface.' },
  { id: 14, title: 'Choosing the block', category: 'Pattern & detail', image: 'project-17.jpeg', services: ['paving-external-works'], description: 'Paver samples in different shapes and colours. Choosing the block is one of the first decisions that shapes how a paved space looks.' },
  { id: 15, title: 'Blocks going down', category: 'Work in progress', image: 'project-07.jpeg', services: ['paving-external-works'], description: 'Interlocking blocks being laid across a prepared base, with the next stacks ready to place.' },
  { id: 16, title: 'Paving along the building line', category: 'Work in progress', image: 'project-06.jpeg', services: ['paving-external-works'], description: 'A paved walkway taking shape along the side of a building, with the edge worked in close to the wall.' },
  { id: 17, title: 'Setting out the levels', category: 'Groundworks', image: 'project-16.jpeg', services: ['civil-infrastructure'], description: 'Survey equipment set up on site. Accurate levels at the start help water drain where it should once the surface is finished.' },
  { id: 18, title: 'Grading and compaction', category: 'Groundworks', image: 'project-15.jpeg', services: ['civil-infrastructure'], description: 'Plant shaping and wetting the ground across a commercial site, building up a firm base for the surface to come.' },
  { id: 19, title: 'A membrane beneath the base', category: 'Groundworks', image: 'project-21.jpeg', services: ['civil-infrastructure'], description: 'Geotextile laid out alongside a building before the base layers go down, helping to separate and stabilise the ground.' },
  { id: 20, title: 'Plant arriving on site', category: 'Groundworks', image: 'project-08.jpeg', services: ['civil-infrastructure'], description: 'Heavy equipment delivered to a commercial site ready for earthworks to begin.' },
];

export const projectCategories = ['All work', ...new Set(projects.map(project => project.category))];
