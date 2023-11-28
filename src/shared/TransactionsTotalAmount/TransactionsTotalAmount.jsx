import React, { useState } from 'react';
import DonutChart from '../Doughnut/Doughnut';
import {
  DonutWrapper,
  Title,
} from '../Doughnut/Doughnut.styles';
// import ColorLegend from '../ColorLegend/ColorLegend';

const TransactionsTotalAmount = () => {
  //отримуємо значення expensesAmount та incomeAmount з бекенду
  //логіка середнього статистичного?
  const [incomeAmount] = useState(null);
  const [expensesAmount] = useState(null);
  return (
    <div className="summaryContainer">
      <div type="expenses" icon="/path/to/expenses_icon.png" title="Expenses" amount={expensesAmount}>
        <h3>Total Income</h3>
        <p>{expensesAmount}</p>
      </div>
      <div type="income" icon="/path/to/income_icon.png" title="Income" amount={incomeAmount}>
        <h3>Total Expense</h3>
        <p>{incomeAmount}</p>
      </div>
      <div>
        <DonutWrapper>
          <Title>Expenses categories</Title>
          <DonutChart />
          {/* <ColorLegend /> */}
        </DonutWrapper>
    </div>

    </div>
  );
};

export default TransactionsTotalAmount;
