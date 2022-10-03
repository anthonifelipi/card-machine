import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: space-around;
  width: 100%;
  height: 100%;
  background-color: #f1f1f1f1;
`;

export const ContainerHeader = styled.div`
  display: flex;
  width: 80%;
  height: 25%;
  align-items: flex-end;
`;

export const TitleH2 = styled.h2`
  width: 100%;
  max-width: 250px;
  border: 0px;
  margin: 0px;
  color: #497dbf;
  border-bottom: 3px solid #fff;
  height: 30px;
  font-family: "Times New Roman", Times, serif;
  font-size: 1.1rem;
`;
export const ContainerDays = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 75%;
  padding: 10px;

  p {
    margin: 0px;
    padding: 2px;
    color: #90baf0;
    font-weight: 700;
  }
`;
