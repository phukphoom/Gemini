import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import { loadState } from "./browser-storage";

import { funnelSlice } from "./funnels";

export const store = configureStore({
  reducer: combineReducers({
    [funnelSlice.name]: funnelSlice.reducer,
  }),
  devTools: true,
  preloadedState: loadState(),
});

// export type AppState = ReturnType<typeof store.getState>;

// export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();

// export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
