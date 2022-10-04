import {
  Container,
  ContainerDays,
  TitleH2,
  ContainerHeader,
  ContainerIndividualDays,
} from "./styles";
import { useContext } from "react";
import { paymentContext } from "../../provider";
import { daysContext } from "../../provider/daysProvider";

const ReceiveTable = () => {
  const { paymentInDays, setPaymentInDays } = useContext(paymentContext);
  const { daysIndividual, setDaysIndividual } = useContext(daysContext);
  let arrayDaysStatic = [1, 15, 30, 60, 90, 120, 180, 210];
  return (
    <Container>
      <ContainerHeader>
        <TitleH2>VOCÊ RECEBERÁ</TitleH2>
      </ContainerHeader>
      <ContainerDays>
        {paymentInDays.length == 0
          ? arrayDaysStatic.map((item, i) => {
              return <p key={i}>Em {item} dias, R$: 0,00</p>;
            })
          : Object.entries(paymentInDays).map((item, i) => {
              if (item[0] != daysIndividual) {
                return (
                  <p key={i}>
                    em {item[0]} dias, R$: {item[1].toFixed(2)}
                  </p>
                );
              }
            })}
      </ContainerDays>
      <ContainerIndividualDays>
        <h4> Pesquisa individual </h4>
        {daysIndividual == undefined ? null : (
          <p>
            em {daysIndividual} dias, R$:{" "}
            {paymentInDays[daysIndividual]?.toFixed(2)}
          </p>
        )}
      </ContainerIndividualDays>
    </Container>
  );
};
export default ReceiveTable;
