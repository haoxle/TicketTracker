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
      <div class="sub-container">
        <div class="sky">
          <div class="stars"></div>
          <div class="stars2"></div>
          <div class="stars3"></div>
          <div class="comet"></div>
        </div>
      </div>
      <div className="title">
        <h1>Ticket Tracker</h1>

        <Ticket />
      </div>
    </>
  );
};

export default App;
