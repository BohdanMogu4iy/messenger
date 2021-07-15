import React, {useCallback, useContext, useEffect} from 'react'
import {ACTIONS, ContextChats} from "../../storage/Chats";
import {ContextSocket} from "../../storage/Socket";
import config from "../../config"

const SocketHandler = ({children}) => {
    const chatsContext = useContext(ContextChats)
    const socketsContext = useContext(ContextSocket)

    const chatsAllHandler = useCallback(chats => {
        chatsContext.dispatch({
            type: ACTIONS.CHATS_ALL,
            data: chats
        })
    }, [])
    const userNewHandler = useCallback(chat => {
        chatsContext.dispatch({
            type: ACTIONS.USER_NEW,
            data: chat
        })
    }, [])
    const userConnectedHandler = useCallback(({userId}) => {
        chatsContext.dispatch({
            type: ACTIONS.USER_CONNECTED,
            data: userId
        })
    }, [])
    const userDisconnectedHandler = useCallback(({userId}) => {
        chatsContext.dispatch({
            type: ACTIONS.USER_DISCONNECTED,
            data: userId
        })
    }, [])

    useEffect(() => {
        socketsContext.on(config.socket.events.CHATS_ALL, chatsAllHandler)
        socketsContext.on(config.socket.events.USER_NEW, userNewHandler)
        socketsContext.on(config.socket.events.USER_CONNECTED, userConnectedHandler)
        socketsContext.on(config.socket.events.USER_DISCONNECTED, userDisconnectedHandler)

        return () => {
            socketsContext.removeEventListener(config.socket.events.CHATS_ALL, chatsAllHandler)
            socketsContext.removeEventListener(config.socket.events.USER_NEW, userNewHandler)
            socketsContext.removeEventListener(config.socket.events.USER_CONNECTED, userConnectedHandler)
            socketsContext.removeEventListener(config.socket.events.USER_DISCONNECTED, userDisconnectedHandler)
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default SocketHandler