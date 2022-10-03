import { createContext, useState } from "react";

export const paymentContext = createContext([]);

export const PaymentProvider = ({ children }) => {
  const [paymentInDays, setPaymentInDays] = useState([]);
  return (
    <paymentContext.Provider value={{ paymentInDays, setPaymentInDays }}>
      {children}
    </paymentContext.Provider>
  );
};
