import React from "react";
import { HiDotsVertical } from "react-icons/hi";

interface TarefaProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

function Tarefa({ title, description, children }: TarefaProps) {
  return (
    <div className="w-[300px] min-h-[200px] bg-white dark:bg-cyan-800 shadow-md rounded-lg p-4 flex flex-col justify-between ">
      <div className="flex-grow">
        <h2 className="text-lg font-bold text-cyan-700 dark:text-white">
          {title}
          <HiDotsVertical className="inline-block ml-2" />
        </h2>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      <div className="mt-4 flex gap-2">{children}</div>
    </div>
  );
}

export default Tarefa;
