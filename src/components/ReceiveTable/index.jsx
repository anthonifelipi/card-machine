import { Container, ContainerDays, TitleH2, ContainerHeader } from "./styles";
import { useContext, useEffect } from "react";
import { paymentContext } from "../../provider";

const ReceiveTable = () => {
  const { paymentInDays, setPaymentInDays } = useContext(paymentContext);

  return (
    <Container>
      <ContainerHeader>
        <TitleH2>VOCÊ RECEBERÁ</TitleH2>
      </ContainerHeader>
      <ContainerDays>
        {Object.entries(paymentInDays).map((item, i) => {
          return (
            <p key={i}>
              em {item[0]} dias, R$: {item[1]}
            </p>
          );
        })}

        {/* <p>
          Amanha R$: {paymentInDays[1] ? paymentInDays[1].toFixed(2) : "0,00"}
        </p>
        <p>
          Em 15 dias R$:{" "}
          {paymentInDays[15] ? paymentInDays[15].toFixed(2) : "0,00"}
        </p>
        <p>
          Em 30 dias R$:{" "}
          {paymentInDays[30] ? paymentInDays[30].toFixed(2) : "0,00"}
        </p>
        <p>
          Em 60 dias R$:{" "}
          {paymentInDays[60] ? paymentInDays[60].toFixed(2) : "0,00"}
        </p>
        <p>
          Em 90 dias R$:{" "}
          {paymentInDays[90] ? paymentInDays[90].toFixed(2) : "0,00"}
        </p>
        <p>
          Em 120 dias R$:{" "}
          {paymentInDays[120] ? paymentInDays[120].toFixed(2) : "0,00"}
        </p>
        <p>
          Em 150 dias R$:{" "}
          {paymentInDays[150] ? paymentInDays[150].toFixed(2) : "0,00"}
        </p>
        <p>
          Em 180 dias R$:{" "}
          {paymentInDays[180] ? paymentInDays[180].toFixed(2) : "0,00"}
        </p>
        <p>
          Em 210 dias R$:{" "}
          {paymentInDays[210] ? paymentInDays[210].toFixed(2) : "0,00"}
        </p> */}
      </ContainerDays>
    </Container>
  );
};
export default ReceiveTable;
