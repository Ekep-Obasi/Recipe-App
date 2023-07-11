import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./features/ui";
import authReducer from "./features/auth";
import userReducer from "./features/user";

export default configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer,
    user: userReducer,
  },
});
