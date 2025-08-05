import styles from "./ShowEvents.module.css";
import Event from "./Event";

const ShowEvents = () => {
  const timePeriod = "Presen";
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
      <button className={styles["add-event-button"]}>+ Add Event</button>
    </div>
  );
};

export default ShowEvents;
