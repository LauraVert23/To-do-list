import { useLocalStorage } from "usehooks-ts";
import type { ITarefaStorage } from "~/interfaces/tarefa-interface";
import { useState } from "react";

function ContadorTarefas() {
  const [tarefas] = useLocalStorage<ITarefaStorage[]>("tarefas", []);
  const [contConcluidas, setContConcluidas] = useState(0);
  const concluidas = () => {
    tarefas.map((tarefa) =>
      tarefa.estado ? setContConcluidas(contConcluidas + 1) : contConcluidas
    );
  };
  return (
    <div className="flex">
      <h1>Concluídas</h1>
    </div>
  );
}

export default ContadorTarefas;
