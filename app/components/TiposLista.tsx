import React from "react";
import ListaTarefas from "./ListaTarefas";
import { PiPlusLight } from "react-icons/pi";
import AdicionarTarefa from "./AdicionarTarefa";
import { useState, useEffect } from "react";

function TiposLista() {
  const [adicionaTarefa, setAdicionaTarefa] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Marca que estamos no cliente
  }, []);

  if (!isClient) {
    return null; // Evita renderizar até que estejamos no cliente
  }

  return (
    <div className="flex gap-10 justify-center">
      <div className="w-[350px] min-h-[350px] flex box-content flex-col justify-between bg-cyan-900 shadow-md rounded-lg">
        <div className="ml-5 mt-3 flex justify-between mr-3">
          <h1 className="font-extrabold">Pendentes</h1>
          <div
            className="cursor-pointer"
            onClick={() => setAdicionaTarefa(!adicionaTarefa)}
          >
            <PiPlusLight />
          </div>
        </div>
        <ListaTarefas />
      </div>
      <div>{adicionaTarefa && <AdicionarTarefa />}</div>
      {/* {
        <div className="w-[350px] min-h-[350px] flex box-content flex-col justify-between bg-cyan-900 shadow-md rounded-lg">
          <div className="ml-5 mt-3 flex justify-between mr-3">
            <h1 className="font-extrabold">Concluídas</h1>
          </div>
          <ListaTarefas />
        </div>
      } */}
    </div>
  );
}

export default TiposLista;
