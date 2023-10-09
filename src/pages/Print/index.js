import { useContext } from 'react';
import { UserContext } from '../../utils/context/userContext';

function Print() {
  const { user } = useContext(UserContext);
  return user.loggedin ? <h2>Print page</h2> : <h3>Bạn cần đăng nhập để xem trang này</h3>;
}

export default Print;
