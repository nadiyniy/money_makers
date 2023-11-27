import styled from 'styled-components';

/**
  |============================
  | Title
  |============================
*/

export const Title = styled.h1`
  color: #fafafa;
  width: 335px;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;

  margin-top: 66px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  color: rgba(250, 250, 250, 0.4);
  width: 335px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  margin-bottom: 40px;
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
color: #FAFAFA;
&:focus-within {
        outline: none;
    }

 &::placeholder {
        color: rgba(250, 250, 250, 0.40);
    }
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
`;
export const StyledFormWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;

  margin-left: auto;
  margin-right: auto;
  padding: 15px 30px;
  align-items: center;
  gap: 71px;
  border-radius: 30px;
  border: 1px solid rgba(250, 250, 250, 0.2);
  background: transparent;
  width: 295px;
`;
export const Button = styled.button`
  border: none;
  background-color: transparent;
`;

/**
  |============================
  | Table
  |============================
*/

export const StyledBackground = styled.div`
  width: 335px;
  height: 516px;
  flex-shrink: 0;
  overflow: auto;
  white-space: nowrap;

  border-radius: 30px;
  background: #171719;
  margin-top: 40px;
`;

export const StyledTableHead = styled.thead`
  width: 335px;
  height: 53px;
  flex-shrink: 0;
  border: none;
  color: rgba(250, 250, 250, 0.4);

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background: rgba(0, 0, 0, 0.2);
`;

export const StyledTable = styled.table`
  width: 335px;
  height: 53px;
  flex-shrink: 0;
  border: none;

  color: #fafafa;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border-collapse: collapse;
`;

export const StyledTableBody = styled.td`
  padding: 22px 10px;
`;

export const StyledTableName = styled.th`
  padding: 0 10px;
`;
