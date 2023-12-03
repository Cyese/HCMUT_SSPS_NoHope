import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { adminRoutes, userRoutes } from '../../../routes';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import Help from '../../../components/Help';
import logo from '../../../assets/mylogo.png';
import { UserContext } from '../../../utils/context/userContext';

const cx = classNames.bind(styles);

function Sidebar() {
  const [show, setShow] = useState(false);
  const [fade, setFade] = useState(false);

  const handleCancel = () => {
    setShow(false);
    setFade(true);
  };

  const { user } = useContext(UserContext);
  const routes = user.admin ? adminRoutes : userRoutes;
  const actions = routes.filter((route) => route.hasOwnProperty('title'));

  return (
    <div className={cx('wrapper')}>
      <img className={cx('logo')} src={logo} alt="logo" />
      <div className={cx('pages')}>
        {actions.map((action, index) => (
          <NavLink to={action.path} key={index} className={(nav) => cx('links', { active: nav.isActive })}>
            <FontAwesomeIcon icon={action.icon} />
            <p className={cx('title')}>&nbsp;{action.title}</p>
          </NavLink>
        ))}
      </div>
      {user.admin ? (
        <div className={cx('pseudo-div')}></div>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default Sidebar;
