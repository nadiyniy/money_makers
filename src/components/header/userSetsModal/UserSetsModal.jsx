import React, { useEffect, useState } from 'react';
import { StyledAvatar, StyledForm, StyledModal, StyledModalCloseBtn } from './UserSetsModal.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAvatarThunk, updateAvatarThunk } from 'redux/user/operations';
import { selectCurrentUser } from 'redux/user/selectors';

const UserSetsModal = ({ closeModal }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const handleRemoveClick = () => {
    const avatarUrl = currentUser.avatarUrl;
    const parts = avatarUrl.split('/');
    const avatarId = parts[parts.length - 1].slice(0, -5);
    console.log(avatarId);
    dispatch(deleteAvatarThunk(avatarId));
    closeModal();
  };

  const handleFileChange = event => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  useEffect(() => {}, []);

  const handleUploadClick = () => {
    if (selectedFile) {
      dispatch(updateAvatarThunk(selectedFile));
      closeModal();
    }
  };

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
        <img src={currentUser.avatarUrl} alt="User icon" />
        <div>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUploadClick}>Upload new photo</button>
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
          <input placeholder="Alex Rybachok"></input>
        </div>
        <button>Save</button>
      </StyledForm>
    </StyledModal>
  );
};

export default UserSetsModal;
