import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./features/ui";

export default configureStore({
  reducer: {
    ui: uiReducer,
  },
});
