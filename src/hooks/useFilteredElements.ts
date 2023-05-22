import { useMemo } from 'react';
import useGeneratedElements from './useGeneratedElements';

type FilterOptions = {
  searchString: string;
  filter: string | undefined;
};

const useFilteredElements = ({ searchString, filter }: FilterOptions) => {
  // Generate an array of element names as mock data
  const elements = useGeneratedElements(300);

  // useMemo to filter elements based on searchString and filter
  const filteredElements = useMemo(() => {
    const regExpNumber = /\d+/;

    return elements.reduce((acc: string[], item: string) => {
      if (searchString !== "" && !item.toLowerCase().includes(searchString.toLowerCase())) {
        return acc;
      }

      if (filter && Number(item.match(regExpNumber)) <= Number(filter)) {
        return acc;
      }

      return [...acc, item];
    }, []);
  }, [elements, searchString, filter]);

  return filteredElements;
};

export default useFilteredElements;
