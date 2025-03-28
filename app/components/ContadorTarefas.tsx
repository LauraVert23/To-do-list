import { useLocalStorage } from "usehooks-ts";
import type { ITarefaStorage } from "~/interfaces/tarefa-interface";
import { useState, useEffect } from "react";

function ContadorTarefas() {
  const [tarefas] = useLocalStorage<ITarefaStorage[]>("tarefas", []);
  const [contConcluidas, setContConcluidas] = useState(0);
  const [contEmAndamento, setContEmAndamento] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const concluidas = tarefas.filter((tarefa) => tarefa.estado).length;
    setContConcluidas(concluidas);
    const emAndamento = tarefas.filter(
      (tarefa) => tarefa.estado == false
    ).length;
    setContEmAndamento(emAndamento);
    setTotal(concluidas + emAndamento);
  });

  return (
    <div className="p-2  flex-col bg-cyan-800 rounded-lg shadow-md ml-10 w-[220px] ">
      <div className="flex gap-3 ml-2 justify-between ">
        <h1>Concluídas</h1>
        <div className="flex">
          <p className="mr-3 text-gray-600 dark:text-gray-300">
            {contConcluidas}
          </p>
          <span className="relative flex size-2 mt-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-500 opacity-100"></span>
            <span className="relative inline-flex size-2 rounded-full bg-sky-400"></span>
          </span>
        </div>
      </div>
      <div className="flex  gap-3 ml-2 justify-between ">
        <h1>Pendentes</h1>
        <p className="mr-5 text-gray-600 dark:text-gray-300">
          {contEmAndamento}
        </p>
      </div>

      <div className="flex gap-3 ml-2 justify-between">
        <h1>Total</h1>
        <p className="mr-5 text-gray-600 dark:text-gray-300">{total}</p>
      </div>
    </div>
  );
}

export default ContadorTarefas;
