import styled from "styled-components";

export const SelectedElementWidgetContainer = styled.div`
  background: #121212;
  color: #FFFF;
  white-space: nowrap;
  padding: 3px 3px 3px 10px;
  display: flex;
  align-items: center;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    right: 25px;
    top: 50%;
    border-left: 1px solid #FFFF;
    height: 20px;
    transform: translateY(-50%);
  }

  & > button {
    background: transparent;
    border: 0;
    color: #FFFF;
    cursor: pointer;
  }

  & > span {
    margin-right: 15px;
  }
`;
