import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector as useAppSelector } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import { rootPersistConfig, rootReducer } from "./rootReducer";

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const persistor = persistStore(store);

const { dispatch } = store;

const useSelector = useAppSelector;

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
const useAppDispatch = (): AppDispatch => useDispatch();

export { store, persistor, dispatch, useSelector, useAppDispatch };
