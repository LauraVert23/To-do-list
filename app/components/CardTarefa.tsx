import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { useLocalStorage } from "usehooks-ts";
import type { ITarefaStorage } from "~/interfaces/tarefa-interface";
import EditarTarefa from "./EditarTarefa";

function CardTarefa({ data }: { data: ITarefaStorage }) {
  const [botaoExcluir, setBotaoExcluir] = useState(false);
  const [botaoEditar, setBotaoEditar] = useState(false);
  const [tarefas, setTarefas] = useLocalStorage<ITarefaStorage[]>(
    "tarefas",
    []
  );
  const [mostrarEditar, setMostrarEditar] = useState(false);

  const excluirTarefa = (id: number) => {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(novasTarefas);
  };

  const estado = (id: number) => {
    const novasTarefas = tarefas.map((tarefa, i) =>
      tarefa.id === id ? { ...tarefa, estado: !tarefa.estado } : tarefa
    );
    setTarefas(novasTarefas);
  };

  const setEditarExcluir = () => {
    setBotaoExcluir(!botaoExcluir);
    setBotaoEditar(!botaoEditar);
  };

  return (
    <div
      className="w-[230px] min-h-[80px] sm:min-h-[150px] lg:w-[300px] lg:min-h-[200px] dark:bg-cyan-800 shadow-md rounded-lg p-4 flex flex-col 
      justify-between hover:scale-105 duration-200 ease-in"
    >
      <div className="flex-grow">
        <div className="flex gap-1 flex-col">
          <h2 className="text-lg font-bold text-cyan-700 dark:text-white ">
            {data.title}
            <HiDotsVertical
              className="inline-block cursor-pointer justify-between"
              onClick={() => {
                setEditarExcluir();
              }}
            />
          </h2>
          <div className="flex lg:gap-3 gap-1">
            {botaoEditar && (
              <button
                className="bg-cyan-700 items-center text-red-200 rounded cursor-pointer p-0.5 w-[60px] h-[25px] lg:h-[40px]"
                onClick={() => {
                  setMostrarEditar(!mostrarEditar);
                  setEditarExcluir();
                }}
              >
                Editar
              </button>
            )}
            {botaoExcluir && (
              <button
                className="bg-cyan-700 items-center text-red-300 rounded cursor-pointer p-0.5 w-[60px] h-[25px] lg:h-[40px]"
                onClick={() => {
                  excluirTarefa(data.id);
                  setEditarExcluir();
                }}
              >
                Excluir
              </button>
            )}
          </div>
        </div>
        <p className="lg:mt-5 mt-1 text-gray-600 dark:text-gray-300">
          {data.description}
        </p>
      </div>

      <div className=" flex gap-2.5 mt-1 ">
        <input
          onChange={() => estado(data.id)}
          className="cursor-pointer accent-pink-500"
          type="checkbox"
          checked={data.estado}
        ></input>
        <div>{data.estado ? "Concluída" : ""}</div>

        <div className="scheme-light ">
          <input
            type="date"
            value={
              data.data ? new Date(data.data).toISOString().split("T")[0] : ""
            }
            readOnly
          />
        </div>
      </div>

      <div className="flex">
        {mostrarEditar && <EditarTarefa data={data} />}
      </div>
    </div>
  );
}

export default CardTarefa;
