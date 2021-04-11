import React, { useState } from "react";
// /////////////////////////////////////////////////
// 3.4.2.2 useState 사용하기
const Say = () => {
  const [message, setmessage] = useState("");
  const onClickEnter = () => setmessage("안녕하세요!");
  const onClickLeave = () => setmessage("안녕히가세요!");

  const [color, setColor] = useState("");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "yellow" }} onClick={() => setColor("yellow")}>
        노란색
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        초록색
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        파란색
      </button>
    </div>
  );
};

export default Say;
