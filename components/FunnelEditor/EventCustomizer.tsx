import { FunctionComponent, useEffect, useState } from "react";

import { NestedSelect } from "../Shared";

import { EventCustomizerProps } from "./types";

import SupportEvent from "../../constants/SupportedEvent.json";
import { useFunnels } from "../../state/funnels/hook";

const EventCustomizer: FunctionComponent<EventCustomizerProps> = ({
  index,
  handleChangeEventDetail,
  handleRemoveEventDetail,
}) => {
  const [onHover, setOnHover] = useState<boolean>(false);

  const { selectedFunnel } = useFunnels();

  return (
    <div
      className="flex flex-row justify-between w-full h-fit"
      onMouseEnter={() => {
        setOnHover(true);
      }}
      onMouseLeave={() => {
        setOnHover(false);
      }}
    >
      <div
        className={`flex flex-row w-full transition px-16 py-6 space-x-8 ${
          onHover ? "bg-blue-50" : "bg-transparent"
        }`}
      >
        <div className="flex justify-center items-center w-3 h-3 p-3.5 mt-2 rounded-full bg-gemini-500 text-white font-bold text-xs">
          {index + 1}
        </div>
        <div className="flex flex-col w-full space-y-6">
          <NestedSelect
            label={
              selectedFunnel
                ? selectedFunnel.eventDetail[index]
                  ? `${selectedFunnel?.eventDetail[index].protocol} - ${selectedFunnel?.eventDetail[index].eventName}`
                  : `Event ${index + 1}`
                : `Event ${index + 1}`
            }
            optionList={SupportEvent}
            onChange={(value) => {
              handleChangeEventDetail(value as Object);
            }}
          />
        </div>
      </div>
      <button
        className={`h-auto px-1.5 transition ${
          onHover
            ? "text-error-500 bg-error-200"
            : "text-transparent bg-transparent"
        }`}
        onClick={handleRemoveEventDetail}
      >
        <p className="font-bold write-vertical-rl">Delete</p>
      </button>
    </div>
  );
};

export default EventCustomizer;
