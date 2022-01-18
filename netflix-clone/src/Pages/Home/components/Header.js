import React from "react";
import './Header.css'

import logonetflix from '../../../img/logonetflix.png'
import logouser from '../../../img/logouser.png'

const Header = ({headerBackground}) => {
    return (
        <header className={headerBackground ? 'header--background' : ''} >
            <img className="header--netflix" src={logonetflix} alt="Netflix" />
            <img className="header--user" src={logouser} alt='Usuário' />
        </header>
    )
}

export default Header;