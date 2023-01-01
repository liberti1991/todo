import { UseFormReset } from "react-hook-form";

export interface IId {
  id: string;
}

export interface ISubmitTask {
  title: string;
  description: string;
}

export interface ITask extends IId, ISubmitTask {}

export interface ILoadTask {
  taskSet(myTask: ITask[]): void;
}

export interface IOnSubmitTask {
  data: ISubmitTask;
  reset: UseFormReset<ISubmitTask>;
  taskSet(newTask: ITask[]): void;
}

export interface IDeleteTask extends IId {
  task: ITask[];
  taskSet(filterTask: ITask[]): void;
}
