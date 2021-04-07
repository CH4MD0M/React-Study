import React from "react";
import MyComponent from "./MyComponent";
import "./App.css";

// function App() {
//   const name = "React";
//   // const age = undefined;
//   const style = {
//     backgroundColor: "black",
//     color: "aqua",
//     fontSize: "48px",
//     fontWeight: "bold",
//     padding: 16,
//   };
//   return (
//     // <>
//     //   {/* <Fragment> </Fragment> 의 축약형*/}
//     //   <h1>{name} 안녕!</h1>
//     //   <h2>잘 작동하니?</h2>

//     //   {/* if문 대신 조건부 연산자 */}
//     //   <div>
//     //     {name === "React" ? (
//     //       <h1>리액트 입니다.</h1>
//     //     ) : (
//     //       <h1>리액트가 아닙니다.</h1>
//     //     )}
//     //   </div>

//     //   {/* AND 연산자를 사용한 조건부 렌더링 */}
//     //   <div>{name === "React" && <h1>리액트 입니다.</h1>}</div>

//     //   {/* undefined를 렌더링 하지 않기 */}
//     //   <div>{age || "리액트"}</div>
//     // </>
//     <>
//       <div style={style}>{name}</div>
//       <div
//         style={{
//           backgroundColor: "black",
//           color: "aqua",
//           fontSize: "48px",
//           fontWeight: "bold",
//           padding: 16,
//         }}
//       >
//         {name}
//       </div>

//       <div className="react">{name}</div>
//     </>
//   );
// }

// 클래스형 컴포넌트
// class App extends Comment {
//   render() {
//     const name = "react";

//     return <div className="react"></div>;
//   }
// }

// //////////////////////////////////////////////////
// 3.2.3 모듈 내보내기 및 불러오기
// 3.3 props

const App = () => {
  return <MyComponent />;
};
export default App;
