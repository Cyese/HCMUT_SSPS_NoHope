import { useContext } from 'react';
import { UserContext } from '../../utils/context/userContext';

import classNames from 'classnames/bind';
import styles from './Print.module.css';

const cx = classNames.bind(styles);

function Print() {
  const { user } = useContext(UserContext);
  return user.loggedin ? (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('header')}>Print Page</div>
        <div className={cx('content')}>
          <div className={cx('file-area')}>
            <div className={cx('file-top')}>
              <input type="file" className={cx('file-upload')}></input>
              <button className={cx('btn', 'delete-btn')}>Delete file</button>
            </div>
            <div className={cx('drop_zone')} draggable="true">
              Drop files here <br />
            </div>
            <button className={cx('btn', 'preview-btn')}>Preview</button>
          </div>
          <div className={cx('choose-area')}>
            <div className={cx('list', 'type')}>
              <label>Chọn kiểu in: </label>
              <select className={cx('input')}>
                <option value="1">Một mặt - trắng đen</option>
                <option value="2">Hai mặt - trắng đen</option>
                <option value="3">Một mặt - màu</option>
                <option value="4">Bìa cứng</option>
              </select>
            </div>
            <div className={cx('list', 'copies')}>
              <label>Số bản sao: </label>
              <input type="number" step="1" min="0" max="20" className={cx('input')}></input>
            </div>
            <div className={cx('list', 'position')}>
              <label>Chọn khu vực: </label>
              <select className={cx('input')}>
                <option value="1">H6 - 104</option>
                <option value="2">H2 - 123</option>
                <option value="3">H1 - 202</option>
                <option value="4">H3 - 302</option>
              </select>
            </div>
            <div className={cx('list', 'printer')}>
              <label>Chọn máy in: </label>
              <select className={cx('input')}>
                <option value="1">Máy 1</option>
                <option value="2">Máy 2</option>
              </select>
            </div>
            <button className={cx('btn', 'print-btn')}>Print</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h3 style={{ margin: '20px' }}>Bạn cần đăng nhập để xem trang này</h3>
  );
}

export default Print;
