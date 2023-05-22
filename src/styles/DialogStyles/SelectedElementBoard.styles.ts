import styled from "styled-components";

export const SelectedElementsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #FFFFFF;
  height: 100px;

  & div {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 24px;
  }
`;
