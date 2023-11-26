import React, { useState } from 'react';
import NewCategoriesForm from '../NewCategoriesForm/NewCategoriesForm';
import EditCategoriesForm from '../EditCategoriesForm/EditCategoriesForm';
import { useDispatch } from 'react-redux';
import { deleteCategoryThunk } from 'redux/category/operations';

const CategoriesModalList = ({ closeModal, categories, setchooseCategory, setTakeCategoryId }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleChooseCategory = category => {
    setTakeCategoryId(category._id);
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
      <h1>{categories[0].type[0].toUpperCase() + categories[0].type.slice(1)}</h1>
      <h2>All Category</h2>
      <ul>
        {categories?.map(category => (
          <li key={category._id}>
            {category.categoryName}
            <button type="button" onClick={() => handleChooseCategory(category)}>
              Choose
            </button>
            <button type="button" onClick={() => handleEditCategory(category)}>
              Edit
            </button>
            <button type="button" onClick={() => dispatch(deleteCategoryThunk(category._id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {isEditing ? (
        <EditCategoriesForm category={selectedCategory} setIsEditing={setIsEditing} />
      ) : (
        <NewCategoriesForm />
      )}
    </div>
  );
};

export default CategoriesModalList;
