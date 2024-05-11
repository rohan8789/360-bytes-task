import React, {Children, createContext, useState, useCallback} from 'react'

export const AuthContext = createContext({
  isStudentLoggedIn:false,
  isAdminLoggedIn:false,
  stu_login: ()=>{},
  stu_logout: ()=>{},
  adm_login: ()=>{},
  adm_logout: ()=>{}
});

const AuthProvider = ({children}) => {
  const [isStudentLoggedIn, setIsStudentLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const stu_login = useCallback((sid) => {
    setIsStudentLoggedIn(sid);
    localStorage.setItem('stu-data', JSON.stringify({sid:sid}));
  }, []);
  const stu_logout = useCallback(() => {
    setIsStudentLoggedIn(null);
    localStorage.removeItem('stu-data');
  }, []);

  const adm_login = useCallback((aid) => {
    setIsAdminLoggedIn(aid);
    localStorage.setItem("adm-data", JSON.stringify({ aid:aid }));
  }, []);
  const adm_logout = useCallback(() => {
    setIsAdminLoggedIn(null);
    localStorage.removeItem('adm-data');
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isStudentLoggedIn:!!isStudentLoggedIn,
        isAdminLoggedIn:!!isAdminLoggedIn,
        stu_login,
        stu_logout,
        adm_login,
        adm_logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider