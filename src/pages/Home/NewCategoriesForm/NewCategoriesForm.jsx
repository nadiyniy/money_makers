import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addedCategoryThunk } from 'redux/category/operations';
import { validationCategoryFormSchema } from 'shared/validationSchema/validationSchema';
import { selectError } from 'redux/auth/selectors';

import {
  ErrorMessage,
  NewCategoriesButton,
  NewCategoriesInput,
  NewCategoriesWrapper,
  NewLabel,
} from './NewCategoriesForm.styled';
import { selectCategories } from 'redux/category/selectors';

const NewCategoriesForm = () => {
  const categories = useSelector(selectCategories);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const type = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationCategoryFormSchema),
  });
  const submit = data => {
    let categoryIncomesExsist = '';
    let categoryExpensesExists = '';

    if (categories.incomes) {
      categoryIncomesExsist = categories.incomes.find(
        category => category.categoryName.toLowerCase().trim() === data.categoryName.toLowerCase().trim()
      );
    }
    if (categories.expenses) {
      categoryExpensesExists = categories.expenses.find(
        category => category.categoryName.toLowerCase().trim() === data.categoryName.toLowerCase().trim()
      );
    }

    if (categoryIncomesExsist || categoryExpensesExists) {
      toast.info(`${data.categoryName} is already in your list.`);
      return;
    } else {
      dispatch(addedCategoryThunk({ type: type.transactionsType, ...data }));
      if (error === null) {
        reset();
      } else {
        toast.error('Сreation failed, please try again');
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <NewCategoriesWrapper>
        <NewLabel htmlFor="add">
          New Category
          <NewCategoriesInput
            autoComplete="off"
            id="add"
            type="text"
            placeholder="Enter the text"
            {...register('categoryName')}
          />
          <NewCategoriesButton type="submit">Add</NewCategoriesButton>
        </NewLabel>
        <ErrorMessage>{errors.categoryName?.message} </ErrorMessage>
      </NewCategoriesWrapper>
    </form>
  );
};

export default NewCategoriesForm;
