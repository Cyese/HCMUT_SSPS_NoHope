import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.css';
import Help from './Help';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPrint, faCircleQuestion, faClockRotateLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleCancel = () => {
    setShow(false);
  };

  const actions = [
    { title: 'Home', to: '/', icon: <FontAwesomeIcon icon={faHouse} /> },
    { title: 'Print', to: '/print', icon: <FontAwesomeIcon icon={faPrint} /> },
    { title: 'History', to: '/history', icon: <FontAwesomeIcon icon={faClockRotateLeft} /> },
  ];
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('logo')}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/HCMCUT.svg/363px-HCMCUT.svg.png"
        alt="logo"
      />
      <div className={cx('pages')}>
        {actions.map((action, index) => (
          <NavLink to={action.to} key={index} className={(nav) => cx('links', { active: nav.isActive })}>
            <span>{action.icon}</span>
            <div className={cx('page-title')}>{action.title}</div>
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
        <div>help</div>
      </button>
      <Help ShowOrHide={show ? 'show' : 'hide'} onCancel={handleCancel} />
    </div>
  );
}

export default Sidebar;
