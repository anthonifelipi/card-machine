import { Container } from "./styles";
import Input from "../Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../service";
import { useContext, useEffect } from "react";
import { paymentContext } from "../../provider";
import { daysContext } from "../../provider/daysProvider";

const FormSimulation = () => {
  const { paymentInDays, setPaymentInDays } = useContext(paymentContext);
  const { daysIndividual, setDaysIndividual } = useContext(daysContext);

  const schema = yup.object().shape({
    amount: yup
      .number()
      .required("Insira um valor")
      .min(1000)
      .max(100000000)
      .typeError("Insira um valor"),
    installments: yup
      .number()
      .required("Coloque a quantidade de parcelas")
      .min(1)
      .max(12)
      .typeError("Coloque a quantidade de parcelas"),
    mdr: yup
      .number()
      .required("Informe a % da taxa")
      .typeError("Coloque a quantidade de parcelas"),
    days: yup
      .number()
      // .required("Informe os dias que quer antecipar")
      .typeError("Insira em quantos dias gostaria de antecipar"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = async (data) => {
    let request = [1, 15, 30, 60, 90, 120, 150, 180, 210];
    request.push(data.days);
    const requestData = {
      amount: data.amount,
      installments: data.installments,
      mdr: data.mdr,
      days: request,
    };
    setDaysIndividual(data.days);

    await api
      .post("", requestData)
      .then((response) => setPaymentInDays(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <h1>Simule sua antecipação</h1>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Input
          register={register}
          label="Informe o valor da venda"
          placeholder="Valor da venda"
          name="amount"
          error={errors.amount?.message}
        />
        <Input
          register={register}
          label="Em quantas parcelas?"
          placeholder="Quantidade de parcelas"
          name="installments"
          error={errors.installments?.message}
        />
        <Input
          register={register}
          label="Informe o % de mdr"
          placeholder="Informe a % da taxa"
          name="mdr"
          error={errors.mdr?.message}
        />
        <Input
          register={register}
          defaultValue={240}
          label="Informe os dias que quer antecipar"
          placeholder="Dias de antecipação"
          name="days"
          error={errors.days?.message}
        />
        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
};
export default FormSimulation;
