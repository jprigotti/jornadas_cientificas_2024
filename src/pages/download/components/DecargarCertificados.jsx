import React, { useState, useEffect } from 'react'
import { datos_certificados } from './datos_certificados'
import ButtonVioletSM from '../../../components/buttons/ButtonVioletSM'
import { useGenerateCertificados } from '../../perfil/hooks/useGenerateCertificados'


const DescargarCertificados = () => {
    const { generateCertificado } = useGenerateCertificados()
    const [filteredCertificados, setFilteredCertificados] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = datos_certificados.filter(certificado =>
            Object.values(certificado).some(value =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        setFilteredCertificados(filtered)
        setSearchTerm("")
    }

    return (
        <div>
            <h1>Descarga tu certificado</h1>

            <div className="search-area">
                <form onSubmit={handleSearch}>
                    <input 
                        type="text" 
                        placeholder="Buscar por palabra clave..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                    <button type="submit">Buscar</button>
                </form>
            </div>

            <div>
                {filteredCertificados?.map((certificado, index) => (
                    <div
                        key={index}
                        className='pt-5'>
                        <div>
                            {Object.entries(certificado).map(([key, value]) => (
                                (
                                    <p key={key}>
                                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                                    </p>
                                )
                            ))}
                        </div>
                        <ButtonVioletSM onClick={() => generateCertificado(certificado)} label={"Descargar"} />
                    </div>
                ))}
            </div>

        </div>
    )
}


export default DescargarCertificados