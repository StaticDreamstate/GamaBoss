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
        <>
          <h2>
            <button
              onClick={() => toggleAccordion(index)}
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200`}
            >
              <span>{props.titleAccordion}</span>
              <img
                className={`w-6 h-6  shrink-0 ${
                  activeAccordion.state == true ? "rotate-180" : ""
                }`}
                src={icons.iconArrowDown}
                alt="Icone de seta"
              />
            </button>
          </h2>
          <div
            className={`${activeAccordion.state == false ? "hidden" : "block"}`}
          >
            <div className="p-5 font-light border border-b-0 border-gray-200">
              <p className="mb-2 text-gray-500 flex-wrap">
                {props.contentAccordion}
              </p>
            </div>
          </div>
        </>
      ))}
    </section>
  );
}
