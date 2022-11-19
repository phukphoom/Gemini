import { NextPage } from "next";
import Head from "next/head";
import SplitPane from "@roothub/react-split-pane";

import { FunnelEditor, FunnelPreview } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gemini by Laika Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-screen h-screen">
        <SplitPane split="vertical" size={550}>
          <FunnelEditor />
          <FunnelPreview />
        </SplitPane>
      </main>
    </>
  );
};

export default Home;
