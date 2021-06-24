import React from 'react';
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import './UserStatisticRow.scss';
const UserStatisticRow = () => {

    const users = useSelector(store => store.users);

    const userRow = users && users.map(user =>
            <tr>
                <td className={'row'}><NavLink className={'row__text'} to={`/user_statics/${user.id}`}>{user.id}</NavLink></td>
                <td className={'row'}><NavLink className={'row__text'} to={`/user_statics/${user.id}`}>{user.first_name}</NavLink></td>
                <td className={'row'}><NavLink className={'row__text'} to={`/user_statics/${user.id}`}>{user.last_name}</NavLink></td>
                <td className={'row'}><NavLink className={'row__text'} to={`/user_statics/${user.id}`}>{user.email}</NavLink></td>
                <td className={'row'}><NavLink className={'row__text'} to={`/user_statics/${user.id}`}>{user.gender}</NavLink></td>
                <td className={'row'}><NavLink className={'row__text'} to={`/user_statics/${user.id}`}>{user.ip_address}</NavLink></td>
                <td className={'row'}><NavLink className={'row__text'} to={`/user_statics/${user.id}`}>{user.total_clicks}</NavLink></td>
                <td className={'row'}><NavLink className={'row__text'} to={`/user_statics/${user.id}`}>{user.total_views}</NavLink></td>
            </tr>
        )

    return (
        <>
            {userRow}
        </>
    );
};

export default UserStatisticRow;