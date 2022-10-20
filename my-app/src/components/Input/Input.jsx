import "./Input.scss";

const Input = ({ searchTerm, handleSearch }) => {
  return (
    <div className="inputBoxDiv">
      <input
        placeholder="Enter name"
        type="text"
        value={searchTerm}
        className="inputBox__Search"
        onInput={handleSearch}
      ></input>
    </div>
  );
};

export default Input;
