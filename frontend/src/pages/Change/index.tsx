import { Link } from "react-router-dom";
import Accordion from "../../components/Accordion";
import Button from "../../components/Button";
import PetAvatar from "../../components/PetAvatar";
import { mockPet } from "../../components/PetAvatar/mock";
import { plans } from "./objetc";

export default function Change() {
  return (
    <>
      <main className="px-6">
        <section className="mt-8">
          <PetAvatar className="w-max"/>
        </section>
        <section className="gap-2 my-16 mx-6 md:items-center text-center justify-center font-libre">
          <p className="w-full mt-12 mb-7 md:text-mobile-size-24px md:leading-mobile-line-35.2px">
            Abaixo os serviços que você pode incluir ao plano de {mockPet.name}.
          </p>

          {plans.map((plan) => (
            <div className="flex items-baseline justify-center ">
              {plan.userHas == false ? (
                <>
                  <input className="m-2 md:w-6 md:h-6" type="checkbox" />
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

          <p
            className="w-[319px] text-mobile-size-16px leading-mobile-line-26.4px md:w-[424px] lg:w-[631px] md:text-mobile-size-24px
          md:leading-mobile-line-35.2px"
          >
            O plano atual do {mockPet.name} é <strong>plano simples. </strong>
            Veja abaixo o que está incluso.
          </p>

          {plans.map((plan) => (
            <div className="flex items-baseline justify-center ">
              {plan.userHas == true ? (
                <>
                  <input
                    className="m-2 md:w-6 md:h-6"
                    type="checkbox"
                    defaultChecked={plan.userHas}
                  />
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
          <div className="flex flex-col items-center my-12 md:flex md:flex-row-reverse md:justify-center md:pb-[268px] ">
            <Link to={"/confirmacao"}>
              <Button
                buttonLabel={"Adicionar serviços"}
                className="w-44 md:w-[292px] md:h-[53px] mb-2 md:mb-0 md:ml-10 md:text-mobile-size-24px 
                md:leading-mobile-line-26.4px md:font-600"
              />
            </Link>

            <Link to={"/Home"}>
              <button
                className="w-44 md:w-[292px] md:h-[53px] hover:bg-gray-6 font-600 text-[14px] py-[5px] px-4 rounded-[10px] border-2
              border-primary-blue-2 transition-colors md:text-mobile-size-24px md:leading-mobile-line-26.4px "
              >
                Cancelar
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
