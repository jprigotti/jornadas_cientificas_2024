import React, { useState, useEffect } from "react";
import { ProgramaContext } from "../context/ProgramaContext";

const ProgramaProvider = ({ children }) => {
    const calendario = ["8", "12", "13", "14", "15"]
    const [programaDay, setProgramaDay] = useState(calendario[0])
    const [programaFiltrado, setProgramaFiltrado] = useState()

    return (
        <ProgramaContext.Provider
            value={
                {
                    calendario,
                    programaDay,
                    setProgramaDay,
                    programaFiltrado,
                    setProgramaFiltrado
                }
            }>
            {children}
        </ProgramaContext.Provider>
    )
}

export default ProgramaProvider;