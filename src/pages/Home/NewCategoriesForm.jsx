import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addedCategoryThunk } from 'redux/category/operations';
import { validationCategoryFormSchema } from 'shared/validationSchema/validationSchema';
import { selectError } from 'redux/auth/selectors';

const NewCategoriesForm = ({ category }) => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationCategoryFormSchema),
  });
  const submit = data => {
    const type = category.type;
    dispatch(addedCategoryThunk({ type, ...data }));
    if (error === null) {
      reset();
    } else {
      toast.error('Сreation failed, please try again');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="add">New Category</label>
        <input id="add" type="text" placeholder="Enter the text" {...register('categoryName')} />
        <p>{errors.categoryName?.message}</p>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewCategoriesForm;
