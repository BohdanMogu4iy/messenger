import React, {useReducer} from 'react'
import authService from "../../services/storageService";
import Wrapper from "../styled/Wrapper"
import {ContextChats, chatsInitialState, chatsReducer} from "../../storage/Chats";
import {ContextSocket, socketInitialState} from "../../storage/Socket";

const App = () => {
    const [state, dispatch] = useReducer(chatsReducer, chatsInitialState)

    return (
        <ContextSocket.Provider values={socketInitialState}>
            <ContextChats.Provider value={{state, dispatch}}>
                <Wrapper>
                    <div>Your Session {authService.getSession()}</div>
                    <div>Your Token {authService.getToken()}</div>
                    {/*<ChatsPanel/>*/}
                </Wrapper>
            </ContextChats.Provider>
        </ContextSocket.Provider>
    )
}

export default App;
