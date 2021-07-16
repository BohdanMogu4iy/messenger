import React, {useContext} from 'react'
import {StyledMessagesList, StyledMessagesListWrapper, StyledNoMessages} from "./styled";
import MessagesListItem from "./MessageListitem";
import {ContextMessenger} from "../../styled/Body/ContextMessenger";

const MessagesList = ({chat}) => {

    const messengerContext = useContext(ContextMessenger)

    return (
        <StyledMessagesListWrapper parentHeight={messengerContext}>
            {
                chat.messages && chat.messages.length > 0 ? (
                    <StyledMessagesList>
                        {chat.messages.map(message => {
                            return <MessagesListItem message={message} key={message.id}/>
                        })}
                    </StyledMessagesList>
                ) : (
                    <StyledNoMessages parentHeight={messengerContext}>No messages yet...</StyledNoMessages>
                )
            }
        </StyledMessagesListWrapper>

    )
}

export default MessagesList