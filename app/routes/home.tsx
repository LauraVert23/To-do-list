import TiposLista from "~/components/TiposLista";
import type { Route } from "./+types/home";
import ContadorTarefas from "~/components/ContadorTarefas";
import favicon from "../../public/favicon.ico";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  { rel: "icon", type: "image/x-icon", href: favicon },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "To-Do List" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="md:flex justify-center pt-7">
      <div>
        <TiposLista />
      </div>
      <div className="">
        <ContadorTarefas />
      </div>
    </div>
  );
}
