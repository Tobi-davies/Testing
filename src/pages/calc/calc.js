import React from "react";
import {
  InputField,
  CalcContainer,
  Container,
  KeypadContainer,
  Key,
  LowerButtons,
  ResetBtn,
  EqualBtn,
} from "./calc.styled";

function Calc() {
  const [inputValue, setInputValue] = React.useState("");

  const handleClick = (e) => {
    console.log(e.target.content);
  };
  const handleAddition = () => {};
  const handleDel = () => {};
  const handleSub = () => {};
  const handleDiv = () => {};
  const handleMult = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <CalcContainer onSubmit={handleSubmit}>
      <InputField value={inputValue} />
      <Container>
        <KeypadContainer>
          <Key onClick={handleClick}>7</Key>
          <Key onClick={handleClick}>8</Key>
          <Key onClick={handleClick}>9</Key>
          <Key className="del" onClick={handleDel}>
            DEL
          </Key>
          <Key onClick={handleClick}>4</Key>
          <Key onClick={handleClick}>5</Key>
          <Key onClick={handleClick}>6</Key>
          <Key onClick={handleAddition}>+</Key>
          <Key onClick={handleClick}>1</Key>
          <Key onClick={handleClick}>2</Key>
          <Key onClick={handleClick}>3</Key>
          <Key onClick={handleSub}>-</Key>
          <Key onClick={handleClick}>.</Key>
          <Key onClick={handleClick}>0</Key>
          <Key onClick={handleDiv}>/</Key>
          <Key onClick={handleMult}>x</Key>
        </KeypadContainer>
        <LowerButtons>
          <ResetBtn onClick={handleClick}>RESET</ResetBtn>
          <EqualBtn type="submit">=</EqualBtn>
        </LowerButtons>
      </Container>
    </CalcContainer>
  );
}

export default Calc;
