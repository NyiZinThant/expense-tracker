import React from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const titleEventHandler = (event) => {
    console.log(event);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control" onChange={titleEventHandler}>
          <label>Title</label>
          <input type="text" onChange={titleEventHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
