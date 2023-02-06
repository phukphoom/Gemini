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
      const uuid = uuidv4();
      state.funnels.push({
        id: uuid,
        eventDetail: eventDetail,
        event: event,
        data: data,
      });
      state.selectedFunnel = {
        id: uuid,
        eventDetail: eventDetail,
        event: event,
        data: data,
      };
    },
    removeFunnel: (state, { payload: { id } }: { payload: { id: string } }) => {
      let indexOfData;
      for (let i = 0; i < state.funnels.length; i += 1) {
        if (state.funnels[i].id === id) {
          indexOfData = i;
        }
      }
      state.funnels.splice(indexOfData, 1);
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

export const { addFunnel, removeFunnel, setSelectedFunnnel, removeSelected } =
  funnelSlice.actions;

export default funnelSlice.reducer;
