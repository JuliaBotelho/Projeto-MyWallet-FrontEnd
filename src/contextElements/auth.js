import React, {createContext, useState} from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [userData, setUserData] = useState({});
    const [render, setRender] = useState(false)

    return(
        <AuthContext.Provider value={{userData, setUserData, render, setRender}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;
