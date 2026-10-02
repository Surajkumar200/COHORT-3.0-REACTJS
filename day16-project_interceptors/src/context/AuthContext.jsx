import { createContext, useState } from "react";

export const AuthStore = createContext();

export const AuthProvider = ({ children }) => {

    const [registerdUsers, setRegisterdUsers] = useState(
       JSON.parse(localStorage.getItem("registeredUser"))|| []
    );
    const [loggedInUsers, setLoggedInUsers] = useState(
      JSON.parse(localStorage.getItem("loggedInUser")) || null,
    );



    return (
      <AuthStore.Provider
        value={{
          registerdUsers,
          setRegisterdUsers,
          loggedInUsers,
          setLoggedInUsers,
        }}
      >
        {children}
      </AuthStore.Provider>
    );
};