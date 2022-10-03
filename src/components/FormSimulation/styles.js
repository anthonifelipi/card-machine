import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fff;

  form {
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    text-align: center;
  }

  h1 {
    font-family: "inter";
    font-weight: 700 bold;
    font-size: 30px;
    padding: 0px 20px;
    color: #000;
  }
  span {
    font-family: "inter";
    font-weight: 400 Regular;
    font-size: 12px;
    color: #868e96;
  }
  p {
    color: #000;
  }
  button{
    background-color: #90baf0;
    width: 50%;
    height: 30px;
    border-radius: 5px;
    color: #FFF;
  }
`;
