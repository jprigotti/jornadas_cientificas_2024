import React from 'react'
import { programa } from './programa'
import CardMesaRedonda from './CardMesaRedonda'
import CardInscripcion from './CardInscripcion';
import { usePrograma } from '../hooks/usePrograma';
import CardApertura from './CardApertura';

const ProgramaContainer = () => {

    const { ordenarPrograma } = usePrograma();

    const programaOrdenado = ordenarPrograma(programa)


    return (
        <div>
            {
                programaOrdenado.map((item, index) => (
                    item.categoria == "mesa_redonda" ?
                        (<CardMesaRedonda key={index} data={item} />) :
                        item.categoria == "inscripcion" ?
                            (<CardInscripcion key={index} data={item} />) : 
                        item.categoria == "apertura" ?
                            (<CardApertura key={index} data={item} />) : null

                ))}
        </div>
    );
};

export default ProgramaContainer