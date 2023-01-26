import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { save, load } from "redux-localstorage-simple";

import historyReducer from "./history";

const PERSISTED_KEYS = {
  states: ["history"],
  namespace: "app",
};

export function Store() {
  return configureStore({
    reducer: { history: historyReducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: true }).concat(save(PERSISTED_KEYS)),
    preloadedState: load(PERSISTED_KEYS),
    devTools: process.env.NODE_ENV !== "production",
  });
}

const store = Store();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export default store;
