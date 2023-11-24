import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Header from './header/Header';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <div>
              <Header />
            </div>
          }
        />
      </Route>
    </Routes>
  );
};
