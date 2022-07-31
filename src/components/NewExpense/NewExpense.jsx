import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';
const NewExpense = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const expenseSaveHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const startIsVisibleHandler = () => {
    setIsVisible(true);
  };
  const stopIsVisibleHandler = () => {
    setIsVisible(false);
  };
  return (
    <div className="new-expense">
      {!isVisible && (
        <button onClick={startIsVisibleHandler}>Add New Expense</button>
      )}
      {isVisible && (
        <ExpenseForm
          onSaveExpenseData={expenseSaveHandler}
          onClickVisibleForm={stopIsVisibleHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
