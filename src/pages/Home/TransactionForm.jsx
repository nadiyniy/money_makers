import React, { useState } from 'react';
// import { useModal } from './hooks/useModal';
// import CategoriesModal from './CategoriesModal';

const TransactionForm = ({ transactionsType }) => {
  //   const { isOpen, openModal, closeModal } = useModal();
  const [transaction] = useState(transactionsType);

  const [date] = useState(new Date().toISOString().slice(0, 10)); //Поточна дата у форматі "YYYY-MM-DD"
  const [time] = useState(new Date().toTimeString().slice(0, 5)); // Поточний час у форматі "HH:MM"
  const [category] = useState('');
  const [sum] = useState('');
  const [comment] = useState('');

  const handleTypeChange = e => {
    //логіка вибору типу транзакції
  };

  const handleDateChange = e => {
    // реагування на зміни у полі вибору дати
  };

  const handleTimeChange = e => {
    //зміни у полі вибору часу
  };

  //   const handleCategoryChange = selectedCategory => {

  //обробляю обрану категорію
  //   };

  const handleSumChange = e => {
    // реагую на зміни у полі вводу суми
  };

  const handleCommentChange = e => {
    // реагую на зміни у полі вводу коментаря
  };

  const handleSubmit = e => {
    e.preventDefault();
    //  логіка відправки форми
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Expense
            <input type="radio" value="expense" checked={transaction === 'expense'} onChange={handleTypeChange} />
          </label>
          <label>
            Income
            <input type="radio" value="income" checked={transaction === 'income'} onChange={handleTypeChange} />
          </label>
        </div>
        <div>
          <label>
            Date:
            <input type="date" value={date} onChange={handleDateChange} placeholder="mm/dd/yyyy" />
          </label>
          <label>
            Time:
            <input type="time" value={time} onChange={handleTimeChange} placeholder="00:00:00" />
          </label>
        </div>
        <div>
          <label>
            Category:
            <input
              type="text"
              value={category}
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
            <input type="number" value={sum} onChange={handleSumChange} placeholder="Enter the sum" />
          </label>
        </div>
        <div>
          <label>
            Comment:
            <textarea value={comment} onChange={handleCommentChange} rows={4} cols={50} placeholder="Enter the text" />
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
