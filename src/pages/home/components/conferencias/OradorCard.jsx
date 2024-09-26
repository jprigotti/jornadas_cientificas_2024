import React from 'react'

const OradorCard = ({orador}) => {
  return (
    <div>
      <p>{orador.conference}</p>
      <p>{orador.nmae}</p>
      <img src={orador.image} alt="Foto Orador" />
    </div>
  )
}

export default OradorCard
