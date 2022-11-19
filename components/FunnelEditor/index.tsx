import { FunctionComponent, useState } from "react";
import Image from "next/image";

import { Button, IconPlus } from "../Shared";
import EventCustomizer from "./EventCustomizer";
import InsertEventButton from "./InsertEventButton";

import { EventDetail } from "../types";

const FunnelEditor: FunctionComponent = () => {
  const [eventDetails, setEventDetails] = useState<EventDetail[]>([]);

  const handleAddEventDetail = (position: number) => {
    if (position === -1) {
      setEventDetails([...eventDetails, { name: undefined, asset: undefined }]);
    } else {
      const newEventDetails = [...eventDetails];
      newEventDetails.splice(position, 0, {
        name: undefined,
        asset: undefined,
      });
      setEventDetails(newEventDetails);
    }
  };

  const handleChangeEventDetail = (
    position: number,
    newEventDetail: EventDetail
  ) => {
    const newEventDetails = [...eventDetails];
    newEventDetails.splice(position, 1, newEventDetail);
    setEventDetails(newEventDetails);
  };

  const handleRemoveEventDetail = (position: number) => {
    if (position === -1) {
      setEventDetails(eventDetails.slice(0, -1));
    } else {
      setEventDetails(eventDetails.filter((_, index) => index !== position));
    }
  };

  return (
    <div className="w-full h-screen overflow-auto">
      <div className="flex flex-col space-y-6 px-16 py-8">
        <div className="flex flex-row justify-start items-center space-x-2">
          <Image src="/favicon.ico" alt="Gemini" width={40} height={40} />
          <p className="font-black font-garamond">Gemini</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-gemini-600 text-2xl">
            Lets' create a scenario from eventDetails!
          </p>
          <p>
            eventDetails are actions or methods defined in smart contracts of a
            particular protocol.{"  "}
            <a className="text-gemini-500 font-bold" href="">
              Learn more
            </a>
          </p>
        </div>
      </div>
      <div>
        {eventDetails.map((_, index) => (
          <>
            <InsertEventButton
              handleClick={() => {
                handleAddEventDetail(index);
              }}
            />
            <EventCustomizer
              index={index}
              currentEventDetail={eventDetails[index]}
              handleChangeEventDetail={(eventDetail) => {
                handleChangeEventDetail(index, eventDetail);
              }}
              handleRemoveEventDetail={() => {
                handleRemoveEventDetail(index);
              }}
            />
          </>
        ))}
        <InsertEventButton
          handleClick={() => {
            handleAddEventDetail(-1);
          }}
        />
        <div className="flex flex-row justify-center space-x-2 px-16 mt-4 mb-8">
          <Button
            className="w-1/2"
            variant="outlined"
            onClick={() => {
              handleAddEventDetail(-1);
            }}
          >
            <div className="flex flex-row justify-center items-center space-x-1">
              <IconPlus className="w-3.5 h-3.5" />
              <p>Add event</p>
            </div>
          </Button>
          <Button className="w-1/2" variant="contained" disabled>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FunnelEditor;
