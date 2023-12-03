import React, { useState } from 'react';

const UserContext = React.createContext({ mssv: '', loggedin: false, admin: false });

function UserProvider({ children }) {
  const [user, setUser] = useState({ mssv: '', loggedin: false, admin: false });

  const login = (mssv, token) => {
    var isadmin;
    if (mssv === '1') isadmin = true;
    else isadmin = false;

    setUser({
      mssv: mssv,
      loggedin: true,
      admin: isadmin,
    });
    localStorage.setItem('mssv', mssv);
    // localStorage.setItem('token', token);
  };

  const logout = () => {
    localStorage.removeItem('mssv');
    // localStorage.removeItem('token');
    setUser({
      mssv: '',
      loggedin: false,
      admin: false,
    });
  };

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
}

export { UserProvider, UserContext };
