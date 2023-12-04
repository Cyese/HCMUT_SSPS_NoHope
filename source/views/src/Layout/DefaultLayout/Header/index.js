import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../../utils/context/userContext';
import LogoutConfirm from '../../../components/LogoutConfirm';
import classNames from 'classnames/bind';
import styles from './Header.module.css';
import avatar from '../../../assets/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoinSign, faArrowRightFromBracket, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

function Header() {
  const { user, logout } = useContext(UserContext);

  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const handleCancel = () => {
    setShow(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('app-name')}>HCMUT SSPS</h2>
      {user.loggedin ? (
        <div className={cx('user')}>
          <img className={cx('user-ava')} src={avatar} alt="avatar" />
          <div className={cx('user-info')}>
            <h4 className={cx('user-info-name')}>Nguyen Van A</h4>
            {!user.admin && (
              <div className={cx('user-info-balance')}>
                <FontAwesomeIcon icon={faBitcoinSign} className={cx('balance-icon')} /> &nbsp;
                <span>4.500</span>
              </div>
            )}
          </div>
          <Tippy content="Log out">
            <button
              className={cx('logout-btn')}
              onClick={() => {
                setShow(true);
              }}
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </button>
          </Tippy>
          {show && <LogoutConfirm onCancel={handleCancel} onConfirm={handleLogout} />}
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
