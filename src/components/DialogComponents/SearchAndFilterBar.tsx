import React from "react";
import { ChangeEvent } from "react";
import { SearchAndFilterBarContainer } from "../../styles/DialogStyles/SearchAndFilterBar.styles";
import resources from "../../resources/resources.json";

type SearchAndFilterBarProps = {
    handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
    handleFilter: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SearchAndFilterBar = ({ handleSearch, handleFilter }: SearchAndFilterBarProps) => {
    return (
        <SearchAndFilterBarContainer>
            <div>
                {resources.search.value}
                <input type={"text"} onChange={handleSearch} />
            </div>
            <div>
                {resources.filter.value}
                <select onChange={handleFilter}>
                    {resources.filterOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </SearchAndFilterBarContainer>
    );
};

export default React.memo(SearchAndFilterBar);
