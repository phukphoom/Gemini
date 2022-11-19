import { FunctionComponent, useState } from "react";

import { IconPlus } from "../Shared";

import { InsertEventButtonProps } from "./types";

const InsertEventButton: FunctionComponent<InsertEventButtonProps> = ({
  handleClick,
}) => {
  const [onHover, setOnHover] = useState<boolean>(false);

  return (
    <button
      className="flex flex-row justify-center items-center w-full h-4 py-3"
      onMouseEnter={() => {
        setOnHover(true);
      }}
      onMouseLeave={() => {
        setOnHover(false);
      }}
      onClick={handleClick}
    >
      <hr
        className={`w-full opacity-20 transition ${
          onHover ? "border-gemini-400" : "border-transparent"
        }`}
      />
      <div
        className={`flex flex-row space-x-1 justify-center items-center min-w-max px-2 font-bold transition ${
          onHover ? "text-gemini-500" : "text-transparent"
        }`}
      >
        <IconPlus className="w-3.5 h-3.5" />
        <p>Add event</p>
      </div>
      <hr
        className={`w-full opacity-20 transition ${
          onHover ? "border-gemini-400" : "border-transparent"
        }`}
      />
    </button>
  );
};

export default InsertEventButton;
