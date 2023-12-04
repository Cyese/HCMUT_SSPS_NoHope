import DefaultLayout from '../Layout/DefaultLayout';
import LoginLayout from '../Layout/Login';
import Home from '../pages/Home';
import Print from '../pages/Print';
import History from '../pages/History';
import PositionHistory from '../pages/History/PositionHistory';
import Profile from '../pages/Profile';
import Login from '../pages/LoginRegister/Login';
import Register from '../pages/LoginRegister/Register';
import { faHouse, faPrint, faClockRotateLeft, faUser, faHome } from '@fortawesome/free-solid-svg-icons';

const userRoutes = [
  { path: '/', component: Home, layout: DefaultLayout, title: 'Home', icon: faHouse },
  { path: '/login', component: Login, layout: LoginLayout },
  { path: '/register', component: Register, layout: LoginLayout },
  { path: '/print', component: Print, layout: DefaultLayout, title: 'Print', icon: faPrint },
  { path: '/history', component: History, layout: DefaultLayout, title: 'History', icon: faClockRotateLeft },
  { path: '/profile', component: Profile, layout: DefaultLayout, title: 'Profile', icon: faUser },
];

const adminRoutes = [
  { path: '/', component: Home, layout: DefaultLayout, title: 'Home', icon: faHome },
  { path: '/login', component: Login, layout: LoginLayout },
  { path: '/register', component: Register, layout: LoginLayout },
  { path: '/history', component: History, layout: DefaultLayout, title: 'History', icon: faClockRotateLeft },
  { path: '/history/:position', component: PositionHistory, layout: DefaultLayout },
];

export { userRoutes, adminRoutes };
