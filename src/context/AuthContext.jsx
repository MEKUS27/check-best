import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const getUserFromStorage = () => {
  try {
    return JSON.parse(localStorage.getItem("user")) || null;
  } catch {
    return null;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getUserFromStorage);

  const updateUser = (data) => setCurrentUser(data);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
