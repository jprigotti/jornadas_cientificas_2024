import React, {useState} from "react";
export const usePrograma = () => {

    const calendario = ["8-11", "12-11", "13-11", "14-11", "15-11"]
    const [showPrograma, setShowPrograma] = useState(calendario[0])


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
        showPrograma,
        setShowPrograma,
        ordenarPrograma
    }
}