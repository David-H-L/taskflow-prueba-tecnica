'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/button';
import { UpdateProjectDada } from './updateProject';
import UpdateProject from './updateProject';
import {
  updateNameDescriptionProject,
  deleteProject,
} from '@/actions/projectActions';
import Swal from 'sweetalert2';

type ProjectProps = {
  id: string;
  name: string;
  description: string | null;
  createdAt: Date;
};

export default function ProjectActionsHeader({
  project,
}: {
  project: ProjectProps;
}) {
  const [projectData, setProjectData] = useState<ProjectProps>(project);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleUpdate = async (updatedProject: UpdateProjectDada) => {
    try {
      const projectFromDB = await updateNameDescriptionProject(
        updatedProject.id,
        updatedProject.name,
        updatedProject.description ?? ''
      );

      if (projectFromDB) {
        Swal.fire({
          title: 'Proyecto actualizado',
          text: 'El proyecto fue actualizado con exito!',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });
      } else {
        Swal.fire({
          title: 'Error al actualizar el proyecto',
          text: 'No fue posible actualizar el proyecto.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        });
      }

      setProjectData((prev) => ({
        ...prev,
        name: projectFromDB.name,
        description: projectFromDB.description,
      }));
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const result = await Swal.fire({
        title: 'Estas seguro de eliminar?',
        text: 'No seras capaz de revertir el proyecto eliminado!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
      });

      if (result.isConfirmed) {
        await deleteProject(id);

        await Swal.fire({
          title: 'Proyecto eliminado!',
          text: 'El proyecto fue eliminada con exito.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
        });

        router.push('/');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <section className="p-4 md:flex justify-between">
      <div>
        <h2 className="font-bold text-xl">{projectData.name}</h2>
        <p>{projectData.description}</p>
        <span>Creado el: {projectData.createdAt.toLocaleDateString()}</span>
      </div>

      <div className="flex justify-end gap-4 md:justify-items-start">
        <Button className="h-10" onClick={() => setIsModalOpen(true)}>
          Editar Proyecto
        </Button>
        <Button
          className="h-10"
          color="danger"
          onClick={() => handleDelete(projectData.id)}
        >
          Eliminar proyecto
        </Button>
      </div>
      <UpdateProject
        isOpen={isModalOpen}
        project={{
          id: projectData.id,
          name: projectData.name,
          description: projectData.description,
        }}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleUpdate}
      />
    </section>
  );
}
