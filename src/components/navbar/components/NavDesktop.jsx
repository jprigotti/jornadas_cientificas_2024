import React from 'react'
import NavItems from './NavItems'
import NavLink from './NavLink'
import {
    signOut
} from "../../../services/firebase.services"
import { useAuth } from '../../../core/auth/hooks/useAuth'
import LoginIcon from './svgIcons/LoginIcon'

const NavDesktop = () => {

    const { isAuthenticated } = useAuth();

    return (
        // <div className='h-screen flex flex-col items-start py-3 px-3 text-White bg-Violet'>
        <div className='h-screen flex flex-col items-start py-3 px-3 text-White bg-gradient-to-b from-PauGreenDark to-PauGreenLight rounded-tl-xl rounded-tr-xl'>

            <ul className='flex flex-col items-center w-full pt-5'>
                {NavItems.map(item => (
                    <li
                        key={item.id}
                        className='pb-3'>
                        <NavLink
                            {...item}></NavLink>
                    </li>
                ))}
            </ul>
            {
                !isAuthenticated
                    ? (
                        <div className='w-full flex justify-center'>
                            <NavLink link={"/login"} name={"Login"} icon={LoginIcon} />
                        </div>

                    ) : (
                        <div className='w-full flex flex-col items-center'>
                            <NavLink link={"/perfil"} name={"Mi perfil"} icon={LoginIcon}/>
                            <button onClick={() => signOut()}>Sign Out</button>
                        </div>

                    )
            }
        </div >
    )
}

export default NavDesktop
