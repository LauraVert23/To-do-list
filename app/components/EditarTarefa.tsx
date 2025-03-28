import { useLocalStorage } from "usehooks-ts";
import type { ITarefaStorage } from "~/interfaces/tarefa-interface";
import { useState } from "react";

function EditarTarefa({ data }: { data: ITarefaStorage }) {
  const [tarefas, setTarefas] = useLocalStorage<ITarefaStorage[]>(
    "tarefas",
    []
  );
  const [mostrarEditar, setMostrarEditar] = useState(true);
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);

  const editar = () => {
    const novasTarefas = tarefas.map((tarefa) =>
      tarefa.id === data.id ? { ...tarefa, title, description } : tarefa
    );
    setTarefas(novasTarefas);
  };
  return (
    <div className="ml-4 w-[250px]  bg-cyan-700 p-4 rounded">
      <form>
        <div className="flex gap-2 flex-col w-[200px] ">
          <input
            type="text"
            className="bg-cyan-600 p-2 rounded"
            placeholder="Nome da tarefa"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="bg-cyan-600 p-2 rounded w-[200px]"
            placeholder="Descrição da tarefa"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-cyan-600 text-black p-1.5 rounded
        cursor-pointer mt-5 flex gap-2"
            onClick={() => editar()}
          >
            Salvar
          </button>
          <button
            type="submit"
            className="bg-cyan-600 text-black p-1.5 rounded
        cursor-pointer mt-5 flex gap-2"
            onClick={() => setMostrarEditar(!mostrarEditar)}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditarTarefa;
