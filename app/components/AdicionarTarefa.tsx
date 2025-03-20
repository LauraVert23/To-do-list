import React from "react";

function AdicionarTarefa() {
  return (
    <div className="ml-4 w-[400px]  bg-cyan-800 p-4 rounded">
      <form>
        <div className="flex gap-2 flex-col w-[300px] ">
          <input
            type="text"
            className="bg-cyan-700 p-2 rounded"
            placeholder="Nome da tarefa"
          />
          <input
            type="text"
            className="bg-cyan-700 p-2 rounded w-[300px]"
            placeholder="Descrição da tarefa"
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-700 text-black p-2 rounded
        cursor-pointer mt-5 flex gap-2"
          onClick={() => alert("Tarefa adicionada")}
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}
export default AdicionarTarefa;
