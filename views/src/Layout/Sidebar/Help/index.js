import classNames from 'classnames/bind';
import styles from './Help.module.css';

const cx = classNames.bind(styles);

function Help({ ShowOrHide, onCancel }) {
  return (
    <div className={cx('wrapper', ShowOrHide)}>
      <div className={cx('container')}>
        <h3>Hướng dẫn</h3>
        <button className={cx('cancel-btn')} onClick={onCancel}>
          OK
        </button>
      </div>
    </div>
  );
}

export default Help;
