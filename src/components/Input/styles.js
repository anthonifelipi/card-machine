import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: left;
  flex-direction: column;
  margin: 5px;
  width: 100%;
  height: 100%;

  p {
    color: #000;
    font-size: 16px;
    margin: 5px;
  }
  span {
    color: #c53030;
    padding: 5px;
    font-size: 14px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  border: none;
  box-sizing: border-box;
  width: 100%;
  margin: 5px;

  input {
    background-color: #fff;
    align-items: center;
    flex: 1;
    padding: 3px;
    width: 100%;
    max-width: 350px;
    font-size: 16px;
    height: 40px;
    border: 1px solid #90baf0;
    border-radius: 5px;
    color: #000;
    font-weight: 500;
    &::placeholder {
      padding: 10px;
      font-size: 16px;
    }
  }
`;
