import ServiceDetail from '../../components/ServiceDetail';
import { getService } from '../../service-data';

export default function PlumbingWaterSolutionsPage() {
  return <ServiceDetail service={getService('plumbing-water-solutions')} />;
}
