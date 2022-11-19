import { useState, useCallback, useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";
import SplitPane from "@roothub/react-split-pane";

import { FunnelEditor, FunnelPreview } from "../components";

const Home: NextPage = () => {
  const [startTimeStamp, setStartTimeStamp] = useState<any>();
  const [endTimeStamp, setEndTimeStamp] = useState<any>();

  useEffect(() => {
    console.log({ startTimeStamp, endTimeStamp });
  }, [endTimeStamp, startTimeStamp]);

  return (
    <>
      <Head>
        <title>Gemini by Laika Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen">
        <SplitPane split="vertical" size={550}>
          <FunnelEditor />
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
