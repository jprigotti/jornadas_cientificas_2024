import React, { useState, useEffect, useContext } from "react";
import { programa } from "../components/programa";
import { ProgramaContext } from "../context/ProgramaContext";


export const usePrograma = () => {

    const { calendario,
        calendarioMuestra,
        programaDay,
        setProgramaDay,
        programaFiltrado,
        setProgramaFiltrado
    } = useContext(ProgramaContext)




    useEffect(() => {
        const programaFiler = programa.filter(item => item.dia == programaDay)
        setProgramaFiltrado(programaFiler)
    }, [programaDay]);


    const ordenarPrograma = (programa) => {
        return programa.slice().sort((a, b) => {
            // Convertir día y hora a formato comparable
            const fechaA = new Date(`2024-12-${a.dia}T${a.hora.split(' - ')[0]}`);
            const fechaB = new Date(`2024-12-${b.dia}T${b.hora.split(' - ')[0]}`);

            // Comparar fechas
            return fechaA - fechaB;
        });
    };



    return {
        calendario,
        calendarioMuestra,
        programaDay,
        setProgramaDay,
        programaFiltrado,
        setProgramaFiltrado
    }
}