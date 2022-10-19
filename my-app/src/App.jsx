import "./App.scss";
import Ticket from "./components/Ticket/Ticket";
// import team from "./data/team.js";
import "./fonts/Chekov Regular.ttf";
import "./fonts/Chekov Bold.ttf";
import "./fonts/Chekov SemiBold.ttf";
import "./fonts/Oskosh.ttf";

const App = () => {
  return (
    <>
      <div className="title">
        <h1 className="title-header">Ticket Tracker</h1>
        <Ticket />
        <div className="sub-container">
          <div className="sky">
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
            <div className="comet"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
