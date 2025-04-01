import type { ITarefaStorage } from "~/interfaces/tarefa-interface";
import CardTarefa from "./CardTarefa";

function ListaTarefas({ tarefas }: { tarefas: ITarefaStorage[] }) {
  return (
    <div>
      <div className="p-4 justify-center flex flex-col gap-3">
        {tarefas.map((tarefa) => (
          <CardTarefa key={tarefa.id} data={tarefa}></CardTarefa>
        ))}
      </div>
    </div>
  );
}

export default ListaTarefas;
