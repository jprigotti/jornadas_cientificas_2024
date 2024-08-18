import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ link: link, name: name, icon: NavIcon }) => {
    return (
        <div className='flex flex-col items-center'>
            <Link
                className='pb-3 text-center text-sm flex flex-col items-center '
                to={link}>
                <div className="w-[60px] h-[60px] rounded-full border-[1px]  hover:bg-White-20 transition-colors duration-200 flex justify-center items-center">
                    <NavIcon with="40px" height="40px" />
                </div>
                {name}
            </Link>
        </div >
    )
}

export default NavLink
