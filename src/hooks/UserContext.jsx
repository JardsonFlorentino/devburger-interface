import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(true);

    const putUserData = (userInfo) => {
        setUserInfo(userInfo);
        localStorage.setItem('burger-db:userData', JSON.stringify(userInfo));
    }

    const logout = () => {
        setUserInfo({});
        localStorage.removeItem('burger-db:userData');
    }

    useEffect(() => {
        const userInfoLocalStorage = localStorage.getItem('burger-db:userData');
        if (userInfoLocalStorage) {
            setUserInfo(JSON.parse(userInfoLocalStorage));
        }
        setLoading(false);
    }, [])

    return (
        <UserContext.Provider value={{ userInfo, putUserData, logout, loading }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}