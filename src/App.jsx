import Header from "./components/Header";
import MyCalendar from "./components/MYCalendar";
import Weather from "./components/Weather";
import ShowEvents from "./components/ShowEvents";
import UpcomingEvents from "./components/UpcomingEvents";
import Footer from "./components/Footer";
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
            <UpcomingEvents />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
