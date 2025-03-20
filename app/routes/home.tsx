import type { Route } from "./+types/home";
import ListaTarefas from "~/components/ListaTarefas";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "To-Do List" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <></>;
}
