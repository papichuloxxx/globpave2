import ServiceDetail from '../../components/ServiceDetail';
import { getService } from '../../service-data';

export default function RoofingInteriorsPage() {
  return <ServiceDetail service={getService('roofing-interiors')} />;
}
