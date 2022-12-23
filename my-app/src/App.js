import RefEx from "./RefEx";

import "./App.css";

function App() {
  return (
    <>
      <RefEx />
    </>
  );
}

export default App;

// < 방법! >
// npm start 할땐 컨트롤+C 눌러서 했던거 꺼주고 해야함
// App.js 가서 출력할 페이지 리턴값 바꿔줘야함

// 버튼 눌러도 텍스트상자에 포커싱  <의 해결방법
// 변수 이름 정하고(1번째 단어), ex) formInputNoRef.current.focus();

// State와 Ref의 차이 = State는 바로 값이 변하지만, Ref는 다시 랜더링이 되어야만 변해진다.