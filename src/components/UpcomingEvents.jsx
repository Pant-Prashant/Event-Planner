import styles from "./UpcomingEvents.module.css";
import DisplayUpcomingEvents from "./DisplayUpcomingEvent";
import { useSelector } from "react-redux";

const UpcomingEvents = () => {
  const presentDateUnix = Math.floor(new Date().setHours(0, 0, 0, 0) / 1000);
  const data = useSelector((state) => state.eventsData.value);

  const filteredData = data
    .filter((item) => item.dateUnix > presentDateUnix)
    .sort((a, b) => a.dateUnix - b.dateUnix)
    .slice(0, 5);

  return (
    <div className={styles["container-div"]}>
      <p className={styles.heading}>Upcomming Events:</p>
      <div>
        {filteredData.length === 0 ? (
          <p className={styles["no-events"]}>No upcomming events available!</p>
        ) : (
          filteredData.map((items) => (
            <DisplayUpcomingEvents
              date={items.date}
              name={items.name}
              priority={items.priority}
              id={items.id}
              key={items.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default UpcomingEvents;
