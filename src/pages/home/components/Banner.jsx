import React from 'react'

const Banner = () => {
    return (
        <div className="relative h-screen w-full">
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

            {/* Title */}
            <div className="relative flex flex-col items-center justify-center h-full">

                <h1 className="text-center text-White text-5xl font-bold">
                    XXXIX JORNADAS
                </h1>
                <h1 className="text-center text-White text-5xl font-bold">
                    CIENTIFICAS
                </h1>
                <h1 className="text-center text-White text-3xl font-bold pb-10">
                    HOSPITAL D SANTOJANNI
                </h1>
                <h2 className="text-White text-3xl md:text-3xl font-bold pb-10">
                    11 al 15 de noviembre
                </h2>
                <h2 className="text-White text-5xl md:text-5xl font-bold">
                    Estrategias para abordar los retos actuales en salud
                </h2>
                <h2 className="text-White text-5xl md:text-5xl font-bold">
                    Rol del sistema público
                </h2>


            </div>
        </div>
    )
}

export default Banner
