import React from 'react';
import './Footer.scss';
import Container from "../Container/Container";
import {useLocation} from "react-router";

const Footer = () => {

    const location = useLocation();

    return (
        <div className={location.pathname === '/' ? `footer footer__main` :  `footer footer__simple`}>
            <Container>
                <div className={location.pathname === '/' ? `footer__mainBody` :  `footer__body`}>
                    <p className={'footer__logo'}>AppCo</p>
                    <p>All rights reserved by ThemeTags</p>
                    <p>Copyrights © 2019. </p>
                </div>
            </Container>
        </div>
    );
};

export default Footer;