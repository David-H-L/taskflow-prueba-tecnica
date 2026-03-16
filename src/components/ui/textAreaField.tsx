type Props = {
  label: string;
  name: string;
  value: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function TextAreaField({
  label,
  name,
  value,
  error,
  onChange,
}: Props) {
  return (
    <div className="mb-3">
      <label className="block text-sm font-medium">{label}</label>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded-lg px-3 py-2 mt-1"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
