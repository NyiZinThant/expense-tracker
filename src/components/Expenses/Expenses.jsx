import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const addExpenseFilterData = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpense = props.items.filter(
    (item) => item.date.getFullYear() === +filteredYear
  );
  let expenseContent = <p>No Expense currently</p>;
  if (filterExpense.length > 0)
    expenseContent = filterExpense.map((item) => {
      return (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      );
    });
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilterHandler={addExpenseFilterData}
      />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
