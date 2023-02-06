import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AppState } from "../index";

import {
  addFunnel as addFunnelAction,
  removeFunnel as removeFunnelAction,
  setSelectedFunnnel as selectedFunnelAction,
  removeSelected as removeSelectedAction,
} from ".";

export const useFunnels = (): {
  funnels: any;
  selectedFunnel: any;
  reducers: {
    handleAddFunnel: (eventDetail: any, event: any, data: any) => void;
    handleRemoveFunnel: (id: string) => void;
    handleSelectedFunnel: (
      id: any,
      eventDetail: any,
      event: any,
      data: any
    ) => void;
    handleRemoveSelected: () => void;
  };
} => {
  const dispatch = useDispatch();

  const Funnels = (state: AppState) => state.funnels.funnels;
  const selectedFunnels = (state: AppState) => state.funnels.selectedFunnel;

  const funnels = useSelector(Funnels);
  const selectedFunnel = useSelector(selectedFunnels);

  const handleAddFunnel = useCallback(
    (eventDetail: any, event: any, data: any) => {
      dispatch(addFunnelAction({ eventDetail, event, data }));
    },
    [dispatch]
  );

  const handleRemoveFunnel = useCallback(
    (id: string) => {
      dispatch(removeFunnelAction({ id }));
    },
    [dispatch]
  );

  const handleSelectedFunnel = useCallback(
    (id: any, eventDetail: any, event: any, data: any) => {
      dispatch(selectedFunnelAction({ id, eventDetail, event, data }));
    },
    [dispatch]
  );

  const handleRemoveSelected = useCallback(() => {
    dispatch(removeSelectedAction());
  }, [dispatch]);

  return {
    funnels,
    selectedFunnel,
    reducers: {
      handleAddFunnel,
      handleRemoveFunnel,
      handleSelectedFunnel,
      handleRemoveSelected,
    },
  };
};
