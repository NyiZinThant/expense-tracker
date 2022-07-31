import React from 'react';
import Chart from '../Chart/Chart';

const ExpenseCart = (props) => {
  // prettier-ignore
  const chartDataPoints = [
    { label: 'Jan', value: 0, },
    { label: 'Feb', value: 0, },
    { label: 'Mar', value: 0, },
    { label: 'Apr', value: 0, },
    { label: 'May', value: 0, },
    { label: 'Jun', value: 0, },
    { label: 'Jul', value: 0, },
    { label: 'Aug', value: 0, },
    { label: 'Sep', value: 0, },
    { label: 'Oct', value: 0, },
    { label: 'Nov', value: 0, },
    { label: 'Dec', value: 0, },
  ];
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  const totalMax = chartDataPoints.reduce((max, { value }) => {
    if (!max) return value;
    return value > max ? (max = value) : max;
  }, 0);
  return <Chart dataPoints={chartDataPoints} maxValue={totalMax} />;
};

export default ExpenseCart;
