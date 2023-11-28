import React, { useEffect } from 'react';
import {
  AmountButton,
  AmountText,
  AmountTitle,
  AmountWrapper,
  TotalAmountWrapper,
} from './TransactionsTotalAmount.styles';
import { Arrow14, Arrow15 } from '../../components/svgs';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user/selectors';
import { currentInfoUserThunk } from 'redux/user/operations';
const TransactionsTotalAmount = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentInfoUserThunk());
  }, [dispatch]);

  return (
    <TotalAmountWrapper>
      <AmountWrapper>
        <AmountButton>
          <Arrow15 />
        </AmountButton>
        <div>
          <AmountTitle>Total Income</AmountTitle>
          {currentUser.transactionsTotal && (
            <AmountText>
              {currentUser.currency.toUpperCase()}
              {currentUser.transactionsTotal.incomes?.toFixed(3)}
            </AmountText>
          )}
        </div>
      </AmountWrapper>
      <AmountWrapper>
        <AmountButton>
          <Arrow14 />
        </AmountButton>
        <div>
          <AmountTitle>Total Expense</AmountTitle>
          {currentUser.transactionsTotal && (
            <AmountText>
              {currentUser.currency.toUpperCase()}
              {currentUser.transactionsTotal.expenses?.toFixed(3)}
            </AmountText>
          )}
        </div>
      </AmountWrapper>
    </TotalAmountWrapper>
  );
};

export default TransactionsTotalAmount;
