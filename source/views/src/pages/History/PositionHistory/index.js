import { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../utils/context/userContext';
import axios from '../../../utils/api/axios';

import classNames from 'classnames/bind';
import styles from './PositionHistory.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PositionHistory() {
  const { user } = useContext(UserContext);
  const params = useParams();
  const navigate = useNavigate();

  const [printerHistory, setPrinterHistory] = useState( [
    [
      { no: 1, Date: '01/03/3255', FileName: 'a.jpg', PaperQuantity: 100, status: true },
    ],
  ]);
  useEffect(() => {
    const getPrinterHistory = async () => {
      const res = await axios.get('/spso/printerHistory', params.position);
      console.log('>>> check : ', res);
      const history = [];
      for (const key in res) {
        history.push(res[key]);
      }
      if (res) setPrinterHistory(history);
    };
    getPrinterHistory();
  }, []);

  const [selecting, setSelecting] = useState(0);
  const handleSelect = (index) => {
    if (selecting === index) setSelecting(null);
    else setSelecting(index);
  };

  return user.loggedin && user.admin ? (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('header')}>
          <button className={cx('back-btn')} onClick={() => navigate('/history')}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button>
          {params.position} HISTORY
        </div>
        {printerHistory.map((printer, index) => (
          <div className={cx('printer')} key={index}>
            <h3
              onClick={() => {
                handleSelect(index);
              }}
            >
              Máy {index + 1}
              {selecting === index ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleLeft} />}
            </h3>
            {selecting === index && (
              <div className={cx('wrap-table')}>
                <table className={cx('table')}>
                  <tr>
                    <th>STT</th>
                    <th>Ngày in</th>
                    <th>Danh sách tài liệu</th>
                    <th>Tổng số giấy</th>
                    <th>Tình trạng</th>
                  </tr>

                  {printer.map((info, id) => (
                    <tr key={id}>
                      <td>{id + 1}</td>
                      <td>{info.Date}</td>
                      <td>{info.FileName}</td>
                      <td>{info.PaperQuantity}</td>
                      <td className={cx('done')}>&#x2713;</td>
                      {/* {info.status ? <td className={cx('done')}>&#x2713;</td> : <td className={cx('fail')}>&times;</td>} */}
                    </tr>
                  ))}
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <h3>Bạn cần đăng nhập để xem trang này</h3>
  );
}

export default PositionHistory;
