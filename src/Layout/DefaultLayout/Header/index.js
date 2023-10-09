import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { UserContext } from '../../../utils/context/userContext';
import classNames from 'classnames/bind';
import styles from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoinSign, faArrowRightFromBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

function Header() {
  const navigate = useNavigate();

  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('app-name')}>PRINTER</h2>
      {user.loggedin ? (
        <div className={cx('user')}>
          <img
            className={cx('user-ava')}
            src="https://pm1.aminoapps.com/6850/ee336d8649e9c828b0cc03776e493ee38f4b8776v2_00.jpg"
            alt="avatar"
          />
          <div className={cx('user-info')}>
            <h4 className={cx('user-info-name')}>Nguyen Van A</h4>
            <div className={cx('user-info-balance')}>
              <FontAwesomeIcon icon={faBitcoinSign} className={cx('balance-icon')} /> &nbsp;
              <span>4.500</span>
            </div>
          </div>
          <Tippy content="Log out">
            <button
              className={cx('logout-btn')}
              onClick={() => {
                handleLogout();
              }}
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </button>
          </Tippy>
        </div>
      ) : (
        <button
          className={cx('login-btn')}
          onClick={() => {
            handleLogin();
          }}
        >
          <h4>Log in</h4> &nbsp;
          <FontAwesomeIcon icon={faArrowRightToBracket} className={cx('login-icon')} />
        </button>
      )}
    </div>
  );
}

export default Header;
