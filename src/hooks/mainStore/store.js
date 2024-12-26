import { configureStore } from "@reduxjs/toolkit";
import { getData } from "./korzina-slice";

const store = configureStore({
  reducer: {
    getData,
  },
});

export default store;
