import React, { Component } from "react";

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            // this.setState({ number: number + 1 });

            // /////////////////////////////////////////////////
            // 3.4.1.3 this.setState에 객체 대신 함수 인자 전달하기
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });
            this.setState(
              (prevState) => ({
                number: prevState.number + 1,
              }),
              // /////////////////////////////////////////////////
              // 3.4.1.4 this.setState가 끝난 후 특정 작업 실행하기
              () => {
                console.log("방금 setState가 호출되었습니다.");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
