import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useModal } from 'shared/hooks/useModal';
import Modal from 'shared/Modal/Modal';
import CategoriesModalList from 'pages/Home/CategoriesModalList/CategoriesModalList';

import { selectCategories } from 'redux/category/selectors';
import { fetchCategoriesThunk } from 'redux/category/operations';
import {
  RadioCustom,
  RadioCustomChecked,
  RadioInput,
  RadioLabel,
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

  console.log(categories);

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
    console.log(formData);
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
          <div>
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

            <RadioLabel>
              <RadioInput
                {...register('type', { required: true })}
                type="radio"
                checked={checked === 'incomes'}
                value="incomes"
                onChange={handleTypeChange}
              />
              Income
              {checked === 'incomes' ? <RadioCustomChecked /> : <RadioCustom />}
            </RadioLabel>
          </div>
          <div>
            <label>
              Date:
              <input type="date" {...register('date', { required: true })} placeholder="mm/dd/yyyy" />
            </label>
            <label>
              Time:
              <input type="time" {...register('time', { required: true })} placeholder="00:00:00" />
            </label>
          </div>
          <div>
            <label>
              Category:
              <input
                type="text"
                value={chooseCategory}
                {...register('category')}
                placeholder="Different"
                onClick={renderCategoryByType}
                onFocus={renderCategoryByType}
              />
            </label>
          </div>
          <div>
            <label htmlFor="amountInput">Sum:</label>
            <input type="text" id="amountInput" {...register('sum', { required: true })} placeholder="Enter the sum" />
            <span>{'грн'}</span>
          </div>
          <div>
            <label>
              Comment:
              <textarea {...register('comment', { required: true })} rows={4} cols={50} placeholder="Enter the text" />
            </label>
          </div>
          <button type="submit">Add</button>
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
