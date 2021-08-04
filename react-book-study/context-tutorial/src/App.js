import React from "react";
import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors_class";
import { ColorProvider } from "./contexts/Color";

const App = () => {
    return (
        <ColorProvider>
            <div>
                <SelectColors />
                <ColorBox />
            </div>
        </ColorProvider>
    );
};

export default App;
