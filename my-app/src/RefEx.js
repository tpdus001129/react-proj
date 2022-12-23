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
