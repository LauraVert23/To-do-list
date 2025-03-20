import React from "react";
import AdicionarTarefa from "./AdicionarTarefa";
import Tarefa from "./Tarefa";

const TAREFAS = [
  {
    index: 0,
    title: "Fazer Exercício",
    description: "Caminhar por 30 minutos",
  },
  {
    index: 1,
    title: "Estudar React",
    description: "Ler a documentação do React",
  },
  {
    index: 2,
    title: "Fazer Compras",
    description: "Comprar frutas e verduras",
  },
];
function ListaTarefas() {
  return (
    <div className="flex justify-center">
      <div className="p-4 gap-4 flex flex-col justify-center">
        {TAREFAS.map((tarefa, index) => (
          <Tarefa
            key={index}
            title={tarefa.title}
            description={tarefa.description}
          >
            <button className=" bg-green-300 text-white p-2 rounded cursor-pointer">
              Concluir
            </button>
            {/* <button className="bg-red-300 text-white p-2 rounded ml-2 cursor-pointer">
              Excluir
            </button> */}
          </Tarefa>
        ))}
      </div>
    </div>
  );
}

export default ListaTarefas;
