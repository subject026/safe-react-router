import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Contact" }, { name: "description", content: "contact us" }];
}

export default function Contact() {
  return <div>this is the contact page</div>;
}
