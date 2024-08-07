import { useContext } from "react";
import { HooksContext } from "../context/HooksContext";

export const useHooks = () => {
    const {
        desktopView,
        isLoggedIn,
        setIsLoggedIn
    } = useContext(HooksContext)

    return {
        desktopView,
        isLoggedIn,
        setIsLoggedIn
    };
}

