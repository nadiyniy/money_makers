import AuthNav from '../AuthNav/AuthNav';
import AllUsersTab from '../AllUsersTab/AllUsersTab';
import { Description, StyledAuthWrapper, Title } from '../commonAuthStyles';
import { Text } from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <StyledAuthWrapper>
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
    </StyledAuthWrapper>
  );
};

export default WelcomePage;
