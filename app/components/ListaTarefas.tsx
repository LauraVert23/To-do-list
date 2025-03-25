import type { ITarefaStorage } from "~/interfaces/tarefa-interface";
import CardTarefa from "./CardTarefa";
import { useLocalStorage } from "usehooks-ts";

function ListaTarefas() {
  const [tarefas] = useLocalStorage<ITarefaStorage[]>("tarefas", []);
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
