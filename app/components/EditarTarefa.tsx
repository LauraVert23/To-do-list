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
  const [description, setDescription] = useState(data.description || "");
  const [dataH, setDataH] = useState("");

  const editar = () => {
    const novasTarefas = tarefas.map((tarefa) =>
      tarefa.id === data.id
        ? { ...tarefa, title, description, data: new Date(dataH).toISOString() }
        : tarefa
    );
    setTarefas(novasTarefas);
  };
  return (
    <div className="w-[180px] h-[200px] lg:w-[250px] bg-cyan-700 p-2 lg:p-4 rounded mt-1">
      <form>
        <div className="flex gap-2 flex-col w-[150px] lg:w-[200px] mt-2 lg:mt-0">
          <input
            type="text"
            className="bg-cyan-600 p-1 lg:p-2 rounded"
            placeholder="Nome da tarefa"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="bg-cyan-600 p-1 lg:p-2 rounded w-[150px] lg:w-[200px]"
            placeholder="Descrição da tarefa"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="scheme-light mt-3 lg:mt-1">
            <input
              type="date"
              value={
                dataH ||
                (data.data
                  ? new Date(data.data).toISOString().split("T")[0]
                  : "")
              }
              onChange={(e) => setDataH(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2 lg:gap-3">
          <button
            type="submit"
            className="bg-cyan-600 text-black p-1 rounded h-[30px] lg:p-1.5 lg:h-[40px]
        cursor-pointer mt-5 lg:mt-2 flex gap-2"
            onClick={() => editar()}
          >
            Salvar
          </button>
          <button
            type="submit"
            className="bg-cyan-600 text-black p-1 rounded h-[30px] lg:p-1.5 lg:h-[40px] lg:mt-2
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
