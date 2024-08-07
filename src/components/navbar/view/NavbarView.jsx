import React from 'react'
import { useHooks } from '../../../hooks/useHooks'
import NavDesktop from '../components/NavDesktop';
import NavMobile from '../components/NavMobile';

const NavbarView = () => {

  const { desktopView } = useHooks();

  return (

    (desktopView) ? <NavDesktop /> : <NavMobile />

  )
}

export default NavbarView
