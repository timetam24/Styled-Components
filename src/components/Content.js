import React from "react";
import styled from "styled-components";

// props를 사용해서 조건에 따라 스타일을 적용하기. 문자열 리터럴 안에 자바스크립트 코드를 넣을 때 $를 사용하듯이 ${} 안에 코드 입력하기.
const ContentH1 = styled.h1`
  color: ${(props) => (props.name === "hi" ? "red" : "blue")};
  text-align: center;
  font-size: 30px;
`;

const Content = () => {
  return (
    <div>
      <ContentH1>제목 A</ContentH1>
      <ContentH1 name="hi">제목 B</ContentH1>
    </div>
  );
};

export default Content;
