import React, { FunctionComponent, useState } from "react";
import { MenuItem } from "@mui/material";

import { IconChevronRight } from "../Icons";

import { SelectOptionMenuProps } from "./types";

const SelectOptionMenu: FunctionComponent<SelectOptionMenuProps> = ({
  option,
  isExpanded,
  onClick,
  onMouseEnter,
}) => {
  return (
    <MenuItem
      className={`flex justify-between hover:text-gemini-500 hover:bg-blue-50 ${
        isExpanded ? "text-gemini-500 bg-blue-50 " : "bg-transparent"
      }`}
      onClick={() => {
        if (option.subOptionList && option.subOptionList.options[0]) {
          onClick(option.subOptionList.options[0].value);
        }
      }}
      onMouseEnter={() => {
        if (option.subOptionList) {
          onMouseEnter(option.subOptionList);
        }
      }}
    >
      {option.displayComponent ? (
        option.displayComponent
      ) : (
        <p>{option.value}</p>
      )}
      <IconChevronRight
        className={`w-3 h-3 ${
          isExpanded ? "text-gemini-500" : "text-grey-500"
        }`}
      />
    </MenuItem>
  );
};

export default SelectOptionMenu;
