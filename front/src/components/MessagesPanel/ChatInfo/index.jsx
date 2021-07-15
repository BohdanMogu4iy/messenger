import React, {useContext} from 'react'
import {StyledChatDescription, StyledChatInfo, StyledChatLogo, StyledChatName, StyledMockChatLogo} from "./styled";
import {ContextChats} from "../../../storage/Chats";


const ChatInfo = () => {
    const chatsContext = useContext(ContextChats)
    const chat = chatsContext.state.selectedChat ? chatsContext.state.chats.filter(chat => chat.chatId === chatsContext.state.selectedChat)[0] : null

    return (
        <StyledChatInfo>
            {chat ? (
                <>
                    <StyledChatLogo
                        src={`data:image/png;base64, ${chat.logoBase64}`}
                        alt={""}
                        online={chatsContext.state.onlineUsers.includes(chat.user.userId)}
                    />
                    <StyledChatDescription>
                        <StyledChatName>{chat.name}</StyledChatName>
                    </StyledChatDescription>
                </>
                ) : (
                <>
                    <StyledMockChatLogo/>
                    <StyledChatDescription>
                        <StyledChatName>No chat is selected</StyledChatName>
                    </StyledChatDescription>
                </>
                )
            }

        </StyledChatInfo>
    )
}

export default ChatInfo