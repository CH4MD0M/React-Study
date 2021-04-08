import React, { Component } from "react";
import PropTypes from "prop-types";
/* 
const MyComponent = ({ name, favoriteNumber, children }) => {
  // 3.3.5 비구조화 할당 문법을 통해 props 내부 값 추출하기
  // destructuring Syntax
  // const { name, children } = props;
  return (
    <div>
      나의 새로운 컴포넌트
      <h1>안녕하세요! 제 이름은 "{name}" 입니다.</h1>
      <h2>children 값은 "{children}" 입니다.</h2>
      <h2>제가 좋아하는 숫자는 "{favoriteNumber}" 입니다.</h2>
    </div>
  );
};

MyComponent.defaultProps = {
  name: "기본 이름",
};

// 3.3.6 propTypes를 통한 props 검증
MyComponent.propTypes = {
  name: PropTypes.string,
};

 */

// //////////////////////////////////////////////////
// 3.3.7 클래스형 컴포넌트에서 props 사용하기
// class MyComponent extends Component {
//   static defaultProps = {
//     name: "기본이름",
//   };

//   static propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number,
//   };

//   render() {
//     const { name, favoriteNumber, children } = this.props;
//     return (
//       <div>
//         <h1>안녕하세요! 제 이름은 "{name}" 입니다.</h1>
//         <h2>children 값은 "{children}" 입니다.</h2>
//         <h2>제가 좋아하는 숫자는 "{favoriteNumber}" 입니다.</h2>
//       </div>
//     );
//   }
// }
/* 
// defaultProps
MyComponent.defaultProps = {
  name: "기본 이름",
};

// propTypes
MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number,
}; 
*/

// export default MyComponent;
