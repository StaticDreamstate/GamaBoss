import Accordion from "../../components/Accordion";

export default function MyPlan(){
  return (
    
    <main>Página de Meu plano
     <Accordion titleAccordion={"What is Flowbite?"} contentAccordion={"Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,"} />
     <Accordion titleAccordion={"Teste2?"} contentAccordion={"F is an open-source library of interactive components built on top of Tailwind CSS including buttons,"} />
     <Accordion titleAccordion={"Teste 3"} contentAccordion={" an open-source library of interactive components built on top of Tailwind CSS including buttons,"} />

    </main>
    
    
  )
}