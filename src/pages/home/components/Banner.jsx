import React from 'react'
import { useNavigate } from 'react-router-dom'

const Banner = () => {
    const navigate = useNavigate();

    const handleInscripcion = () => {
        navigate('/perfil');
    }

    return (
        <div className="relative h-screen w-full ps-40">
            {/* Background Video */}
            {/* <img
                className="absolute inset-0 h-full w-full object-cover"
                src="/images/image_banner.JPG" alt="imagen banner">
            </img> */}

            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source src="/images/video_banner.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-Black bg-opacity-65"></div>

            {/* Titles */}
            <div className="relative flex flex-col items-center justify-center h-full">

                <h1 className="text-center text-White text-6xl font-bold">
                    XXXIX JORNADAS
                </h1>
                <h1 className="text-center text-White text-6xl font-bold">
                    CIENTIFICAS
                </h1>
                <h1 className="text-center text-White text-5xl font-semibold pb-10">
                    HOSPITAL D SANTOJANNI
                </h1>
                <h2 className="text-White text-3xl md:text-3xl font-bold pb-10">
                    11 al 15 de noviembre
                </h2>
                <h2 className="text-White text-2xl md:text-5xl font-bold">
                    Estrategias para abordar los retos actuales en salud
                </h2>
                <h2 className="text-White text-2xl md:text-5xl font-bold mb-10">
                    Rol del sistema público
                </h2>
                <div>
                    <button
                        className='text-xl font-bold px-10 py-5 bg-LightViolet text-White rounded-md hover:bg-Violet hover:shadow-lg transition duration-300 ease-in-out'
                        onClick={handleInscripcion}>
                        Incribirme
                    </button>

                </div>

            </div>
        </div>
    )
}

export default Banner
