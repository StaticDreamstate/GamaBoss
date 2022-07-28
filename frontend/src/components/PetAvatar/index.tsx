import { icons } from "../../assets";

export default function PetAvatar() {
  return (
    <div className="relative w-auto m-7">
      <form action="" className="flex w-auto items-center">
        <img
          className="w-16 h-16 rounded-full"
          src="https://picsum.photos/300/300"
          alt="Foto do Pet"
        />
        <div className="px-6">
          <input
            className="w-full mb-1 bg-transparent font-700"
            type="text"
            value={"Dog"}
          />
          <input
            className="bg-transparent text-white font-70"
            type="number"
            id="age"
            min="1"
            max="20"
          />
          <label className="text-white font-700" htmlFor="age">
            anos
          </label>
          <input
            className="ml-3 bg-transparent text-white font-70"
            type="number"
            id="kg"
            min="1"
            max="80"
          />
          <label className="text-white font-700" htmlFor="kg">
            kg
          </label>
        </div>
          <button className="ml-[22px] cursor-pointer">
            <img src={icons.iconEdit} alt="Icone de editar dados do pet" />
          </button>
          {/* parei aqui (Rafael) - nao mexer */}
      </form>
      <span className="bg-primary-blue-1 h-8 mt-8 absolute w-full bottom-0 -z-10 rounded"></span>
    </div>
  );
}
