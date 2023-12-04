import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { selectCategories, selectIsLoading } from 'redux/category/selectors';
import { useParams } from 'react-router-dom';
import { deleteCategoryThunk, fetchCategoriesThunk } from 'redux/category/operations';

import NewCategoriesForm from '../NewCategoriesForm/NewCategoriesForm';
import EditCategoriesForm from '../EditCategoriesForm/EditCategoriesForm';

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
  SpinnerWrapper,
} from './CategoriesModalList.styled';
import { Close, Pencil, Delete, Check1 } from 'components/svgs';

import LoaderSpinner from 'components/LoaderSpinner/LoaderSpinner';

const CategoriesModalList = ({ closeModal, categoryName, setchooseCategory, setTakeCategoryId }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectIsLoading);

  const { transactionsType } = useParams();

  useEffect(() => {
    dispatch(fetchCategoriesThunk());
  }, [dispatch]);

  const handleChooseCategory = category => {
    setTakeCategoryId(category._id);
    setchooseCategory(category.categoryName);
    closeModal();
  };

  const handleEditCategory = category => {
    setSelectedCategory(category);
    setIsEditing(true);
  };
  const handleDeleteCategory = id => {
    dispatch(deleteCategoryThunk({ id, type: transactionsType }));
  };

  return (
    <ModalListWrapper>
      <ModalListCloseButton onClick={closeModal}>
        <Close width={20} height={20} />
      </ModalListCloseButton>
      <ModalListTitle> {location.pathname === '/transactions/incomes' ? 'Incomes' : 'Expenses'}</ModalListTitle>
      <ModalListSecondTitle>All Category</ModalListSecondTitle>
      <ModalWrapper>
        {isLoading ? (
          <SpinnerWrapper>
            <LoaderSpinner />
          </SpinnerWrapper>
        ) : (
          <ModalScrollbar>
            {categories
              ? categories[categoryName]?.map(category => (
                  <ModalItem key={category._id}>
                    <ModalCategoryText>{category.categoryName}</ModalCategoryText>
                    <ModalButtonWrapper>
                      <ModalListButton type="button" onClick={() => handleChooseCategory(category)}>
                        <Check1 width={16} height={16} />
                      </ModalListButton>
                      <ModalListButton type="button" onClick={() => handleEditCategory(category)}>
                        <Pencil width={16} height={16} />
                      </ModalListButton>
                      <ModalListButton type="button" onClick={() => handleDeleteCategory(category._id)}>
                        <Delete width={16} height={16} />
                      </ModalListButton>
                    </ModalButtonWrapper>
                  </ModalItem>
                ))
              : null}
          </ModalScrollbar>
        )}
      </ModalWrapper>
      {isEditing ? (
        <>
          <EditCategoriesForm category={selectedCategory} setIsEditing={setIsEditing} />
        </>
      ) : (
        <NewCategoriesForm />
      )}
    </ModalListWrapper>
  );
};

export default CategoriesModalList;
