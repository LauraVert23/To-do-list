import React from "react";
import ListaTarefas from "./ListaTarefas";
import { PiPlusLight } from "react-icons/pi";
import AdicionarTarefa from "./AdicionarTarefa";
import { useState } from "react";

function TiposLista() {
  const [adicionaTarefa, setAdicionaTarefa] = useState(false);

  return (
    <div className="flex gap-10 justify-center">
      <div className="w-[350px] min-h-[350px] flex box-content flex-col justify-between bg-cyan-800">
        <div className="ml-5 mt-3 flex justify-between mr-3">
          <h1>Em andamento</h1>
          <div
            className="cursor-pointer"
            onClick={() => setAdicionaTarefa(!adicionaTarefa)}
          >
            <PiPlusLight />
          </div>
        </div>
        <ListaTarefas />
      </div>
      {/* {
        <div className="w-[350px] min-h-[350px] flex box-content flex-col justify-between bg-cyan-800">
          <div className="ml-5 mt-3 flex justify-between mr-3">
            <h1>Concluídas</h1>
          </div>
          <ListaTarefas />
        </div>
      } */}
      <div>{adicionaTarefa && <AdicionarTarefa />}</div>
    </div>
  );
}

export default TiposLista;
