import React, {useContext, useRef} from 'react'
import {ContextSocket} from "../../../storage/Socket";
import config from "../../../config"
import {ACTIONS, ContextChats} from "../../../storage/Chats"
import storageService from "../../../services/storageService"
import {StyledMessageInput, StyledMessageFormWrapper, StyledMessageSubmitInput, StyledMessageForm} from "./styled";

const MessagesForm = () => {
    const chatsContext = useContext(ContextChats)
    const socketsContext = useContext(ContextSocket)

    const messageInputRef = useRef(null)

    const onChangeHandler = e => {
        console.log(`typing to ${chatsContext.state.selectedChat}`)
        // socketsContext.emit(config.socket.events.USER_TYPING, {chatId: chatsContext.state.selectedChat})
    }

    const onSubmitHandler = e => {
        e.preventDefault()
        const message = {
            from: storageService.getUserId(),
            to: chatsContext.state.selectedChat,
            content: messageInputRef.current.value,
            time: Date.now()
        }
        socketsContext.emit(config.socket.events.MESSAGE_SENT, message)
        chatsContext.dispatch({
            type: ACTIONS.MESSAGE_NEW,
            data: {...message, time: message.time.toTimeString}
        })
        messageInputRef.current.value = ''
    }

    return (
        <StyledMessageFormWrapper>
            <StyledMessageForm onSubmit={onSubmitHandler}>
                <StyledMessageInput ref={messageInputRef} onChange={onChangeHandler} type={'text'} placeholder={'Start chatting!'}/>
                <StyledMessageSubmitInput type={'submit'} value={'Send message'}/>
            </StyledMessageForm>
        </StyledMessageFormWrapper>
    )
}

export default MessagesForm