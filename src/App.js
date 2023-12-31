import "./App.css";
import React from "react";
// 1. createGlobalStyle import해주기
import { createGlobalStyle, styled, ThemeProvider } from "styled-components";
// 1) 패키지 다운 명령: npm i styled-reset
import reset from "styled-reset";
import Content from "./components/Content";
import Buttons from "./components/Buttons";
import Button from "./components/Button";

// 2. 전역 스타일 컴포넌트 생성. 모든 컴포넌트에서 공통으로 스타일이 적용됩니다. 사용 예시: 웹 페이지의 배경색이나 글꼴 설정
const GlobalStyle = createGlobalStyle`
// 2) 전역 스타일에 styled-reset 적용 끝!
${reset}

span {
  background-color: red;
 color: black;
 font-size: 40px;
}
`;

const Example = () => {
  return (
    <>
      <h1>Hello Example</h1>
      <span>Hello Span2</span>
    </>
  );
};

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 2px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <>
      {/* 3. App.js(현재 최상위 컴포넌트) 상단에 GlobalStyle 컴포넌트를 추가해주면 모든 하위 컴포넌트에 스타일이 적용됩니다 */}
      <GlobalStyle />
      <span>Hello Span1</span>
      <Example />
      <Content />
      <Buttons />
      <ThemeProvider
        theme={{
          palette: {
            blue: "#228be6",
            gray: "#495057",
            pink: "#f06595",
          },
        }}
      >
        <AppBlock>
          <Button>Button</Button>
          <Button color="gray">BUTTON</Button>
          <Button color="pink">BUTTON</Button>
        </AppBlock>
      </ThemeProvider>
    </>
  );
}

export default App;
