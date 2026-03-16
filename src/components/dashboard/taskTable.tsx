import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-regular-svg-icons';
import { PropsTaskTable } from '@/types/index';
import { statusStyles, priorityDashboardStyles } from '@/utils/styles';
import {
  englishToSpanishStatus,
  englishToSpanishPriority,
} from '@/utils/styles';

export default function TaskTable({ data }: PropsTaskTable) {
  return (
    <div className="w-full bg-white rounded-xl shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">Tareas recientes</h2>
      {data.map((item, index) => {
        return (
          <div key={index}>
            <hr className="text-gray-500" />
            <section className="grid grid-cols-7 text-[10px] sm:text-[14px] m-1">
              <div className="col-span-4 flex">
                <span className="flex items-center justify-center w-10 h-10 bg-blue-300 rounded-full mx-2">
                  <FontAwesomeIcon
                    icon={faListAlt}
                    className="text-2xl text-blue-500"
                  />
                </span>
                <div className="flex flex-col justify-center">
                  <p>{item.taskName}</p>
                  <p>{item.projectName}</p>
                </div>
              </div>
              <div
                className={`col-span-2 my-auto rounded-2xl mx-2 md:mx-6 p-px ${statusStyles[item.state]}`}
              >
                <p className="text-center">
                  {englishToSpanishStatus[item.state]}
                </p>
              </div>
              <div
                className={`col-span-1 my-auto rounded-2xl p-px ${priorityDashboardStyles[item.priority]}`}
              >
                <p className="text-center">
                  {englishToSpanishPriority[item.priority]}
                </p>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
