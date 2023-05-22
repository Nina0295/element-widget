import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState, useRef } from 'react';
import {
    DialogContainer,
    StyledHeadline,
    AlignStartContainer,
    ControlsWrapper,
    CloseButton,
    Controls
} from "../styles/Dialog.styles";
import Button from "./Button";
import SelectedElementsBoard from "./DialogComponents/SelectedElementBoard";
import ElementsList from "./DialogComponents/ElementsList";
import SearchAndFilterBar from "./DialogComponents/SearchAndFilterBar";
import useDebouncedSearch from '../hooks/useDebouncedSearch';
import useFilteredElements from '../hooks/useFilteredElements';
import resources from "../resources/resources.json";

type DialogProps = {
    selectedElements: Set<string>;
    setSelectedElements: Dispatch<SetStateAction<Set<string>>>;
    setDialogOpen: Dispatch<SetStateAction<boolean>>;
};

const Dialog = ({ selectedElements, setSelectedElements, setDialogOpen }: DialogProps) => {
    // State to control the visibility of the Dialog
    const [show, setShow] = useState(false);

    // State for storing the new selection
    const [newSelection, setNewSelection] = useState<Set<string>>(new Set(selectedElements));

    // State for filter elements
    const [filter, setFilter] = useState<undefined | string>(undefined)

    // Delay in milliseconds
    const DEBOUNCE_DELAY = 300;

    const closeTimerIdRef = useRef<number | null>(null);
    const saveTimerIdRef = useRef<number | null>(null);

    // Use the custom useDebouncedSearch and useFilteredElements hooks
    const [searchString, handleSearch] = useDebouncedSearch("", DEBOUNCE_DELAY);
    const filteredElements = useFilteredElements({ searchString, filter });

    useEffect(() => {
        // Effect to show the Dialog on mount
        setShow(true);
    }, []);

    useEffect(() => {
        // useEffect to clean up the timer when the component unmounts
        return () => {
            if (saveTimerIdRef.current) {
                clearTimeout(saveTimerIdRef.current);
            }
            if (closeTimerIdRef.current) {
                clearTimeout(closeTimerIdRef.current);
            }
        };
    }, []);

    const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
        e.target.value === "undefined" ? setFilter(undefined) : setFilter(e.target.value)
    }

    const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const newSelectedElements = new Set(newSelection);
        e.target.checked
          ? newSelectedElements.add(e.target.value)
          : newSelectedElements.delete(e.target.value);
        setNewSelection(newSelectedElements);
    }

    // Handler for saving the selection and closing the Dialog
    const handleSave = () => {
        setSelectedElements(new Set(newSelection));
        // Delay for smooth animation of closing dialog
        saveTimerIdRef.current = window.setTimeout(() => setDialogOpen(false), 300);
        setShow(false);
    }

    const handleCloseDialog = () => {
        setShow(false);
        // Set a new timer and store its id in timerIdRef
        closeTimerIdRef.current = window.setTimeout(() => setDialogOpen(false), 300);
    };

    return (
        <DialogContainer show={show}>
            <AlignStartContainer>
                <StyledHeadline>{resources.dialogTitle.value}</StyledHeadline>
                <CloseButton
                    onClick={handleCloseDialog}
                    aria-label={resources.closedButton.description}>
                    {resources.closedButton.icon}
                </CloseButton>
                <SearchAndFilterBar handleSearch={handleSearch} handleFilter={handleFilter} />
            </AlignStartContainer>
            <ElementsList
                elements={filteredElements}
                newSelection={newSelection}
                handleSelect={handleSelect}
            />
            <ControlsWrapper>
                <SelectedElementsBoard
                    selectedElements={newSelection}
                    setSelectedElements={setNewSelection}
                />
                <Controls>
                    <Button onClick={handleSave}>Save</Button>
                    <Button onClick={handleCloseDialog} cancel={true}>Cancel</Button>
                </Controls>
            </ControlsWrapper>
        </DialogContainer>
    );
};

export default Dialog;
