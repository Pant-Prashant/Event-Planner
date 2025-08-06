import { createSlice } from "@reduxjs/toolkit";

const unixTime = Math.floor(new Date().setHours(0, 0, 0, 0) / 1000);
const formattedDate = new Date().toLocaleDateString("en-GB", {
  day: "2-digit",
  month: "short",
});

const selectedDateSlice = createSlice({
  name: "selectedDate",
  initialState: {
    value: { unixTime: unixTime, shortDate: formattedDate },
  },
  reducers: {
    setSelectedDate: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedDate } = selectedDateSlice.actions;

export default selectedDateSlice.reducer;
