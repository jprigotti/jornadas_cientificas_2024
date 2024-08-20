import React from 'react'

const FooterView = () => {
  return (
    <div className='p-5 bg-PauBaseComponents ms-40'>
      {/* Thin line on top */}
      <div className="w-full border-t border-gray-300 mb-5" />

      {/* Logo */}
      <div>
        <img className='h-[80px]'
          src="/images/logo_jornadas.png" alt="Logo jornadas" />
      </div>

    </div>
  )
}

export default FooterView
