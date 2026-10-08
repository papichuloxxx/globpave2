import ServiceDetail from '../../components/ServiceDetail';
import { getService } from '../../service-data';

export default function FencingElectricalMaintenancePage() {
  return <ServiceDetail service={getService('fencing-electrical-maintenance')} />;
}
