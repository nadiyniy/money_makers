import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateCategoryThunk } from 'redux/category/operations';
import { validationCategoryFormSchema } from 'shared/validationSchema/validationSchema';
import { selectError } from 'redux/auth/selectors';
import {
  EditCategoriesButton,
  EditCategoriesInput,
  EditCategoriesWrapper,
  EditLabel,
  ErrorMessage,
} from './EditCategoriesForm.styled';

const EditCategoriesForm = ({ setIsEditing, category }) => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      categoryName: category?.categoryName || '',
    },
    resolver: yupResolver(validationCategoryFormSchema),
  });
  const submit = data => {
    if (category) {
      const updatedCategory = {
        _id: category._id,
        categoryName: { ...data },
      };
      dispatch(updateCategoryThunk(updatedCategory));
    }

    setIsEditing(false);
    if (error === null) {
      reset();
    } else {
      toast.error('Update failed, please try again');
    }
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <EditCategoriesWrapper>
        <EditLabel htmlFor="edit">
          Edit Category
          <EditCategoriesInput id="edit" type="text" placeholder="Enter the text" {...register('categoryName')} />
          <EditCategoriesButton type="submit">Edit</EditCategoriesButton>
        </EditLabel>
        <ErrorMessage>{errors.categoryName?.message}</ErrorMessage>
      </EditCategoriesWrapper>
    </form>
  );
};

export default EditCategoriesForm;
