import React, { Dispatch, SetStateAction } from "react";
import { SelectedElementWidgetContainer } from "../styles/SelectedElementWidget.styles";
import resources from "../resources/resources.json";

type SelectedElementWidgetProps = {
  element: string;
  selectedElements: Set<string>;
  setSelectedElements: Dispatch<SetStateAction<Set<string>>>;
  role?: string;
};

const SelectedElementWidget = ({
  element,
  selectedElements,
  setSelectedElements,
}: SelectedElementWidgetProps) => {
  const handleRemoveSelectedElement = () => {
    const newSelectedElements = new Set(selectedElements);
    newSelectedElements.delete(element);
    setSelectedElements(newSelectedElements);
  };

  return (
    <SelectedElementWidgetContainer role="listitem" aria-label={element}>
      <span>{element}</span>
      <button
        aria-label={resources.selectedElementRemoveButton.value}
        onClick={handleRemoveSelectedElement}
      >
        {resources.selectedElementRemoveButton.icon}
      </button>
    </SelectedElementWidgetContainer>
  );
};

export default React.memo(SelectedElementWidget);
