import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";

import { IDeleteTask, ILoadTask, IOnSubmitTask, IOnSubmitUpdateTask } from "../interfaceTask";

export const useTaskList = () => {
  const loadTask = ({ taskSet }: ILoadTask) => {
    const myTask: any = localStorage.getItem("@Task");

    if (myTask === null) {
      return taskSet([]);
    } else {
      taskSet(JSON.parse(myTask) || []);
    }
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

    toast.success("Tarefa criada com sucesso!");

    reset();
  };

  const onSubmitUpdateTask = ({
    data,
    task,
    taskSet,
    captureTask,
    funcClose,
  }: IOnSubmitUpdateTask) => {
    const updateTaskItems = {
      id: captureTask!.id,
      title: data.title,
      description: data.description,
    };

    const filterTaskItems = task.filter((item) => {
      return item.id !== captureTask!.id;
    });

    const sendTask = [...filterTaskItems, updateTaskItems];
    localStorage.setItem("@Task", JSON.stringify(sendTask));

    taskSet([...filterTaskItems, updateTaskItems]);

    toast.success("Tarefa atualizada com sucesso!");
    funcClose();
  };

  const deleteTask = ({ id, task, taskSet }: IDeleteTask) => {
    let filterTask = task.filter((item) => {
      return item.id !== id;
    });

    taskSet(filterTask);

    toast.warn("Tarefa Removida com Sucesso!", {
      icon: "☢️",
    });

    localStorage.setItem("@Task", JSON.stringify(filterTask));
  };

  return { loadTask, onSubmitTask, onSubmitUpdateTask, deleteTask };
};
