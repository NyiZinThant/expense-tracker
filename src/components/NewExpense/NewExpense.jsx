import React from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';
const NewExpense = (props) => {
  const expenseSaveHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={expenseSaveHandler} />
    </div>
  );
};

export default NewExpense;
