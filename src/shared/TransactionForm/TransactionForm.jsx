import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';

import { useModal } from 'shared/hooks/useModal';
import Modal from 'shared/Modal/Modal';
import CategoriesModalList from 'pages/Home/CategoriesModalList/CategoriesModalList';
import { createUserTransactionThunk } from 'redux/transactions/operations';
import { fetchCategoriesThunk } from 'redux/category/operations';

import {
  CategoryInput,
  CommentInput,
  DateInput,
  DateInputWrapper,
  OneLabel,
  ParentInputWrapper,
  RadioCustom,
  RadioCustomChecked,
  RadioInput,
  RadioLabel,
  RadioLabel1,
  RadioWrapper,
  SumInput,
  TransactionButton,
  TransactionButtonWrapper,
  TransactionFormStyle,
  TransactionWrapper,
  ErrorMessage,
  TwoLabel,
  DateLabel,
  CalendarIcon,
  Currency,
} from './TransactionForm.styles';
import { Calendar1, Clock } from '../../components/svgs/index';
import { selectCurrentUser } from 'redux/user/selectors';
import { currentInfoUserThunk } from 'redux/user/operations';
import { toast } from 'react-toastify';

const TransactionForm = ({ transactionsType, setRender }) => {
  const { isOpen, openModal, closeModal } = useModal();
  const [chooseCategory, setchooseCategory] = useState('');
  const [takeCategoryId, setTakeCategoryId] = useState('');
  const [checked, setChecked] = useState('incomes');
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    dispatch(currentInfoUserThunk());
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: 'incomes',
    },
  });

  const submit = async ({ comment, date, sum, time, type }) => {
    try {
      const startDate = new Date(date);
      const nextDay = new Date(startDate);
      nextDay.setDate(startDate.getDate() + 1);

      const formData = {
        category: takeCategoryId,
        comment,
        date: nextDay.toISOString().slice(0, 10),
        sum: parseInt(sum),
        time: time.toISOString().slice(11, 16),
        type,
      };
      await dispatch(createUserTransactionThunk(formData)).unwrap();
    } catch (error) {
      toast.error('Sorry, registration failed, please added all field to transaction form');
    }
    reset();
  };

  const renderCategoryByType = () => {
    openModal();
  };

  const handleTypeChange = e => {
    const value = e.target.value;
    setRender(value);
    setChecked(value);
  };

  return (
    <>
      <TransactionWrapper>
        <TransactionFormStyle onSubmit={handleSubmit(submit)}>
          <RadioWrapper>
            <RadioLabel>
              <RadioInput
                {...register('type')}
                type="radio"
                checked={checked === 'expenses'}
                value="expenses"
                onChange={handleTypeChange}
              />
              Expense
              {checked === 'expenses' ? <RadioCustomChecked /> : <RadioCustom />}
            </RadioLabel>

            <RadioLabel1>
              <RadioInput
                {...register('type')}
                type="radio"
                checked={checked === 'incomes'}
                value="incomes"
                onChange={handleTypeChange}
              />
              Income
              {checked === 'incomes' ? <RadioCustomChecked /> : <RadioCustom />}
            </RadioLabel1>
          </RadioWrapper>
          <DateInputWrapper>
            <DateLabel>
              Date:
              <Controller
                control={control}
                name="date"
                render={({ field }) => (
                  <DateInput
                    placeholderText="mm/dd/yyyy"
                    onChange={date => field.onChange(date)}
                    selected={field.value}
                  />
                )}
              />
              <CalendarIcon>
                <Calendar1 />
              </CalendarIcon>
              <ErrorMessage>{errors.date?.message}</ErrorMessage>
            </DateLabel>
            <DateLabel>
              Time:
              <Controller
                control={control}
                name="time"
                render={({ field }) => (
                  <DateInput
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm"
                    placeholderText="00:00:00"
                    onChange={date => field.onChange(date)}
                    selected={field.value}
                  />
                )}
              />
              <CalendarIcon>
                <Clock />
              </CalendarIcon>
              <ErrorMessage>{errors.time?.message}</ErrorMessage>
            </DateLabel>
          </DateInputWrapper>
          <ParentInputWrapper>
            <OneLabel>
              Category:
              <CategoryInput
                autoComplete="off"
                type="text"
                value={chooseCategory}
                {...register('category')}
                placeholder="Different"
                onClick={renderCategoryByType}
                onFocus={renderCategoryByType}
              />
              <ErrorMessage>{errors.category?.message}</ErrorMessage>
            </OneLabel>
          </ParentInputWrapper>
          <ParentInputWrapper>
            <TwoLabel>
              Sum:
              <SumInput autoComplete="off" type="text" {...register('sum')} placeholder="Enter the sum" />
              {currentUser.transactionsTotal && <Currency>{currentUser.currency.toUpperCase()}</Currency>}
              <ErrorMessage>{errors.sum?.message}</ErrorMessage>
            </TwoLabel>
          </ParentInputWrapper>
          <ParentInputWrapper>
            <OneLabel>
              Comment:
              <CommentInput
                autoComplete="off"
                {...register('comment')}
                rows={4}
                cols={50}
                placeholder="Enter the text"
              />
              <ErrorMessage>{errors.comment?.message}</ErrorMessage>
            </OneLabel>
          </ParentInputWrapper>
          <TransactionButtonWrapper>
            <TransactionButton type="submit">Add</TransactionButton>
          </TransactionButtonWrapper>
        </TransactionFormStyle>
      </TransactionWrapper>

      {isOpen ? (
        <Modal closeModal={closeModal}>
          <CategoriesModalList
            setchooseCategory={setchooseCategory}
            setTakeCategoryId={setTakeCategoryId}
            closeModal={closeModal}
            categoryName={transactionsType}
          />
        </Modal>
      ) : null}
    </>
  );
};

export default TransactionForm;
