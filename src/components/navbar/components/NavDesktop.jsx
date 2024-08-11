import React from 'react'
import navItems from './navItems'
import NavLink from './NavLink'
import {
    signOut
} from "../../../services/firebase.services"
import { useAuth } from '../../../core/auth/hooks/useAuth'

const NavDesktop = () => {

    const { isAuthenticated } = useAuth();

    return (
        // <div className='h-screen flex flex-col items-start py-3 px-3 text-White bg-Violet'>
        <div className='h-screen flex flex-col items-start py-3 px-3 text-White bg-gradient-to-b from-Violet to-LightViolet'>

            <ul className='flex flex-col'>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='pb-3'>
                        <NavLink link={item.link} name={item.name} ></NavLink>
                    </li>
                ))}
            </ul>
            {
                !isAuthenticated
                    ? (
                        <NavLink link={"/login"} name={"Login"} />
                    ) : (
                        <>
                            <NavLink link={"/perfil"} name={"Mi perfil"} />
                            <button onClick={() => signOut()}>Sign Out</button>
                        </>
                    )
            }
        </div >
    )
}

export default NavDesktop
