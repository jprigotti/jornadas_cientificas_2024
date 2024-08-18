import React from 'react'

const Autoridades = () => {
  const authorities = [
    { title: 'Director HDFS', name: 'Dr. Federico Charabora' },
    { title: 'Subdirector HDFS', name: 'Dr. Carlos Falco' },
    { title: 'President AMM Filial Santojanni', name: 'Dr. Marcelo Struminger' },
    { title: 'Presidenta', name: 'Dra. María Vivona' },
    { title: 'Vicepresidente', name: 'Dr. Daniel Coso' },
    { title: 'Secretario General', name: 'Dr. Castillo' },
    { title: 'Secretario Adjunto', name: 'Dr. Retamozo' },
    { title: 'Tesorero', name: 'Dr. Pablo Iturrieta' },
  ];

  return (
    <section className="ms-40 bg-White flex flex-col items-center">
      <div className='bg-PauGreenLight w-3/4 flex flex-col items-center rounded-tl-xl rounded-br-xl mb-5'>
        <h2 className="text-3xl text-White font-bold text-center p-5">Autoridades</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {authorities.map((authority, index) => (
          <div key={index} className="bg-white p-6 shadow-darkShadow rounded-lg">
            <h3 className="text-xl font-semibold">{authority.title}</h3>
            <p className="text-gray-700 mt-2">{authority.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Autoridades
