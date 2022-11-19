import { FunctionComponent } from "react";
import { MenuItem } from "@mui/material";

import { SelectOptionProps } from "./types";

const SelectOption: FunctionComponent<SelectOptionProps> = ({
  option,
  onClick,
}) => {
  return (
    <MenuItem
      className="hover:text-gemini-500 hover:bg-blue-50"
      onClick={() => {
        onClick(option.value);
      }}
    >
      {option.displayComponent ? (
        option.displayComponent
      ) : (
        <p>{option.value}</p>
      )}
    </MenuItem>
  );
};

export default SelectOption;
