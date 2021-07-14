import React from 'react'
import socketService from "../../services/socketService";
import authService from "../../services/authService";

const socket = socketService.socket
socketService.connect(socket)

function App() {

    return (
        <>
            <div>Your Session {authService.getSession()}</div>
            <div>Your Token {authService.getToken()}</div>
        </>
    )
}

export default App;
