import classNames from 'classnames/bind';
import styles from './Deposit.module.css';

const cx = classNames.bind(styles);

function Deposit({ onCancel }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <h3 className={cx('header')}>Nạp tiền</h3>
        <div className={cx('content')}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
            alt="qr"
          />
        </div>
        <button className={cx('cancel-btn')} onClick={onCancel}>
          OK
        </button>
      </div>
    </div>
  );
}

export default Deposit;
