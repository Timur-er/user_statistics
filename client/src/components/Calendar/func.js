// const DAYS_IN_WEEK = 7;
// const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// const WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5];
//
// const Month = {
//     January: 0,
//     February: 1,
//     March: 2,
//     April: 3,
//     May: 4,
//     June: 5,
//     July: 6,
//     August: 7,
//     September: 8,
//     October: 9,
//     Novermber: 10,
//     December: 11
// };
//
// export function areEqual(a, b) {
//     if (!a || !b) return false;
//
//     return (
//         a.getFullYear() === b.getFullYear() &&
//         a.getMonth() === b.getMonth() &&
//         a.getDate() === b.getDate()
//     );
// }
//
// export function getDaysInMonth(date) {
//     const month = date.getMonth();
//     const year = date.getFullYear();
//     const daysInMonth = DAYS_IN_MONTH[month];
//
//     if (isLeapYear(year) && month === Month.February) {
//         return daysInMonth + 1;
//     } else {
//         return daysInMonth;
//     }
// }
//
//
// export function getDayOfWeek(date) {
//     const dayOfWeek = date.getDay();
//
//     return WEEK_DAYS_FROM_MONDAY[dayOfWeek];
// }
//
// export function getMonthData(year, month) {
//     const result = [];
//     const date = new Date(year, month);
//     const daysInMonth = getDaysInMonth(date);
//     const monthStartsOn = getDayOfWeek(date);
//     let day = 1;
//
//     for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
//         result[i] = [];
//
//         for (let j = 0; j < DAYS_IN_WEEK; j++) {
//             if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
//                 result[i][j] = undefined;
//             } else {
//                 result[i][j] = new Date(year, month, day++);
//             }
//         }
//     }
//
//     return result;
// }


const DAYS_IN_WEEK = 7;

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const WEEK_DAYS_FROM_MONDAY = [6, 0, 1, 2, 3, 4, 5];

const Month = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11
};

export const getDate = (date, year) => {
    const optionsDate = year ? {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    } : {
        month: 'short',
        day: 'numeric',
    };
    return new Date(date).toLocaleString('en', optionsDate);
};

export const getDateForRequest = date => {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate()

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month }-${day}`
}

export function areEqual(a, b) {
    if (!a || !b) return false;

    return (
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
    );
}

export function isLeapYear(year) {
    return !((year % 4) || (!(year % 100) && (year % 400)));
}

export function getDaysInMonth(date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = DAYS_IN_MONTH[month];

    if (isLeapYear(year) && month === Month.February) {
        return daysInMonth + 1;
    } else {
        return daysInMonth;
    }
}

export function getDayOfWeek(date) {
    return date.getDay()
}

export function getMonthData(year, month) {
    const result = [];
    const date = new Date(year, month);
    const daysInMonth = getDaysInMonth(date);
    const monthStartsOn = getDayOfWeek(date);
    let day = 1;

    for (let daysRow = 0; daysRow < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; daysRow++) {
        result[daysRow] = [];
        for (let j = 0; j < DAYS_IN_WEEK; j++) {
            if (daysRow === 0 && j < monthStartsOn) {
                result[daysRow][j] = undefined;
            } else if (day > daysInMonth) {
                result[daysRow][j] = undefined;
            } else {
                result[daysRow][j] = new Date(year, month, day++);
            }
        }
    }

    return result;
}