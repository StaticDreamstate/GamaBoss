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
          <h2 className="">
            <button
              onClick={() => toggleAccordion(index)}
              type="button"
              className={`flex items-center justify-between w-[308px] md:w-[490px] h-11 p-5 font-medium md:text-mobile-size-24px text-left text-gray-1 border-2  border-gray-4  rounded-b-sm rounded-t-lg `}
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
            <div className="w-[308px] md:w-[490px]  ">
              <p className="mb-2 px-6 py-3 text-gray-1 border-x-2 border-b-2 border-t-1 border-gray-4 rounded-b-lg flex-wrap  md:text-mobile-size-24px  ">
                {props.contentAccordion}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
