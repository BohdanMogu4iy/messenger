import React from 'react'
import StyledChatListItem from "../ChatListItem";

const ChatList = ({chats}) => {
    return (
        <div>
            <ul>
                {chats.filter(chat => chat.users).map(chat => {
                    return (
                        <StyledChatListItem>
                            {chat.users[0].name}
                        </StyledChatListItem>
                    )
                })}
            </ul>
        </div>
    )
}

export default ChatList;