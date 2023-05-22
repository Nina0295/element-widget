import React, { ChangeEvent } from 'react';
import { FixedSizeList as List } from 'react-window';
import Element from './Element';
import { ElementsListContainer } from "../../styles/DialogStyles/ElementsList.styles";

type ChecklistComponentProps = {
  elements: string[];
  newSelection: Set<string>;
  handleSelect: (e: ChangeEvent<HTMLInputElement>) => void;
};

const ElementsList: React.FC<ChecklistComponentProps> = ({ elements, newSelection, handleSelect }) => {
  const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => {
    const element = elements[index];
    const isSelected = newSelection.has(element);
    const isDisabled = !isSelected && newSelection.size >= 3;

    return (
      <div style={style} key={element}>
        <Element
          element={element}
          isSelected={isSelected}
          handleSelect={handleSelect}
          isDisabled={isDisabled}
        />
      </div>
    );
  };

  return (
    <ElementsListContainer>
      <List
        height={300}
        itemCount={elements.length}
        itemSize={30}
        width={400}
      >
        {Row}
      </List>
    </ElementsListContainer>
  );
};

export default ElementsList;
