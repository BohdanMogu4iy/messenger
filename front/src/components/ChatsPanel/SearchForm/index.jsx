import React from "react";
import {StyledInput, StyledSearchFormWrapper} from "./styled";

const SearchForm = ({submitHandle, inputRef}) => {
    return (
        <StyledSearchFormWrapper>
            <form onSubmit={submitHandle}>
                <StyledInput type={'text'} placeholder={"Search..."} ref={inputRef}/>
            </form>
        </StyledSearchFormWrapper>
    )
}

export default SearchForm