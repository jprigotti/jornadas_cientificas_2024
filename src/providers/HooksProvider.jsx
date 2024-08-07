import React, { useState, useEffect } from "react";
import { HooksContext } from "../context/HooksContext";

const HooksProvider = ({ children }) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [desktopView, setDesktopView] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setDesktopView((windowWidth >= 768) ? true : false)
    }, [windowWidth]);


    return (
        <HooksContext.Provider
            value={
                {
                    desktopView,
                    isLoggedIn,
                    setIsLoggedIn
                }
            }>

            {children}
        </HooksContext.Provider>
    )
}

export default HooksProvider;