import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./Calendar.module.css";
import { useState } from "react";

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
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
