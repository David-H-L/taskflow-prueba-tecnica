type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function StatusSelect({ value, onChange }: Props) {
  return (
    <div className="mb-3">
      <label className="block text-sm font-medium">Estado</label>

      <select
        name="status"
        value={value}
        onChange={onChange}
        className="w-full border rounded-lg px-3 py-2 mt-1"
      >
        <option value="PENDING">Pendiente</option>
        <option value="IN_PROGRESS">En progreso</option>
        <option value="COMPLETED">Completado</option>
      </select>
    </div>
  );
}
