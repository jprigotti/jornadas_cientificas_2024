import React from 'react'
import NavbarView from '../../components/navbar/view/NavbarView'
import FooterView from '../../components/footer/view/FooterView'


const Layout = ({ children }) => {
    return (
        <div className="flex">
            {/* NavbarView is fixed to the left */}
            <div className="fixed top-0 left-0 h-full w-32">
                <NavbarView />
            </div>

            {/* Main content area (children and FooterView) */}
            <div className="ml-32 flex flex-col w-full">
                <div className="flex-grow">
                    {children}
                </div>
                <FooterView />
            </div>
        </div>
    )
}

export default Layout
