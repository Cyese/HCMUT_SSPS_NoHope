import classNames from 'classnames/bind';
import styles from './LogoutConfirm.module.css';

const cx = classNames.bind(styles);

function LogoutConfirm({ onCancel, onConfirm }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <h4 className={cx('title')}>Đăng xuất</h4>
        <p className={cx('content')}>Bạn có muốn đăng suất không ?</p>
        <div className={cx('buttons')}>
          <button className={cx('confirm-btn')} onClick={onConfirm}>
            Có
          </button>
          <button className={cx('cancel-btn')} onClick={onCancel}>
            Không
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutConfirm;
