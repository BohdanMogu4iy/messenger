import React, {useCallback, useEffect, useReducer, useState} from 'react'
import ChatList from "../ChatList"
import SearchForm from "../SearchForm"
import socketService from "../../services/socketService"
import config from "../../config"

const ChatsPanel = () => {

    const dispatchChats = useCallback((oldChats, newChats) => [...new Set([...(oldChats.length > 1 ? oldChats : [oldChats]), ...(newChats.length > 1 ? newChats : [newChats])])], [])

    const [allChats, dispatchAllChats] = useReducer(dispatchChats, [])
    const [onlineChats, dispatchOnlineChats] = useReducer(dispatchChats, [])

    const dispatch = useCallback(callback => {
            return data => callback(data)
        }, [])

    const handleChatsAll = useCallback(dispatch(dispatchAllChats), [])
    const handleChatsOnline = useCallback(dispatch(dispatchOnlineChats), [])
    const handleChatNew = useCallback(dispatch(dispatchAllChats), [])
    const handleChatOnline = useCallback(dispatch(dispatchOnlineChats), [])

    useEffect(() => {
        socketService.socket.on(config.socket.events.CHATS_ALL, handleChatsAll)
        socketService.socket.on(config.socket.events.CHATS_ONLINE, handleChatsOnline)
        socketService.socket.on(config.socket.events.CHAT_NEW, handleChatNew)
        socketService.socket.on(config.socket.events.CHAT_ONLINE, handleChatOnline)

        return () => {
            socketService.removeEventListener(config.socket.events.CHATS_ALL, handleChatsAll)
            socketService.removeEventListener(config.socket.events.CHATS_ONLINE, handleChatsOnline)
            socketService.removeEventListener(config.socket.events.CHAT_NEW, handleChatNew)
            socketService.removeEventListener(config.socket.events.CHAT_ONLINE, handleChatOnline)
        };
    }, []);

    const [chatsType, setChatsType] = useState("all")

    const oncClickHandler = useCallback(action => {
        return () => {
            setChatsType(action)
        }
    }, [])

    return (
        <div>
            <div>
                <button onClick={oncClickHandler('all')} value={"All"}/>
                <button onClick={oncClickHandler('online')} value={"Online"}/>
            </div>
            <ChatList
                chats={
                    function () {
                        console.log(chatsType, allChats, onlineChats)
                        switch (chatsType) {
                            case "all":
                                return allChats
                            case "online":
                                return onlineChats
                        }
                    }()
                }
            />
            <SearchForm/>
        </div>
    )
}

export default ChatsPanel;
