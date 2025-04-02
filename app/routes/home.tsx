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
    <div>
      <div className="md:hidden flex flex-col justify-center pt-5 gap-5 ">
        <div className="flex justify-center">
          <ContadorTarefas />
        </div>
        <div className="flex justify-center pb-20 ">
          <TiposLista />
        </div>
      </div>
      <div className="hidden md:flex md:flex-row justify-center pt-7">
        <div className="flex justify-center">
          <TiposLista />
        </div>
        <div className="lg:ml-8 ml-4">
          <ContadorTarefas />
        </div>
      </div>
    </div>
  );
}
