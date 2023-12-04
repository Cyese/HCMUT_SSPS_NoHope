import { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../utils/context/userContext';
import Transaction from '../../components/Transaction';
import Deposit from '../../components/Deposit';
import axios from '../../utils/api/axios';

import printer from '../../assets/printer.png';
import avatar from '../../assets/avatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoinSign, faMedal } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Profile.module.css';
const cx = classNames.bind(styles);

function Profile() {
  const { user } = useContext(UserContext);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleCancel1 = () => {
    setShow1(false);
  };
  const handleCancel2 = () => {
    setShow2(false);
  };

  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`/user/${user.UserID}` );
      console.log(res);
      if (res) setUserInfo(res);
    };
    getUser();
  }, []);

  const info = [
    { label: 'Username', data: userInfo.name },
    { label: 'Gender', data: 'Male' },
    { label: 'Birth date', data: userInfo.BirthDate },
    { label: 'Position', data: 'Student' },
    { label: 'Major', data: 'CSE' },
    { label: 'Email', data: userInfo.email },
    { label: 'Number', data: userInfo.contactNumber },
  ];

  return user.loggedin ? (
    <div className={cx('wrapper')}>
      <div className={cx('triangle')}></div>
      <div className={cx('rectangle')}></div>

      <div className={cx('container')}>
        <div className={cx('profile-card')}>
          <div className={cx('avatar')}>
            <img className={cx('ava-frame')} src={printer} alt="avatar" />
            <img className={cx('ava-img')} src={avatar} alt="avatar" />
          </div>
          <h3>
            {userInfo.UserID} <br />
            {userInfo.Name}
          </h3>
          <button className={cx('rank')}>
            <FontAwesomeIcon icon={faMedal} />
            &nbsp; Silver
          </button>
        </div>

        <div className={cx('profile-info')}>
          <div>
            <h3 className={cx('title')}>Info</h3>
            <table className={cx('table')}>
              {info.map((item, index) => (
                <tr key={index}>
                  <td>{item.label}</td>
                  <td>{item.data}</td>
                </tr>
              ))}
            </table>
          </div>
          <div>
            <h3 className={cx('title')}>Account</h3>
            <div className={cx('money')}>
              <div className={cx('balance')}>
                <span>Balance: </span> <br />
                <h4 className={cx('balance-icon')}>4.500</h4> &nbsp;
                <FontAwesomeIcon icon={faBitcoinSign} className={cx('balance-icon')} />
              </div>
              <button
                className={cx('deposit')}
                onClick={() => {
                  setShow2(true);
                }}
              ></button>
              <h3
                className={cx('history')}
                onClick={() => {
                  setShow1(true);
                }}
              >
                Transaction history
              </h3>
            </div>
          </div>
        </div>
      </div>
      {show1 && <Transaction onCancel={handleCancel1} />}
      {show2 && <Deposit onCancel={handleCancel2} />}
    </div>
  ) : (
    <h3 style={{ margin: '20px' }}>This page requires login to access.</h3>
  );
}

export default Profile;
