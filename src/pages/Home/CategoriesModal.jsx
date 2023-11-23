import React, { useState } from 'react';


  //приклад оформлення без бекенду
      const CategoriesModal = ({ closeModal, transactionType, categories, addCategory }) => {
    const [newCategory, setNewCategory] = useState('');

    const handleAddCategory = (e) => {
      e.preventDefault();
      addCategory(newCategory);
      setNewCategory('');
        };
        
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
      {/* умова типу Ecspenses ? (first form) : (second form) */}
      <form onSubmit={handleAddCategory}>
        <input
          type="text"
          placeholder="Enter category name"
          value={newCategory}
          onChange={e => setNewCategory(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      {/* <form onSubmit={handleEditCategory}>
        <input
          type="text"
          placeholder="Enter category name"
          value={oldCategory}
          onChange={e => setNewCategory(e.target.value)}
        />
        <button type="submit">Add</button>
      </form> */}
    </div>
  );
};

export default CategoriesModal;
