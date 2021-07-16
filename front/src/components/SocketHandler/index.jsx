import React, {useContext, useEffect} from 'react'
import {ACTIONS, ContextChats} from "../../storage/Chats";
import {ContextSocket} from "../../storage/Socket";
import config from "../../config"

const SocketHandler = ({children}) => {
    const chatsContext = useContext(ContextChats)
    const socketsContext = useContext(ContextSocket)

    const chatsAllHandler = chats => {
        chatsContext.dispatch({
            type: ACTIONS.CHATS_ALL,
            data: chats
        })
    }
    const userNewHandler =chat => {
        chatsContext.dispatch({
            type: ACTIONS.USER_NEW,
            data: chat
        })
    }
    const userConnectedHandler = ({userId}) => {
        chatsContext.dispatch({
            type: ACTIONS.USER_CONNECTED,
            data: userId
        })
    }
    const userDisconnectedHandler = ({userId}) => {
        chatsContext.dispatch({
            type: ACTIONS.USER_DISCONNECTED,
            data: userId
        })
    }
    const messageGotHandler = message => {
        chatsContext.dispatch({
            type: ACTIONS.MESSAGE_NEW,
            data: message
        })
    }

    useEffect(() => {
        socketsContext.on(config.socket.events.CHATS_ALL, chatsAllHandler)
        socketsContext.on(config.socket.events.USER_NEW, userNewHandler)
        socketsContext.on(config.socket.events.USER_CONNECTED, userConnectedHandler)
        socketsContext.on(config.socket.events.USER_DISCONNECTED, userDisconnectedHandler)
        socketsContext.on(config.socket.events.MESSAGE_GOT, messageGotHandler)

        return () => {
            socketsContext.removeEventListener(config.socket.events.CHATS_ALL, chatsAllHandler)
            socketsContext.removeEventListener(config.socket.events.USER_NEW, userNewHandler)
            socketsContext.removeEventListener(config.socket.events.USER_CONNECTED, userConnectedHandler)
            socketsContext.removeEventListener(config.socket.events.USER_DISCONNECTED, userDisconnectedHandler)
            socketsContext.removeEventListener(config.socket.events.MESSAGE_GOT, messageGotHandler)
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default SocketHandler