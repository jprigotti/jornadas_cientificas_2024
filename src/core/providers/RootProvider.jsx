import React from 'react'
import HooksProvider from '../../providers/HooksProvider'

const RootProvider = ({ children }) => {
  return (
    <HooksProvider>
      {children}
    </HooksProvider>
  )
}

export default RootProvider
