import styled from "styled-components";
import { styledText } from "./App.styles";

type DialogContainerProps = {
    show: boolean;
};

export const DialogContainer = styled.div<DialogContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: auto;
  padding: 20px;
  margin: 0;
  background-color: #373737;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transform: translateY(${(props) => (props.show ? 0 : -20)}px);
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
`;

export const StyledHeadline = styled.h1`
  margin: 10px 0 20px 0;
  color: #FFFFFF;
  ${styledText}
`;

export const AlignStartContainer = styled.div`
  align-self: flex-start;
  width: 100%;
`;

export const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const CloseButton = styled.button`
  color: #FFFF;
  background-color: #373737;
  border: 0;
  border-radius: 3;
  cursor: pointer;
  height: 20px;
  position: absolute;
  right: 20px;
  top: 25px;
  width: 20px;
`;

export const Controls = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-start;
`;
