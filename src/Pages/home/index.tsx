import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { BiPencil, BiTrash } from "react-icons/bi";

import { schemaTodo } from "./schemaTodo";
import { useTaskList } from "./services";
import { UpdateTask } from "./update";

import { Modal } from "../../components/modal";

import { ContainerInput, ContainerMain, ContainerTaskList, InputSubmit } from "./StylesMain";

import { ISubmitTask, ITask } from "./interfaceTask";

export const Home = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<ISubmitTask>({ resolver: yupResolver(schemaTodo) });
  const { loadTask, onSubmitTask, deleteTask } = useTaskList();

  const [task, taskSet] = useState<ITask[]>([]);

  const [modal, modalSet] = useState<boolean>(false);
  const handleModal = () => modalSet(!modal);
  const [captureTask, captureTaskSet] = useState<ITask>();

  useEffect(() => {
    loadTask({ taskSet });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerMain>
      <section>
        <div>
          <h2>Add a task!</h2>

          <form
            onSubmit={handleSubmit((data) => {
              onSubmitTask({ data, reset, taskSet });
            })}
          >
            <ContainerInput>
              <input id="title" placeholder="Ex. Task title" {...register("title")} />
              <label htmlFor="title">title</label>
              <span>{errors?.title?.message}</span>
            </ContainerInput>

            <ContainerInput>
              <textarea
                id="description"
                rows={4}
                placeholder="Ex. Task description"
                {...register("description")}
              />
              <label htmlFor="description">Description:</label>
              <span>{errors?.description?.message}</span>
            </ContainerInput>

            <InputSubmit type="submit" value="Create Task" />
          </form>
        </div>

        <h4>Task List</h4>

        <div>
          {task.length === 0 && <p>No tasks registered!</p>}

          {task.map((item) => (
            <ContainerTaskList key={item.id}>
              <p>{item.title}</p>
              <div>
                <BiPencil
                  onClick={() => {
                    captureTaskSet(item);
                    modalSet(true);
                  }}
                />
                <BiTrash onClick={() => deleteTask({ id: item.id, task, taskSet })} />
              </div>
            </ContainerTaskList>
          ))}
        </div>
      </section>

      {modal && (
        <Modal
          title="Editar tarefa"
          modal={modal}
          funcClose={handleModal}
          children={
            <UpdateTask
              captureTask={captureTask}
              task={task}
              taskSet={taskSet}
              funcClose={handleModal}
            />
          }
        />
      )}
    </ContainerMain>
  );
};
