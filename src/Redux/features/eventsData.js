import { createSlice } from "@reduxjs/toolkit";

const loadEvents = () => {
  try {
    const stored = localStorage.getItem("events");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

const eventsDataSlice = createSlice({
  name: "eventsData",
  initialState: {
    value: loadEvents(),
  },
  reducers: {
    setEventsData: (state, action) => {
      state.value = [action.payload, ...state.value];
      localStorage.setItem("events", JSON.stringify(state.value));
    },
    deleteEvent: (state, action) => {
      state.value = state.value.filter((event) => event.id !== action.payload);
      localStorage.setItem("events", JSON.stringify(state.value));
    },
    clearEvents: (state) => {
      state.value = [];
      localStorage.removeItem("events");
    },
  },
});

export const { setEventsData, deleteEvent, clearEvents } =
  eventsDataSlice.actions;

export default eventsDataSlice.reducer;
