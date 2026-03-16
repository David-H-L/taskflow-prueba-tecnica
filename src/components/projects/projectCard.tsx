import Link from 'next/link';
import { ProjectCardProps } from '@/types/index';

export default function ProjectCard({
  id,
  name,
  description,
  color,
  tasks,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`}>
      <article className="bg-white rounded-xl shadow-md cursor-pointer p-5 flex flex-col gap-4 ">
        <header className="flex flex-col gap-3">
          <div className="flex justify-between">
            <h3 className="font-semibold text-lg line-clamp-1">{name}</h3>
            <span
              className="w-5 h-5 rounded-full"
              style={{ backgroundColor: color }}
            />
          </div>
          <div>
            <p className="text-gray-500 text-[13px] line-clamp-2">
              {description}
            </p>
          </div>
        </header>

        <footer className="grid grid-cols-3 gap-4 mt-auto text-sm">
          <div className="flex flex-col">
            <span className="text-gray-500 sm:text-[12px] lg:text-[10px] xl:text-[12px]">
              Completado
            </span>
            <span className="font-semibold text-green-600">
              {tasks.completed}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 sm:text-[12px] lg:text-[10px] xl:text-[12px]">
              En progreso
            </span>
            <span className="font-semibold text-blue-600">
              {tasks.inProgress}
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-gray-500 sm:text-[12px] lg:text-[10px] xl:text-[12px]">
              Pendiente
            </span>
            <span className="font-semibold text-red-500">{tasks.pending}</span>
          </div>
        </footer>
      </article>
    </Link>
  );
}
