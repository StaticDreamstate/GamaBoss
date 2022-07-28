import { useState } from "react";

interface IaccordionProps {
    titleAccordion:string;
    contentAccordion:string;
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
        <>
          <h2>
            <button
              onClick={() => toggleAccordion(index)}
              type="button"
              className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 `}
            >
              <span>{props.titleAccordion}</span>
              <svg
                className={`w-6 h-6  shrink-0 ${
                  activeAccordion.state == true ? "rotate-180" : ""}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            className={`${activeAccordion.state == false ? "hidden" : "block"}`}
          >
            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400 ">
                {props.contentAccordion}
              </p>
            </div>
          </div>
        </>
      ))}
    </section>
  );
}
