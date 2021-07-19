import React from 'react'
import styled from "styled-components";

const StyledChatsControlButton = styled.div`
    height: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    ${props => {
    return props.state ? (
        ``
    )   : (
        `
            background: #f8f8f8;
            border: 1px #dddddd solid;
        `
    )
}}
`

export const ChatsControlButton = ({children, clickHandler, buttonState}) => {
    return (
        <StyledChatsControlButton
            onClick={clickHandler}
            state={buttonState}
        >
            {children}
        </StyledChatsControlButton>
    )
}


export const StyledChatsControlButtonsWrapper = styled.div`
    height: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}}
`