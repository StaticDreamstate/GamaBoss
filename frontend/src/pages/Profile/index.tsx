import MenuItemsProfile from "../../components/MenuItemsProfile";
import PetAvatar from "../../components/PetAvatar";
import CardBluePets from "../../components/CardBluePets";
import { mockPlansIcons, mockServicesUsed } from "./mockPlansIcons";

export default function Profile() {
  return (
    <main className="px-6">
      <section className="mt-8">
        <PetAvatar />
      </section>
      <section className="flex flex-col md:flex-row sm:my-10 md:flex-wrap lg:mx-[230px] ">
        {mockPlansIcons.map((plan, index) => (
          <div key={plan.title + index} className="py-3 px-6 w-[260px]">
            <MenuItemsProfile image={plan.image} textContent={plan.title} />
          </div>
        ))}
      </section>
      <p className="pt-12 pb-9 pl-6 pr-10 border-t-2">
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
