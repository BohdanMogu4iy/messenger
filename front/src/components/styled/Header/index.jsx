import styled from "styled-components"
import React from "react"

const StyledHeader = styled.div`
    width: 100%;
    height: 80px;
    display:grid;
    grid-column-gap: 15px;
    grid-template-columns: 1fr 12fr 1fr;
    grid-template-areas: ". content .";
    align-items: center;
`

const StyledHeaderTitle = styled.h2`
    grid-area: content;
    margin: 0;
    font-size: 2rem;
`

const Header = () => {
    return(
        <StyledHeader>
            <StyledHeaderTitle>
                Chat Bots 2.0
            </StyledHeaderTitle>
        </StyledHeader>
    )
}

export default Header