import { useState } from "react";

type UseToggleReturnType = [boolean, (val: unknown) => void];

const useToggle = (initialValue: boolean = false): UseToggleReturnType => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = (value?: unknown): void => {
    setValue((prevValue) =>
      value && typeof value == "boolean" ? value : !prevValue
    );
  };

  return [value, toggle];
};

export default useToggle;
