import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Members = () => {
  const [memberCount, setMemberCount] = useState(0);
  const [memberNames, setMemberNames] = useState(Array(memberCount).fill(""));
  const navigate = useNavigate();

  const handleMemberCountChange = (e) => {
    let count = parseInt(e.target.value, 10) || 0;
    if (count > 10) {
      count = 10; // Limit to a maximum of 10 members
    }
    setMemberCount(count);
    setMemberNames(Array(count).fill(""));
  };

  const handleMemberNameChange = (index, e) => {
    const newMemberNames = [...memberNames];
    newMemberNames[index] = e.target.value;
    setMemberNames(newMemberNames);
  };

  const generateMembers = () => {
    return memberNames.map((name, index) => (
      <div key={index} className="member">
        {!name && String.fromCharCode(65 + index)}
        <input
          type="text"
          value={name}
          onChange={(e) => handleMemberNameChange(index, e)}
          placeholder={`Add name ${index + 1}`}
        />
      </div>
    ));
  };

  const handleSaveClick = () => {
    navigate("/rent", { state: { memberNames } });
  };

  return (
    <div className="member__container">
      <div className="member__box">
        <label>Number of Members:</label>
        <input
          type="text"
          value={memberCount === 0 ? "" : memberCount}
          onChange={handleMemberCountChange}
          inputMode="numeric"
          maxLength={2} // Limit input to 2 characters
        />
      </div>
      <div className="member__list">{generateMembers()}</div>
      <button className="member__btn" onClick={handleSaveClick}>
        Next
      </button>
    </div>
  );
};

export default Members;
