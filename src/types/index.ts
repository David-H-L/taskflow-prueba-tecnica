export type Task = {
  number: number;
  name: string;
  totalTask: number;
  pending: number;
};

type TaskStatus = {
  label: string;
  value: number;
  color: string;
};

export type PropsTaskStatus = {
  data: TaskStatus[];
};

type TaskTable = {
  taskName: string;
  projectName: string;
  createAt: Date;
  state: string;
  priority: string;
};

export type PropsTaskTable = {
  data: TaskTable[];
};

export type PropsTotalCard = {
  title: string;
  value: number;
  icon: number;
};

export type ButtonProps = {
  children: React.ReactNode;
  color?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
  type?: 'button';
};

type ProgressStatus = {
  completed: number;
  inProgress: number;
  pending: number;
};

export type ProjectCardProps = {
  id: string;
  name: string;
  description: string;
  color: string;
  tasks: ProgressStatus;
};

export type Status = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED';
type Priority = 'HIGH' | 'MEDIUM' | 'LOW';

export interface TaskDetail {
  id?: string;
  title: string;
  description?: string | null;
  priority: Priority; //
  status: Status; //
  projectId?: string;
}
