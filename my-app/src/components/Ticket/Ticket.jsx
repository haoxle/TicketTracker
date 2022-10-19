import "./Ticket.scss";
import Button from "../Button/Button";

const Ticket = ({ ticket }) => {
  return (
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
      <div className="container-ticket-btm">
        <div className="container-ticket__Display"></div>
        <div className="container-ticket__Btn">
          <Button />
        </div>
      </div>
      <img
        className="container-ticket-img"
        src={ticket.image}
        alt="background"
      />
    </div>
  );
};

export default Ticket;
