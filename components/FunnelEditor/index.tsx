import { FunctionComponent, useEffect, useState } from "react";
import Image from "next/image";

import { Button, IconPlus } from "../Shared";
import EventCustomizer from "./EventCustomizer";
import InsertEventButton from "./InsertEventButton";

import { FunnelEditorProps } from "./types";
import { EventDetail } from "../types";
import { useFunnels } from "../../state/funnels/hook";

const FunnelEditor: FunctionComponent<FunnelEditorProps> = ({
  handleSaveClick,
}) => {
  const { selectedFunnel } = useFunnels();

  const [eventDetails, setEventDetails] = useState<(EventDetail | undefined)[]>(
    []
  );

  const handleAddEventDetail = (position: number) => {
    if (position === -1) {
      setEventDetails([...eventDetails, undefined]);
    } else {
      const newEventDetails = [...eventDetails];
      newEventDetails.splice(position, 0, undefined);
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

  console.log(selectedFunnel);

  useEffect(() => {
    if (selectedFunnel) {
      setEventDetails(selectedFunnel.eventDetail);
    } else {
      setEventDetails([]);
    }
  }, [selectedFunnel]);

  return (
    <div className="w-full h-screen overflow-auto">
      <div className="flex flex-col px-16 py-8 space-y-6">
        <div className="flex flex-row items-center justify-start space-x-2">
          <Image src="/favicon.ico" alt="Gemini" width={40} height={40} />
          <p className="font-black font-garamond">Gemini</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-2xl text-gemini-600">
            Lets' create a scenario from eventDetails!
          </p>
          <p>
            eventDetails are actions or methods defined in smart contracts of a
            particular protocol.{"  "}
            <a className="font-bold text-gemini-500" href="">
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
        <div className="flex flex-row justify-center px-16 mt-4 mb-8 space-x-2">
          <Button
            className="w-1/2"
            variant="outlined"
            onClick={() => {
              handleAddEventDetail(-1);
            }}
          >
            <div className="flex flex-row items-center justify-center space-x-1 text-gemini-500">
              <IconPlus className="w-3.5 h-3.5" />
              <p>Add event</p>
            </div>
          </Button>
          <Button
            className="w-1/2"
            variant="contained"
            disabled={
              eventDetails.length === 0 ||
              !eventDetails.every((eventDetail) => eventDetail !== undefined)
            }
            onClick={() => {
              handleSaveClick(eventDetails as EventDetail[]);
            }}
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FunnelEditor;
