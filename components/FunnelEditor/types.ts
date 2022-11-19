import { EventDetail } from "../types";

export interface EventCustomizerProps {
  index: number;
  handleChangeEventDetail: (newEventDetail: EventDetail) => void;
  handleRemoveEventDetail: () => void;
}

export interface InsertEventButtonProps {
  handleClick: () => void;
}
