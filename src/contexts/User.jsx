import React, { createContext, useState } from "react";

export const UserContext = createContext();

const User = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default User;
