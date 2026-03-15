import { Task } from '@/types/index';

export default function PendingTasksCard({
  number,
  name,
  totalTask,
  pending,
}: Task) {
  const completed = totalTask - pending;
  const percentage = Math.round((completed / totalTask) * 100);

  return (
    <article className="py-2">
      <hr className="text-gray-500" />

      <div className="grid grid-cols-15 ">
        <div className="col-span-1 flex items-center justify-center">
          <strong className="bg-gray-400 font-bold w-6 h-6 rounded-lg flex items-center justify-center">
            {number + 1}
          </strong>
        </div>
        <div className="col-span-14 ml-2 sm:ml-0 lg:ml-2">
          <header className="flex justify-between text-[11px] sm:text-[14px]">
            <h3>
              {name} - {pending} pendiente
            </h3>
            <span>{percentage} % completado</span>
          </header>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-blue-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
