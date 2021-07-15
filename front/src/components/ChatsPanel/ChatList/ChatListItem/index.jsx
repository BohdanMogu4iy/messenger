import React, {useContext} from 'react'
import {StyledChatItemInfo, StyledChatListItem, StyledChatListItemLogo, StyledChatListItemName} from "./styled";
import {ContextChats} from "../../../../storage/Chats";

const ChatListItem = ({className, chat}) => {
    const chatsContext = useContext(ContextChats)

    return (
        <StyledChatListItem className={className} data-chat-id={chat.chatId} selected={chat.chatId === chatsContext.state.selectedChat}>
            <StyledChatListItemLogo src={`data:image/png;base64, ${chat.logoBase64}`} alt={""}  online={chatsContext.state.onlineUsers.includes(chat.user.userId)}/>
            <StyledChatItemInfo>
                <StyledChatListItemName>{chat.name}</StyledChatListItemName>
            </StyledChatItemInfo>
        </StyledChatListItem>
    )
}


export default ChatListItem