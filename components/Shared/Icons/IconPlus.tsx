import { FunctionComponent } from "react";

import { IconProps } from "./types";

const IconAdd: FunctionComponent<IconProps> = ({ className }) => {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.5 8H8.5V13C8.5 13.55 8.05 14 7.5 14C6.95 14 6.5 13.55 6.5 13V8H1.5C0.95 8 0.5 7.55 0.5 7C0.5 6.45 0.95 6 1.5 6H6.5V1C6.5 0.45 6.95 0 7.5 0C8.05 0 8.5 0.45 8.5 1V6H13.5C14.05 6 14.5 6.45 14.5 7C14.5 7.55 14.05 8 13.5 8Z"
        fill="#0A62B0"
      />
    </svg>
  );
};

export default IconAdd;
