import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import { UseLoading } from "../../../context/loading";

import {
  IDeleteTask,
  ILoadTask,
  IOnSubmitTask,
  IOnSubmitUpdateTask,
  ITask,
} from "../interfaceTask";

export const useTaskList = () => {
  const { startLoading, stopLoading } = UseLoading();

  const loadTask = ({ taskSet }: ILoadTask) => {
    startLoading();

    const myTask = localStorage.getItem("@Task");

    if (myTask === null) {
      stopLoading();
      return taskSet([]);
    } else {
      stopLoading();
      taskSet(JSON.parse(myTask));
    }
  };

  const onSubmitTask = ({ data, reset, taskSet }: IOnSubmitTask) => {
    const id = uuid();
    const newTask = {
      id,
      title: data.title,
      description: data.description,
    };

    const myTask: string | null = localStorage.getItem("@Task");

    let savedTask: ITask[] = [];
    if (myTask) {
      savedTask = JSON.parse(myTask) || [];
    }

    const sendTask = [...savedTask, newTask];

    localStorage.setItem("@Task", JSON.stringify(sendTask));
    taskSet([...savedTask, newTask]);

    toast.success("Task created successfully!");

    reset();
  };

  const onSubmitUpdateTask = ({
    data,
    task,
    taskSet,
    captureTask,
    funcClose,
  }: IOnSubmitUpdateTask) => {
    startLoading();
    const updateTaskItems = {
      id: captureTask!.id,
      title: data.title,
      description: data.description,
    };

    const indexArrayTask = task.findIndex((item) => {
      return item.id === captureTask!.id;
    });

    if (indexArrayTask !== -1) {
      task[indexArrayTask] = { ...task[indexArrayTask], ...updateTaskItems };
    }

    localStorage.setItem("@Task", JSON.stringify(task));

    taskSet(task);

    toast.success("Task successfully updated!");
    funcClose();
    stopLoading();
  };

  const deleteTask = ({ id, task, taskSet }: IDeleteTask) => {
    let filterTask = task.filter((item) => {
      return item.id !== id;
    });

    taskSet(filterTask);

    toast.warn("Task removed successfully!", {
      icon: "☢️",
    });

    localStorage.setItem("@Task", JSON.stringify(filterTask));
  };

  return { loadTask, onSubmitTask, onSubmitUpdateTask, deleteTask };
};
