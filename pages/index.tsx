import { useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import SplitPane from "@roothub/react-split-pane";

import { FunnelEditor, FunnelPreview } from "../components";

import { EventDetail } from "../components/types";

import { useFunnels } from "../state/funnels/hook";

const Home: NextPage = () => {
  const {
    reducers: { handleAddFunnel },
  } = useFunnels();
  const [loading, setLoading] = useState<boolean>(false);

  const [stackLabel, setStackLabel] = useState<string[]>([]);
  const [stackData, setStackData] = useState<number[]>([]);
  const [isOpenFunnel, setIsOpenFunnel] = useState<boolean>(false);

  const [startTimeStamp, setStartTimeStamp] = useState<number>();
  const [endTimeStamp, setEndTimeStamp] = useState<number>();

  const handleSaveClick = async (eventDetails: EventDetail[]) => {
    const data = eventDetails.map((eventDetail) =>
      Object.values(eventDetail).join(" - ")
    );
    setStackLabel(data);

    setLoading(true);
    const res = await axios({
      method: "post",
      url: "http://154.215.14.233:3000/event",
      data: { events: eventDetails, start: startTimeStamp, end: endTimeStamp },
    });

    setLoading(false);

    handleAddFunnel(eventDetails, data, res.data.data);

    setStackData(res.data.data);

    setIsOpenFunnel(true);
  };

  return (
    <>
      <Head>
        <title>Gemini by Laika Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen">
        <SplitPane split="vertical" size={400}>
          <FunnelEditor
            isOpenFunnel={isOpenFunnel}
            handleSaveClick={handleSaveClick}
          />
          <FunnelPreview
            stackLabel={stackLabel}
            stackData={stackData}
            isOpenFunnel={isOpenFunnel}
            setStartTimeStamp={setStartTimeStamp}
            setEndTimeStamp={setEndTimeStamp}
            setIsOpenFunnel={setIsOpenFunnel}
            showLoading={loading}
          />
        </SplitPane>
      </main>
    </>
  );
};

export default Home;
