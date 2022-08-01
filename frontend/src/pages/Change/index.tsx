import Accordion from "../../components/Accordion";
import Button from "../../components/Button";
import PetAvatar from "../../components/PetAvatar";
import { plans } from "./objetc";

export default function Change() {
  return (
    <>
      <main className="grid  gap-2 my-16 mx-6">
        <PetAvatar />

        <p className="w-full mt-12 mb-7">
          Abaixo os serviços que você pode incluir ao plano de Tobias.
        </p>

        {plans.map((plan) => (
          <div className="flex">
            {plan.userHas == false ? (
              <>
                <input className="m-2" type="checkbox" />
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

        <p>
          O plano atual do Tobias é <strong>plano simples. </strong>
          Veja abaixo o que está incluso.
        </p>

        {plans.map((plan) => (
          <div className="flex">
            {plan.userHas == true ? (
              <>
                <input
                  className="m-2"
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
        <div className="flex flex-col items-center my-12">
          <Button buttonLabel={"Adicionar serviços"} className="w-44 mb-2" />
          <button className="w-44 hover:bg-gray-6 font-600 text-[14px] py-[6px] px-4 rounded-[10px] border-2 border-primary-blue-2 transition-colors ">
            Cancelar
          </button>
        </div>
      </main>
    </>
  );
}
