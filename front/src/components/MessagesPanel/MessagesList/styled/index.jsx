import styled from 'styled-components'

export const StyledMessagesListWrapper = styled.div`
    height: ${props => 'calc('+props.parentHeight+'px - 250px)'};
    min-height: 160px;
    display: flex;
    width: calc(100% - 20px);
    margin: 15px 15px 5px 15px;
`

export const StyledMessagesList = styled.ul`
    margin: 0;
    padding: 0;
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    
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
`

export const StyledNoMessages = styled.div`
    font-size: 1.25rem;
    height: 100%;
    width: 100%;
    text-align: center;
    vertical-align: middle;
    line-height: ${props => 'calc('+props.parentHeight+'px - 265px)'};
`

