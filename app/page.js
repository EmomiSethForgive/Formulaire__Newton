import Image from "next/image";
import { Forms } from "./components/Forms";

export default function Home() {
  return (
    <div className=" w-full flex flex-col gap-4">
      <h1 className="m-auto font-bold mt-3 md:text-xl">FORMULAIRE DE SOUSCRIPTION</h1>
      <Forms />
    </div>
  );
}
