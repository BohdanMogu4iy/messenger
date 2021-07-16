import React, {useContext} from 'react'
import {
    StyledChatDescription,
    StyledChatInfo,
    StyledChatLogo,
    StyledChatName,
    StyledLastSeen,
    StyledMockChatLogo
} from "./styled";
import {ContextChats} from "../../../storage/Chats";
import {formatAMPM} from "../../../utils";


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
                    />
                    <StyledChatDescription>
                        <StyledChatName>{chat.name}</StyledChatName>
                        {chatsContext.state.onlineUsers.includes(chat.user.userId) ? (
                            <>
                            </>
                        ) : (
                            <StyledLastSeen>
                                {`last seen ${formatAMPM(new Date(chat.user.lastSeen))}`}
                            </StyledLastSeen>
                        )}
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