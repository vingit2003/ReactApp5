import React, { useState } from "react";

const AgeCalculator = () => {
  const [dob, setDOB] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const today = new Date();
    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    const age = Math.floor(ageInYears);
    setAge(age);
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <label>Enter your Date of Birth:</label><br /><br />
      <input
        type="date"
        value={dob}
        onChange={(e) => setDOB(e.target.value)}
      />
      <br /><br />
      <button onClick={calculateAge}>Calculate</button>
      {age !== null && <p>Your age is {age} years.</p>}
    </div>
  );
};

export default AgeCalculator;