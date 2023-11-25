import { useContext } from 'react';
import { UserContext } from '../../utils/context/userContext';

import PositionCard from '../../components/PositionCard';

import classNames from 'classnames/bind';
import styles from './History.module.css';

const cx = classNames.bind(styles);

function History() {
  const { user } = useContext(UserContext);

  const data = [
    { no: 1, date: '01/03/3255', document: 'a.jpg', numpaper: 100, status: 'done' },
    { no: 2, date: '23/12/2321', document: 'b.pdf', numpaper: 20, status: 'done' },
    { no: 3, date: '04/05/1023', document: 'c.docx', numpaper: 3, status: 'done' },
    { no: 4, date: '02/11/2023', document: 'd.txt', numpaper: 35, status: 'done' },
    { no: 5, date: '12/05/1234', document: 'e.png', numpaper: 41, status: 'done' },
    { no: 6, date: '30/01/2000', document: 'f.jpeg', numpaper: 1, status: 'done' },
    { no: 7, date: '14/02/1923', document: 'g.docx', numpaper: 64, status: 'done' },
    { no: 8, date: '09/09/1111', document: 'h.txt', numpaper: 23, status: 'done' },
    { no: 9, date: '23/10/2222', document: 'i.pdf', numpaper: 14, status: 'done' },
    { no: 10, date: '21/12/1212', document: 'j.docx', numpaper: 2, status: 'done' },
    { no: 11, date: '27/07/1777', document: 'k.txt', numpaper: 55, status: 'done' },
  ];

  return user.loggedin ? (
    user.admin ? (
      <div className={cx('admin-wrapper')}>
        <div className={cx('container')}>
          <PositionCard position={'h6-106'} numprinter={5} />
          <PositionCard position={'h6-301'} numprinter={2} />
          <PositionCard position={'h6-410'} numprinter={1} />
          <PositionCard position={'h1-201'} numprinter={3} />
          <PositionCard position={'h1-402'} numprinter={2} />
          <PositionCard position={'h2-103'} numprinter={4} />
          <PositionCard position={'h2-212'} numprinter={1} />
          <PositionCard position={'h2-301'} numprinter={2} />
          <PositionCard position={'h3-202'} numprinter={3} />
          <PositionCard position={'h3-311'} numprinter={2} />
          <PositionCard position={'h3-404'} numprinter={2} />
        </div>
      </div>
    ) : (
      <div className={cx('user-wrapper')}>
        <div className={cx('container')}>
          <div className={cx('header')}>HISTORY PAGE</div>
          <table className={cx('table')}>
            <tr>
              <th>STT</th>
              <th>Ngày in</th>
              <th>Danh sách tài liệu</th>
              <th>Tổng số giấy</th>
              <th>Tình trạng</th>
            </tr>

            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.no}</td>
                <td>{item.date}</td>
                <td>{item.document}</td>
                <td>{item.numpaper}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    )
  ) : (
    <h3>Bạn cần đăng nhập để xem trang này</h3>
  );
}

export default History;
