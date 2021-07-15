import React, {useCallback, useContext, useRef, useState} from 'react'
import ChatList from "./ChatList"
import SearchForm from "./SearchForm"
import {ContextChats} from "../../storage/Chats";
import ChatsControlButtonsWrapper from "./ChatsControlButtonsWrapper";
import {StyledChatsPanelWrapper} from "./styled";

const ChatsPanel = () => {
    const [chatsType, setChatsType] = useState('All')
    const onEventHandler = useCallback(action => {
        return e => {
            e.preventDefault()
            setChatsType(action)
        }
    }, [])

    const chatsContext = useContext(ContextChats)

    const [searchFilter, setSearchFilter] = useState('')

    const onSubmitHandler = useCallback(e => {
        e.preventDefault()
        setSearchFilter(searchInput.current.value.trim().toLowerCase())
    }, [])

    const searchInput = useRef(null)


    return (
        <StyledChatsPanelWrapper>
            <ChatsControlButtonsWrapper
                buttons={[
                    {clickHandler: onEventHandler('All'), value: 'All', state: chatsType},
                    {clickHandler: onEventHandler('Online'), value: 'Online', state: chatsType}
                ]}
            />
            <ChatList
                chats={
                    function () {
                        switch (chatsType) {
                            case "All":
                                return searchFilter ? (
                                    chatsContext.state.chats.filter(chat => chat.name.toLowerCase().includes(searchFilter))
                                ) : (
                                    chatsContext.state.chats
                                )
                            case "Online":
                                return searchFilter ? (
                                    chatsContext.state.chats.filter(chat => {
                                        return chatsContext.state.onlineUsers.includes(chat.user.userId)
                                    }).filter(chat => chat.name.toLowerCase().includes(searchFilter))
                                ) : (
                                    chatsContext.state.chats.filter(chat => {
                                        return chatsContext.state.onlineUsers.includes(chat.user.userId)
                                    })
                                )
                        }
                    }()
                }
            />
            <SearchForm submitHandle={onSubmitHandler} inputRef={searchInput}/>
        </StyledChatsPanelWrapper>
    )
}

export default ChatsPanel;