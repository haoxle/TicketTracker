import "./Ticket.scss";
import team from "../../data/team";

const Ticket = (props) => {
  const cardName = team.map((ticket) => (
    <div key={ticket.name} className="container-ticket">
      <div className="container-ticket-top">
        <div className="container-ticket__Info">
          <h1 className="name">Name: {ticket.name}</h1>
          <h2 className="role">Role: {ticket.role}</h2>
        </div>
        <div className="container-ticket__Counter">
          <h1 className="counter">Counter</h1>
        </div>
      </div>
      <div>
        <div className="container-ticket__Display"></div>
        <div className="container-ticket__Btn"></div>
      </div>
    </div>
  ));

  return <div className="Ticket"> {cardName}</div>;
};

export default Ticket;
