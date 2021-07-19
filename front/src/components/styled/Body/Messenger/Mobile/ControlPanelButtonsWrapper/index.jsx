import React from "react";
import {ChatsControlButton, StyledChatsControlButtonsWrapper} from "./styled";

const ControlPanelButtonsWrapper = ({buttons}) => {
    return (
        <StyledChatsControlButtonsWrapper>
            {buttons.map(button => {
                return (
                    <ChatsControlButton
                        clickHandler={button.clickHandler}
                        buttonState={button.value === button.state}
                        key={button.value}
                    >
                        {button.value}
                    </ChatsControlButton>
                )
            })}
        </StyledChatsControlButtonsWrapper>
    )
}

export default ControlPanelButtonsWrapper