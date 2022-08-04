import { icons } from "../../assets";
import { mockPet } from "./mock";

interface IPetAvatar {
  className?: string
}

export default function PetAvatar(props:IPetAvatar) {

  return (
    <div className={`w-80 flex justify-end items-center ${props.className}`}>
      <img
        className="w-16 h-16 rounded-full object-contain "
        src={mockPet.img}
        alt="Foto do pet"
      />
      <span className="px-3 text-white font-700 bg-[url('../../assets/icons/avatarBar.svg)]">{mockPet.name}</span>
      <img src={icons.avatarBar} alt="" />
      <span className="px-3 text-white font-500">{mockPet.age}  anos</span>
      <img src={icons.avatarBar} alt="" />
      <span className="px-3 text-white font-500">{mockPet.weight}  kg</span>
      <span className="bg-primary-blue-1 h-8 absolute w-[290px] -z-10 rounded ml-5"></span>
      <img  className="ml-7 p-1 cursor-pointer rounded-sm hover:bg-white hover:bg-opacity-50 transition-colors" width={23} src={icons.iconEdit} alt="Icone de editar dados do pet" />
    </div>
  );
}
