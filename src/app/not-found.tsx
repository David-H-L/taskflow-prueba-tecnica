import LinkButton from '@/components/ui/linkButton';
export default function NotFound() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgb(219,217,217)] z-50">
      <div className="flex flex-col bg-white rounded-xl shadow-md gap-3 p-3 sm:p-10 sm:gap-10">
        <h2 className="text-xl font-bold sm:text-2xl">
          Página no encontrada error 404
        </h2>
        <LinkButton link="/">Regresar al panel principal</LinkButton>
      </div>
    </div>
  );
}
