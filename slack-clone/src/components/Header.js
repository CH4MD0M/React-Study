import React from "react";

import styled from "styled-components";

import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Header() {
    return (
        <HeaderContainer>
            {/* Header Left */}
            <HeaderLeft>
                <HeaderAvatar
                // TODO: Add onclick
                />
                <AccessTimeIcon />
            </HeaderLeft>

            {/* Header Search */}
            <HeaderSearch>
                <SearchIcon />
                <input placeholder="Search Something." />
            </HeaderSearch>

            {/* Header Right */}
            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
    );
}

export default Header;

const HeaderContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    background-color: var(--slack-color);
    color: white;
`;

const HeaderLeft = styled.div`
    display: flex;
    flex: 0.3;
    align-items: center;
    margin-left: 20px;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {
        opacity: 0.8;
    }
`;

const HeaderSearch = styled.div`
    display: flex;
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    text-align: center;
    background-color: #421f44;
    padding: 0 50px;
    color: gray;
    border: 1px gray solid;

    > input {
        min-width: 30vw;
        background-color: transparent;
        border: none;
        outline: 0;
        text-align: center;
        color: white;
    }
`;

const HeaderRight = styled.div`
    display: flex;
    flex: 0.3;
    align-items: flex-end;
    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`;
