import TransactionsTotalAmount from '../../../shared/TransactionsTotalAmount/TransactionsTotalAmount';
import TransactionsChart from '../TransactionsChart/TransactionsChart';
import TransactionForm from '../../../shared/TransactionForm/TransactionForm';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { StyledCommonWrapper } from 'styles/Common.styled';
import { useEffect, useState } from 'react';

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
        <div>
          <h1>{transactionsType === 'incomes' ? 'Income' : 'Expense'} Log</h1>
          <p>
            Capture and organize every penny spent with ease! A clear view of your financial habits at your fingertips.
          </p>
          <TransactionsTotalAmount />
          <TransactionsChart transactionsType={transactionsType} />
          <TransactionForm transactionsType={transactionsType} setRender={setRender} />
        </div>
      </StyledCommonWrapper>
    </section>
  );
};

export default MainTransactionsPage;
