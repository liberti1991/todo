import { v4 as uuid } from "uuid";
import { IDeleteTask, ILoadTask, IOnSubmitTask } from "../interfaceTask";

export const useTaskList = () => {
  const loadTask = ({ taskSet }: ILoadTask) => {
    const myTask: any = localStorage.getItem("@Task") || [];

    taskSet(JSON.parse(myTask) || [""]);
  };

  const onSubmitTask = ({ data, reset, taskSet }: IOnSubmitTask) => {
    const id = uuid();
    const newTask = {
      id,
      title: data.title,
      description: data.description,
    };

    const myTask: any = localStorage.getItem("@Task");

    let savedTask = JSON.parse(myTask) || [];

    const sendTask = [...savedTask, newTask];

    localStorage.setItem("@Task", JSON.stringify(sendTask));
    taskSet([...savedTask, newTask]);

    reset();
  };

  const deleteTask = ({ id, task, taskSet }: IDeleteTask) => {
    let filterTask = task.filter((item) => {
      return item.id !== id;
    });

    taskSet(filterTask);

    localStorage.setItem("@Task", JSON.stringify(filterTask));
  };

  return { loadTask, onSubmitTask, deleteTask };
};
