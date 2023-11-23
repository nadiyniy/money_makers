import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Test from 'pages/test/test';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Test />} />
      </Route>
    </Routes>
  );
};
