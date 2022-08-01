import { createContext } from "react";
import { IPlanContext, IPlanProvider } from "./types";

export const PlanContext = createContext({} as IPlanContext)

export function PlanProvider({ children }: IPlanProvider) {
  const [checked, setChecked] = 



  return (
    <PlanContext.Provider
      value={{
        
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}
