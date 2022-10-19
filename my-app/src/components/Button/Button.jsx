import "./Button.scss";

const Button = ({ clickFunction, buttonContent }) => {
  return (
    <>
      <button className="minusbtn" onClick={clickFunction}>
        {buttonContent}
      </button>
    </>
  );
};

export default Button;
