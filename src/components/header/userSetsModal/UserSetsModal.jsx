import React from 'react';

const UserSetsModal = () => {
  return (
    <div>
      <h2>Profile settings</h2>
      <div>
        <img src="#" alt="User icon" />
        <button>Upload new photo</button>
        <button>Remove</button>
      </div>
      <form>
        <select>
          <option>UAH</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <input placeholder="Alex Rybachok"></input>
        <button>Save</button>
      </form>
    </div>
  );
};

export default UserSetsModal;
