import ServiceDetail from '../../components/ServiceDetail';
import { getService } from '../../service-data';

export default function PavingExternalWorksPage() {
  return <ServiceDetail service={getService('paving-external-works')} />;
}
