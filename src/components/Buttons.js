import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  color: white;
  background-color: purple;
`;

const StyledBigButton = styled(StyledButton)`
  font-size: 50px;
`;

const StyledBigUpperCaseButton = styled(StyledBigButton)`
  text-transform: uppercase;
`;

const Buttons = () => {
  return (
    <>
      <StyledButton>button</StyledButton>
      <StyledBigButton>button-big</StyledBigButton>
      <StyledBigUpperCaseButton>button-big-uppercase</StyledBigUpperCaseButton>
      {/* 중복되지 않는 특정 class명을 생성하여 스타일 적용하는 것 확인 */}
    </>
  );
};

export default Buttons;
