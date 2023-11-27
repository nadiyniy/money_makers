import React, { useState } from 'react';
import NewCategoriesForm from '../NewCategoriesForm/NewCategoriesForm';
import EditCategoriesForm from '../EditCategoriesForm/EditCategoriesForm';
import { useDispatch } from 'react-redux';
import { deleteCategoryThunk } from 'redux/category/operations';
import { Pencil, Delete, Check1 } from '../../../components/svgs/index';

import {
  ModalButtonWrapper,
  ModalCategoryText,
  ModalItem,
  ModalListButton,
  ModalListCloseButton,
  ModalListSecondTitle,
  ModalListTitle,
  ModalListWrapper,
  ModalScrollbar,
  ModalWrapper,
} from './CategoriesModalList.styled';
import { Close } from 'components/svgs';
import { useLocation } from 'react-router';
const CategoriesModalList = ({ closeModal, categories, setchooseCategory, setTakeCategoryId }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location.pathname);

  const handleChooseCategory = category => {
    setTakeCategoryId(category._id);
    setchooseCategory(category.categoryName);

    closeModal();
  };

  const handleEditCategory = category => {
    setSelectedCategory(category);
    setIsEditing(true);
  };

  const handleItemClick = index => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <ModalListWrapper>
      <ModalListCloseButton onClick={closeModal}>
        <Close width={20} height={20} />
      </ModalListCloseButton>
      <ModalListTitle> {location.pathname === '/transactions/incomes' ? 'Incomes' : 'Expenses'}</ModalListTitle>
      <ModalListSecondTitle>All Category</ModalListSecondTitle>
      <ModalWrapper>
        <ModalScrollbar>
          {categories
            ? categories?.map((category, index) => (
                <ModalItem key={category._id} onClick={() => handleItemClick(index)} isActive={index === activeIndex}>
                  <ModalCategoryText>{category.categoryName}</ModalCategoryText>
                  <ModalButtonWrapper isActive={index === activeIndex}>
                    <ModalListButton type="button" onClick={() => handleChooseCategory(category)}>
                      <Check1 width={16} height={16} />
                    </ModalListButton>
                    <ModalListButton type="button" onClick={() => handleEditCategory(category)}>
                      <Pencil width={16} height={16} />
                    </ModalListButton>
                    <ModalListButton type="button" onClick={() => dispatch(deleteCategoryThunk(category._id))}>
                      <Delete width={16} height={16} />
                    </ModalListButton>
                  </ModalButtonWrapper>
                </ModalItem>
              ))
            : null}
        </ModalScrollbar>
      </ModalWrapper>
      {isEditing ? (
        <EditCategoriesForm category={selectedCategory} setIsEditing={setIsEditing} />
      ) : (
        <NewCategoriesForm />
      )}
    </ModalListWrapper>
  );
};

export default CategoriesModalList;
