import TransactionsTotalAmount from '../../shared/TransactionsTotalAmount/TransactionsTotalAmount';
import TransactionsChart from './TransactionsChart';
import TransactionForm from '../../shared/TransactionForm/TransactionForm';
import { useParams } from 'react-router-dom';
import { StyledCommonWrapper } from 'styles/Common.styled';

const MainTransactionsPage = () => {
  const { transactionsType } = useParams();

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
          <TransactionForm transactionsType={transactionsType} />
        </div>
      </StyledCommonWrapper>
    </section>
  );
};

export default MainTransactionsPage;
