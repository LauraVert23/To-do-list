import ListaTarefas from "./ListaTarefas";
import { PiPlusLight } from "react-icons/pi";
import AdicionarTarefa from "./AdicionarTarefa";
import { useState, useEffect } from "react";
import type { ITarefaStorage } from "~/interfaces/tarefa-interface";
import { useLocalStorage } from "usehooks-ts";

function TiposLista() {
  const [adicionaTarefa, setAdicionaTarefa] = useState(false);

  const [isClient, setIsClient] = useState(false);
  const [storedTarefas] = useLocalStorage<ITarefaStorage[]>("tarefas", []);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-col md:flex-row gap-3 lg:gap-8 justify-center ">
      <div className="lg:w-[350px] w-[270px] scroll-smooth overflow-x-hidden h-[calc(57vh-8rem)]  sm:h-[calc(55vh-5rem)] md:h-[calc(100vh-7rem)]  box-content  bg-cyan-900 shadow-md rounded-lg">
        <div className="lg:mt-3 mt-1 flex justify-between items-center sticky top-0 bg-cyan-900 z-20 w-full px-4 h-8">
          <h1 className="font-extrabold">Pendentes</h1>
          <div
            className="cursor-pointer"
            onClick={() => setAdicionaTarefa(!adicionaTarefa)}
          >
            <PiPlusLight />
          </div>
        </div>
        <div className="flex justify-center">
          {adicionaTarefa && <AdicionarTarefa />}
        </div>
        <div className="mr-1">
          <ListaTarefas
            tarefas={storedTarefas.filter((tarefa) => !tarefa.estado)}
          />
        </div>
      </div>

      {
        <div className="lg:w-[350px] w-[270px] scroll-smooth overflow-x-hidden h-[calc(55vh-9rem)] sm:h-[calc(55vh-6rem)] md:h-[calc(100vh-7rem)]  box-content  bg-cyan-900 shadow-md rounded-lg">
          <div className="lg:mt-3 mt-1  flex justify-between items-center sticky top-0 bg-cyan-900 z-20 w-full px-4 h-8">
            <h1 className="font-extrabold">Concluídas</h1>
          </div>
          <div className=" mr-1">
            <ListaTarefas
              tarefas={storedTarefas.filter((tarefa) => tarefa.estado)}
            />
          </div>
        </div>
      }
    </div>
  );
}

export default TiposLista;
