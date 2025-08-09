import styles from "./Footer.module.css";
import { useDispatch } from "react-redux";
import { clearEvents } from "../Redux/features/eventsData";

const Footer = () => {
  const dispatch = useDispatch();
  const clearData = () => {
    dispatch(clearEvents());
  };
  return (
    <div className={styles["main-div"]}>
      © 2025 Event Planner. All rights reserved.{" "}
      <button className={styles["clear-data-button"]} onClick={clearData}>
        Clear Local Storage!
      </button>
    </div>
  );
};

export default Footer;
