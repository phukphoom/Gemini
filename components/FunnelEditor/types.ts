import { Dispatch, SetStateAction } from "react";

import { EventDetail } from "../types";

export interface FunnelEditorProps {
  setEvents: Dispatch<SetStateAction<(EventDetail | undefined)[]>>;
}

export interface EventCustomizerProps {
  index: number;
  handleChangeEventDetail: (newEventDetail: EventDetail) => void;
  handleRemoveEventDetail: () => void;
}

export interface InsertEventButtonProps {
  handleClick: () => void;
}
