import React, { useState } from 'react';
import CategoriesForm from './CategoriesForm';

//приклад оформлення без бекенду
const CategoriesModalList = ({ closeModal, transactionType }) => {
  const [categories] = useState(['movies', 'cars', 'work']);

  // const handleChoose = () => {
  //   closeModal();
  // };
  return (
    <div>
      <button onClick={closeModal}>Close</button>
      <h2>{transactionType} Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            {category.name}
            <button type="button" onClick={() => {}}>
              Choose
            </button>
            <button type="button">Edit</button>
            <button type="button">Delete</button>
          </li>
        ))}
      </ul>
      <CategoriesForm />
      {/* умова типу Ecspenses ? (first form) : (second form) */}
    </div>
  );
};

export default CategoriesModalList;
