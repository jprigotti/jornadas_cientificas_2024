import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ link, name }) => {
    return (
        <>
            <Link
            className='pb-3 text-center' 
            to={link}>{name} </Link>
        </>
    )
}

export default NavLink
