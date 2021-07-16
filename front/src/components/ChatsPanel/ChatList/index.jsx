import React, {useContext} from 'react'
import ChatListItem from "./ChatListItem";
import {ChatListWrapper, StyledChatList} from "./styled";
import {ACTIONS, ContextChats} from "../../../storage/Chats";

const ChatList = ({chats}) => {

    const chatsContext = useContext(ContextChats)

    const onClickHandler = e => {
        if (e.nativeEvent.path[0].tagName !== "UL"){
            for (let el of e.nativeEvent.path){
                if (el.tagName === "LI" && el.dataset.chatId){
                    chatsContext.dispatch({type: ACTIONS.CHAT_SELECT, data: el.dataset.chatId})
                }
            }
        }
    }

    return (
        <ChatListWrapper>
            <StyledChatList onClick={onClickHandler}>
                {chats.filter(chat => chat.user).map(chat => {
                    return (
                        <ChatListItem
                            chat={chat}
                            key={chat.chatId}
                        />
                    )
                })}
            </StyledChatList>
        </ChatListWrapper>
    )
}

export default ChatList;