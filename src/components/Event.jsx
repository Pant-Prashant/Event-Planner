import styles from "./Event.module.css";

const Event = ({ name, discription }) => {
  let EventName = name;
  let EventDiscription = discription;
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
      {discription != "" && (
        <p className={styles.discription}>Discription: {EventDiscription}</p>
      )}

      
    </div>
  );
};

export default Event;
