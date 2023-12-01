import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import TransactionsTotalAmount from '../../../shared/TransactionsTotalAmount/TransactionsTotalAmount';

import TransactionForm from '../../../shared/TransactionForm/TransactionForm';

import { StyledCommonWrapper } from 'styles/Common.styled';
import { MainPageSection, MainPageText, MainPageTitle, MainPageWrapper } from './MainTransactionsPage.styled';
import DonutChart from '../Doughnut/Doughnut';

const MainTransactionsPage = () => {
  const { transactionsType } = useParams();
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  });

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

                <DonutChart transactionsType={transactionsType} />
              </div>
              <TransactionForm transactionsType={transactionsType} />
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
              <TransactionForm />
              <DonutChart />
            </>
          )}
        </MainPageWrapper>
      </StyledCommonWrapper>
    </MainPageSection>
  );
};

export default MainTransactionsPage;
