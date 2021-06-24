import React from 'react';
import './CardLink.scss';


const CardLink = ({title, description, icon}) => {
    return (
        <div className={'card'}>
            <div className={'card__image'}>{icon}</div>
            <p className={'card__title'}>{title}</p>
            <p className={'card__description'}>{description}</p>
        </div>
    );
};

export default CardLink;