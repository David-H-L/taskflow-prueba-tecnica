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
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};
