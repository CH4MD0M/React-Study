import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          // value 값을 state.message로 지정
          value={this.state.message}
          // 변화가 있을 때 다시 value 값을 state.message로 변경
          onChange={(e) => {
            // console.log(e);
            // console.log(e.target.value);
            this.setState({
              // input(e.target)의 value를 state의 message 값으로 설정(setState)
              message: e.target.value,
            });
          }}
        />
        <button
          // 버튼을 클릭하면 state에 있는 messaage를 알림창에 띄우고
          // state의 message를 비운다.
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: "",
            });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
