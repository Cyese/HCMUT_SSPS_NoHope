import React, { useState } from 'react';

const UserContext = React.createContext({ UserID: '', loggedin: false, admin: false });

function UserProvider({ children }) {
  const [user, setUser] = useState({ UserID: '', loggedin: false, admin: false });

  const login = (UserID) => {
    const isadmin = UserID === 1 ? true : false;
    setUser({
      UserID: UserID,
      loggedin: true,
      admin: isadmin,
    });
    localStorage.setItem('UserID', UserID);
  };

  const logout = () => {
    localStorage.removeItem('UserID');
    setUser({
      UserID: '',
      loggedin: false,
      admin: false,
    });
  };

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
}

export { UserProvider, UserContext };
