import { FunctionComponent, useMemo } from "react";

import { BarChartBannerProps } from "./types";

const BarChartBanner: FunctionComponent<BarChartBannerProps> = ({
  eventNameData,
  eventScoreData,
  showLoading,
}) => {
  const funnelPercentage = useMemo(() => {
    if (eventScoreData && eventScoreData.length > 0) {
      return Math.round(
        (eventScoreData[eventScoreData.length - 1] / eventScoreData[0]) * 100
      );
    }
    return undefined;
  }, [eventScoreData]);

  return (
    <div
      className={`flex flex-row items-center justify-start px-12 pt-6 space-x-4 ${
        showLoading ? "text-grey-200" : "text-black"
      }`}
    >
      <p className="text-5xl font-bold">
        {funnelPercentage ? funnelPercentage : 0}%
      </p>
      <div className="flex flex-col items-start">
        <p>
          of the users go from [ {eventNameData[0] ? eventNameData[0] : "-"} ]
          to [{" "}
          {eventNameData[eventScoreData.length - 1]
            ? eventNameData[eventScoreData.length - 1]
            : "-"}{" "}
          ]
        </p>
        <p>in the past timeframe</p>
      </div>
    </div>
  );
};

export default BarChartBanner;
