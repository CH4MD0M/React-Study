import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

const mapStateToProps = (state) => {
    return { number: state.counter.number };
};
const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => {
            dispatch(increase());
        },

        decrease: () => {
            dispatch(decrease());
        },
    };
};

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// 익명함수 형태로 작성
export default connect(
    (state) => {
        return { number: state.counter.number };
    },
    (dispatch) => {
        return {
            increase: () => {
                dispatch(increase());
            },

            decrease: () => {
                dispatch(decrease());
            },
        };
    }
)(CounterContainer);
