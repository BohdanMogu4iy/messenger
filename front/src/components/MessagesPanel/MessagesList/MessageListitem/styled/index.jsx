import styled from "styled-components"
import React from 'react'

const leftSideTriangle = `
    &:before{
        content: '';
        border-style: solid;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
        position: absolute;
        left: -10px;
        bottom: 10px;
    }
`

const rightSideTriangle = `
    &:after{
        content: '';
        border-style: solid;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent white;
        position: absolute;
        right: -10px;
        bottom: 10px;
    }
`

const StyledMessagesListItem = styled.li`
    width: 100%;
    display: flex;
    justify-content: ${props => props.own ? 'flex-end': 'flex-start' }; 
    align-items: flex-start;
    padding: 15px;
`

const MessageWrapper = styled.div`
    min-height: 80px;
    width: 75%;
    background: white;
    position: relative;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    ${props => props.own ? rightSideTriangle : leftSideTriangle};
`

const MessageHeader = styled.div`
    width: 100%;
    height: 40px;
    background: ${props => props.own ? '#f0cbb3' : '#becbd9'}; 
    display: flex;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`

const MessageSender = styled.div`
    font-weight: bold;
`

const MessageTime = styled.div`
    
`

const MessageBody = styled.div`
    height: 100%;
    background: white;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 5px;
`

const MessageContent = styled.div`
    word-wrap: break-word;
    max-width: 75%;
`


export const MessageItem = ({sender, time, content, own}) => {
    return (
        <StyledMessagesListItem own={own}>
            <MessageWrapper own={own}>
                <MessageHeader own={own}>
                    <MessageSender>
                        {sender}
                    </MessageSender>
                    <MessageTime>
                        {time}
                    </MessageTime>
                </MessageHeader>
                <MessageBody>
                    <MessageContent>
                        {content}
                    </MessageContent>
                </MessageBody>
            </MessageWrapper>
        </StyledMessagesListItem>
    )
}