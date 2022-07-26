import Accordion from "../../components/Accordion";
import CheckBox from "../../components/CheckBox";
import Footer from "../../components/Footer";

export default function Change() {
  return (
     <main className="flex flex-col items-center">
      <div className="flex">
        <CheckBox />
        <Accordion
          titleAccordion="titulo de algum conteudo"
          contentAccordion="conteudoooooo"
        />
      </div>
      <div className="flex ">
        <CheckBox />
        <Accordion
          titleAccordion="titulo de algum conteudo"
          contentAccordion="conteudoooooo"
        />
      </div>
      <div className="flex ">
        <CheckBox />
        <Accordion
          titleAccordion="titulo de algum conteudo"
          contentAccordion="conteudoooooo"
        />
      </div>
    </main>
    <Footer />
  )
 }
