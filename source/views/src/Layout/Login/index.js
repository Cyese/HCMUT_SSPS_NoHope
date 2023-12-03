import classNames from 'classnames/bind';
import styles from './Login.module.css';

const cx = classNames.bind(styles);

function LoginLayout({ children }) {
  return <div className={cx('wrapper')}>{children}</div>;
}

export default LoginLayout;
