import ServiceDetail from '../../components/ServiceDetail';
import { getService } from '../../service-data';

export default function CivilInfrastructurePage() {
  return <ServiceDetail service={getService('civil-infrastructure')} />;
}
