'use client';
import SidebarToggle from '@/components/sidebar/sidebarToggle';
import TextField from '@/components/ui/textField';
import TextAreaField from '@/components/ui/textAreaField';
import { useState } from 'react';
import { HandleChange } from '@/types/modals';
import Button from '@/components/ui/button';
import { createProject } from '@/actions/projectActions';
import Swal from 'sweetalert2';

type CreateProjectProps = {
  name: string;
  description: string;
  color: string;
};

export default function NewProject() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState<CreateProjectProps>({
    name: '',
    description: '',
    color: '#3b82f6',
  });

  const handleChange = (e: HandleChange) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      const project = await createProject(
        form.name,
        form.description,
        form.color
      );

      if (project) {
        Swal.fire({
          title: 'Proyecto creado',
          text: 'El proyecto fue creado con exito!',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
      } else {
        Swal.fire({
          title: 'Error al crear la tarea',
          text: 'No fue posible crear la tarea.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }

      setForm({
        name: '',
        description: '',
        color: '#3b82f6',
      });
    } catch (error) {
      console.error('Error creating project:', error);
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
    }

    if (!form.description.trim()) {
      newErrors.description = 'La descripción es obligatoria';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <div>
      <header className="p-4 bg-white">
        <div className="flex gap-2">
          <SidebarToggle />
          <h2 className="text-[18px] sm:text-2xl font-bold">Crear Proyecto</h2>
        </div>
      </header>
      <main className="p-4">
        <div className="w-full bg-white rounded-xl shadow-md p-4">
          <h3 className="font-bold text-center my-2">Nuevo proyecto</h3>
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
            value={form.description}
            onChange={handleChange}
            error={errors.description}
          />

          <div className="flex flex-col gap-2">
            <label htmlFor="color" className="text-sm font-medium">
              Color del proyecto
            </label>

            <input
              id="color"
              type="color"
              name="color"
              onChange={handleChange}
              value={form.color}
              className="w-14 h-10 border rounded cursor-pointer"
            />
          </div>

          <div className="flex justify-center">
            <Button className="px-10" onClick={handleSubmit}>
              Crear
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
