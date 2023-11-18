import { useContext } from 'react';
import { UserContext } from '../../utils/context/userContext';

import classNames from 'classnames/bind';
import styles from './StyleForPrintForm.module.css';

const cx = classNames.bind(styles);

function Print() {
  const { user } = useContext(UserContext);

  return user.loggedin ? (
    <div className={cx('wrapper')}>
      <div className={cx('main')}>
        <div className={cx('header')}>Print Page</div>
        <div className={cx('myList')}>
          <label> Chọn máy in: </label>
          <select className={cx('mySelect')}>
            <option value="1">Mục 1</option>
            <option value="2">Mục 2</option>
            <option value="3">Mục 3</option>
            <option value="4">Mục 4</option>
            <option value="5">Mục 5</option>
          </select>
        </div>
        <input type="file" className={cx('myfile')}></input>
        <button className={cx('btn', 'delete-btn')}>Delete file</button>
        <div className={cx('drop_zone')} draggable="true">
          Drop files here <br />
        </div>

        <div className={cx('bottom-btn')}>
          <button className={cx('btn', 'preview-btn')}>Preview</button>
          <button className={cx('btn', 'print-btn')}>Print</button>
        </div>
      </div>
    </div>
  ) : (
    <h3>Bạn cần đăng nhập để xem trang này</h3>
  );
}

export default Print;
