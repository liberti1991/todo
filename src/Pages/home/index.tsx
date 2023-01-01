import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { BiPencil, BiTrash } from "react-icons/bi";

import { useTaskList } from "./services";

import { Modal } from "../../components/modal";
import { ISubmitTask, ITask } from "./interfaceTask";
import { schemaTodo } from "./schemaTodo";
import { ContainerInput, ContainerMain, ContainerTaskList, InputSubmit } from "./stylesMain";
import { UpdateTask } from "./update";

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
          <h2>O que você vai fazer?</h2>

          <form
            onSubmit={handleSubmit((data) => {
              onSubmitTask({ data, reset, taskSet });
            })}
          >
            <ContainerInput>
              <input id="title" placeholder="Título da tarefa" {...register("title")} />
              <label htmlFor="title">Título:</label>
              <span>{errors?.title?.message}</span>
            </ContainerInput>

            <ContainerInput>
              <textarea
                id="description"
                rows={4}
                placeholder="Descrição da tarefa"
                {...register("description")}
              />
              <label htmlFor="description">Descrição:</label>
              <span>{errors?.description?.message}</span>
            </ContainerInput>

            <InputSubmit type="submit" value="Criar Tarefa" />
          </form>
        </div>

        <div>
          <h4>Lista de Tarefas</h4>

          {task.length === 0 && <p>Não tem tarefas cadastradas</p>}

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
