import styled from 'styled-components';
import { styledText } from "../App.styles";

export const CheckboxContainer = styled.div`
  display: inline-block;
  position: relative;
  margin-right: 12px;
`;

export const CustomCheckbox = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 13px;
  height: 13px;
  background-color: #fff;
  border: 1px solid #ccc;

  &:checked {
    background-color: #FFFF;
  }

  &:checked::after {
    content: "✓";
    position: absolute;
    color: #519F03;
    font-size: 13px;
    left: 6px;
    bottom: 7px;
  }
`;

export const CheckboxLabel = styled.label`
  position: relative;
  top: -4px;
  margin-left: 10px;
`;

export const ElementsListContainer = styled.div`
  background: #141414;
  display: flex;
  flex-direction: column;
  gap: 6px;
  height: 200px;
  overflow: scroll;
  padding: 12px;
  width: 95%;
  color: #FFFFFF;
  ${styledText}
`;
