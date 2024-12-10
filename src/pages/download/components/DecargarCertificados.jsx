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
        <div className='flex flex-col items-center'>
            <h1 className="main-title text-center py-5">Descarga tu certificado</h1>

            <div className="w-[330px] p-5 mb-10 bg-Blue rounded-xl">
                <form
                    className='flex justify-center'
                    onSubmit={handleSearch}>
                    <input
                        className='w-[200px] me-5 p-2'
                        type="text"
                        placeholder="Buscar por palabra clave..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button
                        className='bg-LightGreen px-2 text-Black font-medium'
                        type="submit">Buscar</button>
                </form>
            </div>

            <div className='flex flex-col items-center'>
                {filteredCertificados?.map((certificado, index) => (
                    <div
                        key={index}
                        className='w-3/4 p-5 mb-5 border rounded-xl'>

                        <div className='pb-5'>
                            {Object.entries(certificado).map(([key, value]) => (
                                key != 'tipo' &&(
                                    <p key={key}>
                                        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
                                    </p>
                                )
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <ButtonVioletSM onClick={() => generateCertificado(certificado)} label={"Descargar"} />
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}


export default DescargarCertificados