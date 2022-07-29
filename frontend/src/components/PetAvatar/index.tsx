import { useState } from "react";
import { icons } from "../../assets";

export default function PetAvatar() {
  const [name, setName] = useState("Tobias");
  const [age, setAge] = useState(2);
  const [weight, setWeight] = useState(4);
  // Visual pronto, estou fazendo a lógica (Rafael)

  return (
    <div className="mx-6 w-80">
      <form action="" className="flex w-auto items-center">
        <label className="cursor-pointer hover:opacity-90" htmlFor="file">
          <img
            className="w-32 h-16 rounded-full"
            src="https://picsum.photos/300/300"
            alt="Foto do pet"
          />
          <img
          className="rounded-full w-6 absolute bg-white -mt-6 ml-11" 
          src={icons.iconCamera} alt="icone adicionar foto" />
          <input
            // onChange={(e: any) => sendFile(e.target.files[0])}
            className="hidden"
            type="file"
            id="file"
            name="upload"
          />
        </label>
        <div className="px-6">
          <input
            onChange={(e: any) => setName(e.target.value)}
            className="w-full mb-1 bg-transparent font-700"
            type="text"
            value={name}
          />
          <input
            onChange={(e: any) => setAge(e.target.value)}
            className="bg-transparent text-white font-70 w-9"
            type="number"
            id="age"
            min="1"
            max="20"
            value={age}
          />
          <label className="text-white font-700" htmlFor="age">
            anos
          </label>
          <input
            onChange={(e: any) => setWeight(e.target.value)}
            className="ml-3 bg-transparent text-white font-70 w-9"
            type="number"
            id="weight"
            min="1"
            max="80"
            value={weight}
          />
          <label className="text-white font-700" htmlFor="weight">
            kg
          </label>
        </div>
        <button className="mt-8 mr-2 p-1 cursor-pointer rounded-full transition-colors hover:bg-slate-300">
          <img
            width={25}
            src={icons.iconEdit}
            alt="Icone de editar dados do pet"
          />
        </button>
      </form>
      <span className="bg-primary-blue-1 h-8 flex -mt-8 -z-10 rounded"></span>
    </div>
  );
}
