import { useState, useCallback, useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";
import SplitPane from "@roothub/react-split-pane";

import { FunnelEditor, FunnelPreview } from "../components";

import { EventDetail } from "../components/types";

const Home: NextPage = () => {
  const [events, setEvents] = useState<(EventDetail | undefined)[]>([]);
  const [startTimeStamp, setStartTimeStamp] = useState<number | undefined>();
  const [endTimeStamp, setEndTimeStamp] = useState<number | undefined>();

  useEffect(() => {
    console.log({ events, startTimeStamp, endTimeStamp });
  }, [events, endTimeStamp, startTimeStamp]);

  return (
    <>
      <Head>
        <title>Gemini by Laika Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen">
        <SplitPane split="vertical" size={550}>
          <FunnelEditor setEvents={setEvents} />
          <FunnelPreview
            setStartTimeStamp={setStartTimeStamp}
            setEndTimeStamp={setEndTimeStamp}
          />
        </SplitPane>
      </main>
    </>
  );
};

export default Home;
