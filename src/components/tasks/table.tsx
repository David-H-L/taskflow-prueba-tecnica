'use client';
import { useState } from 'react';
import {
  createTask,
  updateTask,
  deleteTask,
  updateTaskStatus,
} from '@/actions/taskActions';
import {
  statusStyles,
  priorityTextStyles,
  priorityBgStyles,
  englishToSpanishPriority,
} from '@/utils/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { TaskDetail, Status } from '@/types/index';

import CreateTaskModal from '@/components/tasks/createTask';
import EditTaskModal from '@/components/tasks/editTask';
import Button from '@/components/ui/button';

export default function Table({
  taskDetil,
  projectId,
}: {
  taskDetil: TaskDetail[];
  projectId: string;
}) {
  const [tasks, setTasks] = useState(taskDetil);

  const [isModalOpen, setIsModalOpen] = useState({
    isOpenCreateTask: false,
    isOpenUpdateTask: false,
  });
  const [editingTask, setEditingTask] = useState<TaskDetail | null>(null);

  const [filterPriority, setFilterPriority] = useState<string>('ALL');

  const filteredTasks =
    filterPriority === 'ALL'
      ? tasks
      : tasks.filter((task) => task.priority === filterPriority);

  const changeStatus = async (id: string, status: Status) => {
    try {
      const updatedTask = await updateTaskStatus(id, status);

      setTasks((prev) =>
        prev.map((task) =>
          task.id === id ? { ...task, status: updatedTask.status } : task
        )
      );
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      const data = await deleteTask(id);
      console.log(data);
      setTasks((prev) => prev.filter((task) => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  const hadleUpdateTask = async (updatedTask: TaskDetail) => {
    if (!editingTask) return;

    try {
      const taskFromDB = await updateTask(updatedTask.id!, {
        title: updatedTask.title,
        description: updatedTask.description,
        status: updatedTask.status,
        priority: updatedTask.priority,
      });

      setTasks((prev) =>
        prev.map((task) => (task.id === taskFromDB.id ? taskFromDB : task))
      );

      setEditingTask(null);

      setIsModalOpen({
        isOpenCreateTask: false,
        isOpenUpdateTask: false,
      });
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleCreateTask = async (task: TaskDetail) => {
    try {
      const newTask = await createTask({
        title: task.title,
        description: task.description,
        priority: task.priority,
        status: task.status,
        project: {
          connect: {
            id: projectId,
          },
        },
      });

      setTasks((prev) => [...prev, newTask]);
      setIsModalOpen({
        isOpenCreateTask: false,
        isOpenUpdateTask: false,
      });
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };
  return (
    <div className="w-full bg-white rounded-xl shadow p-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <h2 className="text-gray-700 font-semibold">
          Tareas totales ({tasks.length})
        </h2>

        <div className="flex gap-3">
          <select
            value={filterPriority}
            onChange={(e) => setFilterPriority(e.target.value)}
            className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg text-sm"
          >
            <option value={'ALL'}>Filtrar por prioridad</option>
            <option value={'HIGH'}>Alta</option>
            <option value={'MEDIUM'}>Media</option>
            <option value={'LOW'}>Baja</option>
          </select>

          <Button
            onClick={() => {
              setIsModalOpen({
                isOpenCreateTask: true,
                isOpenUpdateTask: false,
              });
            }}
          >
            Añadir tarea
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto overflow-y-auto max-h-[60vh]">
        <table className="w-full min-w-162.5">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="text-left py-3">Nombre</th>
              <th className="text-left">Prioridad</th>
              <th className="text-left">Estado</th>
              <th className="text-right">Acciones</th>
            </tr>
          </thead>

          <tbody>
            {filteredTasks.map((task) => (
              <tr
                key={task.id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-4 font-medium text-gray-700">{task.title}</td>

                <td>
                  <div
                    className={`flex items-center gap-2 font-medium ${priorityTextStyles[task.priority]}`}
                  >
                    <span
                      className={`w-3 h-3 rounded ${priorityBgStyles[task.priority]}`}
                    />
                    {englishToSpanishPriority[task.priority]}
                  </div>
                </td>

                <td>
                  <select
                    value={task.status}
                    onChange={
                      (e) =>
                        task.id &&
                        changeStatus(task.id, e.target.value as Status) //I have to fix this
                    }
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusStyles[task.status]}`}
                  >
                    <option value="PENDING">Pendiente</option>
                    <option value="IN_PROGRESS">En progreso</option>
                    <option value="COMPLETED">Completado</option>
                  </select>
                </td>

                <td className="text-right">
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => {
                        setEditingTask(task);
                        setIsModalOpen({
                          isOpenCreateTask: false,
                          isOpenUpdateTask: true,
                        });
                      }}
                      className="text-gray-500 hover:text-blue-600"
                    >
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </button>

                    <button
                      onClick={() => task.id && handleDeleteTask(task.id)}
                      className="text-gray-500 hover:text-red-600"
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <CreateTaskModal
          isOpen={isModalOpen.isOpenCreateTask}
          onClose={() =>
            setIsModalOpen({
              isOpenCreateTask: false,
              isOpenUpdateTask: false,
            })
          }
          onSubmit={handleCreateTask}
        />
        {editingTask && (
          <EditTaskModal
            isOpen={isModalOpen.isOpenUpdateTask}
            task={editingTask}
            onClose={() =>
              setIsModalOpen({
                isOpenCreateTask: false,
                isOpenUpdateTask: false,
              })
            }
            onSubmit={hadleUpdateTask}
          />
        )}
      </div>
    </div>
  );
}
