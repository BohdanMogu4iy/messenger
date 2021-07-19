import styled from "styled-components"
import React from "react";

const StyledChatListWrapper = styled.div`
    overflow-y: scroll;
    @media (max-width: 1040px){
        height: calc(100% - 140px);
    }
    @media (min-width: 1040px){
        height: calc(100% - 135px);
    }
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
