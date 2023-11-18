import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.css';
import Help from '../../../components/Help';
import logo from '../../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPrint, faClockRotateLeft, faUser, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
  const [show, setShow] = useState(false);
  const [fade, setFade] = useState(false);

  const handleCancel = () => {
    setShow(false);
    setFade(true);
  };

  const actions = [
    { title: 'Home', to: '/', icon: <FontAwesomeIcon icon={faHouse} /> },
    { title: 'Print', to: '/print', icon: <FontAwesomeIcon icon={faPrint} /> },
    { title: 'History', to: '/history', icon: <FontAwesomeIcon icon={faClockRotateLeft} /> },
    { title: 'Profile', to: '/profile', icon: <FontAwesomeIcon icon={faUser} /> },
  ];
  return (
    <div className={cx('wrapper')}>
      <img className={cx('logo')} src={logo} alt="logo" />
      <div className={cx('pages')}>
        {actions.map((action, index) => (
          <NavLink to={action.to} key={index} className={(nav) => cx('links', { active: nav.isActive })}>
            {action.icon}
            <p className={cx('title')}>&nbsp;{action.title}</p>
          </NavLink>
        ))}
      </div>
      <button
        className={cx('help-btn')}
        onClick={() => {
          setShow(true);
        }}
      >
        <FontAwesomeIcon icon={faCircleQuestion} className={cx('help-icon')} />
        <p className={cx('help-text')}>help</p>
      </button>
      <Help ShowOrHide={show ? 'show' : fade ? 'fade' : 'hide'} onCancel={handleCancel} />
    </div>
  );
}

export default Sidebar;
