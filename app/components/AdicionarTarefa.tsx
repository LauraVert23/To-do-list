import { useLocalStorage } from "usehooks-ts";
import { useState } from "react";
import type { ITarefaStorage } from "~/interfaces/tarefa-interface";

function AdicionarTarefa() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState("");
  const [tarefas, setTarefas] = useLocalStorage<ITarefaStorage[]>(
    "tarefas",
    []
  );

  const adiciona = () => {
    const novaTarefa: ITarefaStorage = {
      id: tarefas.length > 0 ? tarefas[tarefas.length - 1].id + 1 : 0,
      title,
      description,
      estado: false,
      data,
    };
    setTarefas([...tarefas, novaTarefa]);
    setTitle("");
    setDescription("");
    setData("");
  };

  return (
    <div className="ml-4 w-[350px]  bg-cyan-800 p-4 rounded">
      <form>
        <div className="flex gap-2 flex-col w-[300px] ">
          <input
            type="text"
            className="bg-cyan-700 p-2 rounded"
            placeholder="Nome da tarefa"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="bg-cyan-700 p-2 rounded w-[300px]"
            placeholder="Descrição da tarefa"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-cyan-600 text-black p-2 rounded
        cursor-pointer mt-5 flex  hover:scale-110 duration-200 ease-in"
            onClick={() => adiciona()}
          >
            Adicionar
          </button>
          <div className="scheme-light mt-7">
            <input
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default AdicionarTarefa;
