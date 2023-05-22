import SelectedElementWidget from "../SelectedElementWidget";
import { SelectedElementsWrapper } from "../../styles/DialogStyles/SelectedElementBoard.styles";
import resources from "../../resources/resources.json";

type SelectedElementsBoardProps = {
    selectedElements: Set<string>;
    setSelectedElements: React.Dispatch<React.SetStateAction<Set<string>>>;
};

const SelectedElementsBoard = ({ selectedElements, setSelectedElements }: SelectedElementsBoardProps) => {
    return (
        <SelectedElementsWrapper>
            <p aria-live="polite">
                {resources.currentSelectedItems.value + selectedElements.size}
            </p>
            <div>
                {Array.from(selectedElements).map((element: string) => {
                    return (
                        <SelectedElementWidget
                            key={element}
                            element={element}
                            selectedElements={selectedElements}
                            setSelectedElements={setSelectedElements}
                        />
                    );
                })}
            </div>
        </SelectedElementsWrapper>
    );
};

export default SelectedElementsBoard;