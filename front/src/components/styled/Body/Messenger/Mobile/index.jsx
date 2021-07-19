import React, {useContext, useRef, useState} from 'react'
import ChatList from "../../../../ChatsPanel/ChatList"
import SearchForm from "../../../../ChatsPanel/SearchForm"
import {ContextChats} from "../../../../../storage/Chats";
import ControlPanelButtonsWrapper from "./ControlPanelButtonsWrapper";
import {StyledMessegerWrapper} from "./styled";
import MessagesPanel from "../../../../MessagesPanel";

const MobileMessenger = () => {
    const [panelType, setPanelType] = useState('All')
    const onEventHandler = action => {
        return e => {
            e.preventDefault()
            setPanelType(action)
        }
    }

    const chatsContext = useContext(ContextChats)

    const [searchFilter, setSearchFilter] = useState('')

    const onSubmitHandler = e => {
        e.preventDefault()
        setSearchFilter(searchInput.current.value.trim().toLowerCase())
    }

    const searchInput = useRef(null)

    return (
        <StyledMessegerWrapper>
            {
                function () {
                    switch (panelType) {
                        case "All":
                            return (
                                <>
                                    <SearchForm submitHandle={onSubmitHandler} inputRef={searchInput}/>
                                    <ChatList
                                        chats={
                                            searchFilter ? (
                                                chatsContext.state.chats.filter(chat => chat.name.toLowerCase().includes(searchFilter))
                                            ) : (
                                                chatsContext.state.chats
                                            )
                                        }/>
                                </>
                            )
                        case "Online":
                            return (
                                <>
                                    <SearchForm submitHandle={onSubmitHandler} inputRef={searchInput}/>
                                    <ChatList
                                        chats={
                                            searchFilter ? (
                                                chatsContext.state.chats.filter(chat => {
                                                    return chatsContext.state.onlineUsers.includes(chat.user.userId)
                                                }).filter(chat => chat.name.toLowerCase().includes(searchFilter))
                                            ) : (
                                                chatsContext.state.chats.filter(chat => {
                                                    return chatsContext.state.onlineUsers.includes(chat.user.userId)
                                                })
                                            )
                                        }/>
                                </>
                            )
                        case "Chats":
                            return (
                                <MessagesPanel/>
                            )
                    }
                }()
            }
            <ControlPanelButtonsWrapper
                buttons={[
                    {clickHandler: onEventHandler('All'), value: 'All', state: panelType},
                    {clickHandler: onEventHandler('Online'), value: 'Online', state: panelType},
                    {clickHandler: onEventHandler('Chats'), value: 'Chats', state: panelType},
                ]}
            />
        </StyledMessegerWrapper>
    )
}

export default MobileMessenger;