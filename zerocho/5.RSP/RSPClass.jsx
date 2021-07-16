import React, { Component } from "react";

// 클래스의 경우
// constructor -> render(첫 렌더링) -> ref설정(ref를 사용했다면) -> componentDidMount

// setState/props 바뀌는 경우
// shouldComponentUpdate -> render -> componentDidUpdate

// 부모가 자식 컴포넌트를 제거하는 경우
// componentWillUnmount -> 소멸

const rspCoords = {
    바위: "-20px",
    보: "-330px",
    가위: "-640px",
};

const scores = {
    가위: 1,
    바위: 0,
    보: -1,
};

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find(function (v) {
        return v[1] === imgCoord;
    })[0];
};

class RSP extends Component {
    state = {
        result: "",
        imgCoord: rspCoords.바위,
        score: 0,
    };

    interval;

    componentDidMount() {
        // 컴포넌트가 첫 랜더링 된 후
        // 비동기 요청
        this.interval = setInterval(this.changeHand, 100);
    }

    componentWillUnmount() {
        // 컴포넌트가 제거되기 직전
        // 비동기 요청 정리
        clearInterval(this.interval);
    }

    changeHand = () => {
        const { imgCoord } = this.state; // 클로저
        if (imgCoord === rspCoords.바위) {
            this.setState({
                imgCoord: rspCoords.보,
            });
        } else if (imgCoord === rspCoords.보) {
            this.setState({
                imgCoord: rspCoords.가위,
            });
        } else if (imgCoord === rspCoords.가위) {
            this.setState({
                imgCoord: rspCoords.바위,
            });
        }
    };

    onClickBtn = (choice) => () => {
        const { imgCoord } = this.state;

        clearInterval(this.interval); // setInterval 해제

        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if (diff === 0) {
            this.setState({
                result: "비겼습니다!",
            });
        } else if ([-1, 2].includes(diff)) {
            this.setState((prevState) => {
                return {
                    result: "이겼습니다!",
                    score: prevState.score + 1,
                };
            });
        } else {
            this.setState((prevState) => {
                return {
                    result: "졌습니다!",
                    score: prevState.score - 1,
                };
            });
        }
        setTimeout(() => {
            this.interval = setInterval(this.changeHand, 100);
        }, 2000);
    };

    render() {
        const { result, score, imgCoord } = this.state;
        return (
            <>
                <div
                    id="computer"
                    style={{
                        background: `url(rsp.png)${imgCoord} 0`,
                    }}
                />
                <div>
                    <button
                        id="rock"
                        className="btn"
                        onClick={this.onClickBtn("바위")}
                    >
                        바위
                    </button>
                    <button
                        id="paper"
                        className="btn"
                        onClick={this.onClickBtn("보")}
                    >
                        보
                    </button>
                    <button
                        id="scissor"
                        className="btn"
                        onClick={this.onClickBtn("가위")}
                    >
                        가위
                    </button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </>
        );
    }
}

export default RSP;
