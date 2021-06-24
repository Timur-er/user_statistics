const initialState = {
    fromDate: {},
    selectedDate: {},
}

export function dateReducer (state = initialState, action ) {
    switch (action.type) {
        case 'SET_DATE':
            return action.payload;
        case 'SET_SELECTED_DATE':
            return {...state, selectedDate: action.payload};
        case 'SET_FROM_DATE':
            return {...state, fromDate: action.payload};
        default:
            return state
    }
}