// import React, {useEffect, useState} from 'react'
// import ChatList from "../ChatList"
// import SearchForm from "../SearchForm"
// import {ContextChats} from "../../storage/Chats";
// import {ContextSocket} from "../../storage/Socket";
//
// const ChatsPanel = () => {
//     const [chatsType, setChatsType] = useState('online')
//     const onClickHandler = action => {
//         return e => {
//             e.preventDefault()
//             setChatsType(action)
//         }
//     }
//
//     const chatsContext = useContext(ContextChats)
//     const socketsContext = useContext(ContextSocket)
//
//     const handleAllChats = useCallback(data => {
//
//     },[])
//     const handleUserConnected = useCallback(data => {
//
//     },[])
//     const handleUserDisconnected = useCallback(data => {
//
//     },[])
//
//     useEffect(()=>{
//         socketsContext.on()
//
//         return () => {
//
//         }
//     }, [])
//
//     return (
//         <div>
//             <div>
//                 <button onClick={onClickHandler('all')}>All</button>
//                 <button onClick={onClickHandler('online')}>Online</button>
//             </div>
//             <ChatList
//                 chats={
//                     function () {
//                         switch (chatsType) {
//                             case "all":
//                                 console.log(chatsContext.state.chats)
//                                 return chatsContext.state.chats
//                             case "online":
//                                 const onlineChats = chatsContext.state.chats.filter(chat => {
//                                     for (let u of chat.users.map(user=>user._id)){
//                                         if (!chatsContext.state.onlineUsers.includes(u)){
//                                             return false
//                                         }
//                                     }
//                                     return true
//                                 })
//                                 console.log(onlineChats)
//                                 return onlineChats
//                         }
//                     }()
//                 }
//             />
//             <SearchForm/>
//         </div>
//     )
// }
//
// export default ChatsPanel;
