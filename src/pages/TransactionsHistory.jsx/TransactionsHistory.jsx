import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchTransactions } from 'redux/transactions/operations';

import { selectTransactions, selectTransactionsLoading } from 'redux/transactions/selectors';

import TransactionsTotalAmount from 'shared/TransactionsTotalAmount/TransactionsTotalAmount';

const TransactionsHistoryPage = () => {
  const transactions = useSelector(selectTransactions);
  //   const isLoading = useSelector(selectTransactionsLoading);
  const dispatch = useDispatch();
  const { transactionsType } = useParams();
  useEffect(() => {
    dispatch(fetchTransactions(transactionsType));
  }, [dispatch, transactionsType]);

  //   const getAllExpenses = type => {
  //     dispatch(fetchTransactions(type));
  //   };

  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <h1 style={{ color: 'white' }}> All </h1>
      <p style={{ color: 'white' }}>
        View and manage every transaction seamlessly! Your entire financial landscape, all in one place.
      </p>
      <TransactionsTotalAmount />
      <form>
        <input type="search" placeholder="Search for anything..." />
        <button>Search</button>
      </form>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      <table style={{ color: 'white' }}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Comment</th>
            <th>Date</th>
            <th>Time</th>
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsHistoryPage;
