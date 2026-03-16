import { useState, useEffect } from 'react';
import TextField from '@/components/ui/textField';
import TextAreaField from '@/components/ui/textAreaField';
import { HandleChange } from '@/types/modals';
import Button from '@/components/ui/button';

export type UpdateProjectDada = {
  id: string;
  name: string;
  description: string | null;
};

type UpdateProjectProps = {
  isOpen: boolean;
  project: UpdateProjectDada;
  onClose: () => void;
  onSubmit: (project: UpdateProjectDada) => void;
};

export default function UpdateProject({
  isOpen,
  project,
  onClose,
  onSubmit,
}: UpdateProjectProps) {
  const [form, setForm] = useState<UpdateProjectDada>(project);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    //Reload when we change the edit modal
    setForm(project);
  }, [project]);

  const handleChange = (e: HandleChange) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      newErrors.name = 'El título es obligatorio';
    }

    if (!(form.description ?? '').trim()) {
      newErrors.description = 'La descripción es obligatoria';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    onSubmit({
      ...form,
      description: form.description ?? '',
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
          Actualizar proyecto
        </h2>

        <div className="space-y-4">
          <TextField
            label="Nombre"
            name="name"
            value={form.name}
            onChange={handleChange}
            error={errors.name}
          />

          <TextAreaField
            label="Descripción"
            name="description"
            value={form.description ?? ''}
            onChange={handleChange}
            error={errors.description}
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-3 mt-6">
          <Button color="secondary" onClick={handleClose}>
            Cancelar
          </Button>

          <Button onClick={handleSubmit}>Actualizar</Button>
        </div>
      </div>
    </div>
  );
}
