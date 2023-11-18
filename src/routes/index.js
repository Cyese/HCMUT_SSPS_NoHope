import DefaultLayout from '../Layout/DefaultLayout';
import LoginLayout from '../Layout/Login';
import Home from '../pages/Home';
import Print from '../pages/Print';
import History from '../pages/History';
import Profile from '../pages/Profile';
import Login from '../pages/LoginRegister/Login';
import Register from '../pages/LoginRegister/Register';

const privateRoutes = [
  { path: '/print', component: Print, layout: DefaultLayout },
  { path: '/history', component: History, layout: DefaultLayout },
  { path: '/profile', component: Profile, layout: DefaultLayout },
];

const publicRoutes = [
  { path: '/', component: Home, layout: DefaultLayout },
  { path: '/login', component: Login, layout: LoginLayout },
  { path: '/register', component: Register, layout: LoginLayout },
];

export { publicRoutes, privateRoutes };
