import ServiceDetail from '../../components/ServiceDetail';
import { getService } from '../../service-data';

export default function BuildingConstructionPage() {
  return <ServiceDetail service={getService('building-construction')} />;
}
