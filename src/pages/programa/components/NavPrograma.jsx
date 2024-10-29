import React from 'react'
import { usePrograma } from '../hooks/usePrograma'

const NavPrograma = () => {

  const { calendario, setProgramaDay } = usePrograma();

  return (
    <div className='d-flex py-10'>
      {calendario.map((day, index) => {
        return (
          <button 
          key={index}
          className='px-5'
          onClick={() => setProgramaDay(day)}
          >{day}</button>
        )
      })}
    </div>
  )
}

export default NavPrograma
