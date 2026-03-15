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
      const projectFromDB = await deleteProject(id);
      console.log(projectFromDB);
      // redirige a la lista de proyectos o dashboard
      router.push('/');
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
          id: project.id,
          name: project.name,
          description: project.description,
        }}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleUpdate}
      />
    </section>
  );
}
