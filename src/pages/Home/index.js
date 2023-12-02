import { useContext } from 'react';
import { UserContext } from '../../utils/context/userContext';
import background from '../../assets/home.jpg';

import classNames from 'classnames/bind';
import styles from './Home.module.css';

const cx = classNames.bind(styles);

function Home() {
  const { user } = useContext(UserContext);
  return user.loggedin && user.admin ? (
    <h2>Home page</h2>
  ) : (
    <div className={cx('wrapper')}>
      <img src={background} alt="background" />
    </div>
  );
}

export default Home;
