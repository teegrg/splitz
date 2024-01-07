import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MemberDiv = () => {
  const [memberCount, setMemberCount] = useState(0);
  const [memberNames, setMemberNames] = useState(Array(memberCount).fill(""));
  const navigate = useNavigate();

  const handleMemberCountChange = (e) => {
    const count =
      e.target.value === "" ? "" : parseInt(e.target.value, 10) || 0;
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
    // You can access the customized member names in the memberNames state array
    // console.log("Customized Member Names:", memberNames);
    navigate('/rent', { state: { memberNames } });
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
        />
      </div>
      <div className="member__list">{generateMembers()}</div>
      <button onClick={handleSaveClick}>Next</button>
    </div>
  );
};

export default MemberDiv;
