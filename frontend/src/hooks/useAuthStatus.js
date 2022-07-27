import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingStatus, setChcechkingStatus] = useState(true);

    const {user} = useSelector((state) => state.auth);

    useEffect(() => {
        if (user) {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }

        setChcechkingStatus(false);
    }, [user]);


    return {loggedIn, checkingStatus: checkingStatus};
};


