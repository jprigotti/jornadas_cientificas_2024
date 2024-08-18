import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ link: link, name: name, icon: NavIcon }) => {
    return (
        <div className='flex flex-col items-center'>
            <Link
                className='pb-3 text-center text-sm flex flex-col '
                to={link}>
                <NavIcon with="40px" height="40px" strokeColor='#c2c2c2' strokeWidth={5} />{name} </Link>
        </div>
    )
}

export default NavLink
