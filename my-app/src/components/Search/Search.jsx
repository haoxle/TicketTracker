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
    </>
  );
};

export default Search;
