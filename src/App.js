import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { PaymentProvider } from "./provider";
import Home from "./pages";

function App() {
  return (
    <>
      <PaymentProvider>
        <Home />
        {/* <Header />
        <Dashboard />; */}
      </PaymentProvider>
    </>
  );
}

export default App;
