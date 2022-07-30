import Accordion from "../../components/Accordion";
import Button from "../../components/Button";
import PetAvatar from "../../components/PetAvatar";

export default function MyPlan() {
  return (
    <main>
      <div className="pt-5">
        <PetAvatar />
      </div>
      <p className="pt-12 pb-12 px-7 text-left leading-mobile-line-26.4px text-mobile-size-16px font-normal ">
        O plano atual do Tobias é <strong>plano simples</strong>. Veja abaixo o
        que está incluso.
      </p>

      <Accordion
        titleAccordion={"Teste 1"}
        contentAccordion={
          "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,"
        }
      />
      <Accordion
        titleAccordion={"Teste 2"}
        contentAccordion={
          "F is an open-source library of interactive components built on top of Tailwind CSS including buttons,"
        }
      />
      <Accordion
        titleAccordion={"Teste 3"}
        contentAccordion={
          " an open-source library of interactive components built on top of Tailwind CSS including buttons,"
        }
      />
      <Accordion
        titleAccordion={"Teste 4"}
        contentAccordion={
          " an open-source library of interactive components built on top of Tailwind CSS including buttons,"
        }
      />
      <p className="pt-10 px-9 font-libre text-left text-mobile-size-16px leading-mobile-line-26.4px font-normal">
        Você pode adicionar novos serviços ao seu plano.
      </p>
      <div className="pt-10 flex justify-center font-libre">
        <Button
          className="py-3 px-6 w-44 text-sm font-semibold"
          buttonLabel={"Adicionar serviços"}
        />
      </div>
      <div className="pt-3 pb-20 flex justify-center ">
        <Button
          className=" py-3 px-4 w-44 text-sm font-semibold bg-white text-gray-1 border-solid border-2 border-primary-blue-1 "
          buttonLabel={"Ir para página inicial"}
        />
      </div>
    </main>
  );
}
