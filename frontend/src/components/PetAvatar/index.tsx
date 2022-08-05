import { icons } from "../../assets";
import { mockPet } from "./mock";

interface IPetAvatar {
  className?: string
}

export default function PetAvatar(props:IPetAvatar) {

  return (
    <div className="flex items-center">
      <img
        className="rounded-full object-contain sm:w-[180px] w-[70px]"
        src={mockPet.img}
        alt="Foto do pet"
      />
      <div className="w-full sm:mt-12 sm:h-16 h-8 flex justify-around items-center bg-primary-blue-1 text-white relative right-5 -z-10">
        <span className=" pl-4 font-700 text-mobile-size-16px">{mockPet.name}</span>
        <span className="border-r-2 h-6"></span>
        <span className="font-500 text-mobile-size-14px">{mockPet.age} anos</span>
        <span className="border-r-2 h-6"></span>
        <span className="font-500 text-mobile-size-14px">{mockPet.weight} kg</span>
        <img src={icons.iconEdit} alt="Icone de editar dados do pet"/>
      </div>
    </div>
  );
}
