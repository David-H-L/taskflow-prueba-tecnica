import ProjectCard from '@/components/projects/projectCard';
import { getProjects } from '@/actions/projectActions';
import Button from '@/components/ui/button';
export default async function Project() {
  const projects = await getProjects();
  return (
    <div>
      <header className="p-4 pb-0 flex justify-between">
        <h2 className="text-2xl font-bold">Projects</h2>
        <Button>Crear nuevo proyecto</Button>
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
