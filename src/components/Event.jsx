import styles from "./Event.module.css";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../Redux/features/eventsData";

const Event = ({ name, description, id }) => {
  let EventName = name;
  let Eventdescription = description;

  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteEvent(id));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "black",
        width: "95%",
        margin: "4px 2.5%",
        backgroundColor: "#ffffffab",
        border: "solid 1px black",
        borderRadius: "10px",
        padding: "5px",
      }}
    >
      <div>
        <p className={styles.name}>{EventName}</p>
        {description != "" && (
          <p className={styles.description}>Description: {Eventdescription}</p>
        )}
      </div>

      <div
        style={{
          fontSize: "33px",
          marginRight: "4%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <button
          style={{
            height: "fit-content",
            margin: "0",
            padding: "0",
            background: "none",
            border: "none",
            color: "black",
          }}
          onClick={handleDelete}
        >
          <AiTwotoneDelete />
        </button>
      </div>
    </div>
  );
};

export default Event;
