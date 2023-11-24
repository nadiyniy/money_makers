import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addedCategoryThunk } from 'redux/category/operations';

const NewCategoriesForm = ({ category }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const submit = data => {
    const type = category.type;
    console.log({ type, ...data });
    dispatch(addedCategoryThunk({ type, ...data }));
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="add">New Category</label>
        <input id="add" type="text" placeholder="Enter the text" {...register('categoryName')} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewCategoriesForm;
