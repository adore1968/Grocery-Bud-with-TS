import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";

export interface Task {
  id: string;
  name: string;
}

export type Tasks = Task[];

export interface Alert {
  show: boolean;
  text: string;
  styles: string;
}

export type HandleChangeProps = ChangeEvent<HTMLInputElement>;

export type HandleSubmitProps = FormEvent<HTMLFormElement>;

export interface AppProviderValue {
  task: Task;
  tasks: Tasks;
  currentId: string;
  alert: Alert;
  taskInitialState: Task;
  handleChange: ({ target }: HandleChangeProps) => void;
  createTask: () => void;
  getStates: (id: string) => void;
  editTask: () => void;
  setCurrentId: Dispatch<SetStateAction>;
  setTask: Dispatch<SetStateAction>;
  showAlert: (show?: boolean, text?: string, styles?: string) => void;
  deleteTask: (id: string) => void;
  clearTasks: () => void;
}
