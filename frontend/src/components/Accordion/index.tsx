import { useState } from "react";
import { icons } from "../../assets";

interface IaccordionProps {
  titleAccordion: string;
  contentAccordion: string;
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
    <section>
      {activeAccordions.map((activeAccordion, index) => (
        <div className="container">
          <h2 className="pb-6 px-7">
            <button
              onClick={() => toggleAccordion(index)}
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-3 border border-b-1 border-gray-4 rounded-lg focus:ring-4 focus:ring-gray-200  hover:decoration-indigo-800 h-11`}
            >
              <span>{props.titleAccordion}</span>
              <img
                className={`w-4 h-4  shrink-0 ${
                  activeAccordion.state == true ? "" : ""
                }`}
                src={icons.iconCircle}
                alt="Icone de positivo"
              />
            </button>
          </h2>
          <div
            className={`${activeAccordion.state == false ? "hidden" : "block"}`}
          >
            <div className="p-3 px-10 font-libre">
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
