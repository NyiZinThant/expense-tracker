import React, { useState } from 'react';

import Card from '../UI/Card';

import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseCart from './ExpneseChart';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const addExpenseFilterData = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpense = props.items.filter(
    (item) => item.date.getFullYear() === +filteredYear
  );
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilterHandler={addExpenseFilterData}
      />
      <ExpenseCart expenses={filterExpense} />
      <ExpenseList items={filterExpense} />
    </Card>
  );
};

export default Expenses;
