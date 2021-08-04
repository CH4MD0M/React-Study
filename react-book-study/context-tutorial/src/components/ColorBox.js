import React, { useContext } from "react";
import ColorContext from "../contexts/Color";
// import { ColorConsumer } from "../contexts/Color";

const ColorBox = () => {
    const { state } = useContext(ColorContext);
    return (
        // /////////////////////////////////////////////
        // Consumer 사용.
        // <ColorContext.Consumer>
        //     {(value) => (
        //         <div
        //             style={{
        //                 width: "64px",
        //                 height: "64px",
        //                 background: value.color,
        //             }}
        //         />
        //     )}
        // </ColorContext.Consumer>

        // /////////////////////////////////////////////
        // 동적 Context 사용.
        // <ColorConsumer>
        //     {(value) => (
        //         <>
        //             <div
        //                 style={{
        //                     width: "64px",
        //                     height: "64px",
        //                     background: value.state.color,
        //                 }}
        //             ></div>
        //             <div
        //                 style={{
        //                     width: "32px",
        //                     height: "32px",
        //                     background: value.state.subcolor,
        //                 }}
        //             ></div>
        //         </>
        //     )}
        // </ColorConsumer>

        // /////////////////////////////////////////////
        // Hooks 사용
        <>
            <div
                style={{
                    width: "64px",
                    height: "64px",
                    background: state.color,
                }}
            ></div>
            <div
                style={{
                    width: "32px",
                    height: "32px",
                    background: state.subcolor,
                }}
            ></div>
        </>
    );
};

export default ColorBox;
