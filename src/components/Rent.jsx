import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Rent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { memberNames } = location.state || {};

  const [rentCosts, setRentCosts] = useState(
    Array(memberNames.length).fill("")
  );
  const [totalRent, setTotalRent] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");

  const handleAddClick = () => {
    if (totalRent && totalRent !== "") {
      const equalShare = (parseFloat(totalRent) / memberNames.length).toFixed(
        2
      );
      setRentCosts(Array(memberNames.length).fill(equalShare));
    }
  };

  const handleAddExpense = () => {
    if (expenseCategory && expenseAmount && totalRent && totalRent !== "") {
      // Calculate the additional expense share per member
      const expenseSharePerMember = (
        parseFloat(expenseAmount) / memberNames.length
      ).toFixed(2);

      // Update rentCosts by adding the expense share to the existing values
      const updatedRentCosts = rentCosts.map((currentRent) =>
        (parseFloat(currentRent) + parseFloat(expenseSharePerMember)).toFixed(2)
      );

      setRentCosts(updatedRentCosts);
    }

    setExpenseCategory("");
    setExpenseAmount("");
  };

  const handleCustomizeClick = () => {
    navigate("/customize", { state: { memberNames } });
  };

  const renderSplitAmount = () => {
    if (totalRent && totalRent !== "") {
      return (
        <div className="rent__indv">
          <p>Individual Shares (Rent + Expenses):</p>
          {memberNames.map((name, index) => (
            <div className="rent__indv__text" key={index}>
              {name || String.fromCharCode(65 + index)}: ${parseFloat(rentCosts[index]).toFixed(2)}
            </div>
          ))}
        </div>
      );
    }
    return null;
  };
  

  return (
    <div className="rent">
      <h2>Rent</h2>
      <div className="total__rent">
        <input
          type="text"
          value={totalRent}
          onChange={(e) => setTotalRent(e.target.value)}
          placeholder="Enter total rent"
          inputMode="numeric"
        />
        <button className="total__rent__btn" onClick={handleAddClick}>Add</button>
      </div>

      <div className="custom" onClick={handleCustomizeClick}>
        Customize rent per Head
      </div>

      <div className="rent__category">
        <div className="category">
          <label>Category:</label>
          <input
            type="text"
            value={expenseCategory}
            onChange={(e) => setExpenseCategory(e.target.value)}
            placeholder="Enter category"
          />
        </div>
        <div className="amount">
          <label>Amount:</label>
          <input
            type="number"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            placeholder="Enter amount"
            inputMode="numeric"
          />
        </div>
        <button onClick={handleAddExpense}>Add Expense</button>
      </div>

      {renderSplitAmount()}
    </div>
  );
};

export default Rent;
