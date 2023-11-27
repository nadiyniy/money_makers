import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchTransactions } from 'redux/transactions/operations';

// import { selectTransactions, selectTransactionsLoading } from 'redux/transactions/selectors';

import TransactionsTotalAmount from 'shared/TransactionsTotalAmount/TransactionsTotalAmount';
import {
  Button,
  Input,
  StyledBackground,
  StyledForm,
  StyledFormWrapper,
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTableName,
  Text,
  Title,
} from './TransactionsHistoryStyled';
import { StyledCommonWrapper } from 'styles/Common.styled';
import { Calendar, Search } from 'components/svgs';

const TransactionsHistoryPage = () => {
  // const transactions = useSelector(selectTransactions);
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
    <StyledCommonWrapper>
      <Title> All {transactionsType === 'incomes' ? 'Income' : 'Expense'}</Title>
      <Text>View and manage every transaction seamlessly! Your entire financial landscape, all in one place.</Text>
      <TransactionsTotalAmount />
      <StyledBackground>
        <StyledForm>
          <Input type="text" placeholder="Search for anything..." />
          <Button>
            <Search />
          </Button>
        </StyledForm>
        <StyledFormWrapper>
          <DatePicker
            wrapperClassName="datePicker"
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={date => setStartDate(date)}
          />
          <Button>
            <Calendar />
          </Button>
        </StyledFormWrapper>

        <StyledTable>
          <StyledTableHead>
            <tr>
              <StyledTableName>Category</StyledTableName>
              <StyledTableName>Comment</StyledTableName>
              <StyledTableName>Date</StyledTableName>
              <StyledTableName>Time</StyledTableName>
              <StyledTableName>Sum</StyledTableName>
            </tr>
          </StyledTableHead>
          <tbody>
            <tr>
              <StyledTableBody>Salary</StyledTableBody>
              <StyledTableBody>December salary</StyledTableBody>
              <StyledTableBody>2022-12-28</StyledTableBody>
              <StyledTableBody>19:45</StyledTableBody>
              <StyledTableBody>700</StyledTableBody>
            </tr>
          </tbody>
        </StyledTable>
      </StyledBackground>
    </StyledCommonWrapper>
  );
};

export default TransactionsHistoryPage;
