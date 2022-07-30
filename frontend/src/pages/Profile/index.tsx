import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { images } from "../../assets";
import MenuItemsProfile from "../../components/MenuItemsProfile";
import PetAvatar from "../../components/PetAvatar";
import { icons } from "../../assets";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <main >
      <section className="mt-8">
        <PetAvatar />
      </section>
      <section className="">
        <MenuItemsProfile image={icons.facebookIcon} textContent="alguma coisa virá aqui" />
        <MenuItemsProfile image={icons.facebookIcon} textContent="alguma coisa virá aqui" />
        <MenuItemsProfile image={icons.facebookIcon} textContent="alguma coisa virá aqui" />
        <MenuItemsProfile image={icons.facebookIcon} textContent="alguma coisa virá aqui" />
        <MenuItemsProfile image={icons.facebookIcon} textContent="alguma coisa virá aqui" />
      </section>

      <section  className="flex justify-evenly gap-10 mb-6 mt-6 flex-wrap">
        <div className="flex justify-center bot">
        <img src={images.dog1} className="rounded-l-lg w-48"/>
         <div className=" w-48 bg-[#FAF6E6] rounded-r-lg  text-center pt-12">
          <p className="text-center">O que fazer quando o pet é muito agitado?</p>
         </div>
        </div>
        <div className="flex justify-center bot">
         <img src={images.dog2} className="rounded-l-lg w-48"/>
         <div className=" w-48 bg-[#FAF6E6] rounded-r-lg  text-center pt-12">
          <p className="text-center">Quais as vantagens de um plano de saúde para pet?</p>
         </div>
        </div>
        <div className="flex justify-center bot">
        <img src={images.dog3}  className="rounded-l-lg w-48"/>
         <div className=" w-48 bg-[#FAF6E6] rounded-r-lg  text-center pt-12">
          <p className="text-center">5 cuidados para o bem-estar do seu pet</p>
         </div>
        </div>
        


      </section>
      <section>{/* colocar cards */}</section>
    </main>
  );
}
