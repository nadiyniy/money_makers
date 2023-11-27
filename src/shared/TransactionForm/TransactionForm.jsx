import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { useModal } from 'shared/hooks/useModal';
import Modal from 'shared/Modal/Modal';
import CategoriesModalList from 'pages/Home/CategoriesModalList/CategoriesModalList';

import { selectCategories } from 'redux/category/selectors';
import { fetchCategoriesThunk } from 'redux/category/operations';
import { Calendar1, Clock } from '../../components/svgs/index';
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
} from './TransactionForm.styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationTransactionFormSchema } from 'shared/validationSchema/validationSchema';

const TransactionForm = ({ transactionsType, setRender }) => {
  const [startDate, setStartDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const { isOpen, openModal, closeModal } = useModal();
  const [currentCategory, setCurrentCategory] = useState([]);
  const [chooseCategory, setchooseCategory] = useState('');
  const [takeCategoryId, setTakeCategoryId] = useState('');
  const [checked, setCheked] = useState(false);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationTransactionFormSchema),
  });

  const submit = ({ comment, date, sum, time, type }) => {
    const formData = {
      category: takeCategoryId,
      comment,
      date,
      sum,
      time,
      type,
    };
    console.log(formData);
    reset();
  };

  const renderCategoryByType = () => {
    let list;
    if (transactionsType === 'incomes') {
      list = categories.incomes;
    } else {
      list = categories.expenses;
    }
    setCurrentCategory(list);
    openModal();
  };

  const handleTypeChange = e => {
    const value = e.target.value;
    setRender(value);
    setCheked(value);
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
              <DateInput
                isClearable
                selected={startDate || null}
                onChange={date => setStartDate(date)}
                dateFormat="yyyy-MM-dd"
                placeholderText="mm/dd/yyyy"
              />
              <CalendarIcon>
                <Calendar1 />
              </CalendarIcon>
              <ErrorMessage>{errors.date?.message}</ErrorMessage>
            </DateLabel>
            <DateLabel>
              Time:
              <DateInput
                isClearable
                selected={selectedTime}
                onChange={time => setSelectedTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm"
                placeholderText="00:00:00"
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
              <SumInput type="text" {...register('sum')} placeholder="Enter the sum" />
              <ErrorMessage>{errors.sum?.message}</ErrorMessage>
            </TwoLabel>
          </ParentInputWrapper>
          <ParentInputWrapper>
            <OneLabel>
              Comment:
              <CommentInput {...register('comment')} rows={4} cols={50} placeholder="Enter the text" />
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
            categories={currentCategory}
          />
        </Modal>
      ) : null}
    </>
  );
};

export default TransactionForm;
