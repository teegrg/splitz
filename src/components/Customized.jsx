import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Customized() {
  const location = useLocation();
  const { memberNames, rentCosts: initialRentCosts } = location.state || {};
  const [rentAmounts, setRentAmounts] = useState(initialRentCosts || []);
  const [expenseAmount, setExpenseAmount] = useState("");
  const [category, setCategory] = useState("");
  const [addExpenseClicked, setAddExpenseClicked] = useState(false);

  const handleAddClick = () => {
    if (expenseAmount) {
      const equalExpenseShare = (
        parseFloat(expenseAmount) / memberNames.length
      ).toFixed(2);
      const updatedRentCosts = rentAmounts.map((currentRent) =>
        (parseFloat(currentRent) + parseFloat(equalExpenseShare)).toFixed(2)
      );
  
      setRentAmounts(updatedRentCosts);
      setAddExpenseClicked(true);
      setCategory("");
      setExpenseAmount("");
      console.log("Updated Rent Costs:", updatedRentCosts);
    }
  };
  

  return (
    <div className="customized">
      {/* Display rent amounts if "Add Expense" button has not been clicked */}
      {!addExpenseClicked && (
        <div className="customized__input__box">
          {memberNames.map((name, index) => (
            <div className="customized__input" key={index}>
              {name || String.fromCharCode(65 + index)}
              <input
                type="text"
                value={rentAmounts[index] || ""}
                onChange={(e) => {
                  const newRentAmounts = [...rentAmounts];
                  newRentAmounts[index] = e.target.value;
                  setRentAmounts(newRentAmounts);
                }}
                placeholder={`Enter rent for ${name || String.fromCharCode(65 + index)}`}
                inputMode="numeric"
              />
            </div>
          ))}
          {/* <button onClick={handleAddClick}>Add</button> */}
        </div>
      )}
      <div className="rent__category">
        <div className="category">
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Enter category"
          />
        </div>
        <div>
          <label className="amount">Amount:</label>
          <input
            type="number"
            value={expenseAmount}
            onChange={(e) => setExpenseAmount(e.target.value)}
            placeholder="Enter amount"
            inputMode="numeric"
          />
        </div>

        <button onClick={handleAddClick}>Add Expense</button>
      </div>

      {/* Display rent amounts if "Add Expense" button has not been clicked */}
      {!addExpenseClicked && (
        <div className="rent__each">
          <p>Rent Amounts:</p>
          {memberNames.map((name, index) => (
            <div key={index}>
              {name} : {rentAmounts[index]}
            </div>
          ))}
        </div>
      )}

      {/* Display rent costs after adding expense */}
      {addExpenseClicked && (
        <div className="total__exp">
          <p>Total Costs After Adding Expense:</p>
          {memberNames.map((name, index) => (
            <div className="total__exp__list" key={index}>
              {name} : {rentAmounts[index]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Customized;
