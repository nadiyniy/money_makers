import React, { useState } from 'react';
import NewCategoriesForm from './NewCategoriesForm';
import EditCategoriesForm from './EditCategoriesForm';
import { useDispatch } from 'react-redux';
import { deleteCategoryThunk } from 'redux/category/operations';

const CategoriesModalList = ({ closeModal, categories, setchooseCategory, setTakeCategoryId }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleChooseCategory = category => {
    setTakeCategoryId(category.id);
    setchooseCategory(category.categoryName);

    closeModal();
  };

  const handleEditCategory = category => {
    setSelectedCategory(category);
    setIsEditing(true);
  };
  return (
    <div>
      <button onClick={closeModal}>Close</button>
      <h2>{categories.type}</h2>
      <ul>
        {categories?.map(category => (
          <li key={category.id}>
            {category.categoryName}
            <button type="button" onClick={() => handleChooseCategory(category)}>
              Choose
            </button>
            <button type="button" onClick={() => handleEditCategory(category)}>
              Edit
            </button>
            <button type="button" onClick={() => dispatch(deleteCategoryThunk(category.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {isEditing ? (
        <EditCategoriesForm category={selectedCategory} setIsEditing={setIsEditing} />
      ) : (
        <NewCategoriesForm category={selectedCategory} />
      )}
    </div>
  );
};

export default CategoriesModalList;
