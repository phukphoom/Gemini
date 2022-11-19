import { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import SplitPane from "@roothub/react-split-pane";

import { FunnelEditor, FunnelPreview } from "../components";

import { EventDetail } from "../components/types";

const Home: NextPage = () => {
  const [stackLabel, setStackLabel] = useState<string[]>([]);
  const [stackData, setStackData] = useState<number[]>([]);

  const [startTimeStamp, setStartTimeStamp] = useState<number>();
  const [endTimeStamp, setEndTimeStamp] = useState<number>();

  const handleSaveClick = (eventDetails: EventDetail[]) => {
    setStackLabel(
      eventDetails.map((eventDetail) => Object.values(eventDetail).join(" - "))
    );

    setStackData(
      eventDetails
        .map(() => Math.floor(Math.random() * 100))
        .sort((a, b) => b - a)
    );
  };

  return (
    <>
      <Head>
        <title>Gemini by Laika Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen">
        <SplitPane split="vertical" size={550}>
          <FunnelEditor handleSaveClick={handleSaveClick} />
          <FunnelPreview
            stackLabel={stackLabel}
            stackData={stackData}
            setStartTimeStamp={setStartTimeStamp}
            setEndTimeStamp={setEndTimeStamp}
          />
        </SplitPane>
      </main>
    </>
  );
};

export default Home;
