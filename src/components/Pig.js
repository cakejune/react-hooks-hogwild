import React, { useState, useEffect } from "react";

export default function Pig({ pig, weight, specialty }) {
  const [pigOn, setPig] = useState(false);

  function handlePigClick() {
    setPig(!pigOn);
  }
  return (
    <div className="pigTile" style={{ 
        backgroundImage: `url(${pig.image})` 
      }}>
      <div className="minPigTile">
        <h2>
          <strong>{pig.name}</strong>
        </h2>
        <button onClick={handlePigClick}>
          {pigOn ? "Hide Details" : "Show Details"}
        </button>
        <div>
          {pigOn ? <h3>Specialty: {pig.specialty}</h3> : null}
          {pigOn ? <h3>Greased: {pig.greased}</h3> : null}
          {pigOn ? <h4>Weight: {pig.weight}</h4> : null}
        </div>
        
      </div>
    </div>
  );
}

//const pigMap = pigs.map((pig) =>
