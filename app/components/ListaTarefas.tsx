import type { ITarefaStorage } from "~/interfaces/tarefa-interface";
import CardTarefa from "./CardTarefa";

interface Props {
  tarefas: ITarefaStorage[];
}
function ListaTarefas({ tarefas }: Props) {
  return (
    <div className="flex justify-between h-150">
      <div className="p-4 justify-center overflow-auto">
        {tarefas.map((tarefa, index) => (
          <CardTarefa key={index} data={tarefa} index={index}></CardTarefa>
        ))}
      </div>
    </div>
  );
}

export default ListaTarefas;
