import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../utils/context/userContext';
import PositionCard from '../../components/PositionCard';
import axios from '../../utils/api/axios';

import classNames from 'classnames/bind';
import styles from './History.module.css';

const cx = classNames.bind(styles);

function History() {
  const { user } = useContext(UserContext);

  const [userHistory, setUserHistory] = useState([]);

  useEffect(() => {
    const getlog = async () => {
      if (!user.admin) {
        const res = await axios.get(`/user/getLog/${user.UserID}`);
        if (res) setUserHistory(res);
      }
    };
    getlog();
  }, []);

  // const data = [
  //   { no: 1, Date: '01/03/3255', FileName: 'a.jpg', PaperQuantity: 100, status: true },
  //   { no: 2, Date: '23/12/2321', FileName: 'b.pdf', PaperQuantity: 20, status: false },
  //   { no: 3, Date: '04/05/1023', FileName: 'c.docx', PaperQuantity: 3, status: true },
  // ];
  const totalPaper = userHistory.reduce((result, data) => result + data.PaperQuantity ,0)

  return user.loggedin ? (
    user.admin ? (
      <div className={cx('admin-wrapper')}>
        <div className={cx('container')}>
          <PositionCard position={'H1-101'} numprinter={3} />
          <PositionCard position={'H1-301'} numprinter={3} />
          <PositionCard position={'H2-101'} numprinter={3} />
          <PositionCard position={'H3-101'} numprinter={3} />
          <PositionCard position={'H3-401'} numprinter={3} />
          <PositionCard position={'H6-101'} numprinter={3} />
          <PositionCard position={'H6-602'} numprinter={3} />
        </div>
      </div>
    ) : (
      <div className={cx('user-wrapper')}>
        <div className={cx('container')}>
          <div className={cx('header')}>HISTORY PAGE</div>
          <div className={cx('wrap-table')}>
            <table className={cx('table')}>
              <tbody>
                <tr>
                  <th>STT</th>
                  <th>Ngày in</th>
                  <th>Danh sách tài liệu</th>
                  <th>Tổng số giấy</th>
                  <th>Tình trạng</th>
                </tr>
                {userHistory.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.Date}</td>
                    <td>{item.FileName}</td>
                    <td>{item.PaperQuantity}</td>
                    <td className={cx('done')}>&#x2713;</td>
                    {/* {item.status ? <td className={cx('done')}>&#x2713;</td> : <td className={cx('fail')}>&times;</td>} */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={cx('total-paper')}>
            <h3>Tổng số giấy: </h3>
            <h3>{totalPaper}</h3>
          </div>
        </div>
      </div>
    )
  ) : (
    <h3 style={{ margin: '20px' }}>Bạn cần đăng nhập để xem trang này</h3>
  );
}

export default History;
