import React from 'react'
const colaboradores = [
  { title: '', image: '/images/colaboradores/institucional_1.jpg' },
  { title: '', image: '/images/colaboradores/institucional_2.jpg' },
  { title: '', image: '/images/colaboradores/institucional_3.jpg' },
  { title: '', image: '/images/colaboradores/laboratorio_1.jpg' },
  { title: '', image: '/images/colaboradores/laboratorio_2.jpg' },
  { title: '', image: '/images/colaboradores/laboratorio_3.jpg' },
  { title: '', image: '/images/colaboradores/laboratorio_4.jpg' },
  { title: '', image: '/images/colaboradores/laboratorio_5.jpg' },
  { title: '', image: '/images/colaboradores/laboratorio_6.jpg' },
  { title: '', image: '/images/colaboradores/laboratorio_7.jpg' },
  { title: '', image: '/images/colaboradores/laboratorio_8.jpg' },
  { title: '', image: '/images/colaboradores/laboratorio_9.jpg' },
];

const Colaboran = () => {
  return (
    <section className="ms-40 bg-White flex flex-col items-center">
      <div className='container outer-container'>
        <div className='bg-PauGreenLight flex flex-col items-center rounded-tl-xl rounded-br-xl mb-5'>
          <h2 className="text-3xl text-White font-bold text-center p-5">Colaboran con las Jornadas</h2>
        </div>

        <div className="inner-container grid grid-cols-1 sm:grid-cols-6 gap-6  mx-auto">
          {colaboradores.map((colaborador, index) => (
            <div key={index} className="bg-white rounded-lg p-5 shadow-lightShadowGrey hover:shadow-darkShadowGreen transition-shadow duration-200 flex flex-col justify-center items-center">
              <h3 className="text-xl font-semibold">{colaborador.title}</h3>
              <img src={colaborador.image}></img>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Colaboran
