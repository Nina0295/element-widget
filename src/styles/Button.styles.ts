import styled from "styled-components";

type StyledButtonProps = {
    cancel?: boolean;
  };

export const StyledButton = styled.button<StyledButtonProps>(props => ({
    background: props.cancel ? "#9F2903" : "#519F03",
    color: "#FFFF",
    border: 0,
    cursor: "pointer",
    padding: "6px 20px",
}));
