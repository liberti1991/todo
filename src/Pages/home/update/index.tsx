import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { schemaTodo } from "../schemaTodo";
import { useTaskList } from "../services";

import { ContainerInput, InputSubmit } from "../stylesMain";

import { ISubmitTask, IUpdateTask } from "../interfaceTask";

export const UpdateTask = ({ captureTask, task, taskSet, funcClose }: IUpdateTask) => {
  const { onSubmitUpdateTask } = useTaskList();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ISubmitTask>({
    resolver: yupResolver(schemaTodo),
    defaultValues: {
      title: captureTask!.title,
      description: captureTask!.description,
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmitUpdateTask({ data, task, taskSet, captureTask, funcClose });
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

      <InputSubmit type="submit" value="Salvar" />
    </form>
  );
};
