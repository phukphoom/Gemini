import { FunctionComponent, useState } from "react";
import Divider from "@mui/material/Divider";

import SelectOptionMenu from "./SelectOptionMenu";
import SelectOption from "./SelectOption";

import { SelectOptionContainerProps, OptionList } from "./types";

const SelectOptionContainer: FunctionComponent<SelectOptionContainerProps> = ({
  title,
  options,
  onSelect,
}) => {
  const [selectedSubOptionlist, setSelectedOptionList] =
    useState<OptionList | null>(null);

  return (
    <div
      className="flex flex-row w-full"
      onMouseLeave={() => {
        setSelectedOptionList(null);
      }}
    >
      <div className="w-60">
        <p className="px-4 text-sm font-bold text-grey-400">{title}</p>
        {options.map((option, idx) => {
          if (option.subOptionList) {
            return (
              <SelectOptionMenu
                key={idx}
                option={option}
                isExpanded={selectedSubOptionlist === option.subOptionList}
                onClick={(firstOptionValue) => {
                  onSelect(firstOptionValue);
                }}
                onMouseEnter={(subOptionList) => {
                  setSelectedOptionList(subOptionList);
                }}
              />
            );
          }
          return (
            <SelectOption
              key={idx}
              option={option}
              onClick={(optionValue) => {
                onSelect(optionValue);
              }}
            />
          );
        })}
      </div>
      {selectedSubOptionlist && (
        <>
          <Divider orientation="vertical" className="bg-grey-100" flexItem />
          <div>
            <SelectOptionContainer
              title={selectedSubOptionlist.title}
              options={selectedSubOptionlist.options}
              onSelect={onSelect}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SelectOptionContainer;
