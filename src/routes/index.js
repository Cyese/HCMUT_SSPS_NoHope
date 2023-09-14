import Home from '../pages/Home';
import Print from '../pages/Print';
import History from '../pages/History';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/print', component: Print },
  { path: '/history', component: History },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
