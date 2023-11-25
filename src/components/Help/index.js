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
        'email',
        'id',
        'password ewh fhfhhfehfhsfjsndf  afnfjlkdfdkdlshufdsnfdkg bdjsfbgfndf fdnfn dnflfn sdf dsfdjfsdjkbfsjodbg dbgfkjdfbdsjkbg ',
      ],
    },
    {
      question: 'App use',
      answer: ['email', 'id '],
    },
    {
      question: 'Print',
      answer: [
        'Anh đã không giữ được nhiều hạnh phúc cho em Nhiều khi giận nhau nước mắt em cứ rơi thật nhiều Anh xin lỗi em hãy tha thứ cho anh lần này Đừng rời xa anh em nói đi em rất yêu anh Nhưng nay cuộc sống không như anh đã ước mong Của một tình yêu sẽ hạnh phúc giống như bao người Một người yêu em, yêu em đắm say một người bên em bên em mỗi khi Mà giờ đây nước mắt anh đã rơi rồi.',
        'email',
        'Thật ra anh đâu, đâu có muốn chia tay như vậy Người yêu em hỡi anh lại nhớ em đang ở đâu Bàn tay nhỏ bé khuôn mặt ấy sao lại đổi thay để anh nơi này Ngoài trời mưa cứ rơi lặng thầm, chỉ còn mình anh. Thật sự nhiều khi muốn nhắn tin gửi cho em nhiều Lại sợ người ấy đang hạnh phúc vui bên một Tình yêu đã chết hai người dưng mai này chúng ta có duyên gặp lại Thì anh vẫn luôn luôn yêu em như lúc mới yêu.',
        'Em, ngày em đánh rơi nụ cười vào anh Có nghĩ sau này em sẽ chờ Và vô tư cho đi hết những ngây thơ Anh, một người hát mãi những điều mong manh Lang thang tìm niềm vui đã lỡ Chẳng buồn dặn lòng quên hết những chơ vơ Ta yêu nhau bằng nỗi nhớ chưa khô trên những bức thư Ta đâu bao giờ có lỗi khi không nghe tim chối từ Chỉ tiếc rằng',
        'password',
        'Em không là nàng thơ Anh cũng không còn là nhạc sĩ mộng mơ Tình này nhẹ như gió Lại trĩu lên tim ta những vết hằn Tiếng yêu này mỏng manh Giờ tan vỡ, thôi cũng đành Xếp riêng những ngày tháng hồn nhiên Trả hết cho em',
      ],
    },
  ];
  const instructions2 = [
    { question: 'Payment', answer: ['email', 'id', 'password'] },
    { question: 'Blabla', answer: ['email', 'id'] },
    { question: 'Blabla', answer: ['email'] },
  ];

  return (
    <div className={cx('wrapper', ShowOrHide)}>
      <header className={cx('header')}>
        <button className={cx('back-btn')} onClick={onCancel}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <h3>Hướng dẫn</h3>
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
