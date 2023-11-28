import React, { createContext, useState } from 'react';

export const MenuContext = createContext({
    isMenuOpen: true,
    switchMenu: () => {},
});

const NavState = ({ children }: any) => {
    const [isMenuOpen, toggleMenu] = useState(false);

    function switchMenu() {
        toggleMenu(!isMenuOpen);
    }

    const valueProps = {isMenuOpen, switchMenu}

    return (
        <MenuContext.Provider value={valueProps}>{children}</MenuContext.Provider>
    );
};

export default NavState;