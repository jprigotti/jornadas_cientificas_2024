import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const useGlobal = () => {
    const {
        desktopView
    } = useContext(GlobalContext)

    return {
        desktopView
    };
}

