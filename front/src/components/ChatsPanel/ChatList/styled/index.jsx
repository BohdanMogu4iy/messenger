import styled from "styled-components"
import React from "react";

const StyledChatListWrapper = styled.div`
    overflow-y: scroll;
    height: calc(100% - 120px);
    margin: 15px 5px;
    
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #becbd9;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #9daab9; 
      border-radius: 10px;
    }
}}
`

export const ChatListWrapper = ({children}) => {
    return (
        <StyledChatListWrapper>
            {children}
        </StyledChatListWrapper>
    )
}

export const StyledChatList = styled.ul`
    padding: 0;
    margin: 0;
`
