import { createContext, useState } from "react";

export const daysContext = createContext([]);

export const DaysProvider = ({ children }) => {
  const [daysIndividual, setDaysIndividual] = useState();
  return (
    <daysContext.Provider value={{ daysIndividual, setDaysIndividual }}>
      {children}
    </daysContext.Provider>
  );
};
