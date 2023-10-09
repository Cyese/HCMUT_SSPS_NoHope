import classNames from 'classnames/bind';
import styles from './Transaction.module.css';

const cx = classNames.bind(styles);

function Transaction({ ShowOrHide, onCancel }) {
  return (
    <div className={cx('wrapper', ShowOrHide)}>
      <div className={cx('container')}>
        <h3 className={cx('header')}>Lịch sử giao dịch</h3>
        <div className={cx('content')}></div>
        <button className={cx('cancel-btn')} onClick={onCancel}>
          OK
        </button>
      </div>
    </div>
  );
}

export default Transaction;
