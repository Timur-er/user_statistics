import React from 'react';
import {getUsersData} from "../../http/usersApi";
import './Pagination.scss';
import {useDispatch, useSelector} from "react-redux";
import {setUsers} from "../../store/usersReducer/actions";
import {setLastPage, setPage, setStartPage} from "../../store/paginationReducer/actions";
import {paginationArrow} from "../../svg/paginationArrow";

const Pagination = () => {

    const dispatch = useDispatch();
    const paginationData = useSelector(store => store.pagination);

    let pageCount = Math.ceil(1000 / 30);
    let pages = []


    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }

    const pagination = e => {
        const page = e.target.innerHTML;
        dispatch(setPage(parseInt(page)));
        getUsersData(parseInt(page)).then(res => dispatch(setUsers(res.data)))
    }

    const paginationItem = pages.map((page, index) => {
        const currentPage = paginationData.currentPage;
        const startPage = paginationData.startPage;
        const lastPage = paginationData.lastPage;
        const btnClassName = currentPage === index + 1
            ? 'pagination__button pagination__buttonActive'
            : 'pagination__button';

        if (index >= startPage && index <= lastPage) {
            return <button className={btnClassName} onClick={pagination}>{page}</button>
        } else {

        }
    })

    const nextPages = () => {
        const currentLastPage = paginationData.lastPage;
        const newStartPage = currentLastPage + 1;
        const newLastPage = currentLastPage + 5;
        dispatch(setStartPage(newStartPage));
        dispatch(setLastPage(newLastPage));
    }

    const prevPages = () => {
        const currentStartPage = paginationData.startPage;
        const newStartPage = currentStartPage - 5;
        const newLastPage = currentStartPage - 1;
        dispatch(setStartPage(newStartPage));
        dispatch(setLastPage(newLastPage));
    }


    const page = paginationData.startPage;
    const lastPage = paginationData.lastPage
    const isFirstPage = page === 0
    const isLastPage = lastPage === pageCount
    return (
        <div className={'pagination'}>
            <button disabled={isFirstPage} className={'pagination__arrows'} onClick={() => prevPages()}>{paginationArrow(false, isFirstPage ? '#F1F1F1' : '#3A80BA')}</button>
            <div className={'pagination__buttons'}>
                {paginationItem}
            </div>
            <button disabled={isLastPage} className={'pagination__arrows'} onClick={() => nextPages()}>{paginationArrow(true, isLastPage ? '#F1F1F1' : '#3A80BA')}</button>
        </div>
    );
};

export default Pagination;