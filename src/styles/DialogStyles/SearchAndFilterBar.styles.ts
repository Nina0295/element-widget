import styled from "styled-components";

export const SearchAndFilterBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #FFFFFF;
  margin-bottom: 20px;

  & input {
    margin-left: 4px;
  }

  & select {
    margin-left: 4px;
  }
`;
