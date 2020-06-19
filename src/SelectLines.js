import React, { useState, useEffect } from "react";
import ShowRoutes from "./ShowRoutes";

const SelectLines = (props) => {
  const [selectedMode, setSelectedMode] = useState([]);
  const [isSelected, setSelected] = useState("");

  useEffect(() => {
    fetch(`https://api.tfl.gov.uk/Line/Mode/${props.selected}`)
      .then((res) => res.json())
      .then((data) => setSelectedMode(data));
  }, [props.selected]);

  const handleClick = (value) => {
    setSelected(selectedMode.filter((item) => item.id === value));
  };
  console.log(isSelected)

  return (
    <div style={{ width: "400px" }}>
      <select
        className="dropdown-menu"
        onChange={(e) => handleClick(e.target.value)}
      >
        <option value="null">Please select a line</option>
        {selectedMode.map((route, index) => (
          <option key={index} value={route.id}>
            {route.id}
          </option>
        ))}
      </select>
      {isSelected ? (
        <div>
          <div className="selected-mode">
            <span>You selected line:</span>{" "}
            <span style={{ color: "blue" }}>{isSelected[0].id}</span>
          </div>
          <div>
            <ShowRoutes line={isSelected[0].id} />
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default SelectLines;
