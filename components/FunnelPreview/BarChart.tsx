import { FunctionComponent, useState, useEffect, useMemo } from "react";
import ReactEcharts from "echarts-for-react";

import { BarChartProps } from "./types";

const BarChart: FunctionComponent<BarChartProps> = ({
  eventNameData,
  eventScoreData,
}) => {
  const [option, setOption] = useState<any>({});

  const eventDiffs = useMemo(() => {
    return eventScoreData.map((val: any, idx: any, arr: any[]) => {
      if (idx === 0) return;
      else return arr[idx - 1] - val;
    });
  }, [eventScoreData]);

  useEffect(() => {
    const barChartOption = {
      xAxis: {
        type: "category",
        data: eventNameData,
      },
      yAxis: {
        min: 0,
        max: eventScoreData[0],
        type: "value",
        axisLabel: {
          formatter: (value: any) => {
            return Math.floor((100 * value) / eventScoreData[0]) + "%";
          },
        },
      },
      series: [
        {
          data: eventScoreData,
          type: "bar",
          label: {
            show: true,
          },
          stack: "x",
          color: "#0A62B0",
        },
        {
          data: eventDiffs,
          type: "bar",
          label: {
            show: true,
            color: "#0A62B0",
          },
          stack: "x",
          color: "rgba(69, 129, 183, 0.3)",
        },
      ],
    };

    setOption(barChartOption);
  }, [eventDiffs, eventNameData, eventScoreData]);

  return <ReactEcharts style={{ height: "95%" }} option={option} />;
};

export default BarChart;
