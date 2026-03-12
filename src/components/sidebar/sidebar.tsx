import Link from 'next/link';
export default function Sidebar() {
  return (
    <div>
      <input type="checkbox" id="menu" className="peer hidden" />

      <label
        htmlFor="menu"
        className="
        fixed inset-0 bg-black/40 lg:hidden
        opacity-0 pointer-events-none
        peer-checked:opacity-100
        peer-checked:pointer-events-auto
        transition
        "
      />

      <aside
        className="
        fixed top-0 left-0 h-full w-64 bg-gray-900 text-white
        transform transition-transform duration-300
        -translate-x-full
        peer-checked:translate-x-0
        lg:translate-x-0
        "
      >
        <div className="p-6 text-lg font-bold border-b border-gray-700">
          TaskFlow
        </div>

        <nav className="flex flex-col p-4 gap-4">
          <Link href="/">Dashboard</Link>
          <Link href="/projects">Projects</Link>
          <Link href="#">Tasks</Link>
        </nav>
      </aside>
    </div>
  );
}
