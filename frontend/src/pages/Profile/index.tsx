import MenuItemsProfile from "../../components/MenuItemsProfile";
import PetAvatar from "../../components/PetAvatar";
import CardBluePets from "../../components/CardBluePets";
import { mockPlansIcons, mockServicesUsed } from "./mockPlansIcons";

export default function Profile() {
  return (
    <main className="px-7 ">
      <section className="mt-8">
        <PetAvatar className="w-max" />
      </section>
      <section
        className=" pt-10 pb-16 grid md:grid-rows-3 md:grid-flow-col gap-5 justify-center text-gray-1 md:my-10 leading-mobile-line-26.4px md:leading-mobile-line-35.2px text-mobile-size-16px
         md:text-mobile-size-24px"
      >
        {mockPlansIcons.map((plan, index) => (
          <div
            key={plan.title + index}
            className=" py-6 px-6 w-full border-b-2 md:border-none"
          >
            <MenuItemsProfile image={plan.image} textContent={plan.title} />
          </div>
        ))}
      </section>
      <p
        className="md:border-t-2 pt-14 pb-12 pl-2 pr-10 text-gray-1 text-left md:text-center leading-mobile-line-26.4px md:leading-mobile-line-35.2px text-mobile-size-16px
         md:text-mobile-size-24px "
      >
        Consulte a quantidade de serviços que você já utilizou
      </p>
      <section className="flex justify-center pt-2  pb-[180px] gap-6 md:flex-row flex-wrap w-auto items-center ">
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
