import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledAvatar,
  StyledAvatarWrapper,
  StyledCurrencies,
  StyledForm,
  StyledModal,
  StyledModalCloseBtn,
  StyledSetsBtn,
} from './UserSetsModal.styled';

import { useDispatch, useSelector } from 'react-redux';
import { deleteAvatarThunk, updateAvatarThunk, updateInfoUserThunk } from 'redux/user/operations';
import { selectCurrentUser, selectIsLoading } from 'redux/user/selectors';

import UserAvatar from '../userAvatar/UserAvatar';
import { CloseIcon, UserAvatarIcon, ArrowDownCurrency } from 'components/svgs';
import LoaderSpinner from 'components/LoaderSpinner/LoaderSpinner';

export const currenciesList = [
  {
    value: 'usd',
    name: 'USD',
    symbol: '$',
  },
  {
    value: 'uah',
    name: 'UAH',
    symbol: '₴',
  },
  {
    value: 'eur',
    name: 'EUR',
    symbol: '€',
  },
];

const UserSetsModal = ({ closeModal }) => {
  const isLoadingAvatar = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const [activeCurrency, setActiveCurrency] = useState(
    currenciesList.find(item => item.value === currentUser.currency)
  );
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [inputName, setInputName] = useState(currentUser.name);

  const fileInputRef = useRef(null);

  const handleRemoveClick = () => {
    if (currentUser._id) {
      dispatch(deleteAvatarThunk(currentUser._id));
    }
  };

  const handleFileChange = () => {
    const currentInputRef = fileInputRef?.current;
    if (currentInputRef) {
      const file = currentInputRef.files[0];
      dispatch(updateAvatarThunk(file));
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const data = { name: inputName, currency: activeCurrency.value };
    dispatch(updateInfoUserThunk(data)).then(res => {
      if (res.meta.requestStatus === 'fulfilled') {
        closeModal();
      }
    });
  };

  const onCurrencyClick = item => {
    setActiveCurrency(item);
    setIsDropdownOpened(false);
  };

  return (
    <StyledModal>
      <StyledModalCloseBtn onClick={closeModal}>
        <CloseIcon />
      </StyledModalCloseBtn>
      <h2>Profile settings</h2>
      <StyledAvatar>
        {currentUser.avatarUrl ? (
          isLoadingAvatar ? (
            <div className="avatar-spinner">
              <LoaderSpinner />
            </div>
          ) : (
            <UserAvatar user={currentUser} />
          )
        ) : isLoadingAvatar ? (
          <div className="avatar-spinner">
            <LoaderSpinner />
          </div>
        ) : (
          <StyledAvatarWrapper>
            <UserAvatarIcon width={38} height={38} />
          </StyledAvatarWrapper>
        )}
        <StyledSetsBtn>
          <label htmlFor="uploadPhoto">Upload new photo</label>
          <input id="uploadPhoto" type="file" ref={fileInputRef} onChange={handleFileChange} />
          <button onClick={handleRemoveClick}>Remove</button>
        </StyledSetsBtn>
      </StyledAvatar>
      <StyledForm
        onSubmit={e => {
          handleSubmit(e);
        }}
      >
        <div className="form-wrapper">
          <StyledCurrencies className={isDropdownOpened ? 'dropdown-open' : ''}>
            <div
              className="currencies-active"
              onClick={() => {
                setIsDropdownOpened(!isDropdownOpened);
              }}
            >
              <div>
                {activeCurrency.symbol} {activeCurrency.name}
              </div>

              <ArrowDownCurrency width={12} height={12} className="arrow-icon" />
            </div>
            {isDropdownOpened && (
              <ul className="currencies-list">
                {currenciesList.map(item => (
                  <li key={item.value} onClick={() => onCurrencyClick(item)}>
                    <span>{item.symbol} </span>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </StyledCurrencies>

          <input
            placeholder={currentUser.name}
            onChange={e => {
              setInputName(e.target.value);
            }}
          ></input>
        </div>
        <button>Save</button>
      </StyledForm>
    </StyledModal>
  );
};

export default UserSetsModal;

UserSetsModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
