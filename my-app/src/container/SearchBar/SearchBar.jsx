// import Input from "../../components/Input/Input";
// import { useState } from "react";
// import Ticket from "../../components/Ticket/Ticket";
// import { team } from "../../data/team";

// const SearchBar = ({ ticket }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (event) => {
//     const cleanInput = event.target.value.toLowerCase();
//     setSearchTerm(cleanInput);
//   };

//   const teamCards = team.map((teamMember) => <Ticket ticket={teamMember} />);

//   const filteredTicker = ticket.filter((tick) => {
//     const ticketTitleLower = tick.name.toLowerCase();
//     return ticketTitleLower.includes(searchTerm);
//   });

//   return (
//     <>
//       <Input searchTerm={searchTerm} handleSearch={handleSearch} />
//       <div className="ticket-content__ticket">{teamCards} </div>
//     </>
//   );
// };

// export default SearchBar;
