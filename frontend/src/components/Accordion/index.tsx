import { useState } from "react";
import { icons } from "../../assets";

interface IaccordionProps {
  titleAccordion: string;
  contentAccordion: string;
  className?:string
}

export default function Accordion(props: IaccordionProps) {
  const [activeAccordions, setActiveAccordions] = useState([
    {
      id: Math.random(),
      state: false,
    },
  ]);

  function toggleAccordion(index: number) {
    const newActiveAccordions = [...activeAccordions];
    newActiveAccordions[index].state = !newActiveAccordions[index].state;
    setActiveAccordions(newActiveAccordions);
  }

  return (
    <section className={`${props.className}`}>
      {activeAccordions.map((activeAccordion, index) => (
        <div>
          <h2 className="pb-4 ">
            <button
              onClick={() => toggleAccordion(index)}
              type="button"
              className={`flex items-center justify-between w-72 h-11 p-5 font-medium text-left text-gray-3 border border-b-1 border-gray-4 rounded-lg focus:ring-4 focus:ring-gray-200  `}
            >
              <span>{props.titleAccordion}</span>
              <img
                className={`w-4 h-4  shrink-0 ${
                  activeAccordion.state == true ? "" : ""
                }`}
                src={`${activeAccordion.state == false ? icons.iconCircle : icons.iconNegative}`}
                alt="Icone de positivo e negativo"                              
              />
            </button>
          </h2>
          <div
            className={`${activeAccordion.state == false ? "hidden" : "block"}`}
          >
            <div className=" pl-6 w-72 font-libre">
              <p className="mb-2 text-gray-500 flex-wrap">
                {props.contentAccordion}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
