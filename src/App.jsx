import Header from "./components/Header";
import MyCalendar from "./components/MYCalendar";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="my-container">
        <MyCalendar></MyCalendar>
        <Weather></Weather>
      </div>
    </div>
  );
}

export default App;
