import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState: any = {
  funnels: [],
  selectedFunnel: undefined,
};

export const funnelSlice = createSlice({
  name: "funnels",
  initialState,
  reducers: {
    addFunnel: (
      state,
      {
        payload: { eventDetail, event, data },
      }: { payload: { eventDetail: any; event: any; data: any } }
    ) => {
      state.funnels.push({
        id: uuidv4(),
        eventDetail: eventDetail,
        event: event,
        data: data,
      });
    },
    setSelectedFunnnel: (
      state,
      {
        payload: { id, eventDetail, event, data },
      }: { payload: { id: string; eventDetail: any; event: any; data: any } }
    ) => {
      state.selectedFunnel = {
        id: id,
        eventDetail: eventDetail,
        event: event,
        data: data,
      };
    },
    removeSelected: (state) => {
      state.selectedFunnel = undefined;
    },
  },
});

export const { addFunnel, setSelectedFunnnel, removeSelected } =
  funnelSlice.actions;

export default funnelSlice.reducer;
