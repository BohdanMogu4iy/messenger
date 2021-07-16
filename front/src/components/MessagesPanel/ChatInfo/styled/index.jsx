import styled from "styled-components";

export const StyledChatInfo = styled.div`
    height: 160px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background: #becbd9;
    
`

export const StyledChatLogo = styled.img`
    height: 100%;
`

export const StyledChatDescription = styled.div`
    padding: 15px;
    width: calc(100% - 160px);
    height: 100%;
`

export const StyledChatName = styled.h2`
    margin: 0;
    padding: 0;
    font-size: 24px;
`

export const StyledMockChatLogo  = styled.div`
    background: grey;
    height: 100%;
    width: 160px;
    position: relative
   
`

export const StyledLastSeen  = styled.div`
    padding-top: 10px;
    font-size: 14px;   
`