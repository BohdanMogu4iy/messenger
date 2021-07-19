import styled from "styled-components"
import React from "react"
import Container from "../Container";

const StyledHeaderWrapper = styled.div`
    width: 100%;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    background: white;
`

const StyledHeaderContainer = styled(Container)`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const StyledHeaderTitle = styled.h2`
    margin: 0;
    font-size: 2rem;
    padding: 15px 0;
`

const Header = () => {
    return(
        <StyledHeaderWrapper>
            <StyledHeaderContainer>
                <StyledHeaderTitle>
                    Chat Bots 2.0
                </StyledHeaderTitle>
            </StyledHeaderContainer>
        </StyledHeaderWrapper>
    )
}

export default Header