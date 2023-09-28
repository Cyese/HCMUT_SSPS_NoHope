import History from '../pages/History';
import Home from '../pages/Home';
import Login from '../pages/LoginRegister/Login';
import Register from '../pages/LoginRegister/Register';
import Print from '../pages/Print';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/print', component: Print },
  { path: '/history', component: History },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
