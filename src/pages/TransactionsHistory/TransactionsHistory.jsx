import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import { fetchTransactionsThunk, removeUserTransactionThunk } from 'redux/transactions/operations';
import { selectDate, selectTransactions } from 'redux/transactions/selectors';

import TransactionsTotalAmount from 'shared/TransactionsTotalAmount/TransactionsTotalAmount';
import { Calendar, Search, TrPencil, TrTrash } from 'components/svgs';

import {
  ActionButtonWrapper,
  Button,
  Container,
  DeleteButton,
  EditButton,
  IconWrapper,
  Input,
  LeftSideContainer,
  RightSideContainer,
  SideContainer,
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
import { setInputDate } from 'redux/transactions/slice';

const TransactionsHistoryPage = () => {
  const dispatch = useDispatch();
  const { transactionsType } = useParams();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const transactions = useSelector(selectTransactions);
  const date = useSelector(selectDate);

  const dateFormat = `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`;
  console.log(dateFormat);

  const handleChangeDate = date => {
    setSelectedDate(date);
    if (date) {
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      dispatch(setInputDate({ year, month, day }));
    }
  };

  useEffect(() => {
    dispatch(fetchTransactionsThunk({ type: transactionsType, date: dateFormat }));
  }, [dispatch, transactionsType, date, dateFormat]);

  const handleDelete = id => {
    dispatch(removeUserTransactionThunk(id));
  };

  return (
    <StyledCommonWrapper>
      <SideContainer>
        <LeftSideContainer>
          <Title> All {transactionsType === 'incomes' ? 'Income' : 'Expense'}</Title>
          <Text>View and manage every transaction seamlessly! Your entire financial landscape, all in one place.</Text>
        </LeftSideContainer>
        <RightSideContainer>
          <TransactionsTotalAmount />
        </RightSideContainer>
      </SideContainer>

      <StyledBackground>
        <Container>
          <StyledForm>
            <Input type="text" placeholder="Search for anything..." />
            <Button>
              <Search />
            </Button>
          </StyledForm>
          <StyledFormWrapper>
            <DatePicker
              selected={selectedDate}
              value={date}
              onChange={handleChangeDate}
              dateFormat="dd/MM/yyyy"
              placeholderText="dd/mm/yyyy"
            />
            <IconWrapper>
              <Calendar />
            </IconWrapper>
          </StyledFormWrapper>
        </Container>
        <StyledTable>
          <StyledTableHead>
            <tr>
              <StyledTableName>Category</StyledTableName>
              <StyledTableName>Comment</StyledTableName>
              <StyledTableName>Date</StyledTableName>
              <StyledTableName>Time</StyledTableName>
              <StyledTableName>Sum</StyledTableName>
              <StyledTableName>Actions</StyledTableName>
            </tr>
          </StyledTableHead>
          <tbody>
            {transactions?.map(({ _id, type, date, time, category, sum, comment }) => (
              <tr key={_id}>
                <StyledTableBody>{category.categoryName}</StyledTableBody>
                <StyledTableBody>{comment}</StyledTableBody>
                <StyledTableBody>{date}</StyledTableBody>
                <StyledTableBody>{time}</StyledTableBody>
                <StyledTableBody>{sum}/UAH</StyledTableBody>
                <StyledTableBody>
                  <ActionButtonWrapper>
                    <EditButton onClick={() => handleDelete(_id)}>
                      <TrPencil style={{ stroke: '#171719' }} width="16" height="16" />
                    </EditButton>
                    <DeleteButton>
                      <TrTrash width="16" height="16" />
                    </DeleteButton>
                  </ActionButtonWrapper>
                </StyledTableBody>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </StyledBackground>
    </StyledCommonWrapper>
  );
};

export default TransactionsHistoryPage;
