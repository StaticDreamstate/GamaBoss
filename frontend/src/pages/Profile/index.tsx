import MenuItemsProfile from "../../components/MenuItemsProfile";
import PetAvatar from "../../components/PetAvatar";

import CardPets from "../../components/CardPets";
import CardBluePets from "../../components/CardBluePets";
import { mockPlansIcons, mockServicesUsed } from "./mockPlansIcons";

export default function Profile() {
  return (
    <main className="px-7 ">
      <section className="mt-8">
        <PetAvatar className="w-max" />
      </section>
      <section className=" pt-4 flex justify-center items-center flex-col  md:grid md:grid-cols-2  text-gray-1 sm:my-10 md:mx-[250px] leading-mobile-line-26.4px md:leading-mobile-line-35.2px text-mobile-size-16px
         md:text-mobile-size-24px">
        {mockPlansIcons.map((plan, index) => (
          <div key={plan.title + index} className=" py-6 px-6 w-full border-b-2 md:border-none">
            <MenuItemsProfile image={plan.image} textContent={plan.title} />
          </div>
        ))}
      </section>
      <p className="md:border-t-2 pt-12 pb-12 pl-6 pr-10 text-gray-1 text-left md:text-center leading-mobile-line-26.4px md:leading-mobile-line-35.2px text-mobile-size-16px
         md:text-mobile-size-24px ">
        Consulte a quantidade de serviços que você já utilizou
      </p>
      <section className="flex justify-center pt-2 pl-4 pb-[180px] gap-6 md:flex-row flex-wrap w-auto items-center ">
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
