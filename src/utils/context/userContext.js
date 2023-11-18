import React, { useState } from 'react';

const UserContext = React.createContext({ mssv: '', loggedin: false });

function UserProvider({ children }) {
  const [user, setUser] = useState({ mssv: '', loggedin: false });

  // Login updates the user data with a mssv parameter
  const login = (mssv) => {
    setUser((user) => ({
      mssv: mssv,
      loggedin: true,
    }));
  };

  // Logout updates the user data to default
  const logout = () => {
    setUser((user) => ({
      mssv: '',
      loggedin: false,
    }));
  };

  return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
}

export { UserProvider, UserContext };
