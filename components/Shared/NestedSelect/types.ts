export interface Option {
  value: string;
  displayComponent?: React.ReactNode;
  subOptionList?: OptionList;
}

export interface OptionList {
  title?: string;
  options: Option[];
}

export interface NestedSelectProps {
  label?: string;
  initialValue?: string;
  optionList: OptionList;
  onChange: (value: string) => void;
}

export interface SelectOptionContainerProps {
  title?: string;
  options: Option[];
  onSelect: (selectedOptionValue: string) => void;
}

export interface SelectOptionMenuProps {
  option: Option;
  isExpanded: boolean;
  onClick: (firstOptionValue: string) => void;
  onMouseEnter: (subOptionList: OptionList) => void;
}

export interface SelectOptionProps {
  option: Option;
  onClick: (selectedOptionValue: string) => void;
}
