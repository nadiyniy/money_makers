import React, { useRef, useState } from 'react';
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
import { currentInfoUserThunk, deleteAvatarThunk, updateAvatarThunk, updateInfoUserThunk } from 'redux/user/operations';
import { selectCurrentUser } from 'redux/user/selectors';

import UserAvatar from '../userAvatar/UserAvatar';
import { CloseIcon, UserAvatarIcon, ArrowUpCurrency } from 'components/svgs';

const currenciesList = [
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
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const [activeCurrency, setActiveCurrency] = useState(
    currenciesList.filter(item => item.value === currentUser.currency)[0]
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
      console.log(res);
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
          <UserAvatar user={currentUser} />
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
          <StyledCurrencies>
            <div
              className="currencies-active"
              onClick={() => {
                setIsDropdownOpened(!isDropdownOpened);
              }}
            >
              <div>
                {activeCurrency.symbol} {activeCurrency.name}
              </div>

              <ArrowUpCurrency width={20} height={20} />
            </div>
            {isDropdownOpened && (
              <ul className="currencies-list">
                {currenciesList.map(item => (
                  <li key={item.value} onClick={() => onCurrencyClick(item)}>
                    <span>{item.symbol}</span>
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
