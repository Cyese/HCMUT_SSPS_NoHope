import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './PositionCard.module.css';

const cx = classNames.bind(styles);

function PositionCard({ position, numprinter }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/history/${position}`);
  };
  return (
    <div className={cx('wrapper')}>
      <div
        className={cx('image')}
        style={{
          backgroundImage:
            "url('https://tuyensinh.hcmut.edu.vn/admission/image/cache/data/tuyensinh/ts2017/5-NhaH6-378x235.jpg')",
        }}
        onClick={handleClick}
      >
        <h1>{position}</h1>
      </div>
      <div className={cx('info')}>
        {numprinter} Máy in
        <button className={cx('button')} onClick={handleClick}>
          Xem lịch sử
        </button>
      </div>
    </div>
  );
}

export default PositionCard;
