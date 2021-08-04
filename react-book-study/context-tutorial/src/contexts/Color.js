import { createContext, useState } from "react";

const ColorContext = createContext({
    state: { color: "black" },
    actions: {
        setColor: () => {},
        setSubcolor: () => {},
    },
});

export const ColorProvider = ({ children }) => {
    const [color, setColor] = useState("black");
    const [subcolor, setSubcolor] = useState("red");

    return (
        <ColorContext.Provider
            value={{
                state: { color, subcolor },
                actions: { setColor, setSubcolor },
            }}
        >
            {children}
        </ColorContext.Provider>
    );
};

// const { Consumer: ColorConsumer } = ColorContext;
// export { ColorConsumer, ColorProvider};
export const ColorConsumer = ColorContext.Consumer;
export default ColorContext;
