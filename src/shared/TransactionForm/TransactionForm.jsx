import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { parseISO } from 'date-fns';
import { useNavigate, useParams } from 'react-router';
import { selectCurrentUser } from 'redux/user/selectors';
import { currentInfoUserThunk } from 'redux/user/operations';
import { toast } from 'react-toastify';

import CurrencyList from './CurrencyList';
import { useModal } from 'shared/hooks/useModal';
import Modal from 'shared/Modal/Modal';
import CategoriesModalList from 'pages/Home/CategoriesModalList/CategoriesModalList';
import { createUserTransactionThunk, updateUserTransactionThunk } from 'redux/transactions/operations';
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
  TransactionWrapper,
  ErrorMessage,
  TwoLabel,
  DateLabel,
  CalendarIcon,
  ModalCloseButton,
} from './TransactionForm.styles';
import { Calendar1, Clock, Close } from '../../components/svgs/index';

const TransactionForm = ({ editingTransaction, close }) => {
  const [isSubmited, setIsSubmited] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();
  const [chooseCategory, setchooseCategory] = useState('');
  const [takeCategoryId, setTakeCategoryId] = useState('');
  const [checked, setCheked] = useState('incomes');
  const { transactionsType } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (editingTransaction) {
      navigate(`/transactions/history/${transactionsType}`);
    }
  }, [navigate, transactionsType, editingTransaction]);

  const handleTypeChange = e => {
    setCheked(e.target.value);
    navigate(`/transactions/${e.target.value}`);
  };

  useEffect(() => {
    dispatch(currentInfoUserThunk());
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      type: 'incomes',
    },
  });

  const isEditing = !!editingTransaction;

  const submit = data => {
    if (!isEditing) {
      createTransaction(data);
      setchooseCategory('');
      setTakeCategoryId('');
    } else {
      updateTransaction(data);
      close();
    }
  };

  const createTransaction = async data => {
    const { comment, date, sum, time, type } = data;
    setIsSubmited(true);
    try {
      const startDate = new Date(date);
      const nextDay = new Date(startDate);
      nextDay.setDate(startDate.getDate() + 1);

      const formData = {
        category: takeCategoryId,
        comment,
        date: nextDay.toISOString().slice(0, 10),
        sum: parseInt(sum),
        time: time.toISOString().slice(11, 16),
        type,
      };
      await dispatch(createUserTransactionThunk(formData)).unwrap();
      reset();
    } catch (error) {
      toast.error('Sorry, registration failed, please added all field to transaction form');
    } finally {
      setIsSubmited(false);
    }
  };

  useEffect(() => {
    if (editingTransaction) {
      if (takeCategoryId) {
        editingTransaction.category = {
          _id: takeCategoryId,
          categoryName: chooseCategory,
        };
      }
      const { category, comment, date, time, sum } = editingTransaction;
      setchooseCategory(category ? category.categoryName : '');

      reset({
        _id: editingTransaction._id,
        date: parseISO(date),
        time: parseISO(`2000-01-01T${time}`),
        sum,
        comment,
        category: category.categoryName,
        type: editingTransaction.type,
      });
    }
  }, [editingTransaction, reset, chooseCategory, takeCategoryId]);

  const updateTransaction = async transaction => {
    setIsSubmited(true);
    try {
      if (transaction) {
        const editDate = new Date(transaction.date);
        const nextDay = new Date(editDate);
        nextDay.setDate(editDate.getDate() + 1);
        transaction.date = nextDay.toISOString().slice(0, 10);
        transaction.time = transaction.time.toISOString().slice(11, 16);
        transaction.category = editingTransaction.category._id;
        transaction.type = editingTransaction.type;
        transaction._id = editingTransaction._id;
      }
      await dispatch(updateUserTransactionThunk(transaction)).unwrap();
    } catch (error) {
      toast.error('Sorry, registration failed, please added all field to transaction form');
    } finally {
      setIsSubmited(false);
    }
  };

  const renderCategoryByType = () => {
    openModal();
  };

  const renderSubmitButton = () => {
    if (isEditing) {
      return <TransactionButton type="submit">Edit</TransactionButton>;
    } else {
      return <TransactionButton type="submit">Add</TransactionButton>;
    }
  };

  return (
    <>
      <TransactionWrapper>
        <TransactionFormStyle onSubmit={handleSubmit(submit)}>
          {isEditing ? (
            <ModalCloseButton onClick={close}>
              <Close width={20} height={20} />
            </ModalCloseButton>
          ) : null}
          <RadioWrapper className={isEditing ? 'isActive' : null}>
            <RadioLabel>
              <RadioInput
                {...register('type')}
                type="radio"
                checked={checked === 'expenses'}
                value="expenses"
                onChange={handleTypeChange}
                disabled={isEditing}
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
                disabled={isEditing}
              />
              Income
              {checked === 'incomes' ? <RadioCustomChecked /> : <RadioCustom />}
            </RadioLabel1>
          </RadioWrapper>
          <DateInputWrapper>
            <DateLabel>
              Date:
              <Controller
                control={control}
                name="date"
                rules={{ required: true }}
                render={({ field }) => (
                  <DateInput
                    placeholderText="mm/dd/yyyy"
                    onChange={date => field.onChange(date)}
                    selected={field.value}
                    aria-invalid={!!errors.date}
                  />
                )}
              />
              {errors.date && <ErrorMessage role="alert">Fild required</ErrorMessage>}
              <CalendarIcon>
                <Calendar1 />
              </CalendarIcon>
            </DateLabel>
            <DateLabel>
              Time:
              <Controller
                control={control}
                name="time"
                rules={{ required: true }}
                render={({ field }) => (
                  <DateInput
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm"
                    placeholderText="00:00:00"
                    onChange={date => field.onChange(date)}
                    selected={field.value}
                    aria-invalid={!!errors.time}
                  />
                )}
              />
              {errors.date && <ErrorMessage role="alert">Fild required</ErrorMessage>}
              <CalendarIcon>
                <Clock />
              </CalendarIcon>
            </DateLabel>
          </DateInputWrapper>
          <ParentInputWrapper>
            <OneLabel>
              Category:
              <CategoryInput
                autoComplete="off"
                type="text"
                value={chooseCategory}
                {...register('category', { required: isSubmited ? 'Field required' : undefined })}
                placeholder="Different"
                onClick={renderCategoryByType}
              />
              <ErrorMessage>{isSubmited && errors.category?.message}</ErrorMessage>
            </OneLabel>
          </ParentInputWrapper>
          <ParentInputWrapper>
            <TwoLabel>
              Sum:
              <SumInput
                autoComplete="off"
                type="text"
                {...register('sum', { required: 'Fild required' })}
                placeholder="Enter the sum"
              />
              {currentUser._id && <CurrencyList />}
              <ErrorMessage>{errors.sum?.message}</ErrorMessage>
            </TwoLabel>
          </ParentInputWrapper>
          <ParentInputWrapper>
            <OneLabel>
              Comment:
              <CommentInput
                autoComplete="off"
                {...register('comment', { required: 'Fild required' })}
                rows={4}
                cols={50}
                placeholder="Enter the text"
              />
              <ErrorMessage>{errors.comment?.message}</ErrorMessage>
            </OneLabel>
          </ParentInputWrapper>
          <TransactionButtonWrapper>{renderSubmitButton()}</TransactionButtonWrapper>
        </TransactionFormStyle>
      </TransactionWrapper>

      {isOpen ? (
        <Modal closeModal={closeModal}>
          <CategoriesModalList
            setchooseCategory={setchooseCategory}
            setTakeCategoryId={setTakeCategoryId}
            closeModal={closeModal}
            categoryName={transactionsType}
          />
        </Modal>
      ) : null}
    </>
  );
};

export default TransactionForm;
