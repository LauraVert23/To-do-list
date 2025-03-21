import React, { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

interface TarefaProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

function Tarefa({ title, description, children }: TarefaProps) {
  const [botaoExcluir, setBotaoExcluir] = useState(false);
  const [botaoEditar, setBotaoEditar] = useState(false);

  return (
    <div className="w-[300px] min-h-[200px] bg-white dark:bg-cyan-800 shadow-md rounded-lg p-4 flex flex-col justify-between ">
      <div className="flex-grow">
        <div className="flex gap-3">
          <h2 className="text-lg font-bold text-cyan-700 dark:text-white">
            {title}
            <HiDotsVertical
              onClick={() => {
                setBotaoExcluir(!botaoExcluir), setBotaoEditar(!botaoEditar);
              }}
              className="inline-block ml-2 cursor-pointer"
            />
          </h2>
          {botaoEditar && (
            <button
              className="bg-cyan-700 items-center text-red-200 rounded cursor-pointer p-1 w-[60px]"
              onClick={() => alert("Tarefa editada")}
            >
              Editar
            </button>
          )}
          {botaoExcluir && (
            <button
              className="bg-cyan-700 items-center text-red-300 rounded cursor-pointer p-1 w-[60px] "
              onClick={() => alert("Tarefa excluída")}
            >
              Excluir
            </button>
          )}
        </div>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>

      <div className="mt-4 flex gap-2">{children}</div>
    </div>
  );
}

export default Tarefa;
