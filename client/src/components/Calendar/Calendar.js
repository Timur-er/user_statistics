import React, {useEffect, useRef, useState} from 'react';
import './Calendar.scss';
import * as calendar from './func';
import {useDispatch, useSelector} from "react-redux";
import {getDate, getDateForRequest} from "./func";
import {setNewFromDate, setNewSelectedDate} from "../../store/dateReducer/actions";

const monthMok = ['January', 'February', 'March', 'April', 'May', 'June', 'July ', 'August', 'September', 'October', 'November', 'December']
const years = [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010]
const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


const Calendar = ({startDate}) => {
    const dispatch = useDispatch();
    const yearRef = useRef();
    const monthRef = useRef();
    const [calendarDate, setCalendarDate] = useState();
    const [selectedDate, setSelectedDate] = useState(null);
    const date = useSelector(store => store.date)

    useEffect(() => {
        if (date.fromDate && date.selectedDate) {
            if (startDate) {
                const fromDate = date.fromDate.requestDate;
                setCalendarDate(new Date(fromDate));
                setSelectedDate(new Date(fromDate))
            } else {
                const inWeek = date.selectedDate.requestDate;
                setCalendarDate(new Date(inWeek));
                setSelectedDate(new Date(inWeek))
            }
            }
    }, [date])

    const currentYear = calendarDate && calendarDate.getFullYear();
    const currentMonth = calendarDate &&  calendarDate.getMonth();


    const selectChange = () => {
        const year = yearRef.current.value;
        const month = monthRef.current.value;
        const date = new Date(year, month);
        setCalendarDate(date);
    }

    const selectDay = (e, date) => {
        if (startDate) {
            const fromDate = getDate(date, true);
            const requestFromDate = getDateForRequest(date);
            const dates = {'date': fromDate, 'requestDate': requestFromDate}
            dispatch(setNewFromDate(dates))
        } else {
            const finalDate = getDate(date, true);
            const requestFinalDate = getDateForRequest(date);
            const dates = {'date': finalDate, 'requestDate': requestFinalDate}
            dispatch(setNewSelectedDate(dates))
        }
        setSelectedDate(date);
    }

    const monthData = calendar.getMonthData(currentYear, currentMonth);

    return (
        <div className={'calendar'}>
            <div className={'calendar__selectBar'}>
                <select className={'calendar__select'} value={currentMonth} ref={monthRef} onChange={selectChange}>
                    {monthMok.map((name, index) => {
                        return <option key={name} value={index}>{name}</option>
                    })}
                </select>
                <select className={'calendar__select'} value={currentYear} ref={yearRef} onChange={selectChange}>
                    {years.map((year, index) => {
                        return <option key={year} value={year}>{year}</option>
                    })}
                </select>
            </div>

            <div className={'calendar__body'}>
                <div className={'calendar__header'}>
                    {weekDays.map(day => {
                        return <div className={'calendar__headerDay'} key={day}>{day}</div>
                    })}
                </div>
                <div className={'calendar__days'}>
                    {monthData.map((week, index) => week.map((date, index) => date ?
                        <div className={calendar.areEqual(date, selectedDate)
                            ? 'calendar__dayRow calendar__todayDay'
                            : 'calendar__dayRow'}
                             onClick={(e) => selectDay(e, date)}>
                            {date.getDate()}
                        </div>
                        :
                        <div className={'calendar__dayRow'} key={index}/>)
                    )}

                </div>
            </div>
        </div>
    )
};

export default Calendar;
