import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import { updateCategoryThunk } from 'redux/category/operations';
import { validationCategoryFormSchema } from 'shared/validationSchema/validationSchema';

const EditCategoriesForm = ({ setIsEditing, category }) => {
  console.log(category);
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
    const _id = category.id;
    dispatch(updateCategoryThunk({ _id, ...data }));

    console.log({ _id, ...data });
    setIsEditing(false);
    reset();
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
