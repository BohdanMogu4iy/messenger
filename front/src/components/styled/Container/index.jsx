import styled from "styled-components"

const Container = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding: 0 15px;

    
    @media (max-width: 680px) {
        width: 100%;
    }
    
    @media (max-width: 1040px) {
        width: 100%;
        max-width: 980px;
    }

    @media (min-width: 1040px) and (max-width: 1280px) {
        width: 1020px;
    }
    
    @media (min-width : 1280px) {
        width: 1200px;
    }
`

export default Container