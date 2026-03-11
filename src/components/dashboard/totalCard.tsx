import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faClipboard } from '@fortawesome/free-regular-svg-icons';
import { PropsTotalCard } from '@/types/dashboard/totalCard';

export default function TotalCard({ title, value, icon }: PropsTotalCard) {
  return (
    <div className="w-full h-full bg-white rounded-xl shadow-md p-4">
      <h2 className="text-lg md:text-xl font-semibold mb-4 sm:mb-6">{title}</h2>
      <div className="flex justify-between">
        <span className="text-4xl sm:text-5xl font-bold">{value}</span>
        {icon === 1 ? (
          <FontAwesomeIcon
            icon={faFolderOpen}
            className="text-4xl text-gray-500 sm:text-5xl"
          />
        ) : (
          <FontAwesomeIcon
            icon={faClipboard}
            className="text-4xl text-gray-500 sm:text-5xl"
          />
        )}
      </div>
    </div>
  );
}
