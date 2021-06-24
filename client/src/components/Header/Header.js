import React from 'react';
import {useLocation} from "react-router";
import './Header.scss';
import Container from "../Container/Container";

const Header = () => {

    const location = useLocation()

    return (
        <div className={'header'}>
            <Container>
                <p className={location.pathname === '/' ? `header__logo` : `header__simpleLogo`}>AppCo</p>
            </Container>
        </div>
    );
};

export default Header;