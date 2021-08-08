import React, { useCallback, useState } from "react";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import Button from "./components/UI/Button/Button";

function App() {
    const [showParagraph, setShowParagraph] = useState(false);
    const [allowToggle, setAllowToggle] = useState(false);

    console.log("APP RUNNING");

    const toggleParagraphHandler = useCallback(() => {
        if (allowToggle) {
            setShowParagraph((preShowParagraph) => !preShowParagraph);
        }
    }, [allowToggle]);

    const allowToggleHandler = useCallback(() => {
        setAllowToggle(!allowToggle);
    });

    return (
        <div className="app">
            <h1>Hi there!</h1>
            {/* {showParagraph && <p>This is new!</p>} */}
            <DemoOutput show={showParagraph} />
            <Button onClick={allowToggleHandler}>Allow Toggling</Button>
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
        </div>
    );
}

export default App;
