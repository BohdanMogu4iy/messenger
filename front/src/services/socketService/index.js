import React from "react";
import {io} from "socket.io-client";
import config from "../../config"
import socketListeners from "./listeners";

const socketConn = io(
    config.socket.URL,
    config.socket.ops
)

socketListeners(socketConn)

export default {
    socket: socketConn,
    connect: socket => {
        socket.connect()
    }
}