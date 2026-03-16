import { useState } from 'react';
import { CreateTaskProps, Task, HandleChange } from '@/types/modals';
import TextField from '@/components/ui/textField';
import TextAreaField from '@/components/ui/textAreaField';
import PrioritySelect from '@/components/ui/prioritySelect';
import StatusSelect from '@/components/ui/statusSelect';
import Button from '../ui/button';

export default function CreateTaskModal({
  isOpen,
  onClose,
  onSubmit,
}: CreateTaskProps) {
  const [form, setForm] = useState<Task>({
    title: '',
    description: '',
    priority: 'MEDIUM',
    status: 'PENDING',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: HandleChange) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.title.trim()) {
      newErrors.title = 'El título es obligatorio';
    }

    if (!form.description.trim()) {
      newErrors.description = 'La descripción es obligatoria';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    onSubmit(form);
    setForm({
      title: '',
      description: '',
      priority: 'MEDIUM',
      status: 'PENDING',
    });
    onClose();
  };

  const handleClose = () => {
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-xl p-6 max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl text-center font-semibold text-gray-800">
          Nueva tarea
        </h2>

        <div className="space-y-4">
          <TextField
            label="Título"
            name="title"
            value={form.title}
            onChange={handleChange}
            error={errors.title}
          />

          <TextAreaField
            label="Descripción"
            name="description"
            value={form.description}
            onChange={handleChange}
            error={errors.description}
          />

          <PrioritySelect value={form.priority} onChange={handleChange} />

          <StatusSelect value={form.status} onChange={handleChange} />
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
          <Button color="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button onClick={handleSubmit}>Crear tarea</Button>
        </div>
      </div>
    </div>
  );
}
