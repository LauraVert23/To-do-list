import ListaTarefas from "./ListaTarefas";
import { PiPlusLight } from "react-icons/pi";
import AdicionarTarefa from "./AdicionarTarefa";
import { useState, useEffect } from "react";
import type { ITarefaStorage } from "~/interfaces/tarefa-interface";
import { useLocalStorage } from "usehooks-ts";

function TiposLista() {
  const [adicionaTarefa, setAdicionaTarefa] = useState(false);
  const [tarefas, setTarefas] = useState<ITarefaStorage[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [storedTarefas] = useLocalStorage<ITarefaStorage[]>("tarefas", []);

  useEffect(() => {
    if (isClient) {
      setTarefas(storedTarefas);
    }
  }, [isClient, storedTarefas]);

  const tarefasEmAndamento = tarefas.filter((tarefa) => !tarefa.estado);
  const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.estado);

  return (
    <div className="flex gap-10 justify-center">
      <div className="w-[350px] box-content  bg-cyan-900 shadow-md rounded-lg">
        <div className="ml-5 mt-3 flex justify-between mr-3">
          <h1 className="font-extrabold">Pendentes</h1>
          <div
            className="cursor-pointer"
            onClick={() => setAdicionaTarefa(!adicionaTarefa)}
          >
            <PiPlusLight />
          </div>
        </div>
        <div className=" overflow-x-hidden h-150 mr-1">
          <ListaTarefas tarefas={tarefasEmAndamento} />
        </div>
      </div>
      <div>{adicionaTarefa && <AdicionarTarefa />}</div>
      {
        <div className="w-[350px] min-h-[350px] flex box-content flex-col  bg-cyan-900 shadow-md rounded-lg">
          <div className="ml-5 mt-3 flex  mr-3">
            <h1 className="font-extrabold">Concluídas</h1>
          </div>
          <ListaTarefas tarefas={tarefasConcluidas} />
        </div>
      }
    </div>
  );
}

export default TiposLista;
