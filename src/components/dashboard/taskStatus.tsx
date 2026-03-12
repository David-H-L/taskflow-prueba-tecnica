import { PropsTaskStatus } from '@/types/index';

export default function TasksStatus({ data }: PropsTaskStatus) {
  const maxValue = Math.max(...data.map((item) => item.value));
  return (
    <div className="w-full bg-white rounded-xl shadow-md p-4">
      <h2 className="text-lg md:text-xl font-semibold mb-4">
        Tareas por estado
      </h2>

      <div className="space-y-4">
        {data.map((item) => {
          const percentage = (item.value / maxValue) * 100;

          return (
            <div key={item.label} className="flex items-center gap-3 md:gap-4">
              <span className="w-28 text-sm md:text-base text-gray-700">
                {item.label}
              </span>

              <div className="flex-1 bg-gray-200 rounded-full h-4">
                <div
                  className={`h-4 rounded-full ${item.color}`}
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <span className="text-sm md:text-base font-medium">
                {item.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
