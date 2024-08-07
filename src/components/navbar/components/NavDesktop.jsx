import React from 'react'
import navItems from './navItems'
import { Link } from 'react-router-dom'

const NavDesktop = () => {
    return (
        <div >
            <ul className='flex'> 
                {navItems.map(item => (
                    <li 
                    key={item.id}
                    className='px-3 mb-3'>
                    <Link to={item.link}>{item.name} </Link>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default NavDesktop
