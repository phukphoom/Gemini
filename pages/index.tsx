import { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import SplitPane from "@roothub/react-split-pane";

import { FunnelEditor, FunnelPreview } from "../components";

import { EventDetail } from "../components/types";
import axios from "axios";

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const [stackLabel, setStackLabel] = useState<string[]>([]);
  const [stackData, setStackData] = useState<number[]>([]);

  const [startTimeStamp, setStartTimeStamp] = useState<number>();
  const [endTimeStamp, setEndTimeStamp] = useState<number>();

  const handleSaveClick = async (eventDetails: EventDetail[]) => {
    setStackLabel(
      eventDetails.map((eventDetail) => Object.values(eventDetail).join(" - "))
    );

    setLoading(true);
    const res = await axios({
      method: "post",
      url: "http://154.215.14.233:3000/event",
      data: { events: eventDetails, start: startTimeStamp, end: endTimeStamp },
    });
    setLoading(false);

    setStackData(res.data.data);
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
            showLoading={loading}
          />
        </SplitPane>
      </main>
    </>
  );
};

export default Home;
