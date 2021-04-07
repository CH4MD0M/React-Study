import React from "react";

const MyComponent = (props) => {
  return (
    <div>
      나의 새로운 컴포넌트
      <h1>안녕하세요 제이름은 {props.name} 입니다.</h1>
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

export default MyComponent;
