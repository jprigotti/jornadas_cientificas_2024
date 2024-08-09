import React, { useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const GlobalProvider = ({ children }) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [desktopView, setDesktopView] = useState(false);

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
        <GlobalContext.Provider
            value={
                {
                    desktopView,
                }
            }>

            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider;