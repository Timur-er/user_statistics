import React from 'react';
import {useLocation} from "react-router";
import {NavLink} from "react-router-dom";
import './Breadcrumbs.scss';
import {useSelector} from "react-redux";

const Breadcrumbs = () => {
    const location = useLocation().pathname;
    const pages = location.split('/');
    const user = useSelector(store => store.user);

    const crumbs = pages.map((page, index) => {
        if (page === '') {
            return <NavLink to={'/'} className={'breadcrumbs__link'}>Main page</NavLink>
        } else if (parseInt(page)) {
            const name = user.first_name;
            const surname = user.last_name;
            return <span className={'breadcrumbs__activePage'}>{name} {surname}</span>
        } else {
            const activeLink = pages.length - 1 === index
            if (activeLink) {
                return <span className={'breadcrumbs__activePage'}>User statistic</span>
            } else {
                return <NavLink to={`/${page}`} className={'breadcrumbs__link'}>User statistic</NavLink>
            }
        }
    })

    return (
        <div className={'breadcrumbs__wrapper'}>
            {crumbs}
        </div>
    );
};

export default Breadcrumbs;