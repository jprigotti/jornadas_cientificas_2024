import React from 'react'
import NavbarView from '../../components/navbar/view/NavbarView'
import FooterView from '../../components/footer/view/FooterView'


const Layout = ({ children }) => {
    return (
        <div>
            <NavbarView />
            {children}
            <FooterView />
        </div>
    )
}

export default Layout
