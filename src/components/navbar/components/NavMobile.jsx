import React, { useState, useEffect } from 'react'
import NavItems from './NavItems'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'

const NavMobile = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [hamburgerCheckbox, setHamburgerCheckbox] = useState(false);

    useEffect(() => {
        menuOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'visible';
    }, [menuOpen]);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
        setHamburgerCheckbox(!hamburgerCheckbox);
    };



    return (
        <div className='w-screen fixed top-0 left-0 z-20 bg-White'>

            <div className='p-2'>
                <Hamburger
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                    hamburgerCheckbox={hamburgerCheckbox}
                    setHamburgerCheckbox={setHamburgerCheckbox}
                    onClick={handleMenuToggle}
                />
            </div>

            {
                menuOpen &&
                <div className="w-screen h-screen flex justify-center items-start  bg-White">
                    <ul>
                        {NavItems.map(item => (
                            <li key={item.id}>
                                <Link to={item.link} onClick={() => setMenuOpen(false)}>{item.name} </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            }

        </div>
    )
}

export default NavMobile
