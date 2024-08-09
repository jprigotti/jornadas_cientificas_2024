import React from 'react'
import navItems from './navItems'
import { Link } from 'react-router-dom'
import {
    signOut
} from "../../../services/firebase.services"

const NavDesktop = () => {
    return (
        <div className='flex items-start pt-3'>
            <ul className='flex'>
                {navItems.map(item => (
                    <li
                        key={item.id}
                        className='px-3 mb-3'>
                        <Link to={item.link}>{item.name} </Link>
                    </li>
                ))}
            </ul>
            <button onClick={() => signOut()}>Sign Out</button>
        </div>
    )
}

export default NavDesktop
