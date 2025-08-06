import { createSlice } from "@reduxjs/toolkit";
const eventsDataSlice = createSlice({
  name: "eventsData",
  initialState: {
    value: [],
  },
  reducers: {
    setEventsData: (state, action) => {
      state.value = [action.payload, ...state.value];
    },
  },
});

export const { setEventsData } = eventsDataSlice.actions;

export default eventsDataSlice.reducer;
