import { projects } from '../../../data/projects';
import ProjectDetailClient from './ProjectDetailClient';

export function generateStaticParams() {
    return Object.keys(projects).map((id) => ({
        id: id,
    }));
}

export default function ProjectDetailPage() {
    return <ProjectDetailClient />;
}
