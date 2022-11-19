import { Dispatch, SetStateAction } from "react";

export interface BarChartProps {
  eventNameData: string[];
  eventScoreData: number[];
}

export interface BarChartBannerProps {
  eventNameData: string[];
  eventScoreData: number[];
}

export interface FunnelPreviewProps {
  stackLabel: string[];
  stackData: number[];
  setStartTimeStamp: Dispatch<SetStateAction<number | undefined>>;
  setEndTimeStamp: Dispatch<SetStateAction<number | undefined>>;
}
