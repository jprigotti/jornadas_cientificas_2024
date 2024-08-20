import React from 'react'
import NavItems from './NavItems'
import { Link } from 'react-router-dom'

const NavMobile = () => {
    return (
        <div>
            <ul>
                {NavItems.map(item => (
                    <li key={item.id}>
                        <Link to={item.link}>{item.name} </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavMobile
