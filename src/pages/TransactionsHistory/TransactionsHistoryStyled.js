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

export const Input = styled.input`
border: none;
background-color: transparent;
margin-right: 61px;
margin-bottom: auto;
margin-top: auto; 
color: var(--white-color);
&:focus-within {
        outline: none;
    }

 &::placeholder {
        color: var(--gray-text-40);
    }
  }

  @media screen and (min-width: 768px) {
    
  }
  @media screen and (min-width: 1280px) {

  }
`;

export const StyledForm = styled.form`
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;

  padding: 15px 30px;
  align-items: center;
  gap: 71px;
  border-radius: 30px;
  background: #0c0d0d;
  width: 295px;

    @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
margin-left: 25px;
  }
`;
export const StyledFormWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  position: relative;

  margin-left: auto;
  margin-right: auto;
  align-items: center;
  width: 295px;

    @media screen and (min-width: 768px) {}
  @media screen and (min-width: 1280px) {
    margin-right: 600px;
    margin-left: 0;
  }
`;



export const IconWrapper = styled.div`
  position: absolute;
  top: 15px;
  right: 52px;
  stroke: #0ef387;
  fill: none;
`;
export const Button = styled.button`
  border: none;
  background-color: transparent;
`;

export const Container = styled.div`
margin-bottom: 20px;
    @media screen and (min-width: 768px) {
    display: flex;
  }
`

export const RightSideContainer = styled.div`
@media screen and (min-width: 1280px) {
margin-left: auto;
  }
`
export const LeftSideContainer = styled.div`
@media screen and (min-width: 1280px) {
  margin-right: auto;
  
}
`

export const SideContainer = styled.div`
@media screen and (min-width: 1280px) {
display: flex;
}

`

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
  background: #171719;
  margin-top: 40px;

   @media screen and (min-width: 768px) {
    min-width: 704px;
min-height: 544px;
  }

@media screen and (min-width: 1280px) {
  min-width: 1240px;
min-height: 439px;
  }
`;

export const StyledTableHead = styled.thead`
  width: 335px;
  height: 53px;
  flex-shrink: 0;
  border: none;
  color: var(--gray-text-40);

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: var(--gray-text-20);

     @media screen and (min-width: 768px) {
    width: 704px;
height: 59px;
  }
`;

export const StyledTable = styled.table`
  min-width: 335px;
  min-height: 53px;
  flex-shrink: 0;
  border: none;
  

  color: var(--white-color);

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border-collapse: collapse;

   @media screen and (min-width: 768px) {
    min-width: 704px;
   }
   @media screen and (min-width: 1280px) {
  min-width: 1240px;
  }
`;

export const StyledTableBody = styled.td`
  padding: 22px 30px;
`;

export const StyledTableName = styled.th`
  padding: 0 10px;
`;

export const EditButton = styled.button`
display: flex;
padding: 14px;
justify-content: center;
align-items: center;
gap: 10px;
border-color: transparent;

border-radius: 40px;
background: var(--primary-color);
`
export const DeleteButton = styled.button`
display: flex;
padding: 14px;
justify-content: center;
align-items: center;
gap: 10px;
border-color: transparent;

border-radius: 40px;
background: var(--black-color);
`

export const ActionButtonWrapper = styled.div`
display: flex;
justify-content: center;
gap: 8px;
`

export const StyledDatePicker = styled(ReactDatePicker)`
  padding: 15px 30px;
  width: auto;

  border-radius: 30px;
  border: 1px solid rgba(250, 250, 250, 0.2);

  background-color: transparent;
  color: rgba(250, 250, 250, 0.4);

  outline: none;
  box-sizing: border-box;

  transition: border-color 250ms ease-in-out;

  &:hover {
    border-color: #0ef387;
  }
  &:focus {
    border-color: #0ef387;
  }
`;

