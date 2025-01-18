import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "description", content: "about the site" },
  ];
}

export default function About() {
  return <div>this is the about page</div>;
}
