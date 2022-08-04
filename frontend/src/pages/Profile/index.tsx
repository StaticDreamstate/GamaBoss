import { images, icons } from "../../assets";
import MenuItemsProfile from "../../components/MenuItemsProfile";
import PetAvatar from "../../components/PetAvatar";

import CardPets from "../../components/CardPets";
import CardBluePets from "../../components/CardBluePets";

export default function Profile() {

  return (
    <main >
      <section className="mt-8">
        <PetAvatar />
      </section>
      <section>
        <div className="py-3 px-6">
          <MenuItemsProfile image={icons.calendar_today} textContent="Agendar consulta"/>
        </div>
        <div className="py-3 px-6">
          <MenuItemsProfile image={icons.vacine} textContent="Agendar vacina" />
        </div>
        <div className="py-3 px-6">
          <MenuItemsProfile image={icons.medical_services} textContent="Atendimento de emergência" />
        </div>
        <div className="py-3 px-6">
          <MenuItemsProfile image={icons.consult} textContent="Consultar especialista" />
        </div>
        <div className="py-3 px-6">
          <MenuItemsProfile image={icons.edit} textContent="Alterar plano" />
        </div>
      </section>
      <p className="pt-12 pb-9 pl-6 pr-10 border-t-2">
      Consulte a quantidade de serviços que você já utilizou
      </p>
      <section className="flex justify-center pt-2 gap-6 flex-wrap w-auto items-center ">
        <CardBluePets
          imagePet={images.calendar_month}
          texto="Consultas"
          redirect="#"/>
          <CardBluePets
          imagePet={images.vaccines}
          texto="Vacinas"
          redirect="#"/>
          <CardBluePets
          imagePet={images.healing}
          texto="Internação"
          redirect="#"/>
          <CardBluePets
          imagePet={images.medical_service_card}
          texto="Emergência"
          redirect="#"/>
      </section>
    </main>
  );
}
