import styled from "styled-components"
import React, {useRef} from "react"
import BodyContext from "./BodyContext";
import Container from "../Container";
import MessagesPanel from "../../MessagesPanel";
import ChatsPanel from "../../ChatsPanel";
import {StyledMessengerWrapper} from "./styled";

const StyledBodyWrapper = styled.div`
    width: 100%;
    height: calc(100% - 80px);
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
`

const StyledBodyContainer = styled(Container)`
    height: 100%;
`
const Body = () => {
    const messengerRef = useRef()

    return (
        <StyledBodyWrapper>
            <StyledBodyContainer>
                <StyledMessengerWrapper ref={messengerRef}>
                    <BodyContext parentRef={messengerRef}>
                        <MessagesPanel/>
                        <ChatsPanel/>
                    </BodyContext>
                </StyledMessengerWrapper>
            </StyledBodyContainer>
        </StyledBodyWrapper>
    )
}

export default Body