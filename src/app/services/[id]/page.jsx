import ServiceDetailClient from './ServiceDetailClient';
import { serviceIds } from '../../../data/services';

export function generateStaticParams() {
    return serviceIds.map((id) => ({
        id: id,
    }));
}

export default function ServiceDetailPage() {
    return <ServiceDetailClient />;
}
