import type { ITarefaStorage } from "~/interfaces/tarefa-interface";
import CardTarefa from "./CardTarefa";
import { useLocalStorage } from "usehooks-ts";
import { useState, useEffect } from "react";

function ListaTarefas() {
  const [tarefas, setTarefas] = useState<ITarefaStorage[]>([]); // Estado inicial vazio
  const [isClient, setIsClient] = useState(false); // Verifica se está no cliente

  useEffect(() => {
    setIsClient(true); // Marca que estamos no cliente
  }, []);

  const [storedTarefas] = useLocalStorage<ITarefaStorage[]>("tarefas", []);

  useEffect(() => {
    if (isClient) {
      setTarefas(storedTarefas); // Atualiza o estado com os dados do localStorage
    }
  }, [isClient, storedTarefas]);

  const tarefasEmAndamento = tarefas.filter((tarefa) => !tarefa.estado);
  const tarefasConcluidas = tarefas.filter((tarefa) => tarefa.estado);
  return (
    <div className="flex justify-between">
      <div className="p-4 gap-4 flex flex-col justify-center">
        {tarefas.map((tarefa, index) => (
          <CardTarefa key={index} data={tarefa} index={index}></CardTarefa>
        ))}
      </div>
    </div>
  );
}

export default ListaTarefas;
