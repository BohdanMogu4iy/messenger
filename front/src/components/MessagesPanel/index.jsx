import React, {useContext} from 'react'
import {MessagesPanelWrapper} from "./styled";
import ChatInfo from "./ChatInfo";
import MessagesForm from "./MessageForm";
import MessagesList from "./MessagesList";
import {ContextChats} from "../../storage/Chats";

const MessagesPanel = () => {
    const chatsContext = useContext(ContextChats)

    return (
        <MessagesPanelWrapper>
            <ChatInfo/>
            <MessagesList
                chat={chatsContext.state.selectedChat ?
                    chatsContext.state.chats.filter(chat => chat.chatId === chatsContext.state.selectedChat)[0] :
                    ''
                }
            />
            <MessagesForm/>
        </MessagesPanelWrapper>

    )
}

export default MessagesPanel