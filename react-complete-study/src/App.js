import { Fragment } from "react";

function App() {
  const name = "React";
  const age = undefined;
  return (
    <>
      {/* <Fragment> </Fragment> 의 축약형*/}
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>

      {/* if문 대신 조건부 연산자 */}
      <div>
        {name === "React" ? (
          <h1>리액트 입니다.</h1>
        ) : (
          <h1>리액트가 아닙니다.</h1>
        )}
      </div>

      {/* AND 연산자를 사용한 조건부 렌더링 */}
      <div>{name === "React" && <h1>리액트 입니다.</h1>}</div>

      {/* undefined를 렌더링 하지 않기 */}
      <div>{age || "리액트"}</div>
    </>
  );
}

export default App;
