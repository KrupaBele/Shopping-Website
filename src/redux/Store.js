import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
const rootReducer = {
  cart: cartReducer,
};

const Store = configureStore({
  reducer: rootReducer,
});

export default Store;
