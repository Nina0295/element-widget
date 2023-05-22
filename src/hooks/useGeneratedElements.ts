import { useMemo } from "react";
import resources from "../resources/resources.json";

const useGeneratedElements = (length: number) => {
  const elements = useMemo(
    () =>
      Array.from({ length }, (_, i) =>
        `${resources.elementLabel.value} ${i + 1}`
      ),
    [length]
  );

  return elements;
};

export default useGeneratedElements;
