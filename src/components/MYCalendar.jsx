import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./MyCalendar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedDate } from "../Redux/features/selectedDate";

function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();

  const onChange = (selectedDate) => {
    const newDate = new Date(selectedDate);

    const unixTimestamp = Math.floor(newDate.getTime() / 1000);
    const formattedDate = newDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    });
    const dateValues = {
      unixTime: unixTimestamp,
      shortDate: formattedDate,
    };

    dispatch(setSelectedDate(dateValues));

    setDate(newDate);
  };
  return (
    <div>
      <Calendar
        className={styles.myCalendar}
        onChange={onChange}
        value={date}
      ></Calendar>
    </div>
  );
}

export default MyCalendar;
