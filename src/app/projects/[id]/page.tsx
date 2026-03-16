import Table from '@/components/tasks/table';
import { getProjectWithTasks } from '@/actions/projectActions';
import SidebarToggle from '@/components/sidebar/sidebarToggle';
import ProjectActionsHeader from '@/components/projects/projectActionsHeader';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Detail({ params }: PageProps) {
  const { id } = await params;
  const projectWithTasks = await getProjectWithTasks(id);

  return (
    <div>
      <header className="p-4 flex justify-between bg-white">
        <div className="flex gap-2">
          <SidebarToggle />
          <h2 className="text-2xl font-bold">Proyectos</h2>
        </div>
        <input
          type="number"
          placeholder="buscar por id"
          className="border border-gray-500 rounded-[5px]"
        />
      </header>

      {projectWithTasks && (
        <ProjectActionsHeader
          project={{
            id: projectWithTasks.id,
            name: projectWithTasks.name,
            description: projectWithTasks.description,
            createdAt: projectWithTasks.createdAt,
          }}
        />
      )}

      <main className="p-4">
        <Table taskDetil={projectWithTasks?.tasks ?? []} projectId={id} />
      </main>
    </div>
  );
}
