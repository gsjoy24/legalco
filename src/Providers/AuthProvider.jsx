/* eslint-disable react/prop-types */

import { createContext, useState } from "react";
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
   const [loading, setLoading] = useState(true);
   const authInfo = {
      loading,
      setLoading,
   };
   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export const UserAuth = () => { };
