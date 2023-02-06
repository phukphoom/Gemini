import { combineReducers } from "redux";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

import funnelReducer from "../state/funnels";

const createNoopStorage = () => ({
  getItem() {
    return Promise.resolve(null);
  },
  setItem(_key: any, value: any) {
    return Promise.resolve(value);
  },
  removeItem() {
    return Promise.resolve();
  },
});

const storage =
  typeof window !== "undefined"
    ? createWebStorage("local")
    : createNoopStorage();

const rootPersistConfig = {
  key: "funnels",
  storage,
  version: 1,
};

const rootReducer = combineReducers({
  funnels: funnelReducer,
});

export { rootPersistConfig, rootReducer };
