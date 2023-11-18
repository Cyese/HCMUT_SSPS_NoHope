import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../utils/context/userContext';
import Transaction from '../../components/Transaction';
import Deposit from '../../components/Deposit';

import classNames from 'classnames/bind';
import styles from './Profile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoinSign, faMedal } from '@fortawesome/free-solid-svg-icons';

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

  const info = [
    { label: 'Tên người dùng', data: 'User.name123' },
    { label: 'Giới tính', data: 'Nam' },
    { label: 'Ngày sinh', data: 'dd/mm/yyyy' },
    { label: 'Chức vụ', data: 'Sinh viên' },
    { label: 'Khoa', data: 'Máy tính' },
    { label: 'Email', data: 'abc@hcmut.edu.vn' },
    { label: 'Sđt', data: '090909090' },
  ];

  return user.loggedin ? (
    <div className={cx('wrapper')}>
      <div className={cx('triangle')}></div>
      <div className={cx('rectangle')}></div>

      <div className={cx('container')}>
        <div className={cx('profile-card')}>
          <div className={cx('avatar')}>
            <img className={cx('ava-frame')} src={require('./printer.jpg')} alt="avatar" />
            <img
              className={cx('ava-img')}
              src="https://pm1.aminoapps.com/6850/ee336d8649e9c828b0cc03776e493ee38f4b8776v2_00.jpg"
              alt="avatar"
            />
          </div>
          <h3>
            2112112 <br />
            Nguyen Van A
          </h3>
          <button className={cx('rank')}>
            <FontAwesomeIcon icon={faMedal} />
            &nbsp; Hạng bạc
          </button>
        </div>

        <div className={cx('profile-info')}>
          <div>
            <h3 className={cx('title')}>Thông tin</h3>
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
            <h3 className={cx('title')}>Tài khoản</h3>
            <div className={cx('money')}>
              <div className={cx('balance')}>
                <span>Số dư:</span> <br />
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
                Lịch sử giao dịch
              </h3>
            </div>
          </div>
        </div>
      </div>
      <Transaction ShowOrHide={show1 ? 'show' : 'hide'} onCancel={handleCancel1} />
      <Deposit ShowOrHide={show2 ? 'show' : 'hide'} onCancel={handleCancel2} />
    </div>
  ) : (
    <h3>Bạn cần đăng nhập để xem trang này</h3>
  );
}

export default Profile;
