import {createContext} from "react";
import socketService from "../../services/socketService";
export const ContextSocket = createContext();

const socket = socketService.socket
socketService.connect(socket)


export const socketInitialState = socket;
