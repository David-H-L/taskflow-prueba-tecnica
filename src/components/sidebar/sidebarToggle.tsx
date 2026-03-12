import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default function SidebarToggle() {
  return (
    <label
      htmlFor="menu"
      className="lg:hidden p-2 text-xl bg-gray-400 rounded-xl w-8 h-8 flex items-center justify-center cursor-pointer"
    >
      <FontAwesomeIcon icon={faBars} className="" />
    </label>
  );
}
