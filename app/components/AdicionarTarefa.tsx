import { useLocalStorage } from "usehooks-ts";
import { useState } from "react";

interface TarefaProps {
  title: string;
  description: string;
}
function AdicionarTarefa() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tarefas, setTarefas] = useLocalStorage<TarefaProps[]>("tarefas", []);
  const adiciona = () => {
    const novaTarefa: TarefaProps = { title, description };
    setTarefas([...tarefas, novaTarefa]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="ml-4 w-[400px]  bg-cyan-800 p-4 rounded">
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
        <button
          type="submit"
          className="bg-cyan-700 text-black p-2 rounded
        cursor-pointer mt-5 flex gap-2"
          onClick={() => adiciona()}
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}
export default AdicionarTarefa;
