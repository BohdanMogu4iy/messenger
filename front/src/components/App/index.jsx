import React from 'react'
import socketService from "../../services/socketService";
import authService from "../../services/storageService";
import Wrapper from "../styled/Wrapper"
import ChatsPanel from "../ChatsPanel";

const socket = socketService.socket
socketService.connect(socket)

const Index = () => {

    return (
        <Wrapper>
            <div>Your Session {authService.getSession()}</div>
            <div>Your Token {authService.getToken()}</div>
            <ChatsPanel/>
        </Wrapper>
    )
}

export default Index;
