import styled from "styled-components";

export const CalcContainer = styled.form`
  width: 100%;
  border: 1px solid blue;
`;

export const InputField = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: 5px;
  border: 1px solid green;
  padding: 0 10px;
  // padding: 0;
  margin: 0;
  outline: none;
  height: 60px;
  font-size: 20px;
  font-family: "Spartan", sans-serif;
  text-align: right;
  font-weight: 600;
`;

export const Container = styled.div`
  border: 1px solid blue;
  margin-top: 10px;
  border-radius: 5px;
`;

export const KeypadContainer = styled.div`
  border-radius: 5px;
  padding: 10px;
  // border: 1px solid green;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  & .del {
    font-size: 12px;
  }
`;

export const Key = styled.button`
  padding: 10px;
  outline: none;
  border: none;
  // border: 1px solid red;
  text-align: center;
  border-radius: 5px;
  font-size: 15px;
  font-family: "Spartan", sans-serif;
  font-weight: 600;
  cursor: pointer;
`;

export const LowerButtons = styled.div`
  padding: 0 10px 10px 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export const ResetBtn = styled.button`
  padding: 8px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 13px;
  font-family: "Spartan", sans-serif;
  cursor: pointer;
  font-weight: 600;
`;

export const EqualBtn = styled.button`
  padding: 8px;
  outline: none;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-family: "Spartan", sans-serif;
  cursor: pointer;
  font-weight: 600;
`;
