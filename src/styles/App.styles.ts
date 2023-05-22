import styled from "styled-components";

export const styledText = `
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
`;

export const AppContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
  background: #bebebe;
`;

export const SelectionWidgetContainer = styled.div`
  align-items: center;
  background: #FFFF;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  max-width: 800px;
  min-width: 445px;
  padding: 20px;
  position: relative;
`;

export const Content = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const SelectedElementWidgetBoard = styled.div`
  color: #fff;
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
  min-height: 27px;
  ${styledText}
`;

export const WidgetTitle = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 23px;
  color: #393939;
  margin-top: 10px;
`;

export const SelectedItemsText = styled.p`
  color: #585858;
  ${styledText}
`;