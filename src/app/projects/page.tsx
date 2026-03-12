import ProjectCard from '@/components/projects/projectCard';
import { getProjects } from '@/actions/projectActions';
import SidebarToggle from '@/components/sidebar/sidebarToggle';
import LinkButton from '@/components/ui/linkButton';
export default async function Project() {
  const projects = await getProjects();
  return (
    <div>
      <header className="p-4 flex justify-between bg-white">
        <div className="flex gap-2">
          <SidebarToggle />
          <h2 className="text-2xl font-bold">Projects</h2>
        </div>
        <LinkButton link="/projects/new">Crear nuevo proyecto</LinkButton>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            color={project.color}
            tasks={project.tasks}
          />
        ))}
      </section>
    </div>
  );
}
