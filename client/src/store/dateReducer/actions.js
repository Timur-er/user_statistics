export const setRequestDate = dates => ({
    type: 'SET_DATE',
    payload: {
        fromDate:
            {
                'requestDate': dates.fromDate.requestDate,
                'date': dates.fromDate.date
            },
        selectedDate:
            {
                'requestDate': dates.selectedDate.requestDate,
                'date': dates.selectedDate.date
            }
    }
})
export const setNewSelectedDate = date => ({
    type: 'SET_SELECTED_DATE',
    payload: {
        'requestDate': date.requestDate,
        'date': date.date
    }
});
export const setNewFromDate = date => ({
    type: 'SET_FROM_DATE',
    payload: {
        'requestDate': date.requestDate,
        'date': date.date
    }
});