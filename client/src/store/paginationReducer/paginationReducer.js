const initialState = {
    startPage: 0,
    lastPage: 4,
    currentPage: 1
}

export function paginationReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PAGE':
            return {...state, currentPage: action.payload}
        case 'SET_START_PAGE':
            return {...state, startPage: action.payload}
        case 'SET_LAST_PAGE':
            return {...state, lastPage: action.payload}
        default:
            return state
    }
}