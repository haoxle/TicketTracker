import "./App.scss";
import Ticket from "./components/Ticket/Ticket";
// import Search from "./components/Search/Search";
import { team } from "./data/team.js";
import "./fonts/Chekov Regular.ttf";
import "./fonts/Chekov Bold.ttf";
import "./fonts/Chekov SemiBold.ttf";
import "./fonts/Oskosh.ttf";
import Input from "./components/Input/Input";
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState(
    team.map((teamMember) => <Ticket ticket={teamMember} />)
  );

  const handleSearch = (event) => {
    const helloHi = event.target.value;
    const filteredTeam = team.filter((teamMate) =>
      teamMate.name.toLowerCase().includes(helloHi.toLowerCase())
    );
    setSearchTerm(
      filteredTeam.map((teamMember) => <Ticket ticket={teamMember} />)
    );
  };
  //hi
  return (
    <>
      <div className="ticket-content">
        <h1 className="ticket-content__title">Ticket Tracker</h1>
        <div className="search-box">
          <Input handleSearch={handleSearch} />
          {/* <Search /> */}
        </div>
        <div className="ticket-content__ticket">{searchTerm}</div>
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
