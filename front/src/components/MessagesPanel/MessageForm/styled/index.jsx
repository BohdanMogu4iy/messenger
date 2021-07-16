import styled from "styled-components";

const input = `
    border-radius: 5px;
    outline: 0;
    height: 40px;
    font-size: 14px;
`

export const StyledMessageInput = styled.input`
    ${input}
    border: 1px solid #5f83fb;
    background: white;
    padding: 5px;
`

export const StyledMessageSubmitInput = styled.input`
    ${input}
     border: none;
     background: #5f83fb;
     color: white;
     cursor: pointer;
`

export const StyledMessageForm = styled.form`
   display grid;
   grid-template-columns: 7fr 2fr;
   grid-column-gap: 30px;
`
export const StyledMessageFormWrapper = styled.div`
   width: 100%;
   height: 85px;
   padding: 15px 15px 30px;
`