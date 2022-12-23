import React, { useState, useRef } from "react"; //Ref 추가
function RefEx() {
  const formInputNoRef = useRef(null);
  const [no, setNo] = useState("");

  const notice = () => {
    formInputNoRef.current.focus(); //2. 이거 추가하고 (걍 외워)

    if (!no) {
      alert("숫자를 입력해주세요.");
      return;
    }
    alert(`당신이 입력한 숫자는 ${no} 입니다.`);
    setNo("");
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          notice();
        }}
      >
        <input
          ref={formInputNoRef} // 1. 이거 추가하고~ (이름은 아무거나?)
          type="text"
          placeholder="숫자"
          value={no}
          onChange={(e) => setNo(e.target.value)}
        />
        <button>실행</button>
      </form>
    </>
  );
}

export default RefEx;

// < 방법! >
// npm start 할땐 컨트롤+C 눌러서 했던거 꺼주고 해야함
// App.js 가서 출력할 페이지 리턴값 바꿔줘야함

// 버튼 눌러도 텍스트상자에 포커싱  <의 해결방법
// 변수 이름 정하고(1번째 단어), ex) formInputNoRef.current.focus();

// State와 Ref의 차이 = State는 바로 값이 변하지만, Ref는 다시 랜더링이 되어야만 변해진다.