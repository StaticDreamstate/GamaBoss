import { Link } from "react-router-dom";
import Accordion from "../../components/Accordion";
import Button from "../../components/Button";
import PetAvatar from "../../components/PetAvatar";
import { mockPet } from "../../components/PetAvatar/mock";
import { plans } from "../Change/objetc";

export default function MyPlan() {
  return (
    <main className="px-6">
      <section className="mt-8">
        <PetAvatar className="w-max" />
      </section>
      <section className="flex flex-col items-center w-full md:bg-[#FAFCFF] md:w-[1150px] ">
        <p
          className=" pt-14 pb-8 text-left leading-mobile-line-26.4px md:leading-mobile-line-35.2px text-mobile-size-16px
         md:text-mobile-size-24px font-normal "
        >
          O plano atual do {mockPet.name} é <strong>plano simples</strong>. Veja
          abaixo o que está incluso.
        </p>
        {plans.map((plan) => (
          <div className="flex items-baseline">
            {plan.userHas == true ? (
              <>
                <Accordion
                  className="my-3  "
                  titleAccordion={plan.title}
                  contentAccordion={plan.text}
                />
              </>
            ) : (
              ""
            )}
          </div>
        ))}
        <p
          className="pt-10 px-5 text-left text-mobile-size-16px md:text-mobile-size-24px leading-mobile-line-26.4px 
          md:leading-mobile-line-35.2px font-normal"
        >
          Você pode adicionar novos serviços ao seu plano.
        </p>
        <div className="md:flex md:flex-row-reverse ">
          <div className="pt-10 justify-center md:ml-8 md:pt-16">
            <Link to={"/alterar"}>
              <Button
                className="py-3 px-6 w-44 h-10 md:w-64 md:h-[53px] text-mobile-size-14px leading-mobile-line-17.6px 
                md:text-mobile-size-24px font-semibold"
                buttonLabel={"Adicionar serviços"}
              />
            </Link>
          </div>
          <div className="pt-3 pb-20 justify-center md:pt-16 md:pb-[256px]">
            <Link to={"/Home"}>
              <Button
                className="py-3 px-4 w-44 h-10 hover:bg-gray-6 text-gray-2 bg-[#FAFCFF] md:w-64 md:h-[53px] text-mobile-size-14px 
                leading-mobile-line-17.6px md:text-mobile-size-24px font-semibold border-solid border-2 border-primary-blue-2 transition-colors "
                buttonLabel={"Voltar"}
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
