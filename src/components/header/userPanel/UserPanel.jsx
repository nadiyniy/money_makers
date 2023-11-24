import React from 'react';
import { Link } from 'react-router-dom';

const UserPanel = () => {
  return (
    <div>
      <Link to="#">Profile settings</Link>
      <Link to="#">Log out</Link>
    </div>
  );
};

export default UserPanel;
