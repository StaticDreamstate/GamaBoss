import { Link } from "react-router-dom";
import Accordion from "../../components/Accordion";
import Button from "../../components/Button";
import PetAvatar from "../../components/PetAvatar";
import { plans } from "../Change/objetc";

export default function MyPlan() {
  return (
    <main className="flex flex-col items-center w-full px-8">
      <div className="pt-10">
        <PetAvatar className="" />
      </div>
      <section className="flex flex-col items-center w-full md:bg-[#FAFCFF] md:w-[1150px] ">
        <p className=" pt-14 pb-8 px-4 text-left leading-mobile-line-26.4px md:leading-mobile-line-35.2px text-mobile-size-16px md:text-mobile-size-24px font-normal ">
          O plano atual do Tobias é <strong>plano simples</strong>. Veja abaixo
          o que está incluso.
        </p>
        {plans.map((plan) => (
          <div className="flex items-baseline">
            {plan.userHas == true ? (
              <>
                <Accordion
                  className="my-3"
                  titleAccordion={plan.title}
                  contentAccordion={plan.text}
                />
              </>
            ) : (
              ""
            )}
          </div>
        ))}
        <p className="pt-10 px-8 text-left text-mobile-size-16px md:text-mobile-size-24px leading-mobile-line-26.4px md:leading-mobile-line-35.2px font-normal">
          Você pode adicionar novos serviços ao seu plano.
        </p>
        <div className="pt-10 justify-center  ">
          <Link to={"/alterar"}>
            <Button
              className="py-3 px-6 w-44 md:w-72 text-mobile-size-14px leading-mobile-line-17.6px md:text-mobile-size-24px font-semibold"
              buttonLabel={"Adicionar serviços"}
            />
          </Link>
        </div>
        <div className="pt-3 pb-20 justify-center md:flex md:justify-evenly md:">
          <Link to={"/Home"}>
            <Button
              className=" py-3 px-4 w-44 md:w-72 text-mobile-size-14px leading-mobile-line-17.6px md:text-mobile-size-24px font-semibold bg-white text-gray-1 border-solid border-2 border-primary-blue-1 "
              buttonLabel={"Voltar"}
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
