import React, { useState, useEffect } from "react";
import SelectLines from "./SelectLines";

const SelectModes = () => {
  const [modes, setModes] = useState([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    fetch("https://api.tfl.gov.uk/Line/Meta/Modes")
      .then((res) => res.json())
      .then((data) => setModes(data));
  }, []);

  const handleClick = (value) => {
    setSelected(modes.filter((mode) => mode.modeName === value));
  };

  return (
    <div className="select-container">
      <select
        className="dropdown-menu"
        onChange={(e) => handleClick(e.target.value)}
      >
        <option value="null">Please select a transport mode</option>
        {modes.map((mode, index) => (
          <option value={mode.modeName} key={index}>
            {mode.modeName}
          </option>
        ))}
      </select>
      <div>
        {selected ? (
          <SelectLines selected={selected[0].modeName} />
        ) : (
          <SelectLines selected='bus' />
        )}{" "}
      </div>
      {selected ? (
        <div className="selected-mode">
          <span>You selected mode:</span>{" "}
          <span style={{ color: "blue" }}>{selected[0].modeName}</span>
        </div>
      ) : null}
    </div>
  );
};

export default SelectModes;

// {selected ? (
//     <div className="selected-mode">
//       <SelectLines selected={selected[0].modeName} />
//       <span>You selected mode:</span>{" "}
//       <span style={{ color: "blue" }}>{selected[0].modeName}</span>
//     </div>
//   ) : null}
