import React, {useContext} from 'react'
import {MessageItem} from "./styled";
import {ContextChats} from "../../../../storage/Chats";
import storageService from "../../../../services/storageService";
import {formatAMPM} from "../../../../utils";

const MessagesListItem = ({message}) => {
    const chatsContext = useContext(ContextChats)

    console.log(message.time, new Date(message.time), formatAMPM(new Date(message.time)))
    return (
        <MessageItem
            sender={message.from === storageService.getUserId() ? 'You' : chatsContext.state.chats.filter(chat => chat.chatId === message.to)[0].name}
            content={message.content}
            time={formatAMPM(new Date(message.time))}
            own={message.from === storageService.getUserId()}
        />

    )
}

export default MessagesListItem