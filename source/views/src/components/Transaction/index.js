import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoinSign } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Transaction.module.css';

const cx = classNames.bind(styles);

function Transaction({ onCancel }) {
  const data = [
    { no: 1, date: '01/12/2023', method: 'Top Up: Momo E-wallet', amount: 15000 },
    { no: 2, date: '02/12/2023', method: 'Printing payment', amount: -5000 },
    { no: 3, date: '04/12/2023', method: 'Printing payment', amount: -2000 },
    { no: 4, date: '08/12/2023', method: 'Top Up: BKPay', amount: 10000 },
    { no: 5, date: '01/12/2023', method: 'Printing payment', amount: -7000 },
  ];
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <h3 className={cx('header')}>Transaction history</h3>
        <div className={cx('content')}>
          <table>
            <tr>
              <th>No.</th>
              <th>Date</th>
              <th>Action</th>
              <th>Amount</th>
            </tr>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.no}</td>
                <td>{row.date}</td>
                <td>{row.method}</td>{' '}
                <td className={cx(row.amount > 0 ? 'yellow' : 'black')}>
                  {row.amount}
                  &nbsp; <FontAwesomeIcon icon={faBitcoinSign} className={cx('balance-icon')} />
                </td>
              </tr>
            ))}
          </table>
        </div>
        <button className={cx('cancel-btn')} onClick={onCancel}>
          OK
        </button>
      </div>
    </div>
  );
}

export default Transaction;
