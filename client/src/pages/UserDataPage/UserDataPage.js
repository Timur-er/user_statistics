import React, {useEffect, useState} from 'react';
import Container from "../../components/Container/Container";
import './UserDataPage.scss';
import {useLocation} from "react-router";
import {getFirstDate, getStatisticByDate, getUserById} from "../../http/usersApi";
import Calendar from "../../components/Calendar/Calendar";
import {calendar} from "../../svg/calendar";
import {getDate} from "../../components/Calendar/func";
import {useDispatch, useSelector} from "react-redux";
import {setRequestDate} from "../../store/dateReducer/actions";
import {setUser} from "../../store/userReducer/actions";
import ClicksGraph from "../../components/ClicksGraph/ClicksGraph";
import ViewsGraph from "../../components/ViewsGraph/ViewsGraph";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const UserDataPage = () => {

        const dispatch = useDispatch();
        const location = useLocation();
        const user = useSelector(store => store.user)
        const [statistic, setStatistic] = useState()
        const storageDate = useSelector(store => store.date);
        const [isCalendarOpen, setIsCalendarOpen] = useState(false);
        let id = location.pathname.split('/');


        useEffect(() => {
            id = id[id.length - 1];
            getUserById(id).then(res => {
                dispatch(setUser(res.data[0]))
            });


            getFirstDate(id).then(res => {
                const fromDate = res.data.fromDate;
                const inWeek = res.data.inWeek;
                const dates = {
                    'fromDate': {'requestDate': fromDate, 'date': getDate(fromDate, true)},
                    'selectedDate': {'requestDate': inWeek, 'date': getDate(inWeek, true)}
                };
                dispatch(setRequestDate(dates))
                getStatisticByDate(id, fromDate, inWeek).then(res => setStatistic(res.data))
            })

        }, [])

        const openCalendars = () => {
            if (isCalendarOpen) {
                setIsCalendarOpen(false)
            } else {
                setIsCalendarOpen(true)
            }
        }

        const applyNewDates = () => {
            id = id[id.length - 1];

            const fromDateRequest = storageDate.fromDate.requestDate;
            const selectedDateRequest = storageDate.selectedDate.requestDate;
            getStatisticByDate(id, fromDateRequest, selectedDateRequest).then(res => setStatistic(res.data))
            setIsCalendarOpen(false)
        }

        return (
            <Container>
                <Breadcrumbs/>
                {user &&
                <div className={'userData__header'}>
                    <h1>{user.first_name} {user.last_name}</h1>
                    <div className={'userData__dateRangeWrapper'}>
                        <p>Select date range</p>
                        <div className={'userData__dateRange'}>
                            <button onClick={openCalendars} className={'userData__calendarImage'}>
                                {calendar()}
                            </button>
                            <span>
                                {storageDate.fromDate && `${storageDate.fromDate.date} - ${storageDate.selectedDate.date}`}
                        </span>
                        </div>
                    </div>
                </div>
                }


                <div className={isCalendarOpen ? 'userData__calendarsWrapperActive' : 'userData__calendarWrapper'}>
                    <div className={'userData__calendars'}>
                        <Calendar startDate/>
                        <Calendar/>
                    </div>
                    <div className={'userData__calendarsButtons'}>
                        <button onClick={() => applyNewDates()} className={'userData__calendarApplyBtn'}>Apply</button>
                        <p>or</p>
                        <button onClick={() => openCalendars()} className={'userData__calendarCancelBtn'}>Cancel</button>
                    </div>
                </div>


                <div className={'userData__clicksGraph'}>
                    <h2>Clicks</h2>
                    <ClicksGraph statistic={statistic}/>
                </div>

                <div className={'userData__viewsGraph'}>
                    <h2>Views</h2>
                    <ViewsGraph statistic={statistic}/>
                </div>

            </Container>
        );
    }
;

export default UserDataPage;