import React from "react";
import { StyledButton } from "../styles/Button.styles";

type ButtonProps = {
    children: JSX.Element | string,
    onClick: () => void;
    cancel?: boolean,
};

const Button = ({children, onClick, cancel}: ButtonProps) => {
    return (
        <StyledButton onClick={onClick} cancel={cancel}>
            {children}
        </StyledButton>
    );
};

export default React.memo(Button);
