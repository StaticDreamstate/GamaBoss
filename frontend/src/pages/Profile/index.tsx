import MenuItemsProfile from "../../components/MenuItemsProfile";
import PetAvatar from "../../components/PetAvatar";

import CardPets from "../../components/CardPets";
import CardBluePets from "../../components/CardBluePets";
import { mockPlansIcons, mockServicesUsed } from "./mockPlansIcons";

export default function Profile() {
  return (
    <main className="px-6">
      <section className="mt-8">
        <PetAvatar className="w-max" />
      </section>
      <section className=" pt-4 flex flex-col text-gray-1 md:flex-row sm:my-10 md:flex-wrap lg:mx-[230px] ">
        {mockPlansIcons.map((plan, index) => (
          <div key={plan.title + index} className="py-5 px-6 w-full border-b-2 md:border-none">
            <MenuItemsProfile image={plan.image} textContent={plan.title} />
          </div>
        ))}
      </section>
      <p className="pt-12 pb-9 pl-6 pr-10 text-gray-1text-gray-1 ">
        Consulte a quantidade de serviços que você já utilizou
      </p>
      <section className="flex justify-center pt-2 gap-6 flex-wrap w-auto items-center mb-20">
        {mockServicesUsed.map((service) => (
          <CardBluePets
            imagePet={service.image}
            texto={service.text}
            redirect={service.redirect}
          />
        ))}
      </section>
    </main>
  );
}
