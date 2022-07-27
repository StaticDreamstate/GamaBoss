import { useState } from "react";
import Accordion from "../../components/Accordion";
import { plans } from "./objetc";

export default function Change() {
  const [checked, setChecked] = useState(true);

  function handleCheckbox(){
    return console.log([
      {title: "Consultas Clínicas", text:"03 consultas anuais de rotina com veterinário em uma das clínicas parceiras do plano.", userHas: !checked},
  {title:"Vacinas básicas caninas", text: "02 doses das vacinas V8, V10 e V11. E vacina da gripe anual.", userHas: !checked},
    ])
  }

  return (
    <>
      <main className="flex flex-col items-center">
        {plans.map((plan) => (
          <div className="flex">
            {plan.userHas ? (
              <input
                type="checkbox"
                defaultChecked={plan.userHas}
                onClick={handleCheckbox}
                onChange={() => setChecked(!checked)}
              />
            ) : (
              <input
                type="checkbox"
                defaultChecked={plan.userHas}
                onChange={() => setChecked(!checked)}
              />
            )}
            <Accordion
              titleAccordion={plan.title}
              contentAccordion={plan.text}
            />
          </div>
        ))}
      </main>
    </>
  );
}
