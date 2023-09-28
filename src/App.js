import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DefaultLayout from './Layout';
import { publicRoutes } from './routes';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
