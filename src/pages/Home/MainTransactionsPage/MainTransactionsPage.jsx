import TransactionsTotalAmount from '../../../shared/TransactionsTotalAmount/TransactionsTotalAmount';
import TransactionsChart from '../TransactionsChart/TransactionsChart';
import TransactionForm from '../../../shared/TransactionForm/TransactionForm';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { StyledCommonWrapper } from 'styles/Common.styled';
import { useEffect, useState } from 'react';
import { MainPageText, MainPageTitle, MainPageWrapper } from './MainTransactionsPage.styled';

const MainTransactionsPage = () => {
  const { transactionsType } = useParams();
  const [render, setRender] = useState(null);
  const [nextRender, setNextRender] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (render !== nextRender) navigate(`/${(location.pathname = `transactions/${render}`)}`);
    setNextRender(render);
    return;
  }, [render, location, navigate, nextRender]);
  return (
    <section>
      <StyledCommonWrapper>
        <MainPageWrapper>
          <MainPageTitle>{transactionsType === 'incomes' ? 'Income' : 'Expense'} Log</MainPageTitle>
          <MainPageText>
            Capture and organize every penny spent with ease! A clear view of your financial habits at your fingertips.
          </MainPageText>
          <TransactionsTotalAmount />
          <TransactionsChart transactionsType={transactionsType} />
          <TransactionForm transactionsType={transactionsType} setRender={setRender} />
        </MainPageWrapper>
      </StyledCommonWrapper>
    </section>
  );
};

export default MainTransactionsPage;
