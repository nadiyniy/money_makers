import React, { useState } from 'react';
import {
  AmountButton,
  AmountText,
  AmountTitle,
  AmountWrapper,
  TotalAmountWrapper,
} from './TransactionsTotalAmount.styles';
import { Arrow14, Arrow15 } from '../../components/svgs';
const TransactionsTotalAmount = () => {
  //отримуємо значення expensesAmount та incomeAmount з бекенду
  //логіка середнього статистичного?
  const [incomeAmount] = useState(null);
  const [expensesAmount] = useState(null);
  return (
    <TotalAmountWrapper>
      <AmountWrapper type="expenses" title="Expenses" amount={expensesAmount}>
        <AmountButton>
          <Arrow15 />
        </AmountButton>
        <div>
          <AmountTitle>Total Income</AmountTitle>
          <AmountText>$632.000{expensesAmount}</AmountText>
        </div>
      </AmountWrapper>
      <AmountWrapper type="income" title="Income" amount={incomeAmount}>
        <AmountButton>
          <Arrow14 />
        </AmountButton>
        <div>
          <AmountTitle>Total Expense</AmountTitle>
          <AmountText>$632.000{incomeAmount}</AmountText>
        </div>
      </AmountWrapper>
    </TotalAmountWrapper>
  );
};

export default TransactionsTotalAmount;
