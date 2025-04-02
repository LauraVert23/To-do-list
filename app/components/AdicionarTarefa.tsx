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
    <div className="mt-1 lg:w-[300px] w-[230px] bg-cyan-800 p-4 rounded lg:mr-3 lg:shadow-xl shadow">
      <form>
        <div className="flex gap-2 flex-col lg:w-[250px] w-[180px] ">
          <input
            type="text"
            className="bg-cyan-700 p-2 rounded"
            placeholder="Nome da tarefa"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="bg-cyan-700 p-2 rounded lg:w-[250px] w-[180px]"
            placeholder="Descrição da tarefa"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex flex-col lg:justify-between lg:gap-0 items-center lg:flex-row">
          <button
            type="submit"
            className="bg-cyan-600 text-black p-1 w-[85px] lg:p-1.5 rounded lg:mr-0 mr-28
        cursor-pointer mt-3 lg:mt-5 flex lg:hover:scale-110 hover:scale-105 duration-200 ease-in"
            onClick={() => adiciona()}
          >
            Adicionar
          </button>
          <div className="scheme-light mt-3 w-[140px] lg:mt-7">
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
