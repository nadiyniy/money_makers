import AuthNav from '../AuthNav/AuthNav';
import AllUsersTab from '../AllUsersTab/AllUsersTab';
import { Text } from './WelcomePage.styled';
import { StyledCommonWrapper } from 'styles/Common.styled';
import BgImageWrapper from 'shared/BgImageWrapper/BgImageWrapper';
import { ContentWrapper, Description, PageWrapper, Title } from '../commonAuthStyles';

const WelcomePage = () => {
  return (
    <StyledCommonWrapper style={{outline: '1px solid yellow'
    }}>
      <PageWrapper>
        <ContentWrapper>
          <div>
            <Text>Expense log</Text>
            <Title>
              Manage Your <span>Finances</span> Masterfully!
            </Title>
            <Description>
              ExpenseTracker effortlessly empowers you to take control of your finances! With intuitive features, it
              simplifies the process of tracking and managing expenses, allowing for a stress-free mastery over your
              financial world.
            </Description>

            <AuthNav />
          </div>
          <AllUsersTab />
        </ContentWrapper>
        <BgImageWrapper />
      </PageWrapper>
    </StyledCommonWrapper>
  );
};

export default WelcomePage;
