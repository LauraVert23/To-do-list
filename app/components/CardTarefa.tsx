import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { useLocalStorage } from "usehooks-ts";
import type { ITarefaStorage } from "~/interfaces/tarefa-interface";

interface Props {
  data: ITarefaStorage;
  index: number;
}

function CardTarefa({ data, index }: Props) {
  const [botaoExcluir, setBotaoExcluir] = useState(false);
  const [botaoEditar, setBotaoEditar] = useState(false);
  const [tarefas, setTarefas] = useLocalStorage<Props[]>("tarefas", []);

  const excluirTarefa = (index: number) => {
    const novasTarefas = tarefas.filter((atual, i) => i !== index);
    setTarefas(novasTarefas);
  };

  const editarTarefa = (index: number) => {};

  const [concluida, setConcluida] = useState(false);
  const estado = (index: number) => {
    setConcluida(!concluida);
    const novasTarefas = tarefas.map((tarefa, i) =>
      i === index ? { ...tarefa, estado: !concluida } : tarefa
    );
    setTarefas(novasTarefas);
  };

  return (
    <div className="w-[300px] min-h-[200px]  dark:bg-cyan-800 shadow-md rounded-lg p-4 flex flex-col justify-between ">
      <div className="flex-grow">
        <div className="flex gap-3">
          <h2 className="text-lg font-bold text-cyan-700 dark:text-white">
            {data.title}

            <HiDotsVertical
              onClick={() => {
                setBotaoExcluir(!botaoExcluir);
                setBotaoEditar(!botaoEditar);
              }}
              className="inline-block ml-2 cursor-pointer"
            />
          </h2>
          {botaoEditar && (
            <button
              className="bg-cyan-700 items-center text-red-200 rounded cursor-pointer p-1 w-[60px]"
              onClick={() => editarTarefa(index)}
            >
              Editar
            </button>
          )}
          {botaoExcluir && (
            <button
              className="bg-cyan-700 items-center text-red-300 rounded cursor-pointer p-1 w-[60px] "
              onClick={() => excluirTarefa(index)}
            >
              Excluir
            </button>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-300">{data.description}</p>
      </div>

      <div className=" flex gap-2.5">
        <input
          onChange={() => estado(index)}
          className=""
          type="checkbox"
        ></input>
        <div>{concluida ? "Concluída" : ""}</div>
      </div>
    </div>
  );
}

export default CardTarefa;
