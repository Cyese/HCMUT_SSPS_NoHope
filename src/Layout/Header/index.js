import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
const cx = classNames.bind(styles);

function Header({ navigation }) {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('app-name')}>PRINTER</h2>
      <NavLink to={'/login'} className={(nav) => cx('links', { active: nav.isActive })}>
        <div className={cx('user-space')}>
          <img
            className={cx('user-avatar')}
            src="https://pm1.aminoapps.com/6850/ee336d8649e9c828b0cc03776e493ee38f4b8776v2_00.jpg"
            alt="avatar"
          />
          <div className={cx('user-name')}>User name</div>
        </div>
      </NavLink>
    </div>
  );
}

export default Header;
