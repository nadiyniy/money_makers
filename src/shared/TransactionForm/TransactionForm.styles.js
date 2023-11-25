import styled from 'styled-components';

export const TransactionFormStyle = styled.form`
  margin: 0 auto;
  padding: 28px 20px;
  max-width: 335px;
  background-color: var(--gray-dark-color);
  border-radius: 30px;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const RadioLabel = styled.label`
  position: relative;
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  color: var(--white-color);
`;
export const RadioLabel1 = styled(RadioLabel)``;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  cursor: pointer;
`;
export const RadioCustom = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: none;
  border: 2px solid var(--gray-text-20);
  border-radius: 10px;
`;

export const RadioCustomChecked = styled(RadioCustom)`
  background-color: #3498db; /* Колір, коли радіокнопка вибрана */
  border-color: var(--primary-color); /* Колір зовнішнього бордера для обраної радіокнопки */

  ::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    border-radius: 50%;
    border: 2px solid (--gray-dark-color); /* Внутрішній бордер для обраної радіокнопки */
  }

  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px; /* Розмір серединки радіокнопки */
    height: 8px; /* Розмір серединки радіокнопки */
    border-radius: 50%;
    background-color: var(--primary-color); /* Колір серединки радіокнопки */
  }
`;

// export const DateInput = styled.input`
//   color: var(--gray-text-40);
//   background-color: var(--gray-dark-color);

//   &::-webkit-calendar-picker-indicator {
//     filter: invert(1);
//   }

//   &::-webkit-calendar-picker-popup {
//     color: var(--gray-dark-color);
//     background-color: var(--primary-color);
//   }
// `;
