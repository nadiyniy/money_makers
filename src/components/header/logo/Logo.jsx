import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img src="" alt="Logo" />
        <span>ExpenseTracker</span>
      </Link>
    </div>
  );
};

export default Logo;
