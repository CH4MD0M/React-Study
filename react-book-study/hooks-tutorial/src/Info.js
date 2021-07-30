import React, { useEffect, useState } from "react";

const Info = () => {
    const [name, setName] = useState("");
    const [nickname, setNickname] = useState("");
    // componentWillUnmount 또는 shouldComponentUpdate
    useEffect(() => {
        console.log("effect");
        console.log(name);
        return () => {
            console.log("cleanup");
            console.log(name);
        };
    });

    // componentDidMount
    // useEffect(() => {
    //     console.log("마운트될 때만 실행된다.");
    // }, []);

    // componentDidUpdate
    // useEffect(() => {
    //     console.log(name);
    // }, [name]);

    // useEffect(() => {
    //     console.log("렌더링 완료");
    //     console.log({ name, nickname });
    // });

    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeNickname = (e) => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <div>
                    <b>이름:</b>
                    {name}
                </div>
                <div>
                    <b>닉네임:</b>
                    {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;
