import { useState, useRef, useCallback } from "react";

type UseDebouncedSearchReturn = [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void
];

const useDebouncedSearch = (initialValue: string, debounceDelay: number): UseDebouncedSearchReturn => {
  const [searchString, setSearchString] = useState<string>(initialValue);
  // Using ref for managing the search debounce timer
  const searchTimeout = useRef<number | null>(null);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;

      // Clear any existing timeout to prevent rapid firing of search function
      if (searchTimeout.current) {
        window.clearTimeout(searchTimeout.current);
      }

      // Update the searchString state after the debounce delay has passed
      searchTimeout.current = window.setTimeout(() => {
        setSearchString(value);
      }, debounceDelay);
    },
    [debounceDelay]
  );

  return [searchString, handleSearch];
};

export default useDebouncedSearch;
