import "./App.scss";
import Ticket from "./components/Ticket/Ticket";
import Search from "./components/Search/Search";

import { team } from "./data/team.js";
import "./fonts/Chekov Regular.ttf";
import "./fonts/Chekov Bold.ttf";
import "./fonts/Chekov SemiBold.ttf";
import "./fonts/Oskosh.ttf";

const App = () => {
  const teamCards = team.map((teamMember) => <Ticket ticket={teamMember} />);
  return (
    <>
      <div className="ticket-content">
        <h1 className="ticket-content__title">Ticket Tracker</h1>
        <Search />
        <div className="ticket-content__ticket">{teamCards}</div>
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
