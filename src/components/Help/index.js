import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Help.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Help({ ShowOrHide, onCancel }) {
  const [selecting1, setSelecting1] = useState(null);
  const [selecting2, setSelecting2] = useState(null);

  const handleSelect1 = (index) => {
    if (selecting1 === index) setSelecting1(null);
    else setSelecting1(index);
  };
  const handleSelect2 = (index) => {
    if (selecting2 === index) setSelecting2(null);
    else setSelecting2(index);
  };

  const instructions1 = [
    {
      question: 'Login',
      answer: [
        'username: tên đăng nhập (gồm chữ và số; không dấu, khoảng trắng, ký tự đặc biệt). ',
        'password: mật khẩu của tài khoản MyBK',
      ],
    },
    {
      question: 'App use',
      answer: [
        'Đăng nhập vào trang web với tài khoản MyBK.',
        'Chọn các nút ở thanh sidebar bên trái để chuyển các trang dịch vụ.',
        'Nhấn nút logout ở phía trên bên phải để đăng xuất khỏi tài khoản hiện tại.',
      ],
    },
    {
      question: 'Print',
      answer: [
        'Đến trang Print tải lên file cần in, sau đó chọn kiểu in (in thường, in màu,...) và chọn số lượng bản sao.',
        'Nhấn nút preview để xem trước file hoặc nhấn nút delete để xóa file.',
        'Cần kiểm tra số dư và nạp tiền trước khi xác nhận in.',
        'Chọn địa điểm phù hợp và xác nhận in.',
      ],
    },
  ];
  const instructions2 = [
    {
      question: 'Payment',
      answer: [
        'Trong lúc in: nếu số dư đủ để in, số dư sẽ tự động bị trừ đi khi xác nhận in.',
        'Nạp tiền: qua BKPay, qua ví điện tử Momo, internet banking với tài khoản ngân hàng.',
      ],
    },
    {
      question: 'User infomation',
      answer: [
        'Đến trang Profile để xem thông tin cá nhân',
        'Liên hệ email support@nohope.com để cập nhật thông tin cá nhân.',
      ],
    },
    {
      question: 'History',
      answer: ['Đến trang History, xem các thông tin chi tiết về các tài liệu đã in, ngày in,...'],
    },
  ];

  return (
    <div className={cx('wrapper', ShowOrHide)}>
      <header className={cx('header')}>
        <button className={cx('back-btn')} onClick={onCancel}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <h3>Instruction</h3>
      </header>
      <div className={cx('container')}>
        <div className={cx('content')}>
          <div className={cx('content-1')}>
            {instructions1.map((ins, index) => (
              <div className={cx('content-item')} key={index}>
                <h4
                  className={cx('question')}
                  onClick={() => {
                    handleSelect1(index);
                  }}
                >
                  {ins.question}
                  {selecting1 === index ? (
                    <FontAwesomeIcon icon={faAngleDown} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleLeft} />
                  )}
                </h4>
                {selecting1 === index && (
                  <ul className={cx('answer')}>
                    {ins.answer.map((ans, i) => (
                      <li key={i}>{ans}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className={cx('content-2')}>
            {instructions2.map((ins, index) => (
              <div className={cx('content-item')} key={index}>
                <h4
                  className={cx('question')}
                  onClick={() => {
                    handleSelect2(index);
                  }}
                >
                  {ins.question}
                  {selecting2 === index ? (
                    <FontAwesomeIcon icon={faAngleDown} />
                  ) : (
                    <FontAwesomeIcon icon={faAngleLeft} />
                  )}
                </h4>
                {selecting2 === index && (
                  <ul className={cx('answer')}>
                    {ins.answer.map((ans, i) => (
                      <li key={i}>{ans}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={cx('footer')}>
          <button className={cx('cancel-btn')} onClick={onCancel}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default Help;
