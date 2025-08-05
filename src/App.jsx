import Header from "./components/Header";
import MyCalendar from "./components/MYCalendar";
import Weather from "./components/Weather";
import ShowEvents from "./components/ShowEvents";
import UpcommingEvents from "./components/UpcomingEvents";
import "./App.css";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="my-container">
        <MyCalendar></MyCalendar>
        <div style={{ width: "100%" }}>
          <Weather></Weather>
          <div className="event-div">
            <ShowEvents />
            <UpcommingEvents />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
