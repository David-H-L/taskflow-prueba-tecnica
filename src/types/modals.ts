import { TaskDetail } from './index';

export type Priority = 'HIGH' | 'MEDIUM' | 'LOW';
export type Status = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';

export interface Task {
  id?: string;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
}

export interface CreateTaskProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (task: Task) => void;
}

export interface EditTaskProps extends CreateTaskProps {
  task: TaskDetail;
}

export type HandleChange = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
>;
