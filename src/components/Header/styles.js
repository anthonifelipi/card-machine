import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 10px 0;
  height: 100px;
  /* max-width: 700px; */
  background-color: #fff;
  border-bottom: 1px solid black;

  img {
    width: 150px;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
  }
`;

export const TextHeader = styled.h1`
  font-family: "Times New Roman", Times, serif;
  color: blue;
  font-weight: 500;
`;
