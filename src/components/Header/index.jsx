import machine from "../../assets/cardMachine.jpg";
import { Container, TextHeader } from "./styles";

const Header = () => {
  return (
    <Container>
        <TextHeader> Card Machine </TextHeader>
      <img src={machine} alt="" />
    </Container>
  );
};
export default Header;
