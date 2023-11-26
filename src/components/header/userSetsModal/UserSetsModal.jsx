import React, { useRef } from 'react';
import {
  StyledAvatar,
  StyledAvatarWrapper,
  StyledForm,
  StyledModal,
  StyledModalCloseBtn,
} from './UserSetsModal.styled';

import { useDispatch, useSelector } from 'react-redux';
import { deleteAvatarThunk, updateAvatarThunk } from 'redux/user/operations';
import { selectCurrentUser } from 'redux/user/selectors';
// import { useForm } from 'react-hook-form';

import UserAvatar from '../userAvatar/UserAvatar';
import { CloseIcon, UserAvatarIcon } from 'components/svgs';

const UserSetsModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  // const {
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

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
      dispatch(updateAvatarThunk(file));
    }
  };
  const handleOnChangeName = e => {};

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
