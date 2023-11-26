import React, { useRef, useState } from 'react';
import { StyledAvatar, StyledForm, StyledModal, StyledModalCloseBtn } from './UserSetsModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAvatarThunk, updateAvatarThunk } from 'redux/user/operations';
import { selectCurrentUser } from 'redux/user/selectors';
import { useForm } from 'react-hook-form';
import UserAvatar from '../userAvatar/UserAvatar';

const UserSetsModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fileInputRef = useRef(null);

  const handleRemoveClick = () => {
    const match = currentUser.avatarUrl.match(/\/([a-f0-9]+)\.webp$/);
    const avatarId = match ? match[1] : null;
    if (avatarId) {
      dispatch(deleteAvatarThunk(avatarId));
    }
  };

  const handleFileChange = () => {
    const currentInputRef = fileInputRef?.current;
    if (currentInputRef) {
      const file = currentInputRef.files[0];
      console.log(file);
      dispatch(updateAvatarThunk(file));
    }
  };
  const handleOnChangeName = e => {};

  return (
    <StyledModal>
      <StyledModalCloseBtn onClick={closeModal}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M6 6L18 18" stroke="#FAFAFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </StyledModalCloseBtn>
      <h2>Profile settings</h2>
      <StyledAvatar>
        <UserAvatar user={currentUser} />
        <div>
          <div>
            <label htmlFor="uploadPhoto">Upload new photo</label>
            <input id="uploadPhoto" type="file" ref={fileInputRef} onChange={handleFileChange} />
          </div>
          <button onClick={handleRemoveClick}>Remove</button>
        </div>
      </StyledAvatar>
      <StyledForm>
        <div>
          <select>
            <option>UAH</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
          <input onChange={() => handleOnChangeName()} placeholder={currentUser.name}></input>
        </div>
        <button>Save</button>
      </StyledForm>
    </StyledModal>
  );
};

export default UserSetsModal;
