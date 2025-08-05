import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./MyCalendar.module.css";
import { useState } from "react";

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (selectedDate) => {
    const newDate = new Date(selectedDate);
    const unixTimestamp = Math.floor(newDate.getTime() / 1000);
    console.log(unixTimestamp);
    setDate(unixTimestamp);

    const textDate = new Date(selectedDate);

    const formattedDate = textDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
    });

    console.log(formattedDate);
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
