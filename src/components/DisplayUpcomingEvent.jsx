import {
  FaExclamationCircle,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";

const DisplayUpcomingEvent = ({ date, name, priority }) => {
  const newDate = date;
  const newName = name;
  const newPriority = priority;

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
          Priority: {newPriority}
        </p>
      </div>
      <div style={{ fontSize: "33px", marginRight: "4%" }}>
        {newPriority === "High" && <FaExclamationCircle color="#4e0000ff" />}{" "}
        {newPriority === "Medium" && (
          <FaExclamationTriangle color="#01524dff" />
        )}{" "}
        {newPriority === "Low" && <FaCheckCircle color="#105700ff" />}
      </div>
    </div>
  );
};

export default DisplayUpcomingEvent;
