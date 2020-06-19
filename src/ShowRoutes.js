import React, { useState, useEffect } from "react";

const ShowRoutes = (props) => {
  const [selectedLine, setSelectedLine] = useState({});

  useEffect(() => {
    console.log(`https://api.tfl.gov.uk/Line/${props.line}/Route`)
    fetch(`https://api.tfl.gov.uk/Line/${props.line}/Route`)
      .then((res) => res.json())
      .then((data) => setSelectedLine(data));
  }, [props.line]);

  console.log(props);
  console.log(selectedLine);
  return (

    <div className="routes-box">
      <div className="station-box">
        {selectedLine.routeSections && selectedLine.routeSections[0] ? selectedLine.routeSections[0].originationName : ''}
      </div>
      <div className="station-box">
        {selectedLine.routeSections && selectedLine.routeSections[0] ? selectedLine.routeSections[0].destinationName : ''}
      </div>{" "}
    </div>
  );
};

export default ShowRoutes;
