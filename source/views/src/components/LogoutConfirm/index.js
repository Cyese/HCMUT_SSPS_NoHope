import classNames from 'classnames/bind';
import styles from './LogoutConfirm.module.css';

const cx = classNames.bind(styles);

function LogoutConfirm({ onCancel, onConfirm }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <h4 className={cx('title')}>Logging out</h4>
        <p className={cx('content')}>Log out from SSPS?</p>
        <div className={cx('buttons')}>
          <button className={cx('confirm-btn')} onClick={onConfirm}>
            Confirm
          </button>
          <button className={cx('cancel-btn')} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutConfirm;
