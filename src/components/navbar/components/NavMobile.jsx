import React from 'react'
import navItems from './navItems'
import { Link } from 'react-router-dom'

const NavMobile = () => {
    return (
        <div>
            <ul>
                {navItems.map(item => (
                    <li key={item.id}>
                        <Link to={item.link}>{item.name} </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavMobile
