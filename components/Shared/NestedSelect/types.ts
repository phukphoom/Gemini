export interface Option {
  value: string | Object;
  displayComponent?: React.ReactNode;
  subOptionList?: OptionList;
}

export interface OptionList {
  title?: string;
  options: Option[];
}

export interface NestedSelectProps {
  label?: string;
  initialValue?: string | Object;
  optionList: OptionList;
  onChange: (value: string | Object) => void;
}

export interface SelectOptionContainerProps {
  title?: string;
  options: Option[];
  onSelect: (selectedOptionValue: string | Object) => void;
}

export interface SelectOptionMenuProps {
  option: Option;
  isExpanded: boolean;
  onClick: (firstOptionValue: string | Object) => void;
  onMouseEnter: (subOptionList: OptionList) => void;
}

export interface SelectOptionProps {
  option: Option;
  onClick: (selectedOptionValue: string | Object) => void;
}
