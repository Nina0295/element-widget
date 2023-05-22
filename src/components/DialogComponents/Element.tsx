import React, { ChangeEvent } from 'react';
import { 
  CheckboxContainer, 
  CustomCheckbox, 
  CheckboxLabel, 
} from "../../styles/DialogStyles/ElementsList.styles";

type ElementProps = {
  element: string;
  isSelected: boolean;
  handleSelect: (e: ChangeEvent<HTMLInputElement>) => void;
  isDisabled: boolean;
};

const Element: React.FC<ElementProps> = ({ element, isSelected, handleSelect, isDisabled }) => {
  // Remove spaces from the element to use it as an identifier for the input
  const elementWithoutSpaces = element.replace(/ +/g, "");

  return (
    <CheckboxContainer key={elementWithoutSpaces}>
      <CustomCheckbox
        disabled={isDisabled}
        checked={isSelected}
        id={elementWithoutSpaces}
        name={elementWithoutSpaces}
        onChange={handleSelect}
        type="checkbox"
        value={element}
      />
      <CheckboxLabel htmlFor={elementWithoutSpaces}>{element}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default React.memo(Element);