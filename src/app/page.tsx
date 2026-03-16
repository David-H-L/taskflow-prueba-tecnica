import TasksStatus from '@/components/dashboard/taskStatus';
import TotalCard from '@/components/dashboard/totalCard';
import TaskTable from '@/components/dashboard/taskTable';
import PendingTasksCard from '@/components/dashboard/pendingTaskCard';
import { getNumberProjects } from '@/actions/projectActions';
import SidebarToggle from '@/components/sidebar/sidebarToggle';
import LinkButton from '@/components/ui/linkButton';
import {
  getNumberTasks,
  getTasks,
  getLastTasks,
  getPendingProjectTasks,
} from '@/actions/taskActions';

export default async function DashBoard() {
  const numberProjects = await getNumberProjects();
  const numberTasks = await getNumberTasks();
  const status = await getTasks();
  const lastTasks = await getLastTasks();
  const pendingProjectTasks = await getPendingProjectTasks();

  return (
    <div>
      <header className="p-4 flex justify-between bg-white">
        <div className="flex gap-2">
          <SidebarToggle />
          <h1 className="text-2xl font-bold">Panel principal</h1>
        </div>

        <LinkButton link="/projects/new">Crear nuevo proyecto</LinkButton>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 p-2">
        <div className="md:col-span-2 p-2">
          <TotalCard
            title="Total de proyectos"
            value={numberProjects}
            icon={0}
          />
        </div>
        <div className="md:col-span-2 p-2">
          <TotalCard title="Total de tareas" value={numberTasks} icon={1} />
        </div>
        <div className="md:col-span-4 p-2">
          <TasksStatus data={status} />
        </div>
      </section>
      <div className="lg:grid lg:grid-cols-5">
        <section className="p-4 lg:col-span-3">
          <div>
            <TaskTable data={lastTasks} />
          </div>
        </section>
        <section className="p-4 lg:col-span-2">
          <div className="w-full bg-white rounded-xl shadow-md p-4 h-full">
            <h2 className="text-lg font-semibold mb-2">
              Top 3 Projectos con tareas pendinetes
            </h2>
            {pendingProjectTasks.map((item, index) => (
              <PendingTasksCard
                key={index}
                number={index}
                name={item.name}
                totalTask={item.totalTask}
                pending={item.pending}
              />
            ))}
            <div className="flex justify-center">
              <LinkButton
                link="/projects"
                className="mt-3 w-full sm:w-56 md:w-64 lg:mt-5"
              >
                Ver todos los proyectos
              </LinkButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
