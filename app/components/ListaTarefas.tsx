import Tarefa from "./CardTarefa";
import { useLocalStorage } from "usehooks-ts";
interface TarefaProps {
  title: string;
  description: string;
}

function ListaTarefas() {
  const [tarefas] = useLocalStorage<TarefaProps[]>("tarefas", []);

  return (
    <div className="flex justify-between">
      <div className="p-4 gap-4 flex flex-col justify-center">
        {tarefas.map((tarefa, index) => (
          <Tarefa
            key={index}
            title={tarefa.title}
            description={tarefa.description}
          >
            <button
              onClick={() => alert("Tarefa Concluída")}
              className=" bg-green-300 text-white p-2 rounded cursor-pointer"
            >
              Concluir
            </button>
          </Tarefa>
        ))}
      </div>
    </div>
  );
}

export default ListaTarefas;
