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
        <SimulationSection> faça sua simulação </SimulationSection>
        <YouReceive> Você ira receber x </YouReceive>
      </MainDashboard>
    </ContainerDashboard>
  );
};
export default Dashboard;
