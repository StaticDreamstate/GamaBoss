import Accordion from "../../components/Accordion";
import Box from "../../components/BoxHome";
import Button from "../../components/Button";

export default function MyPlan() {
  return (
    <main>
      <Box />
      <p className="pt-2 pb-20 px-20 font-libre">O plano atual do Tobias é plano simples. Veja abaixo o que está incluso.</p>

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
      <p className="pt-20 pb-5 px-20 font-libre">Você pode adicionar novos serviços ao seu plano.</p>
      <div className="pt-10  flex justify-center font-libre">
        <Button buttonLabel={"Adicionar serviços"} />
      </div>
      <div className="pt-5 flex justify-center font-libre">
        <Button buttonLabel={"Ir para home"} />
      </div>
    </main>
  );
}
