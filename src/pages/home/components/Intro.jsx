import React from 'react'
import '../../../App.css'

const Intro = () => {
  return (
    <section className="ms-40 bg-White flex flex-col items-center mt-3 rounded-tl-xl">
      <div className='container outer-container'>
        <div className='bg-PauGreenLight flex flex-col items-center rounded-tl-xl rounded-br-xl'>
          <h2 className="text-3xl text-White font-bold text-center p-5">Mensaje de la presidente</h2>
        </div>
        <div className='inner-container'>
          <div class="space-y-4">
            <p className="text-indent indent-6 text-justify">
              Les damos la bienvenida a esta nueva edición de las Jornadas Científicas del Hospital Santojanni y CESACs del Area Programática.
            </p>
            <p className="text-indent indent-6 text-justify" >
              Este año nuestro lema nos interpela para pensar como desafío la calidad de atención de los pacientes. Esto no es posible sin incorporar los avances tecnológicos, el trabajo interdisciplinario y la accesibilidad a la salud.
            </p>
            <p className="text-indent indent-6 text-justify">
              Este espacio no solo nos debería permitir el intercambio de saberes, sino es el lugar donde debemos plantearnos si todos hablamos de lo mismo en términos de Salud y Calidad de Atención. Sin lugar a dudas habrá perspectivas diferentes, pero el eje de discusión debería estar centrado en el paciente, en términos del derecho a una Salud de Calidad.
            </p>

            <p className="text-indent indent-6 text-justify">
              También estas jornadas nos propusieron un cambio, donde los profesionales más jovenes, muchos aún en formación, son protagonistas fundamentales, es por ello que participan de manera conjunta y forman parte del comité organizador de las mismas. Debemos decir que esto ha sido una experiencia inspiradora y muy motivadora, nos contagiaron su entusiasmo y han sido un gran motor para impulsar ideas, nuevas perspectivas y desafíos. Siguiendo esta línea el Comité Científico este año ha creado un premio para la producción científica destinado exclusivamiente a los profesionales en formación, el premio Dr. Mario Ripoli, en honor a quien en vida dedicara gran parte de su carrera profesional a los residentes y concurrentes.
            </p>

            <p className="text-indent indent-6 text-justify">
              Asimismo, queremos este año darle un lugar preponderante a los trabajos libres, por ello hemos decidido otorgar una distinción al mejor trabajo presentado.
            </p>

            <p className="text-indent indent-6 text-justify">
              Finalmente creemos muy importante la participación de todos y todas los profesionales de la salud, sin ello difícilmente podamos generar cambios y nuevas propuestas, les invitamos a ser parte de este encuentro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro
