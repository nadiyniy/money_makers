import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header>
        <div>
          <img src="" alt="Logo" />
          <span>ExpenseTracker</span>
        </div>
        <ul>
          <li>
            <NavLink to="#">All Expense</NavLink>
          </li>
          <li>
            <NavLink to="#">All Income</NavLink>
          </li>
        </ul>
        <div>
          <img src="#" alt="User icon" />
          <p>Alex Rybachok</p>
          <button>X</button>
        </div>
      </header>
      <div>
        <Link to="#">Profile settings</Link>
        <Link to="#">Log out</Link>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
