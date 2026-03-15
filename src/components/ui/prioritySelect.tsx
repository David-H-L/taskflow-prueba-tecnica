type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export default function PrioritySelect({ value, onChange }: Props) {
  return (
    <div className="mb-3">
      <label className="block text-sm font-medium">Prioridad</label>

      <select
        name="priority"
        value={value}
        onChange={onChange}
        className="w-full border rounded-lg px-3 py-2 mt-1"
      >
        <option value="HIGH">Alta</option>
        <option value="MEDIUM">Media</option>
        <option value="LOW">Baja</option>
      </select>
    </div>
  );
}
