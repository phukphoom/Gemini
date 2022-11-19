import { Dispatch, SetStateAction } from "react";

export interface BarChartprops {
  eventNameData: string[];
  eventScoreData: number[];
}

export interface FunnelPreviewProps {
  setStartTimeStamp: Dispatch<SetStateAction<number | undefined>>;
  setEndTimeStamp: Dispatch<SetStateAction<number | undefined>>;
}
