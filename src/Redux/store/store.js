import { configureStore } from "@reduxjs/toolkit";
import selectedDateReducer from "../features/selectedDate";
import eventsDataReducer from "../features/eventsData";

export const store = configureStore({
  reducer: { selectedDate: selectedDateReducer, eventsData: eventsDataReducer },
});
