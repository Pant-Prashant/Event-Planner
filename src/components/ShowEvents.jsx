import styles from "./ShowEvents.module.css";
import Event from "./Event";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setEventsData } from "../Redux/features/eventsData";

const ShowEvents = () => {
  const dispatch = useDispatch();
  const presentDateUnix = Math.floor(new Date().setHours(0, 0, 0, 0) / 1000);
  const selectedDateUnix = useSelector(
    (state) => state.selectedDate.value.unixTime
  );
  const selectedDateShort = useSelector(
    (state) => state.selectedDate.value.shortDate
  );

  const [visibleForm, setVisibleForm] = useState(false);

  const changeVisibility = () => {
    setVisibleForm(!visibleForm);
  };

  const handleAddEventClick = () => {
    changeVisibility();
  };

  let timePeriod;
  if (presentDateUnix > selectedDateUnix) {
    timePeriod = "Past";
  } else if (presentDateUnix === selectedDateUnix) {
    timePeriod = "Present";
  } else {
    timePeriod = "Future";
  }

  const headingToday = "Today's Events:";
  const headingOther = `Planned Events for ${selectedDateShort}:`;

  let message;
  if (timePeriod === "Present") {
    message = "There are no events planned for today.";
  } else if (timePeriod === "Past") {
    message = `There were no events palnned for ${selectedDateShort}.`;
  } else {
    message = `There are no events planned for ${selectedDateShort}.`;
  }

  const data = useSelector((state) => state.eventsData.value);
  const filteredData = data.filter(
    (item) => item.dateUnix === selectedDateUnix
  );
  const onFormSubmit = () => {
    if (eventName.value != "") {
      let newdata = {
        id: Date.now(),
        date: selectedDateShort,
        dateUnix: selectedDateUnix,
        name: eventName.value,
        description: description.value,
        priority: priority.value,
      };

      dispatch(setEventsData(newdata));

      changeVisibility();
    }
  };

  return (
    <div className={styles["container-div"]}>
      <p className={styles.heading}>
        {timePeriod === "Present" ? headingToday : headingOther}
      </p>
      <div>
        {filteredData.length === 0 ? (
          <p className={styles["no-events"]}>{message}</p>
        ) : (
          filteredData.map((item) => (
            <Event
              name={item.name}
              description={item.description}
              id={item.id}
              key={item.id}
            />
          ))
        )}
      </div>
      {timePeriod === "Past" ? (
        <button className={styles["add-event-button-disabled"]} disabled>
          + Add Event
        </button>
      ) : (
        !visibleForm && (
          <button
            className={styles["add-event-button"]}
            onClick={handleAddEventClick}
          >
            + Add Event
          </button>
        )
      )}
      {visibleForm && (
        <div className={styles["form-container"]}>
          <form action={onFormSubmit} style={{ width: "100%" }}>
            <div className={styles["form-div"]}>
              <span className={styles["span-style"]}>
                Event Name:{" "}
                <input
                  type="text"
                  id="eventName"
                  placeholder="Enter the event name here!"
                  className={styles["input-style"]}
                />
              </span>
              <span className={styles["span-style"]}>
                Description:{" "}
                <textarea
                  className={styles["input-style"]}
                  name="description:"
                  id="description"
                  placeholder="Enter extra information. (Optional)"
                  style={{ height: "50px" }}
                ></textarea>
              </span>
              <span className={styles["span-style"]}>
                Priority:{"  "}
                <select
                  name="Priority"
                  id="priority"
                  className={styles["input-style"]}
                  style={{ fontSize: "15px" }}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </span>
              <div className={styles["button-div"]}>
                <input type="submit" className={styles["button-submit"]} />
                <input
                  type="button"
                  value="Close"
                  className={styles["button-close"]}
                  onClick={changeVisibility}
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ShowEvents;
