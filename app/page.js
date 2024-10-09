import Image from "next/image";
import { Forms } from "./components/Forms";
import { Deuxième } from "./components/Deuxième";
// import {RadioGroup} from "./components/RadioGroup";

export default function Home() {
  return (
    <div className=" w-full flex flex-col gap-4">
      <h1 className="m-auto font-bold mt-3 md:text-xl">
        FORMULAIRE DE SOUSCRIPTION
      </h1>
      <div className=" md:flex md:m-auto">
        <Forms />
        <Deuxième />
        {/* <RadioGroup /> */}
      </div>
    </div>
  );
}
