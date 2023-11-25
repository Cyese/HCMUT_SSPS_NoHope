import React, { useState } from 'react';

const UserContext = React.createContext({ mssv: '', loggedin: false, admin: false });

function UserProvider({ children }) {
  const [user, setUser] = useState({ mssv: '', loggedin: false, admin: false });

  // Login updates the user data with a mssv parameter
  const login = (mssv) => {
    var isadmin;
    if (mssv === '1') isadmin = true;
    else isadmin = false;

    setUser((user) => ({
      mssv: mssv,
      loggedin: true,
      admin: isadmin,
    }));
  };

  // Logout updates the user data to default
  const logout = () => {
    setUser((user) => ({
      mssv: '',
      loggedin: false,
      admin: false,
    }));
  };

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
}

export { UserProvider, UserContext };
