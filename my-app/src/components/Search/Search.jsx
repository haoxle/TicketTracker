import "./Search.scss";
import { useState } from "react";
import Select from "react-select";
import { roles } from "../../data/team";

const Search = ({ searching }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (e) => {
    setSelectedOption(e);
  };
  return (
    <>
      <div className="inputBox">
        <div className="inputBoxDiv">
          <input
            placeholder="Enter name"
            className="inputBox__Search"
            onInput={searching}
          ></input>
        </div>
        <div>
          <Select
            className="select"
            placeholder="Select Role"
            value={selectedOption}
            options={roles.map((role) => {
              return {
                value: roles.indexOf(role) + 1,
                label: role,
              };
            })}
            onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
};

export default Search;
