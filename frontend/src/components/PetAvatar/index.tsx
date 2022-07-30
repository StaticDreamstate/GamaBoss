import { icons } from "../../assets";

export default function PetAvatar() {

  return (
    <div className="mx-6 w-80 flex items-center">
      <img
        className="w-16 h-16 rounded-full"
        src="https://picsum.photos/300/300"
        alt="Foto do pet"
      />
      <span className="px-3 text-white font-700 bg-[url('../../assets/icons/avatarBar.svg)]">Tobias</span>
      <span className="px-3 text-white font-500">5 anos</span>
      <span className="px-3 text-white font-500">8 kg</span>
      <span className="bg-primary-blue-1 h-8 absolute w-72 -z-10 rounded ml-5"></span>
      <img  className="ml-7 p-1 cursor-pointer rounded-sm hover:bg-white hover:bg-opacity-50 transition-colors" width={23} src={icons.iconEdit} alt="Icone de editar dados do pet" />
    </div>
  );
}
