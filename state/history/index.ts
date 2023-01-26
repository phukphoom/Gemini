import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState: any = {
  history: [],
};

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    addHistory: (
      state,
      { payload: { eventHistory } }: { payload: { eventHistory: any } }
    ) => {
      console.log(eventHistory);
      state.history.push({ uuid: uuidv4(), data: eventHistory });
    },
  },
});

export const { addHistory } = historySlice.actions;

export default historySlice.reducer;
