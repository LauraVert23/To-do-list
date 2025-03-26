import { useLocalStorage } from "usehooks-ts";
import type { ITarefaStorage } from "~/interfaces/tarefa-interface";
import { useState } from "react";
interface Props {
  data: ITarefaStorage;
  index: number;
}
function EditarTarefa({ data, index }: Props) {
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
          onClick={() => editar()}
        >
          Salvar
        </button>
        <button
          type="submit"
          className="bg-cyan-700 text-black p-2 rounded
        cursor-pointer mt-5 flex gap-2"
          onClick={() => setMostrarEditar(!mostrarEditar)}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default EditarTarefa;
