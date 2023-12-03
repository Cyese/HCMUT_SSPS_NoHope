import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserContext } from '../../../utils/context/userContext';

import classNames from 'classnames/bind';
import styles from './PositionHistory.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PositionHistory() {
  const { user } = useContext(UserContext);
  const params = useParams();
  const navigate = useNavigate();
  const data = [
    [
      { no: 1, date: '01/03/3255', document: 'a.jpg', numpaper: 100, status: true },
      { no: 2, date: '23/12/2321', document: 'b.pdf', numpaper: 20, status: true },
      { no: 3, date: '04/05/1023', document: 'c.docx', numpaper: 3, status: false },
      { no: 3, date: '04/05/1023', document: 'c.docx', numpaper: 3, status: true },
      { no: 3, date: '04/05/1023', document: 'c.docx', numpaper: 3, status: true },
      { no: 3, date: '04/05/1023', document: 'c.docx', numpaper: 3, status: false },
    ],
    [
      { no: 4, date: '02/11/2023', document: 'd.txt', numpaper: 35, status: true },
      { no: 5, date: '12/05/1234', document: 'e.png', numpaper: 41, status: true },
      { no: 6, date: '30/01/2000', document: 'f.jpeg', numpaper: 1, status: true },
    ],
    [
      { no: 8, date: '09/09/1111', document: 'h.txt', numpaper: 23, status: false },
      { no: 9, date: '23/10/2222', document: 'i.pdf', numpaper: 14, status: true },
      { no: 10, date: '21/12/1212', document: 'j.docx', numpaper: 2, status: true },
      { no: 11, date: '27/07/1777', document: 'k.txt', numpaper: 55, status: true },
    ],
  ];

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
        {data.map((printer, index) => (
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
                      <td>{info.no}</td>
                      <td>{info.date}</td>
                      <td>{info.document}</td>
                      <td>{info.numpaper}</td>
                      {info.status ? <td className={cx('done')}>&#x2713;</td> : <td className={cx('fail')}>&times;</td>}
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
