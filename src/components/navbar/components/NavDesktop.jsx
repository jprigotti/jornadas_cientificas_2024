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
        <div className='h-screen flex flex-col items-start py-3 px-3 text-White bg-gradient-to-b from-PauGreenDark to-PauGreenLight rounded-tl-lg rounded-tr-lg'>

            <ul className='flex flex-col items-center w-full'>
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
                        <div className='w-full flex justify-center'>
                            <NavLink link={"/login"} name={"Login"} />
                        </div>

                    ) : (
                        <div className='w-full flex justify-center'>
                            <NavLink link={"/perfil"} name={"Mi perfil"} />
                            <button onClick={() => signOut()}>Sign Out</button>
                        </div>

                    )
            }
        </div >
    )
}

export default NavDesktop
