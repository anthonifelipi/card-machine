import FormSimulation from "../FormSimulation";
import ReceiveTable from "../ReceiveTable";
import {
  MainDashboard,
  ContainerDashboard,
  SimulationSection,
  YouReceive,
} from "./styles";

const Dashboard = () => {
  return (
    <ContainerDashboard>
      <MainDashboard>
        <SimulationSection>
          <FormSimulation />
        </SimulationSection>
        <YouReceive>
          {" "}
          <ReceiveTable />{" "}
        </YouReceive>
      </MainDashboard>
    </ContainerDashboard>
  );
};
export default Dashboard;
