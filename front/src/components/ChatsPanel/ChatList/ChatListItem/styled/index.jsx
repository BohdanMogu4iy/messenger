import React from 'react'
import styled from "styled-components";

export const StyledChatListItem = styled.li`
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
    height: 80px;
    width: calc(100% - 10px);
    margin: 10px 5px;
    padding: 10px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    ${props => {
    return props.selected ? (
        `
                background: #A1D0FF;
            `
    ) : (
        `
                :hover{
                    background: #EDF6FF;
                }
            `
    )
}}
`

const ChatListItemLogo = ({className, src}) => {
    return (
        <div className={className}>
            <StyledChatListItemLogoImage src={src} alt={""}/>
        </div>
    )
}

const StyledChatListItemLogoImage = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 5px;
`

export const StyledChatListItemLogo = styled(ChatListItemLogo)`
    height: 60px;
    width: 60px;
    position: relative;
    ${props => {
    return props.online ? (
        `
                    &:after{
                        content:"";
                        display: inline-block;
                        width: 15px;
                        height: 15px;
                        -moz-border-radius: 7.5px;
                        -webkit-border-radius: 7.5px;
                        border-radius: 7.5px;
                        background-color: #20d63e;
                        position: absolute;
                        bottom: -2px;
                        right: -2px;
                    }
                `
    ) : (
        ``
    )
}}
`


export const StyledChatListItemName = styled.div`
    font-weight: bold;
    font-size: 1rem;
`

export const StyledChatListItemLastMessage = styled.div`
    font-size: 14px;
    color: #999999;
`

export const StyledChatItemInfo = styled.div`
    padding: 5px 10px;
    width: calc(100% - 60px);
    height: 100%;
    display: flex;
    flex-direction:column;
    justify-content: flex-start;
`