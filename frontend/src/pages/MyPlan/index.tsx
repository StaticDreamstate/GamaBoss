import { Link } from "react-router-dom";
import Accordion from "../../components/Accordion";
import Button from "../../components/Button";
import PetAvatar from "../../components/PetAvatar";

export default function MyPlan() {
  return (
    <main className="flex flex-col items-center w-full px-8 ">
      <div className="pt-10">
        <PetAvatar />
      </div>
      <p className=" pt-14 pb-12 text-left leading-mobile-line-26.4px text-mobile-size-16px font-normal ">
        O plano atual do Tobias é <strong>plano simples</strong>. Veja abaixo o
        que está incluso.
      </p>
      <Accordion
        titleAccordion={"Teste 1"}
        contentAccordion={
          "Teste Teste"
        }
      />
      <Accordion
        titleAccordion={""}
        contentAccordion={
          ""
        }
      />
      <Accordion
        titleAccordion={""}
        contentAccordion={
          " "
        }
      />
      <Accordion
        titleAccordion={""}
        contentAccordion={
          " "
        }
      />
      <p className="pt-10  text-left text-mobile-size-16px leading-mobile-line-26.4px font-normal">
        Você pode adicionar novos serviços ao seu plano.
      </p>
      <div className="pt-10 flex justify-center ">
        <Link to={"/alterar"}>
          <Button
            className="py-3 px-6 w-44 text-sm font-semibold"
            buttonLabel={"Adicionar serviços"}
          />
        </Link>
      </div>
      <div className="pt-3 pb-20 flex justify-center ">
        <Link to={"/Home"}>
          <Button
            className=" py-3 px-4 w-44 text-sm font-semibold bg-white text-gray-1 border-solid border-2 border-primary-blue-1 "
            buttonLabel={"Ir para página inicial"}
          />
        </Link>
      </div>
    </main>
  );
}
