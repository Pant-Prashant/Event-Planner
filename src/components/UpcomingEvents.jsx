import styles from "./UpcomingEvents.module.css";
import DisplayUpcomingEvents from "./DisplayUpcomingEvent";

const UpcomingEvents = () => {
  const data = [
    {
      date: "07 Aug",
      name: "Friend's Birthday",
      priority: "High",
    },
    {
      date: "07 Aug",
      name: "Friend's Birthday",
      priority: "Low",
    },
    {
      date: "07 Aug",
      name: "Friend's Birthday",
      priority: "Medium",
    },
    {
      date: "07 Aug",
      name: "Friend's Birthday",
      priority: "High",
    },
    {
      date: "07 Aug",
      name: "Friend's Birthday",
      priority: "Low",
    },
  ];

  return (
    <div className={styles["container-div"]}>
      <p className={styles.heading}>Upcomming Events:</p>
      <div>
        {data.length === 0 ? (
          <p className={styles["no-events"]}>No upcomming events available!</p>
        ) : (
          data.map((items) => (
            <DisplayUpcomingEvents
              date={items.date}
              name={items.name}
              priority={items.priority}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
