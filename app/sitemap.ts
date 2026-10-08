import { MetadataRoute } from 'next';
import { projects } from './project-data';
import { services } from './service-data';
import { site } from './site';

export const dynamic = 'force-static';

type Entry = [path: string, changeFrequency: 'weekly' | 'monthly', priority: number];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    ['/', 'monthly', 1],
    ['/about/', 'monthly', 0.8],
    ['/services/', 'monthly', 0.9],
    ...services.map((service): Entry => [`/services/${service.slug}/`, 'monthly', 0.7]),
    ['/projects/', 'weekly', 0.9],
    ['/process/', 'monthly', 0.6],
    ['/quote/', 'monthly', 0.8],
    ['/contact/', 'monthly', 0.8],
    ...projects.map((project): Entry => [`/projects/${project.id}/`, 'monthly', 0.6]),
  ];

  return entries.map(([path, changeFrequency, priority]) => ({ url: site.url + path, changeFrequency, priority }));
}
