import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchTransactionsThunk } from 'redux/transactions/operations';

import TransactionsTotalAmount from 'shared/TransactionsTotalAmount/TransactionsTotalAmount';
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
import { Calendar, Search, TrPencil, TrTrash } from 'components/svgs';

const TransactionsHistoryPage = () => {
  const dispatch = useDispatch();
  const { transactionsType } = useParams();
  useEffect(() => {
    dispatch(fetchTransactionsThunk(transactionsType));
  }, [dispatch, transactionsType]);

  const [startDate, setStartDate] = useState(new Date());
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
              wrapperClassName="datePicker"
              dateFormat="dd/MM/yyyy"
              selected={startDate}
              onChange={date => setStartDate(date)}
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
            <tr>
              <StyledTableBody>Salary</StyledTableBody>
              <StyledTableBody>December salary</StyledTableBody>
              <StyledTableBody>2022-12-28</StyledTableBody>
              <StyledTableBody>19:45</StyledTableBody>
              <StyledTableBody>700 /UAH</StyledTableBody>
              <StyledTableBody>
                <ActionButtonWrapper>
                  <EditButton>
                    <TrPencil style={{ stroke: '#171719' }} width="16" height="16" />
                  </EditButton>
                  <DeleteButton>
                    <TrTrash width="16" height="16" />
                  </DeleteButton>
                </ActionButtonWrapper>
              </StyledTableBody>
            </tr>
          </tbody>
        </StyledTable>
      </StyledBackground>
    </StyledCommonWrapper>
  );
};

export default TransactionsHistoryPage;
