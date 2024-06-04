import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, dispatch, expenses, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const totalSpent = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const handleBudgetChange = (event) => {
    const value = event.target.value;
    if (value > 20000) {
      alert("The budget cannot exceed {currency}20,000");
      setNewBudget(20000);
    } else {
      setNewBudget(value);
    }
  };

  const saveBudget = () => {
    if (newBudget < totalSpent) {
      alert("You cannot reduce the budget value lower than the spending");
      setNewBudget(budget);
    } else {
      dispatch({
        type: "SET_BUDGET",
        payload: newBudget,
      });
    }
  };

  return (
    <div className="alert alert-secondary">
      <span>Budget: {currency}</span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
        onBlur={saveBudget}
      ></input>
    </div>
  );
};
export default Budget;
