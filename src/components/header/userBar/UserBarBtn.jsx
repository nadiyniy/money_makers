import React from 'react';
import UserPanel from '../userPanel/UserPanel';

const UserBarBtn = () => {
  return (
    <div>
      <button>
        <img src="#" alt="User icon" />
        <p>Alex Rybachok</p>
        <span>X</span>
      </button>
      <UserPanel />
    </div>
  );
};

export default UserBarBtn;
