import "./Input.scss";

const Input = ({ searchTerm, handleSearch }) => {
  return (
    <div className="inputBoxDiv">
      <input
        placeholder="Enter name"
        type="text"
        className="inputBox__Search"
        onInput={handleSearch}
      ></input>
    </div>
  );
};

export default Input;
