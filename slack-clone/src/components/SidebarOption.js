import React from "react";
import styled from "styled-components";
import { db } from "../firebase";

function SidebarOption({ Icon, title, addChannelOption }) {
    const addChannel = () => {
        const channelName = prompt("채널 이름을 입력 해주세요.");
        if (channelName) {
            db.collection("rooms").add({
                name: channelName,
            });
        }
    };

    const selectChannel = () => {};

    return (
        <SidebarOptionContainer
            onClick={addChannelOption ? addChannel : selectChannel}
        >
            {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
            {Icon ? (
                <h3>{title}</h3>
            ) : (
                <SidebarOptionChannel>
                    <span>#</span>
                    {title}
                </SidebarOptionChannel>
            )}
        </SidebarOptionContainer>
    );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 12px;
    padding-left: 2px;
    cursor: pointer;

    :hover {
        opacity: 0.9;
        background-color: #340e36;
    }

    > h3 {
        font-weight: 500;

        > span {
            padding: 15px;
        }
    }
`;

const SidebarOptionChannel = styled.div``;