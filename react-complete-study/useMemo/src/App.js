import React, { useCallback, useMemo, useState } from "react";

import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button/Button";

function App() {
    const [listTitle, setListTitle] = useState("My List");

    const changeTitleHandler = useCallback(() => {
        setListTitle("New Title");
    }, []);

    // 리렌더링 되면 배열을 새로 생성한다.
    // 자바스크립트에서는 [1,2,3] === [1,2,3] //false 이처럼 기본값이 아니면 다르다고 평가하기 때문에
    // useMemo를 사용하여 배열 값을 기억하게 한다.
    const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

    return (
        <div className="app">
            <DemoList title={listTitle} items={listItems} />
            <Button onClick={changeTitleHandler}>Change List Title</Button>
        </div>
    );
}

export default App;
