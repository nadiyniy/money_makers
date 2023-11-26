import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { useModal } from 'shared/hooks/useModal';
import Modal from 'shared/Modal/Modal';
import CategoriesModalList from 'pages/Home/CategoriesModalList/CategoriesModalList';

import { selectCategories } from 'redux/category/selectors';
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
} from './TransactionForm.styles';

const TransactionForm = ({ transactionsType, setRender }) => {
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

  const { register, handleSubmit, reset } = useForm();

  const submit = ({ comment, date, sum, time, type }) => {
    const formData = {
      category: takeCategoryId,
      comment,
      date,
      sum,
      time,
      type,
    };

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
      <div>
        <TransactionFormStyle onSubmit={handleSubmit(submit)}>
          <RadioWrapper>
            <RadioLabel>
              <RadioInput
                {...register('type', { required: true })}
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
                {...register('type', { required: true })}
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
            <OneLabel>
              Date:
              <DateInput type="date" {...register('date', { required: true })} placeholder="mm/dd/yyyy" />
            </OneLabel>
            <OneLabel>
              Time:
              <DateInput type="time" {...register('time', { required: true })} placeholder="00:00:00" />
            </OneLabel>
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
            </OneLabel>
          </ParentInputWrapper>
          <ParentInputWrapper>
            <OneLabel>
              Sum:
              <SumInput type="text" {...register('sum', { required: true })} placeholder="Enter the sum" />
            </OneLabel>
          </ParentInputWrapper>
          <ParentInputWrapper>
            <OneLabel>
              Comment:
              <CommentInput
                {...register('comment', { required: true })}
                rows={4}
                cols={50}
                placeholder="Enter the text"
              />
            </OneLabel>
          </ParentInputWrapper>
          <TransactionButtonWrapper>
            <TransactionButton type="submit">Add</TransactionButton>
          </TransactionButtonWrapper>
        </TransactionFormStyle>
      </div>

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
