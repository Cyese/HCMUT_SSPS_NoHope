import { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { userRoutes, adminRoutes } from './routes';
import { UserContext } from './utils/context/userContext';

function App() {
  const { user, login } = useContext(UserContext);
  useEffect(() => {
    const mssv = localStorage.getItem('mssv');
    if (mssv) login(mssv);
  }, []);
  const appRoutes = user.admin ? adminRoutes : userRoutes;
  return (
    <Router>
      <div className="app">
        <Routes>
          {appRoutes.map((route, index) => {
            const Layout = route.layout;
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Layout children={<Page />} />} />;
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
