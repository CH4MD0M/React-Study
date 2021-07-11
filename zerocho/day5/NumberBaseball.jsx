import React, { Component } from "react";
import Try from "./Try";

function getNumbers() {}

class NumberBaseball extends Component {
    state = {
        resul: "",
        value: "",
        answer: getNumbers(),
        tries: [],
    };

    onSubmitForm = () => {};
    onChangeInput = () => {};
    fruits = [
        { fruit: "사과", taste: "맛있다." },
        { fruit: "배", taste: "맛있다." },
        { fruit: "딸기", taste: "맛있다." },
        { fruit: "바나나", taste: "맛있다." },
        { fruit: "귤", taste: "맛있다." },
        { fruit: "오렌지", taste: "맛있다." },
    ];

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input
                        maxLength={4}
                        value={this.state.value}
                        onChange={this.onChangeInput}
                    />
                </form>
                <div>시도:{this.state.tries.length}</div>
                <ul>
                    {this.fruits.map((v, i) => (
                        <Try key={v.fruit + v.taste} value={v} index={i} />
                    ))}
                </ul>
            </>
        );
    }
}
export default NumberBaseball;
