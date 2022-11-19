import { FunctionComponent, useMemo } from "react";

import { BarChartBannerProps } from "./types";

const BarChartBanner: FunctionComponent<BarChartBannerProps> = ({
  eventNameData,
  eventScoreData,
}) => {
  return (
    <div className="flex flex-row items-center justify-start px-12 pt-6 space-x-4">
      <p className="text-5xl font-bold">
        {Math.round((eventScoreData.at(-1) / eventScoreData.at(0)) * 100)}%
      </p>
      <div className="flex flex-col items-start">
        <p>
          of the users go from ({eventNameData.at(0)}) to (
          {eventNameData.at(-1)})
        </p>
        <p>in the past timeframe</p>
      </div>
    </div>
  );
};

export default BarChartBanner;
