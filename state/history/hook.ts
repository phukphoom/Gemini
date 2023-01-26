import { useCallback } from "react";
import { useSelector } from "react-redux";

import { AppState, useAppDispatch } from "../index";

import { addHistory as addHistoryAction } from ".";

export const useHistory = (): {
  value: number;
  reducers: {
    handleAddHistory: (data: any) => void;
  };
} => {
  const dispatch = useAppDispatch();
  const { value } = useSelector<AppState, AppState["history"]>(
    (state) => state.history
  );

  const handleAddHistory = useCallback(
    (data: any[]) => {
      console.log(data);
      dispatch(addHistoryAction({ eventHistory: data }));
    },
    [dispatch]
  );

  return {
    value,
    reducers: { handleAddHistory },
  };
};
