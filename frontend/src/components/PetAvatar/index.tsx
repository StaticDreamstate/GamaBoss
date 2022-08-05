import { icons } from "../../assets";
import { mockPet } from "./mock";

interface IPetAvatar {
  className?: string;
}

export default function PetAvatar(props: IPetAvatar) {
  return (
    <div className="flex items-center md:px-28">
      <img
        className="rounded-full object-contain w-16 h-16 md:w-[250px] md:h-[250px]"
        src={mockPet.img}
        alt="Foto do pet"
      />
      <div className="w-full md:mt-12 md:h-16 h-8 flex justify-around items-center bg-primary-blue-1 text-white relative right-5 -z-10">
        <span className=" pl-4 font-700 text-mobile-size-16px md:text-mobile-size-32px">
          {mockPet.name}
        </span>
        <span className="border-r-2 h-6"></span>
        <span className="font-500 text-mobile-size-14px md:text-mobile-size-24px">
          {mockPet.age} anos
        </span>
        <span className="border-r-2 h-6"></span>
        <span className="font-500 text-mobile-size-14px md:text-mobile-size-24px">
          {mockPet.weight} kg
        </span>
        <img
          className=" md:w-8 md:h-8"
          src={icons.iconEdit}
          alt="Icone de editar dados do pet"
        />
      </div>
    </div>
  );
}
