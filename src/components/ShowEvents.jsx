import styles from "./ShowEvents.module.css";
import Event from "./Event";

const ShowEvents = () => {
  const timePeriod = "Present";
  const headingToday = "Today's Events:";
  const headingOther = "Planned Events for 07 Aug:";
  const date = "07 Aug";
  let message;
  if (timePeriod === "Present") {
    message = "There are no events planned for today.";
  } else if (timePeriod === "Past") {
    message = `There were no events palnned for ${date}.`;
  } else {
    message = `There are no events planned for ${date}.`;
  }

  const data = [
    {
      name: "Friend's Birthday",
      discription: "At 8 PM. Make sure to buy gifts.",
    },
    {
      name: "Pay bank EMI",
      discription: "",
    },
  ];

  return (
    <div className={styles["container-div"]}>
      <p className={styles.heading}>
        {timePeriod === "Present" ? headingToday : headingOther}
      </p>
      <div>
        {data.length === 0 ? (
          <p className={styles["no-events"]}>{message}</p>
        ) : (
          data.map((item) => (
            <Event name={item.name} discription={item.discription} />
          ))
        )}
      </div>
      {timePeriod === "Past" ? (
        <button className={styles["add-event-button-disabled"]} disabled>
          + Add Event
        </button>
      ) : (
        <button className={styles["add-event-button"]}>+ Add Event</button>
      )}
      <button className={styles["form-container"]} disabled>
        <form action="" style={{ width: "100%" }}>
          <div className={styles["form-div"]}>
            <span style={{ width: "100%", display: "flex" }}>
              Event Name:{" "}
              <input
                type="text"
                placeholder="Enter the event name here!"
                style={{ height: "30px", flex: "1", minWidth: "0" }}
              />
            </span>
            <span style={{ width: "100%", textAlign: "left" }}>
              Discription: <input style={{ width: "50px" }} type="text" />
            </span>
            <span style={{ width: "100%", textAlign: "left" }}>
              Priority:{" "}
              <select name="Priotity" id="">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </span>
          </div>
        </form>
      </button>{" "}
    </div>
  );
};

export default ShowEvents;
