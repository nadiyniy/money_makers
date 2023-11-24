import React from 'react';
import { useForm } from 'react-hook-form';
// import { useModal } from './hooks/useModal';
// import CategoriesModal from './CategoriesModal';

const TransactionForm = ({ transactionsType }) => {
  // const { isOpen, openModal, closeModal } = useModal();
  //запит за категоріями?
  const { register, handleSubmit } = useForm();
  const submit = ({ type, date, time, id, sum, comment }) => {
    const formData = {
      type,
      date,
      time,
      category: id,
      sum: parseInt(sum),
      comment,
    };
    console.log(formData);
  };

  return (
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
              {...register('category')}
              placeholder="Different"
              onChange={() => {
                // Логіка для відкриття модального вікна з категоріями
                //  функціонал модального вікна для вибору категорій
              }}
              onFocus={() => {
                //те саме що і на чендж
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Sum:
            <input type="number" {...register('sum')} placeholder="Enter the sum" />
          </label>
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
    //             {/* тут буде модалка, в яку прокинути компонент <CategoriesModal/>
    //         {isOpen ? (
    //     <Modal closeModal={closeModal}>
    //       <CategoriesModal closeModal={closeModal} category={category} />
    //     </Modal>
    //   ) : null}*/
    //             }
  );
};

export default TransactionForm;
