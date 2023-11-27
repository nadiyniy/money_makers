import TransactionsTotalAmount from '../../../shared/TransactionsTotalAmount/TransactionsTotalAmount';
import TransactionsChart from '../TransactionsChart/TransactionsChart';
import TransactionForm from '../../../shared/TransactionForm/TransactionForm';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { StyledCommonWrapper } from 'styles/Common.styled';
import { useEffect, useState } from 'react';
import { MainPageSection, MainPageText, MainPageTitle, MainPageWrapper } from './MainTransactionsPage.styled';

const MainTransactionsPage = () => {
  const { transactionsType } = useParams();
  const [render, setRender] = useState(null);
  const [nextRender, setNextRender] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });

  useEffect(() => {
    if (render !== nextRender) navigate(`/${(location.pathname = `transactions/${render}`)}`);
    setNextRender(render);
    return;
  }, [render, location, navigate, nextRender]);
  return (
    <MainPageSection>
      <StyledCommonWrapper>
        <MainPageWrapper>
          {isDesktopOrLaptop ? (
            <>
              <div>
                <div>
                  <MainPageTitle>{transactionsType === 'incomes' ? 'Income' : 'Expense'} Log</MainPageTitle>
                  <MainPageText>
                    Capture and organize every penny spent with ease! A clear view of your financial habits at your
                    fingertips.
                  </MainPageText>
                </div>
                <TransactionsTotalAmount />

                <TransactionsChart transactionsType={transactionsType} />
              </div>
              <TransactionForm transactionsType={transactionsType} setRender={setRender} />
            </>
          ) : (
            <>
              <div>
                <MainPageTitle>{transactionsType === 'incomes' ? 'Income' : 'Expense'} Log</MainPageTitle>
                <MainPageText>
                  Capture and organize every penny spent with ease! A clear view of your financial habits at your
                  fingertips.
                </MainPageText>
              </div>
              <TransactionsTotalAmount />
              <TransactionForm transactionsType={transactionsType} setRender={setRender} />
              <TransactionsChart transactionsType={transactionsType} />
            </>
          )}
        </MainPageWrapper>
      </StyledCommonWrapper>
    </MainPageSection>
  );
};

export default MainTransactionsPage;
