import TiposLista from "~/components/TiposLista";
import type { Route } from "./+types/home";
import ContadorTarefas from "~/components/ContadorTarefas";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "To-Do List" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex justify-center pt-7">
      <div>
        <TiposLista />
      </div>
      <div className="box-border ">
        <ContadorTarefas />
      </div>
    </div>
  );
}
