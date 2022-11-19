import { FunctionComponent } from "react";
import Image from "next/image";

const FunnelEditor: FunctionComponent = () => {
  return (
    <div className="w-full h-screen overflow-auto">
      <div className="flex flex-col space-y-6 px-16 py-8">
        <div className="flex flex-row justify-start items-center space-x-2">
          <Image src="/favicon.ico" alt="Gemini" width={40} height={40} />
          <p className="font-black font-garamond">Gemini</p>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-gemini-600 text-2xl">
            Lets' create a scenario from eventInfos!
          </p>
          <p>
            EventInfos are actions or methods defined in smart contracts of a
            particular protocol.{"  "}
            <a className="text-gemini-500 font-bold" href="">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FunnelEditor;
