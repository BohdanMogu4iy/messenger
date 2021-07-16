import React, {useReducer} from 'react'
import Wrapper from "../styled/Wrapper"
import {ContextChats, chatsInitialState, chatsReducer} from "../../storage/Chats";
import {ContextSocket, socketInitialState} from "../../storage/Socket";
import MessagesPanel from "../MessagesPanel";
import ChatsPanel from "../ChatsPanel"
import SocketHandler from "../SocketHandler";
import Header from "../styled/Header";
import Body from "../styled/Body";

const App = () => {
    const [state, dispatch] = useReducer(chatsReducer, chatsInitialState)

    return (
        <ContextSocket.Provider value={socketInitialState}>
            <ContextChats.Provider value={{state, dispatch}}>
                <SocketHandler>
                    <Wrapper>
                        <Header/>
                        <Body>
                            <MessagesPanel/>
                            <ChatsPanel/>
                        </Body>
                    </Wrapper>
                </SocketHandler>
            </ContextChats.Provider>
        </ContextSocket.Provider>
    )
}

export default App;
