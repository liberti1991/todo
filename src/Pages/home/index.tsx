import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BiPencil, BiTrash } from "react-icons/bi";
import { ISubmitTask, ITask } from "./interfaceTask";
import { useTaskList } from "./services";
import { ContainerInput, ContainerMain, ContainerTaskList, InputSubmit } from "./StylesMain";

export const Home = () => {
  const { handleSubmit, register, reset } = useForm<ISubmitTask>({});
  const { loadTask, onSubmitTask, deleteTask } = useTaskList();

  const [task, taskSet] = useState<ITask[]>([]);

  // const [modal, modalSet] = useState<boolean>(false);
  // const handleModal = () => modalSet(!modal);

  console.log(task);

  useEffect(() => {
    loadTask({ taskSet });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerMain>
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
          </ContainerInput>

          <ContainerInput>
            <textarea
              id="description"
              rows={4}
              placeholder="Descrição da tarefa"
              {...register("description")}
            />
            <label htmlFor="description">Descrição:</label>
          </ContainerInput>
          <InputSubmit type="submit" value="Criar Tarefa" />
        </form>
      </div>

      <div>
        <h3>Lista de Tarefas</h3>

        {task.length === 0 && <p>Não tem tarefas cadastradas</p>}

        {task.map((item: { id: any; title: any }) => (
          <ContainerTaskList key={item.id}>
            <h4>{item.title}</h4>
            <div>
              <BiPencil
                onClick={() => {
                  // modalSet(true);
                }}
              />
              <BiTrash onClick={() => deleteTask({ id: item.id, task, taskSet })} />
            </div>
          </ContainerTaskList>
        ))}
      </div>
    </ContainerMain>
  );
};
