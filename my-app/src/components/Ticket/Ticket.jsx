import "./Ticket.scss";
import Button from "../Button/Button";
import { useState } from "react";

const Ticket = ({ ticket }) => {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);
  const decrease = () =>
    counter > 0 ? setCounter(counter - 1) : setCounter(counter);

  return (
    <div key={ticket.name} className="container-ticket">
      <div className="container-ticket__top">
        <div className="container-ticket__Info">
          <h1 className="name">Name: {ticket.name}</h1>
          <h2 className="role">Role: {ticket.role}</h2>
        </div>
        <div className="container-ticket__Counter">
          <h1 className="counter">Counter</h1>
        </div>
      </div>
      <div className="container-ticket-btm">
        <div className="container-ticket__Display">{counter}</div>
        <div className="container-ticket__Btn">
          <Button buttonContent="-" clickFunction={decrease} />
          <Button buttonContent="+" clickFunction={increase} />
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
