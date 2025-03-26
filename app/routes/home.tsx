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
    <div>
      <div className="pt-7 container mx-auto">
        <TiposLista />
      </div>
      <ContadorTarefas />
    </div>
  );
}
