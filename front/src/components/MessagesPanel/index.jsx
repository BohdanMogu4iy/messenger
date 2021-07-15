import React, {useContext} from 'react'
import ChatInfo from "./ChatInfo";
import {MessagesPanelWrapper} from "./styled";
import MessagesForm from "./MessageForm";
import {ContextChats} from "../../storage/Chats";

const MessagesPanel = () => {
    const chatsContext = useContext(ContextChats)


    return (
        <MessagesPanelWrapper>
            <ChatInfo/>
            {chatsContext.state.selectedChat ? (
                chatsContext.state.chats
                    .filter(chat => chat.chatId === chatsContext.state.selectedChat)
            ) : ("")}
            <MessagesForm/>
        </MessagesPanelWrapper>

    )
}

export default MessagesPanel