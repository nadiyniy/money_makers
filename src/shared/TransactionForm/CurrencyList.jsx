import { currenciesList } from 'components/header/userSetsModal/UserSetsModal';
import { ArrowDownCurrency } from 'components/svgs';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentUser } from 'redux/user/selectors';
import { Currency } from './TransactionForm.styles';
import { updateInfoUserThunk } from 'redux/user/operations';

const CurrencyList = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [currencyForNow, setCurrencyForNow] = useState(
    currenciesList.find(item => item.value === currentUser.currency)
  );
  console.log(currencyForNow.value);

  const handleCurrencyClick = item => {
    setCurrencyForNow(item);
    dispatch(updateInfoUserThunk({ name: currentUser.name, currency: item.value }));
    setIsDropdownOpened(false);
  };

  return (
    <Currency className={isDropdownOpened ? 'dropdown-open' : ''}>
      <div
        className="currencies-active"
        onClick={() => {
          setIsDropdownOpened(!isDropdownOpened);
        }}
      >
        <div>{currencyForNow.name}</div>
        <ArrowDownCurrency width={12} height={12} className="arrow-icon" />
      </div>
      {isDropdownOpened && (
        <ul className="currencies-list">
          {currenciesList.map(item => (
            <li key={item.value} onClick={() => handleCurrencyClick(item)}>
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      )}
    </Currency>
  );
};

export default CurrencyList;
