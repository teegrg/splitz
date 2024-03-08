import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const Rent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { memberNames } = location.state || {};

  const [rentCosts, setRentCosts] = useState(Array(memberNames.length).fill(""));
  const [totalRent, setTotalRent] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenses, setExpenses] = useState(Array(memberNames.length).fill([]));
  const [grossTotal, setGrossTotal] = useState("");

  const handleAddClick = () => {
    if (totalRent && totalRent !== "") {
      const equalShare = (parseFloat(totalRent) / memberNames.length).toFixed(2);
      setRentCosts(Array(memberNames.length).fill(equalShare));
      setGrossTotal(totalRent);
    }
  };

  const handleAddExpense = () => {
    if (expenseCategory && expenseAmount && totalRent && totalRent !== "") {
      const expenseSharePerMember = (parseFloat(expenseAmount) / memberNames.length).toFixed(2);
      const updatedExpenses = expenses.map((expense, index) => {
        const newExpense = {
          category: expenseCategory,
          amount: parseFloat(expenseSharePerMember).toFixed(2),
        };
        return [...expense, newExpense];
      });
      setExpenses(updatedExpenses);

      // Update the gross total by adding the expense amount
      const updatedGrossTotal = (parseFloat(grossTotal) + parseFloat(expenseAmount)).toFixed(2);
      setGrossTotal(updatedGrossTotal);
    }
    setExpenseCategory("");
    setExpenseAmount("");
  };
  
  const handleRemoveExpense = (index, expenseIndex) => {
    const updatedExpenses = [...expenses];
    const removedExpense = updatedExpenses[index][expenseIndex];
    
    // Calculate the subtracted amount from expenses
    const subtractedAmount = parseFloat(removedExpense.amount);
  
    // Update expenses for the member by removing the expense
    updatedExpenses[index] = updatedExpenses[index].filter(
      (_, i) => i !== expenseIndex
    );
  
    // Subtract the expense amount from the gross total
    const updatedGrossTotal = (parseFloat(grossTotal) - subtractedAmount).toFixed(2);
    setGrossTotal(updatedGrossTotal);
  
    // Distribute the subtracted amount equally among the remaining members for the same category
    const remainingMembers = updatedExpenses.filter((_, i) => i !== index);
    const numberOfRemainingMembers = remainingMembers.length;
  
    if (numberOfRemainingMembers > 0) {
      // Filter expenses for the same category in remaining members
      const sameCategoryExpenses = remainingMembers.map(memberExpenses => (
        memberExpenses.find(expense => expense.category === removedExpense.category)
      ));
  
      const numberOfExpenses = sameCategoryExpenses.filter(expense => expense).length;
  
      if (numberOfExpenses > 0) {
        const equalDistribution = subtractedAmount / numberOfExpenses;
        
        // Update expense amounts for the same category in remaining members
        sameCategoryExpenses.forEach((expense) => {
          if (expense) {
            expense.amount = (parseFloat(expense.amount) + equalDistribution).toFixed(2);
          }
        });
      }
    }
  
    // Set the updated expenses state
    setExpenses(updatedExpenses);
  };
  
  

  const handleCustomizeClick = () => {
    navigate("/customize", { state: { memberNames } });
  };

  const renderSplitAmount = () => {
    if (totalRent && totalRent !== "") {
      return (
        <div className="rent__indv">
          <p>Individual Shares (Rent + Expenses):</p>
          {memberNames.map((name, index) => {
            const totalAmount =
              parseFloat(rentCosts[index]) +
              expenses[index].reduce(
                (acc, expense) => acc + parseFloat(expense.amount),
                0
              );
            return (
              <div className="rent__indv__text" key={index}>
                {name || String.fromCharCode(65 + index)}: $
                {totalAmount.toFixed(2)}
                <div className="member__category__wrapper">
                {expenses[index].map((expense, expenseIndex) => (
                  <div className= "member__category" key={expenseIndex}>
                    {expense.category}: ${expense.amount}
                    <div className="member__btn__x"
                      onClick={() => handleRemoveExpense(index, expenseIndex)}>
                      <CloseIcon  style={{ fontSize: 'small', color: 'white'}} />
                    </div>
                  </div>
                ))}
                </div>
              </div>
            );
          })}
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
        <button className="total__rent__btn" onClick={handleAddClick}>
          Add
        </button>
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
