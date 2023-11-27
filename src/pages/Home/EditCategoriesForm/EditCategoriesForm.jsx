import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateCategoryThunk } from 'redux/category/operations';
import { validationCategoryFormSchema } from 'shared/validationSchema/validationSchema';
import { selectError } from 'redux/auth/selectors';

const EditCategoriesForm = ({ setIsEditing, category }) => {
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
    const _id = category._id;
    dispatch(updateCategoryThunk({ _id, ...data }));

    setIsEditing(false);
    if (error === null) {
      reset();
    } else {
      toast.error('Update failed, please try again');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="edit">Edit Category</label>
        <input id="edit" type="text" placeholder="Enter the text" {...register('categoryName')} />
        <p>{errors.categoryName?.message}</p>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditCategoriesForm;
