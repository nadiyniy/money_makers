import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useModal } from 'shared/hooks/useModal';
import Modal from 'shared/Modal/Modal';
import CategoriesModalList from 'pages/Home/CategoriesModalList';

import { selectCategoriesExpenses, selectCategoriesIncomes } from 'redux/category/selectors';
import { fetchCategoriesThunk } from 'redux/category/operations';

const TransactionForm = ({ transactionsType }) => {
  const { isOpen, openModal, closeModal } = useModal();
  const [currentCategory, setCurrentCategory] = useState([]);
  const [chooseCategory, setchooseCategory] = useState('');
  const [takeCategoryId, setTakeCategoryId] = useState('');
  const incomes = useSelector(selectCategoriesIncomes);
  const expenses = useSelector(selectCategoriesExpenses);
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
    console.log(formData);
  };

  const chooseCategoryByList = () => {
    let list;
    if (transactionsType === 'incomes') {
      list = incomes;
    } else {
      list = expenses;
    }
    setCurrentCategory(list);
    openModal();
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(submit)}>
          <div>
            <label>
              Expense
              <input {...register('type')} type="radio" value="expenses" />
            </label>
            <label>
              Income
              <input {...register('type')} type="radio" value="incomes" />
            </label>
          </div>
          <div>
            <label>
              Date:
              <input type="date" {...register('date')} placeholder="mm/dd/yyyy" />
            </label>
            <label>
              Time:
              <input type="time" {...register('time')} placeholder="00:00:00" />
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
                onClick={chooseCategoryByList}
                onFocus={chooseCategoryByList}
              />
            </label>
          </div>
          <div>
            <label htmlFor="amountInput">Sum:</label>
            <input type="text" id="amountInput" {...register('sum')} placeholder="Enter the sum" />
            <span>{'грн'}</span>
          </div>
          <div>
            <label>
              Comment:
              <textarea {...register('comment')} rows={4} cols={50} placeholder="Enter the text" />
            </label>
          </div>
          <button type="submit">Add</button>
        </form>
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
