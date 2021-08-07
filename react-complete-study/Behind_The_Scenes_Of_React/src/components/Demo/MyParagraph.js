import React from "react";

const MyParagraph = (props) => {
    console.log("MyParagraph RUNNING");
    return <p>{props.childre}</p>;
};

export default MyParagraph;
