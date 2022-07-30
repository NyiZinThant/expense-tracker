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

  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onFilterHandler={addExpenseFilterData}
      />
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
