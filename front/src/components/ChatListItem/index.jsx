import React from 'react'
import styled from "styled-components"

const ChatListItem = ({className, children}) => {
    return (
        <li className={className}>
            {children}
        </li>
    )
}

const StyledChatListItem = styled(ChatListItem)`
    
`

export default StyledChatListItem