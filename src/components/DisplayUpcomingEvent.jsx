import {
  FaExclamationCircle,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteEvent } from "../Redux/features/eventsData";

const DisplayUpcomingEvent = ({ date, name, priority, id }) => {
  const dispatch = useDispatch();
  const newDate = date;
  const newName = name;
  const newPriority = priority;

  const handleDelete = () => {
    dispatch(deleteEvent(id));
  };

  return (
    <div
      style={{
        color: "black",
        width: "95%",
        margin: "4px 2.5%",
        backgroundColor: "#ffffffff",
        border: "solid 1px black",
        borderRadius: "10px",
        padding: "5px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "50px",
          width: "50px",
          borderRadius: "50%",
          backgroundColor: "#1b1b45",
          color: "white",
          textAlign: "center",
          fontSize: "15px",
          display: "flex",
          alignItems: "center",
          lineHeight: "1",
        }}
      >
        {newDate}
      </div>
      <div style={{ marginRight: "auto" }}>
        <p
          style={{
            marginLeft: "10px",
            marginBottom: "0px",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          {newName}
        </p>
        <p
          style={{
            marginLeft: "10px",
            marginTop: "-2px",
            marginBottom: "2px",
            fontSize: "14px",
            fontWeight: "400",
            color: "#000000b6",
          }}
        >
          Priority: {newPriority}{" "}
          {newPriority === "High" && <FaExclamationCircle color="#4e0000ff" />}{" "}
          {newPriority === "Medium" && (
            <FaExclamationTriangle color="#01524dff" />
          )}{" "}
          {newPriority === "Low" && <FaCheckCircle color="#105700ff" />}
        </p>
      </div>
      <div style={{ fontSize: "33px", marginRight: "4%", display: "flex" }}>
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

export default DisplayUpcomingEvent;
