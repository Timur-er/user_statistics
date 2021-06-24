import React, {useEffect} from 'react';
import './UsersTable.scss';
import {getUsersData} from "../../http/usersApi";
import UserStatisticRow from "../../components/UserData/UserStatisticRow";
import Container from "../../components/Container/Container";
import Pagination from "../../components/Pagination/Pagination";
import {useDispatch} from "react-redux";
import { setUsers } from "../../store/usersReducer/actions";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const UsersTable = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        getUsersData().then(res => dispatch(setUsers(res.data)))
    }, []);

    return (
        <Container>
            <Breadcrumbs/>
            <h1>User statics</h1>
            <div>
                <table className={'table'}>
                    <thead>
                    <tr className={'table__header'}>

                        <th className={'table__headerColumn'}>id</th>
                        <th className={'table__headerColumn'}>First name</th>
                        <th className={'table__headerColumn'}>Last Name</th>
                        <th className={'table__headerColumn'}>Email</th>
                        <th className={'table__headerColumn'}>Gender</th>
                        <th className={'table__headerColumn'}>Ip address</th>
                        <th className={'table__headerColumn'}>Total clicks</th>
                        <th className={'table__headerColumn'}>Total page views</th>


                    </tr>
                    </thead>

                    <tbody className={'table__body'}>
                    <UserStatisticRow/>
                    </tbody>

                </table>
            </div>
            <Pagination/>
        </Container>
    );
};

export default UsersTable;