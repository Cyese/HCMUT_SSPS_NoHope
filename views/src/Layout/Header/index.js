import classNames from 'classnames/bind';
import styles from './Header.module.css';

const cx = classNames.bind(styles);

function Header() {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('app-name')}>PRINTER</h2>
      <div className={cx('user-space')}>
        <img
          className={cx('user-avatar')}
          src="https://pm1.aminoapps.com/6850/ee336d8649e9c828b0cc03776e493ee38f4b8776v2_00.jpg"
          alt="avatar"
        />
        <div className={cx('user-name')}>User name</div>
      </div>
    </div>
  );
}

export default Header;
