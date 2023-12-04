import ReactDatePicker from 'react-datepicker';
import styled from 'styled-components';

/**
  |============================
  | Title
  |============================
*/

export const Title = styled.h1`
  color: var(--white-color);
  width: 335px;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  margin-top: 66px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 38px;
    letter-spacing: -0.76px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 59px;
  }
`;
export const StyledLoader = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  color: var(--gray-text-40);
  width: 335px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 570px;

    font-size: 16px;
    letter-spacing: -0.32px;
  }
  @media screen and (min-width: 1280px) {
    width: 516px;
  }
`;

/**
  |============================
  | Form
  |============================
*/
export const Label = styled.label`
  position: relative;
  .react-datepicker-wrapper {
    width: 100%;
  }
`;

export const Input = styled.input`
width: 100%;
padding: 15px 30px;
padding-right: 50px;
border: none;
background-color: var(--black-color);
border-radius: var(--border-radius-30);
color: var(--white-color);
font-size: 16px;
letter-spacing: -0.02em;


 &::placeholder {
        color: var(--gray-text-40);
    }
  }

  @media screen and (min-width: 768px) {
    
  }
  @media screen and (min-width: 1280px) {

  }
`;
export const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  border: none;
  background-color: transparent;
`;

export const StyledFormWrapper = styled.div`
  width: 100%;
  position: relative;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;
export const StyledDatePicker = styled(ReactDatePicker)`
  width: 100%;
  padding: 15px 30px;
  padding-right: 50px;
  border: none;
  background-color: var(--black-color);
  border-radius: var(--border-radius-30);
  color: var(--white-color);
  font-size: 16px;
  letter-spacing: -0.02em;

  &:hover {
    /* border-color: #0ef387; */
  }
  &:focus {
    /* border-color: #0ef387; */
  }
`;
export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  stroke: #0ef387;
  fill: none;
  cursor: pointer;
`;

export const Container = styled.div`
  border-radius: 30px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background: #171719;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const RightSideContainer = styled.div`
  margin-top: 59px;
  @media screen and (min-width: 1280px) {
    margin-left: auto;
  }
`;
export const LeftSideContainer = styled.div`
  @media screen and (min-width: 1280px) {
    margin-right: auto;
  }
`;

export const SideContainer = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

/**
  |============================
  | Table
  |============================
*/

export const StyledBackground = styled.div`
  min-width: 335px;
  min-height: 516px;
  flex-shrink: 0;
  overflow: auto;
  white-space: nowrap;

  border-radius: 30px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  background: #171719;

  max-height: 310px;
  @media screen and (min-width: 768px) {
    max-height: 390px;
  }
  @media screen and (min-width: 1280px) {
    max-height: 290px;
  }
`;

export const StyledTableHead = styled.thead`
  background: var(--gray-text-20);

  @media screen and (min-width: 768px) {
  }
`;
export const Tbody = styled.tbody``;

export const StyledTable = styled.table`
  border-collapse: collapse;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const StyledTableBody = styled.td`
  width: auto;
  padding-top: 25px;
  padding-left: 20px;
  padding-bottom: 2px;
  overflow: hidden;
  color: var(--white-color);
  text-overflow: ellipsis;
  font-size: 14px;
  text-align: left;
  &:last-child {
    padding-right: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 40px;
  }
`;

export const StyledTableName = styled.th`
  padding-top: 20px;
  padding-bottom: 20px;
  color: var(--gray-text-40);
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  padding-left: 20px;
  text-align: left;
  &:last-child {
    padding-right: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    padding-left: 40px;
  }
`;

export const EditButton = styled.button`
  display: flex;
  padding: 3px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-color: transparent;

  border-radius: 40px;
  background: var(--primary-color);
  span {
    display: none;
  }
  @media screen and (min-width: 768px) {
    padding: 14px;
  }
  @media screen and (min-width: 1280px) {
    span {
      display: flex;
    }
    padding: 14px 32px;
  }
  &:hover {
    background-color: var(--primary-hover-color);
  }
`;

export const DeleteButton = styled.button`
  max-height: 22px;
  display: flex;
  padding: 3px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-color: transparent;
  color: white;

  border-radius: 40px;
  background: var(--black-color);
  span {
    display: none;
  }
  @media screen and (min-width: 768px) {
    padding: 14px;
  }
  @media screen and (min-width: 1280px) {
    span {
      display: flex;
    }
    padding: 14px 32px;
    max-height: 48px;
  }
  &:hover {
    outline: 1px solid var(--primary-color);
  }
`;

export const ActionButtonWrapper = styled.div`
  display: flex;
  /* justify-content: center; */
  gap: 8px;
`;
