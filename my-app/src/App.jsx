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
        <h1>Ticket Tracker</h1>
      </div>
      <Ticket />
    </>
  );
};

export default App;
