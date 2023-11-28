import AuthNav from '../AuthNav/AuthNav';
import AllUsersTab from '../AllUsersTab/AllUsersTab';
import { Description, Text, Title } from './WelcomePage.styled';
import { Wrapper } from '../RegisterPage/RegisterPage.styled';

const WelcomePage = () => {
  return (
    <>
      <Wrapper>
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
        <AllUsersTab />
      </Wrapper>
    </>
  );
};

export default WelcomePage;
