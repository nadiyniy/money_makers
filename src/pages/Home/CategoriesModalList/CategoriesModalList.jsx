import React, { useState } from 'react';
import NewCategoriesForm from '../NewCategoriesForm/NewCategoriesForm';
import EditCategoriesForm from '../EditCategoriesForm/EditCategoriesForm';
import { useDispatch } from 'react-redux';
import { deleteCategoryThunk } from 'redux/category/operations';
import { ModalListSecondTitle, ModalListTitle, ModalListWrapper } from './CategoriesModalList.styled';
import { Close } from 'components/svgs';
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
    <ModalListWrapper>
      <button onClick={closeModal}>
        <Close width={20} height={20} />
      </button>
      <ModalListTitle>{categories[0].type[0].toUpperCase() + categories[0].type.slice(1)}</ModalListTitle>
      <ModalListSecondTitle>All Category</ModalListSecondTitle>
      <div>
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
      </div>
      {isEditing ? (
        <EditCategoriesForm category={selectedCategory} setIsEditing={setIsEditing} />
      ) : (
        <NewCategoriesForm />
      )}
    </ModalListWrapper>
  );
};

export default CategoriesModalList;
