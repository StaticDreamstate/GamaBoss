import { useState } from "react";
import Accordion from "../../components/Accordion";
import { plans } from "./objetc";

export default function Change() {
  const [checked, setChecked] = useState([
    {
      id: Math.random(),
      state: false,
    },
  ]);

  function toggleCheckbox(index: number) {
    const newCheck = [...checked, {
      id: Math.random()
      ,state: !checked}, ];
    // newCheck[index].state = !newCheck[index].state;
    console.log(newCheck);  
    setChecked(newCheck);
  }

  function verLog(){
    console.log(checked);
    
  }

  return (
    <>
      <main className="flex flex-col items-center">
        {plans.map((plan, index) => (
          <div
          key={plan.title+index}
           className="flex">
            {plan.userHas == false ? (
              <>
                <input
                  type="checkbox"
                  defaultChecked={plan.userHas}
                  onClick={() => toggleCheckbox(index)}
                />
                <Accordion
                  titleAccordion={plan.title}
                  contentAccordion={plan.text}
                />
              </>
            ) : ("")}
          </div>
        ))}

        {plans.map((plan,index) => (
          <div 
          key={plan.title+index}
          className="flex">
            {plan.userHas == true ? (
              <>
                <input
                  type="checkbox"
                  defaultChecked={plan.userHas}
                  //  onClick={"handleCheckbox"}
                  // onChange={() => toggleCheckbox(index)}
                />
                <Accordion
                  titleAccordion={plan.title}
                  contentAccordion={plan.text}
                />
              </>
            ) : ("")}
          </div>
        ))}
      </main>
    </>
  );
}
