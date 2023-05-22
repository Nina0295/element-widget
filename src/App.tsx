import { useState, lazy, Suspense } from 'react';
import SelectedElementWidget from "./components/SelectedElementWidget";
import Button from "./components/Button";
import {
  AppContainer,
  SelectionWidgetContainer,
  Content,
  SelectedElementWidgetBoard,
  WidgetTitle,
  SelectedItemsText
} from "./styles/App.styles";
import resources from "./resources/resources.json";

const LazyDialog = lazy(() => import('./components/Dialog'));

const App = () => {
  // State for controlling the visibility of the dialog
  const [dialogOpen, setDialogOpen] = useState(false);

  // State for storing the currently selected elements
  const [selectedElements, setSelectedElements] = useState<Set<string>>(new Set());

  const handleDialogOpen = () => setDialogOpen(true);

  return (
    <AppContainer>
      <SelectionWidgetContainer>
        <Content>
          <WidgetTitle>{resources.appTitle.value}</WidgetTitle>
          <SelectedItemsText id="selected-items-text">
            {resources.selectedItems.value.replace("{0}", String(selectedElements.size))}
          </SelectedItemsText>
          <SelectedElementWidgetBoard
            role="list"
            aria-label={resources.selectedItems.description}
            aria-describedby="selected-items-text"
          >
            {Array.from(selectedElements).map((element, index) => (
              <SelectedElementWidget
                key={element}
                element={element}
                selectedElements={selectedElements}
                setSelectedElements={setSelectedElements}
                role="listitem"
                aria-label={element}
              />
            ))}
          </SelectedElementWidgetBoard>
          <Button onClick={handleDialogOpen} aria-controls="dialog">
            {resources.changeSelection.value}
          </Button>
        </Content>
        <Suspense fallback={<div>{resources.loadingHeader.value}</div>}>
          {dialogOpen && (
            <LazyDialog
              selectedElements={selectedElements}
              setSelectedElements={setSelectedElements}
              setDialogOpen={setDialogOpen}
            />
          )}
        </Suspense>
      </SelectionWidgetContainer>
    </AppContainer>
  );
};

export default App;
