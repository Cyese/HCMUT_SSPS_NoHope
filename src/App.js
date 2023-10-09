import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';

function App() {
  const renderRoutes = (routesArray) => {
    return routesArray.map((route, index) => {
      const Layout = route.layout;
      const Page = route.component;
      return <Route key={index} path={route.path} element={<Layout children={<Page />} />} />;
    });
  };
  return (
    <Router>
      <div className="app" style={{ overflow: 'hidden' }}>
        <Routes>
          {renderRoutes(publicRoutes)}
          {renderRoutes(privateRoutes)}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
