import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { PaymentProvider } from "./provider";
import { DaysProvider } from "./provider/daysProvider";
import Home from "./pages";

function App() {
  return (
    <>
      <PaymentProvider>
        <DaysProvider>
          <Home />
        </DaysProvider>
      </PaymentProvider>
    </>
  );
}

export default App;
