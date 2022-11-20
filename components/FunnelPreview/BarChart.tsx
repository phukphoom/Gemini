import { FunctionComponent, useState, useEffect, useMemo } from "react";
import ReactEcharts from "echarts-for-react";

import { BarChartProps } from "./types";

const BarChart: FunctionComponent<BarChartProps> = ({
  eventNameData,
  eventScoreData,
  showLoading,
}) => {
  const toPercent = (point: any) => {
    return Math.round((point / Math.max(...eventScoreData)) * 100);
  };

  const eventDiffs = useMemo(() => {
    return eventScoreData.map((val: any, idx: any, arr: any[]) => {
      if (idx === 0) return;
      else return arr[idx - 1] - val;
    });
  }, [eventScoreData]);

  const option = useMemo(() => {
    return {
      xAxis: {
        type: "category",
        data: eventNameData,
      },
      yAxis: [
        {
          min: 0,
          max: 100,
          type: "value",
          axisLabel: {
            formatter: (value: any) => {
              return value + "%";
            },
          },
          splitNumber: 10,
          minorTick: {
            show: true,
          },
        },
      ],
      series: [
        {
          data: eventScoreData.map(toPercent),
          type: "bar",
          stack: "x",
          color: "#0A62B0",
          label: {
            show: true,
            formatter: (data: any) => {
              return eventScoreData[data.dataIndex];
            },
          },
        },
        {
          data: eventDiffs.map(toPercent),
          type: "bar",
          stack: "x",
          color: "rgba(69, 129, 183, 0.3)",
          label: {
            show: true,
            color: "#0A62B0",
            formatter: (data: any) => {
              return eventDiffs[data.dataIndex];
            },
          },
        },
      ],
    };
  }, [eventNameData, eventScoreData]);

  return (
    <ReactEcharts
      style={{ height: "95%" }}
      option={option}
      showLoading={showLoading}
    />
  );
};

export default BarChart;
