import styles from "./Event.module.css";

const Event = ({ name, description }) => {
  let EventName = name;
  let Eventdescription = description;
  return (
    <div
      style={{
        color: "black",
        width: "95%",
        margin: "4px 2.5%",
        backgroundColor: "#ffffffab",
        border: "solid 1px black",
        borderRadius: "10px",
        padding: "5px",
      }}
    >
      <p className={styles.name}>{EventName}</p>
      {description != "" && (
        <p className={styles.description}>Description: {Eventdescription}</p>
      )}
    </div>
  );
};

export default Event;
